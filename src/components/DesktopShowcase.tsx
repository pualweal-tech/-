import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Layers, Maximize2, Compass, Play, ArrowRight, Share2, Map, Mountain, Activity } from 'lucide-react';

export const DesktopShowcase: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'3d' | 'elevation' | 'satellite'>('3d');

  return (
    <section className="py-20 md:py-32 bg-[#FCFAF6] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1B2A]/5 text-[#0D1B2A] text-xs font-bold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5 text-[#FF2A5F]" />
            <span>大屏沉浸式漫游</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D1B2A] tracking-tight">
            在更大的画布上，重温山川辽阔。
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#0D1B2A]/70">
            支持 iPad 与 Mac/PC 桌面端高保真全屏漫游。实时 3D 俯仰角模拟、光影昼夜更迭与高程剖面图。
          </p>

          {/* Interactive Layer Switches */}
          <div className="mt-7 inline-flex p-1.5 rounded-full bg-black/5 border border-black/5">
            <button
              onClick={() => setActiveLayer('3d')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                activeLayer === '3d'
                  ? 'bg-white text-[#0D1B2A] shadow-sm'
                  : 'text-[#0D1B2A]/60 hover:text-[#0D1B2A]'
              }`}
            >
              三维立体地形
            </button>
            <button
              onClick={() => setActiveLayer('elevation')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                activeLayer === 'elevation'
                  ? 'bg-white text-[#0D1B2A] shadow-sm'
                  : 'text-[#0D1B2A]/60 hover:text-[#0D1B2A]'
              }`}
            >
              海拔连续剖面
            </button>
            <button
              onClick={() => setActiveLayer('satellite')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                activeLayer === 'satellite'
                  ? 'bg-white text-[#0D1B2A] shadow-sm'
                  : 'text-[#0D1B2A]/60 hover:text-[#0D1B2A]'
              }`}
            >
              高精卫星混合底图
            </button>
          </div>
        </div>

        {/* Big Desktop / Tablet Showcase Card from Figma (896x575 rx=24) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto rounded-[32px] md:rounded-[40px] bg-[#171717] p-3 md:p-5 shadow-card-elevated border border-white/10"
        >
          {/* Inner Display Area */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-[24px] md:rounded-[32px] overflow-hidden bg-black flex flex-col justify-between">
            {/* Background image based on layer */}
            {activeLayer === '3d' && (
              <img 
                src="./assets/草原横屏.jpg" 
                alt="3D Terrain Map" 
                className="absolute inset-0 w-full h-full object-cover filter brightness-80 contrast-110"
              />
            )}
            {activeLayer === 'elevation' && (
              <img 
                src="./assets/雪山树木横屏.jpg" 
                alt="Elevation Landscape" 
                className="absolute inset-0 w-full h-full object-cover filter brightness-70 contrast-125"
              />
            )}
            {activeLayer === 'satellite' && (
              <img 
                src="./assets/image2_181_349.png" 
                alt="Satellite Map" 
                className="absolute inset-0 w-full h-full object-cover filter brightness-85"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-transparent to-black/60" />

            {/* Top Toolbar */}
            <div className="relative z-20 px-6 py-4 flex items-center justify-between text-white border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF2A5F]" />
                <span className="text-xs font-bold tracking-wide">屿间 3D Explorer Studio</span>
                <span className="text-xs text-white/40 hidden sm:inline">| 川藏南线 G318 深度巡航</span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-white/80">LAT 29°35'N · LNG 94°21'E</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-white font-sans text-[11px]">4K 渲染</span>
              </div>
            </div>

            {/* Elevation Curve Overlay Simulation for 'elevation' layer */}
            {activeLayer === 'elevation' && (
              <div className="absolute inset-x-8 bottom-24 z-20 p-4 rounded-2xl glass-dark text-white border border-white/15">
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="flex items-center gap-1.5 text-[#FF2A5F]">
                    <Mountain className="w-4 h-4" />
                    全程海拔起伏波形图
                  </span>
                  <span className="font-mono text-white/80">最低 500m ➔ 最高 5,130m</span>
                </div>
                {/* SVG Curve */}
                <svg className="w-full h-20" viewBox="0 0 500 80">
                  <defs>
                    <linearGradient id="elevGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF2A5F" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#FF2A5F" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path d="M 0 70 Q 60 50, 100 25 T 180 40 T 260 15 T 340 50 T 420 10 L 500 30 L 500 80 L 0 80 Z" fill="url(#elevGrad)" />
                  <path d="M 0 70 Q 60 50, 100 25 T 180 40 T 260 15 T 340 50 T 420 10 L 500 30" fill="none" stroke="#FF2A5F" strokeWidth="2.5" />
                  <circle cx="260" cy="15" r="4" fill="white" stroke="#FF2A5F" strokeWidth="2" />
                </svg>
                <div className="flex justify-between text-[10px] text-white/60 font-mono mt-1">
                  <span>成都 (500m)</span>
                  <span>折多山 (4298m)</span>
                  <span>卡子拉山 (4718m)</span>
                  <span>米拉山口 (5013m)</span>
                  <span>拉萨 (3650m)</span>
                </div>
              </div>
            )}

            {/* Bottom HUD Bar */}
            <div className="relative z-20 px-6 py-5 flex flex-wrap items-end justify-between text-white gap-4">
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-white/50">总探索历程</div>
                  <div className="text-xl sm:text-2xl font-black text-white font-mono mt-0.5">3,180.4 <span className="text-xs font-normal text-white/70">KM</span></div>
                </div>
                <div className="h-8 w-[1px] bg-white/15" />
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-white/50">已收录地标</div>
                  <div className="text-xl sm:text-2xl font-black text-[#FF2A5F] font-mono mt-0.5">48 <span className="text-xs font-normal text-white/70">个点位</span></div>
                </div>
                <div className="h-8 w-[1px] bg-white/15 hidden sm:block" />
                <div className="hidden sm:block">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-white/50">光影照片集</div>
                  <div className="text-xl sm:text-2xl font-black text-white font-mono mt-0.5">624 <span className="text-xs font-normal text-white/70">张原图</span></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 rounded-full glass-dark text-xs font-semibold hover:bg-white/20 transition-colors flex items-center gap-2">
                  <Share2 className="w-3.5 h-3.5" />
                  <span>生成航迹漫游视频</span>
                </button>
                <button className="px-4 py-2 rounded-full bg-[#FF2A5F] text-white text-xs font-semibold hover:bg-[#E01E50] shadow-glow-coral transition-colors flex items-center gap-1.5">
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>3D 飞行回放</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
