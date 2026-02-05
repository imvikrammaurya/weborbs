import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from '../lib/utils';

// --- MINIMIZED CSS Styles (Core 3D positioning) ---
const EMBEDDED_CSS = `
/* --- Cascade Slider Styles --- */

.cascade-slider_container {
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    z-index: 20; 
    user-select: none;
    -webkit-user-select: none; 
    touch-action: pan-y;
}

.cascade-slider_slides {
    position: relative;
    height: 100%;
    width: 100%;
}

.cascade-slider_item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(0.3); 
    transition: all 1s ease; 
    opacity: 0;
    z-index: 1; 
    cursor: grab; 
    /* Ensuring container sizing */
    display: flex;
    justify-content: center;
    align-items: center;
}
.cascade-slider_item.now {
    cursor: default;
}
.cascade-slider_item:active {
    cursor: grabbing;
}

/* Slide Positioning Classes (Core 3D Logic) */
.cascade-slider_item.next {
    left: 50%;
    transform: translateY(-50%) translateX(-120%) scale(0.6);
    opacity: 1;
    z-index: 4; 
}
.cascade-slider_item.prev {
    left: 50%;
    transform: translateY(-50%) translateX(20%) scale(0.6);
    opacity: 1;
    z-index: 4; 
}
.cascade-slider_item.now {
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(1);
    opacity: 1;
    z-index: 5; 
}

/* Arrows - Structural CSS */
.cascade-slider_arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    cursor: pointer;
    z-index: 20; 
    transform: translate(0, -50%);
    width: 50px; 
    height: 50px; 
    transition: all 0.3s ease;
}

/* Arrow Positioning (Responsive) */
@media screen and (max-width: 575px) {
    .cascade-slider_arrow-left { 
        left: 0px; 
    }
    .cascade-slider_arrow-right { 
        right: 0px; 
    }
}
@media screen and (min-width: 576px) {
    .cascade-slider_arrow-left { left: 0%; }
    .cascade-slider_arrow-right { right: 0%; }
}

/* --- Media Queries for Component Scaling --- */
/* Adjust offsets for wider cards */
@media screen and (min-width: 768px) {
    .cascade-slider_item.next { transform: translateY(-50%) translateX(-110%) scale(0.7); }
    .cascade-slider_item.prev { transform: translateY(-50%) translateX(10%) scale(0.7); }
    .cascade-slider_item.now { transform: translateY(-50%) translateX(-50%) scale(1); }
}
@media screen and (min-width: 1024px) {
     .cascade-slider_item.next { transform: translateY(-50%) translateX(-120%) scale(0.7); }
    .cascade-slider_item.prev { transform: translateY(-50%) translateX(20%) scale(0.7); }
}

/* Make sure the item content doesn't overflow */
.cascade-slider_item > * {
    max-width: 100%;
    height: auto;
}
`;

// --- Helper Function: Get Slide Classes ---
const getSlideClasses = (index, activeIndex, total, visibleCount) => {
    const diff = index - activeIndex;

    // Normalize diff for circular buffer
    let normalizedDiff = diff;
    if (diff > total / 2) normalizedDiff -= total;
    if (diff < -total / 2) normalizedDiff += total;

    if (normalizedDiff === 0) return 'now';
    if (normalizedDiff === 1) return 'next';
    if (normalizedDiff === -1) return 'prev';

    // For 3 items, we only really have now, next, prev properly.
    // Ensure hidden items fade out correctly
    return '';
};


// --- ThreeDCarousel Component Logic ---
const ThreeDCarousel = ({
    items, // Changed from slides to items (components)
    itemCount = 3, // Default to 3 for this specific use case
    autoplay = false,
    delay = 3,
    pauseOnHover = true,
    className = '',
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const autoplayIntervalRef = useRef(null);
    const total = items.length;

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const swipeThreshold = 50;

    const navigate = useCallback((direction) => {
        setActiveIndex(current => {
            if (direction === 'next') {
                return (current + 1) % total;
            } else {
                return (current - 1 + total) % total;
            }
        });
    }, [total]);

    const startAutoplay = useCallback(() => {
        if (autoplay && total > 1) {
            if (autoplayIntervalRef.current) {
                clearInterval(autoplayIntervalRef.current);
            }
            autoplayIntervalRef.current = window.setInterval(() => {
                navigate('next');
            }, delay * 1000);
        }
    }, [autoplay, delay, navigate, total]);

    const stopAutoplay = useCallback(() => {
        if (autoplayIntervalRef.current) {
            clearInterval(autoplayIntervalRef.current);
            autoplayIntervalRef.current = null;
        }
    }, []);

    useEffect(() => {
        startAutoplay();
        return () => { stopAutoplay(); };
    }, [startAutoplay, stopAutoplay]);

    // Handler to stop autoplay on hover
    const handleMouseEnter = () => {
        if (autoplay && pauseOnHover) {
            stopAutoplay();
        }
    };

    // Handler to start autoplay on mouse exit AND handle drag cancellation
    const handleExit = (e) => {
        if (autoplay && pauseOnHover) {
            startAutoplay();
        }
        if (isDragging) {
            handleEnd(e.clientX);
        }
    };

    // --- Touch/Mouse Drag Logic ---
    const handleStart = (clientX) => {
        setIsDragging(true);
        setStartX(clientX);
        stopAutoplay();
    };

    const handleEnd = (clientX) => {
        if (!isDragging) return;

        const distance = clientX - startX;

        if (Math.abs(distance) > swipeThreshold) {
            if (distance < 0) {
                navigate('next'); // Swipe left
            } else {
                navigate('prev'); // Swipe right
            }
        }

        setIsDragging(false);
        setStartX(0);
    };

    const onMouseDown = (e) => handleStart(e.clientX);
    const onMouseUp = (e) => {
        handleEnd(e.clientX);
        startAutoplay();
    };

    const onTouchStart = (e) => handleStart(e.touches[0].clientX);
    const onTouchEnd = (e) => {
        handleEnd(e.changedTouches[0].clientX);
        startAutoplay();
    };

    return (
        <div className="relative w-full py-12 overflow-hidden">
            <style dangerouslySetInnerHTML={{ __html: EMBEDDED_CSS }} />

            <div
                className={cn(`cascade-slider_container h-[500px] md:h-[400px]`, className)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleExit}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <div className="cascade-slider_slides">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`cascade-slider_item w-full md:w-[450px] ${getSlideClasses(index, activeIndex, total, itemCount)}`}
                            data-slide-number={index}
                        >
                            {/* Render the component passed in the items array */}
                            <div className="w-full h-full transform transition-all duration-500">
                                {item}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                {total > 1 && (
                    <>
                        <span
                            className="cascade-slider_arrow cascade-slider_arrow-left bg-black/50 hover:bg-[var(--color-bigchill)] text-white rounded-full backdrop-blur-sm border border-white/10"
                            onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
                        >
                            <ArrowLeftCircle size={32} />
                        </span>
                        <span
                            className="cascade-slider_arrow cascade-slider_arrow-right bg-black/50 hover:bg-[var(--color-bigchill)] text-white rounded-full backdrop-blur-sm border border-white/10"
                            onClick={(e) => { e.stopPropagation(); navigate('next'); }}
                        >
                            <ArrowRightCircle size={32} />
                        </span>
                    </>
                )}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4 relative z-30">
                {items.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex
                                ? "bg-[var(--color-bigchill)] w-6"
                                : "bg-gray-600 hover:bg-gray-400"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ThreeDCarousel;
