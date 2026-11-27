import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BatteryCharging, WifiOff, Cpu, Navigation, Eye, CheckCircle2, Footprints, Mountain, Compass } from 'lucide-react';

export const TrackShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'elevation' | 'stats'>('map');

  return (
    <section id="tracking" className="py-20 md:py-32 relative overflow-hidden bg-[#FCFAF6]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Phone Mockup from Figma (Matching 340x737 rx=46.8) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-[320px] sm:w-[350px] aspect-[9/19.5] rounded-[48px] bg-[#121417] p-3 shadow-phone-frame border-[3.5px] border-[#2A2F37]"
            >
              {/* Phone Speaker & Dynamic Island Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-between px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] border border-white/10" />
                <div className="w-2 h-2 rounded-full bg-[#FF2A5F]/80 animate-pulse" />
              </div>

              {/* Inner Screen Container */}
              <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#1A1E24] flex flex-col justify-between">
                {/* Background Map View using User's Extracted Map Asset (image2) */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src="./assets/image2_181_349.png" 
                    alt="Travel Map Interface" 
                    className="w-full h-full object-cover filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                </div>

                {/* Status Bar simulation */}
                <div className="relative z-20 pt-3 px-6 flex justify-between items-center text-white text-[11px] font-semibold">
                  <span>09:41</span>
                  <div className="flex items-center gap-1.5 text-white/90">
                    <WifiOff className="w-3.5 h-3.5 text-[#34D399]" />
                    <span className="text-[9px] bg-white/20 px-1 py-0.5 rounded text-white font-mono">OFFLINE</span>
                    <BatteryCharging className="w-4 h-4 text-[#34D399]" />
                  </div>
                </div>

                {/* Interactive Dynamic Floating Cards Inside Phone */}
                <div className="relative z-20 p-4 flex flex-col gap-2.5">
                  {/* Floating Step Card 1 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="p-3 rounded-2xl bg-[#171717]/85 backdrop-blur-xl border border-white/15 text-white shadow-xl flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#FF2A5F] flex items-center justify-center text-white font-bold text-xs">
                        <Footprints className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">折多山徒步穿越</div>
                        <div className="text-[10px] text-white/60">平均配速 14'20" · 爬升 620m</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-extrabold text-[#FF2A5F]">8.4 km</div>
                      <div className="text-[9px] text-[#34D399] font-medium">进行中</div>
                    </div>
                  </motion.div>

                  {/* Floating Step Card 2 - Elevation HUD */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="p-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/60 text-[#0D1B2A] shadow-xl flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#0D1B2A] flex items-center justify-center text-white">
                        <Mountain className="w-4 h-4 text-[#FF2A5F]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">气压高度监测</div>
                        <div className="text-[10px] text-[#0D1B2A]/60">当前海拔 4,298 米 · 气压 612 hPa</div>
                      </div>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#34D399] animate-ping" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Feature Explanations */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF2A5F]/10 text-[#FF2A5F] text-xs font-bold uppercase tracking-wider mb-4">
                <Navigation className="w-3.5 h-3.5" />
                <span>智能低功耗追踪引擎</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D1B2A] tracking-tight leading-[1.2]">
                手机留在口袋里，<br />
                世界已被精准丈量。
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[#0D1B2A]/70 leading-relaxed">
                无需时刻打开应用，屿间依托自研的运动学传感器融合算法，仅在检测到空间位移与交通枢纽转换时智能激活，全天运行电耗低于 3%。
              </p>

              {/* 3 Pillars List */}
              <div className="mt-10 space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-2xl bg-[#0D1B2A] flex items-center justify-center text-white flex-shrink-0 shadow-md">
                    <WifiOff className="w-5 h-5 text-[#FF2A5F]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0D1B2A]">100% 离线自主记录</h3>
                    <p className="mt-1 text-sm text-[#0D1B2A]/65 leading-relaxed">
                      穿越无人区、深山峡谷或飞行巡航模式下无网络覆盖？屿间本地离线缓存所有 GPS 航迹与高程数据，连网后无缝平滑重叠。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-2xl bg-[#0D1B2A] flex items-center justify-center text-white flex-shrink-0 shadow-md">
                    <Cpu className="w-5 h-5 text-[#FF2A5F]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0D1B2A]">多模态交通工具自适应</h3>
                    <p className="mt-1 text-sm text-[#0D1B2A]/65 leading-relaxed">
                      智能区分徒步登山、自驾公路、跨海客轮与高空航班，轨迹曲线呈现不同物理速度质感与色彩编码。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-2xl bg-[#0D1B2A] flex items-center justify-center text-white flex-shrink-0 shadow-md">
                    <Compass className="w-5 h-5 text-[#FF2A5F]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0D1B2A]">高精地理信息自动补全</h3>
                    <p className="mt-1 text-sm text-[#0D1B2A]/65 leading-relaxed">
                      途经国家边界、省界、著名山口、国家公园时，系统自动生成具象化打卡印章与地理标高注记。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
