import React from 'react';
import { motion } from 'framer-motion';
import { Compass, MapPin, Calendar, Clock, ArrowDown, Sparkles, Navigation, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[105vh] bg-[#0E151B] flex flex-col justify-between overflow-hidden">
      {/* 1. Full-bleed Ancient Temple & Morning Mist Background (User's Uploaded Image) */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="./assets/hero-temple.jpg" 
          alt="大同古城晨雾古寺" 
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
        />
        {/* Atmospheric Warm Celadon & Golden Sunset Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-[#0E151B]/95" />
      </div>

      {/* 2. Top Content: Pop-in Animation on Initial Load */}
      <div className="relative z-10 pt-28 md:pt-36 px-4 max-w-4xl mx-auto text-center text-white">
        
        {/* Cultural Heritage & Academic Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.85, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, type: "spring", stiffness: 120 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-semibold text-white/90 mb-6 shadow-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF2A5F] animate-pulse" />
          <span className="text-[#FF2A5F] font-bold">华夏文脉 · 数字活化</span>
          <span className="text-white/40">|</span>
          <span>东方传统建筑与古城漫游助手</span>
        </motion.div>

        {/* Main Cultural Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.15] drop-shadow-lg"
        >
          寻迹华夏山河，<br />
          <span className="bg-gradient-to-r from-white via-[#FFE8D6] to-[#FF8FA3] bg-clip-text text-transparent">
            静默记录每一寸东方之美
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow"
        >
          专为古建寻访、石窟漫游与文化行者打造。无感离线记录你的每一次驻足，将梁思成林徽因笔下的千年古迹，自动编织为数字时空卷轴。
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a 
            href="#datong-route" 
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FF2A5F] text-white text-sm font-bold shadow-glow-coral hover:bg-[#E01E50] transition-all hover:scale-105 active:scale-95"
          >
            <Compass className="w-4 h-4" />
            <span>开启大同寻踪之旅</span>
          </a>

          <a 
            href="#cultural-track" 
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-sm font-bold backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95"
          >
            <Layers className="w-4 h-4" />
            <span>探索交互动态</span>
          </a>
        </motion.div>
      </div>

      {/* 3. The First Phone Model: Only Half Shown, Leaning Forward in 3D Perspective */}
      <div className="relative z-20 mt-8 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 100, rotateX: 25 }}
          animate={{ opacity: 1, y: 0, rotateX: 14 }}
          transition={{ duration: 1.1, delay: 0.5, type: "spring", stiffness: 80, damping: 14 }}
          style={{ transformPerspective: 1200 }}
          className="relative w-[310px] sm:w-[350px] md:w-[380px] aspect-[9/18] rounded-[48px] bg-[#121417] p-3 shadow-phone-frame border-[3.5px] border-[#3A404D] origin-bottom hover:rotate-x-0 transition-transform duration-700"
        >
          {/* Dynamic Island Notch */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-between px-2.5">
            <div className="w-2 h-2 rounded-full bg-[#1A1A1A]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
          </div>

          {/* Screen Content: Datong Satellite Map with Route (User's Uploaded Map) */}
          <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#1D262F] flex flex-col justify-between">
            {/* Satellite Map Background */}
            <img 
              src="./assets/datong-map.jpg" 
              alt="大同至浑源卫星地图" 
              className="absolute inset-0 w-full h-full object-cover filter brightness-95 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/60" />

            {/* In-app Status & City Tag */}
            <div className="relative z-20 pt-3 px-5 flex justify-between items-center text-white text-[11px] font-bold">
              <span className="font-mono">09:41</span>
              <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
                <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                <span>晋北古建慢巡中</span>
              </div>
            </div>

            {/* Animated Route Line from Datong City -> Yungang -> Hunyuan */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 350 680">
              <defs>
                <linearGradient id="datongGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFA07A" />
                  <stop offset="50%" stopColor="#FF2A5F" />
                  <stop offset="100%" stopColor="#FFD166" />
                </linearGradient>
              </defs>

              {/* Glowing Dashed Route */}
              <path 
                d="M 125 150 Q 80 230, 75 250 T 170 380 T 280 610" 
                fill="none" 
                stroke="#FF2A5F" 
                strokeWidth="7" 
                strokeOpacity="0.3"
              />
              <path 
                d="M 125 150 Q 80 230, 75 250 T 170 380 T 280 610" 
                fill="none" 
                stroke="url(#datongGrad)" 
                strokeWidth="4" 
                strokeDasharray="6 4"
                className="animate-route-dash"
              />

              {/* Waypoint 1: 大同市 (大同古城) */}
              <circle cx="125" cy="150" r="10" fill="#FF2A5F" stroke="white" strokeWidth="2.5" />
              <text x="145" y="155" fill="white" fontSize="12" fontWeight="bold" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.8))">大同古城</text>

              {/* Waypoint 2: 云冈区 (云冈石窟) */}
              <circle cx="75" cy="250" r="10" fill="#FF2A5F" stroke="white" strokeWidth="2.5" />
              <text x="95" y="255" fill="white" fontSize="12" fontWeight="bold" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.8))">云冈石窟</text>

              {/* Waypoint 3: 浑源县 (悬空寺 / 恒山) */}
              <circle cx="280" cy="610" r="12" fill="#34D399" stroke="white" strokeWidth="3" />
              <text x="210" y="605" fill="#34D399" fontSize="12" fontWeight="bold" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.8))">浑源悬空寺</text>
            </svg>

            {/* Bottom In-Phone Stats Badge */}
            <div className="relative z-20 pb-4 px-4 text-center">
              <span className="text-[11px] font-bold text-white bg-[#0D1B2A]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-lg">
                全程 138 km · 3 大全国重点文保单位
              </span>
            </div>
          </div>
        </motion.div>

        {/* 4. Pop-up Card Under Phone: Itinerary & Time Planning (User's Requirement) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="relative z-30 -mt-10 sm:-mt-14 max-w-xl w-full mx-auto px-4"
        >
          <div className="rounded-3xl bg-[#0D1B2A]/95 backdrop-blur-xl p-5 text-white shadow-2xl border border-white/20">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF2A5F]" />
                <span className="text-sm font-bold tracking-wide">晋北古建三日深度漫游线路</span>
              </div>
              <span className="text-xs text-[#34D399] font-semibold bg-[#34D399]/15 px-2.5 py-0.5 rounded-full">
                路线规划已就绪
              </span>
            </div>

            {/* 3-Step Timeline Schedule */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-[#FF2A5F] font-bold">DAY 1 · 古城漫步</div>
                <div className="font-bold text-white mt-0.5">大同古城 & 华严寺</div>
                <div className="text-[10px] text-white/50 mt-1">辽金木构与鸱吻壮观</div>
              </div>

              <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-[#FF2A5F] font-bold">DAY 2 · 石窟回眸</div>
                <div className="font-bold text-white mt-0.5">云冈石窟造像群</div>
                <div className="text-[10px] text-white/50 mt-1">北魏雕刻皇家气象</div>
              </div>

              <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-[#FF2A5F] font-bold">DAY 3 · 飞阁凌空</div>
                <div className="font-bold text-white mt-0.5">浑源县 · 悬空寺</div>
                <div className="text-[10px] text-white/50 mt-1">恒山金龙峡崖壁悬空</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll down prompt */}
        <div className="mt-8 mb-6 flex flex-col items-center pointer-events-none select-none text-white/60">
          <span className="text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-1.5 text-white/80">
            <ArrowDown className="w-4 h-4 text-[#FF2A5F] animate-bounce" />
            <span>滑动开启时空画卷</span>
          </span>
        </div>
      </div>
    </section>
  );
};
