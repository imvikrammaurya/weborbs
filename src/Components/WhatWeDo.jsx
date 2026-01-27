import React from "react";
import { LayoutTemplate, LayoutGrid, LifeBuoy, ArrowRight } from "lucide-react";

const WhatWeDo = () => {
  return (
    <section
      id="services"
      className="bg-black text-white py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-16 space-y-4">
          <p className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
            What we do
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Three core services to <br className="hidden md:block" />
            power your digital <br className="hidden md:block" />
            presence
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto pt-4">
            From concept to launch, we handle every detail with precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-center">
          {/* Service 1 */}
          <div className="flex flex-col items-center space-y-4 group">
            <div className="p-4 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
              <LayoutTemplate className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold pt-2">Website development</h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Custom-built websites that convert visitors into customers.
            </p>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center space-y-4 group">
            <div className="p-4 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
              <LayoutGrid className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold pt-2">
              Web and mobile applications
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Scalable apps designed for growth and real-world performance.
            </p>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center space-y-4 group">
            <div className="p-4 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
              <LifeBuoy className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold pt-2">Maintenance and scaling</h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Long-term support that keeps your systems running strong.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="#process"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            Explore our process
          </a>
          {/* <a href="#" className="flex items-center gap-2 text-white font-medium hover:text-gray-300 transition-colors group">
                        Arrow <span className="group-hover:translate-x-1 transition-transform">&gt;</span>
                    </a> */}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
