import React from 'react';
import { Play, Star, ChevronRight } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-[#FCFAF6] relative overflow-hidden">
      {/* Soft Mountain Ridge Silhouette in Background (Matching Screenshot 3) */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F2ECE1]/60 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Headline (Matching Screenshot 3) */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0D1B2A] tracking-tight">
            Loved by<br />explorers everywhere
          </h2>
        </div>

        {/* Carousel / Stream of Video & Review Cards (Matching Screenshot 3) */}
        <div className="flex items-center gap-5 overflow-x-auto no-scrollbar pb-6 pt-2">
          
          {/* Card 1: Video Card (Courtney Allan, Hitchhiker) */}
          <div className="w-[260px] sm:w-[280px] h-[380px] rounded-3xl overflow-hidden relative flex-shrink-0 shadow-soft-float group cursor-pointer">
            <img 
              src="./assets/草原山脉竖屏.jpg" 
              alt="Courtney Allan" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

            {/* Author tag */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <img src="./assets/image1_181_349.png" alt="Avatar" className="w-8 h-8 rounded-full border border-white" />
              <div className="text-white">
                <div className="text-xs font-bold leading-none">Courtney Allan</div>
                <div className="text-[9px] uppercase tracking-wider text-white/70">HITCHHIKER</div>
              </div>
            </div>

            {/* Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-5 h-5 fill-white ml-0.5" />
              </div>
            </div>

            {/* Bottom Watermark */}
            <div className="absolute bottom-4 right-4 text-[10px] font-black tracking-widest text-white/80 uppercase">
              PIONEERS
            </div>
          </div>

          {/* Card 2: White Review Card (Conor) */}
          <div className="w-[260px] sm:w-[280px] h-[380px] rounded-3xl bg-white p-6 flex flex-col justify-between flex-shrink-0 shadow-soft-float border border-black/5">
            <div>
              <h3 className="text-base font-bold text-[#0D1B2A] leading-snug">
                Perfect for tracking trips
              </h3>
              <div className="text-[10px] uppercase font-mono text-gray-400 mt-1">
                CONOR, MARCH 9 2026
              </div>

              {/* 5 Stars */}
              <div className="flex text-[#FF9E00] gap-0.5 my-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FF9E00]" />
                ))}
              </div>

              <p className="text-xs text-[#0D1B2A]/75 leading-relaxed">
                "I love this app! It's perfect for tracking trips and I've ordered a few of the travel books which are very good quality and really nice to look at."
              </p>
            </div>

            <div className="pt-4 border-t border-black/5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#34D399]" />
              <span className="text-[10px] font-bold text-gray-500">已定制 3 本精装旅行书</span>
            </div>
          </div>

          {/* Card 3: Video Card (Alex Hubin, Adventurer) */}
          <div className="w-[260px] sm:w-[280px] h-[380px] rounded-3xl overflow-hidden relative flex-shrink-0 shadow-soft-float group cursor-pointer">
            <img 
              src="./assets/藏地竖屏.jpg" 
              alt="Alex Hubin" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

            <div className="absolute top-4 left-4 flex items-center gap-2">
              <img src="./assets/image7_181_349.png" alt="Avatar" className="w-8 h-8 rounded-full border border-white" />
              <div className="text-white">
                <div className="text-xs font-bold leading-none">Alex Hubin</div>
                <div className="text-[9px] uppercase tracking-wider text-white/70">ADVENTURER</div>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-5 h-5 fill-white ml-0.5" />
              </div>
            </div>

            <div className="absolute bottom-4 right-4 text-[10px] font-black tracking-widest text-white/80 uppercase">
              PIONEERS
            </div>
          </div>

          {/* Card 4: White Review Card (Rachel) */}
          <div className="w-[260px] sm:w-[280px] h-[380px] rounded-3xl bg-white p-6 flex flex-col justify-between flex-shrink-0 shadow-soft-float border border-black/5">
            <div>
              <h3 className="text-base font-bold text-[#0D1B2A] leading-snug">
                Easy to use & beautiful
              </h3>
              <div className="text-[10px] uppercase font-mono text-gray-400 mt-1">
                RACHEL, MARCH 15 2026
              </div>

              <div className="flex text-[#FF9E00] gap-0.5 my-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FF9E00]" />
                ))}
              </div>

              <p className="text-xs text-[#0D1B2A]/75 leading-relaxed">
                "I've been using this app for years now. Easy peasy to share with family and friends and really easy to use on trips. Love the offline tracker!"
              </p>
            </div>

            <div className="pt-4 border-t border-black/5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#34D399]" />
              <span className="text-[10px] font-bold text-gray-500">环欧自驾 42 天用户</span>
            </div>
          </div>

          {/* Carousel Next Arrow (Matching Screenshot 3 circular arrow button) */}
          <button 
            className="w-12 h-12 rounded-full bg-[#0D1B2A] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform flex-shrink-0 mr-4"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
};
