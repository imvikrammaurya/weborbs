import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "../lib/utils";
import { Calendar } from "lucide-react";

// --- Inline Card Components ---
const Card = ({ className, children, ...props }) => (
    <div
        className={cn(
            "rounded-xl border bg-card text-card-foreground shadow h-full flex flex-col justify-between",
            className
        )}
        {...props}
    >
        {children}
    </div>
);

const CardContent = ({ className, children, ...props }) => (
    <div className={cn("p-6", className)} {...props}>
        {children}
    </div>
);

const DEFAULT_EVENTS = [
    { year: "Phase 1", title: "Planning", description: "..." },
    { year: "Phase 2", title: "Designing", description: "..." },
    { year: "Phase 3", title: "Development", description: "..." },
];

const ScrollTimeline = ({
    events = DEFAULT_EVENTS,
    title = "Timeline",
    subtitle = "Scroll to explore",
    className = "",
    cardEffect = "glow",
    lineColor = "bg-primary/20",
}) => {
    const targetRef = useRef(null);
    const containerRef = useRef(null);
    const [xOutput, setXOutput] = useState(["0px", "0px"]);

    // Track scroll progress of the container
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // Calculate dynamic scroll distance
    useEffect(() => {
        const updateScrollDistance = () => {
            if (containerRef.current) {
                const viewportWidth = window.innerWidth;
                const lastItem = containerRef.current.lastElementChild;

                if (lastItem) {
                    // Determine the visual start position of the content (10vw padding)
                    // We calculate this dynamically or assume the CSS 10vw
                    const startOffset = viewportWidth * 0.10;

                    // Position of the last item's center relative to the start of the list
                    const lastItemLeft = lastItem.offsetLeft;
                    const lastItemWidth = lastItem.offsetWidth;
                    const lastItemCenter = lastItemLeft + (lastItemWidth / 2);

                    // We want the Last Item Center to end up at Viewport Center (viewportWidth / 2)
                    // FinalPosition = StartOffset + LastItemCenter + TranslateX
                    // ViewportCenter = StartOffset + LastItemCenter + TranslateX
                    // TranslateX = ViewportCenter - (StartOffset + LastItemCenter)

                    const targetX = (viewportWidth / 2) - (startOffset + lastItemCenter);

                    setXOutput(["0px", `${targetX}px`]);
                }
            }
        };

        // Initial calculation
        updateScrollDistance();

        // Recalculate on resize
        window.addEventListener("resize", updateScrollDistance);
        return () => window.removeEventListener("resize", updateScrollDistance);
    }, [events]);

    const x = useTransform(smoothProgress, [0, 1], xOutput);

    // Progress Line width scaling
    const progressWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    return (
        // Height 300vh gives us enough "track" to scroll through
        <div ref={targetRef} className={cn("relative h-[300vh]", className)}>

            {/* Sticky Container: Stays fixed while parent scrolls */}
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                <div className="absolute top-10 left-0 w-full text-center z-10 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-white">{title}</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
                </div>

                {/* Horizontal Moving Track */}
                <motion.div
                    ref={containerRef}
                    style={{ x }}
                    className="flex gap-12 pl-[10vw]"
                >
                    {events.map((event, index) => {
                        return (
                            <TimelineCard
                                key={index}
                                event={event}
                                index={index}
                                cardEffect={cardEffect}
                            />
                        );
                    })}
                </motion.div>

                {/* --- Sticky Horizontal Progress Bar --- */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-1 bg-white/10 rounded-full overflow-visible">
                    {/* Glow Line */}
                    <motion.div
                        style={{ width: progressWidth }}
                        className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full relative"
                    >
                        {/* Comet Head */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-purple-500/30 rounded-full animate-pulse" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// Subcomponent for individual cards
const TimelineCard = ({ event, index, cardEffect }) => {
    return (
        <div className="relative group w-[80vw] md:w-[600px] flex-shrink-0">
            <div className="absolute -top-16 left-8 flex flex-col items-center">
                <div className="w-[2px] h-16 bg-white/20 group-hover:bg-[var(--color-bigchill)] transition-colors duration-500" />
                <div className="w-4 h-4 rounded-full border-2 border-white/50 bg-[#0a0a0a] group-hover:border-[var(--color-bigchill)] group-hover:scale-125 transition-all duration-500 shadow-[0_0_0_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_rgba(14,165,164,0.6)]" />
            </div>

            <Card className="bg-[#111] border border-white/10 dark:text-white mt-4 h-full relative overflow-hidden group-hover:border-white/30 transition-colors">
                {cardEffect === 'glow' && (
                    <div className="absolute inset-0 bg-[var(--color-bigchill)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                )}
                <CardContent className="p-8 md:p-12 h-full flex flex-col justify-center">
                    <div className="flex items-center mb-6">
                        <span className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white/20 to-white/5 absolute top-4 right-6 select-none">
                            {event.year.replace(/\D/g, '')}
                        </span>
                        <div className="relative z-10 inline-block px-3 py-1 rounded-full border border-[var(--color-bigchill)]/30 bg-[var(--color-bigchill)]/10 text-[var(--color-bigchill)] text-xs font-bold uppercase tracking-wider">
                            {event.year}
                        </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white relative z-10">
                        {event.title}
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed relative z-10">
                        {event.description}
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

export default ScrollTimeline;
