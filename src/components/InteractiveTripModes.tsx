import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Share2, MapPin, Calendar, Moon, Sparkles, BookOpen, Utensils, Home, Compass } from 'lucide-react';

type TripMode = 'plan' | 'track' | 'relive';

export const InteractiveTripModes: React.FC = () => {
  const [mode, setMode] = useState<TripMode>('plan');

  return (
    <section 
      className={`py-24 md:py-36 transition-colors duration-700 relative overflow-hidden ${
        mode === 'track' ? 'bg-[#080C14] text-white' : 'bg-[#FCFAF6] text-[#0D1B2A]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Main Dynamic Interactive Stage */}
        <AnimatePresence mode="wait">
          {/* ================= MODE 1: PLAN (Matching Screenshot 2) ================= */}
          {mode === 'plan' && (
            <motion.div 
              key="plan"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Left Column: Phone with 3D Pop-out Booking Card */}
              <div className="lg:col-span-6 flex justify-center relative">
                <div className="relative w-[310px] sm:w-[350px] aspect-[9/18.5] rounded-[48px] bg-[#121417] p-3 shadow-phone-frame border-[3.5px] border-[#2A2F37]">
                  {/* Island Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30" />

                  {/* Inside Screen */}
                  <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-white flex flex-col justify-between p-5 pt-10">
                    {/* Top Map Segment */}
                    <div className="h-44 w-full rounded-2xl overflow-hidden relative shadow-inner">
                      <img 
                        src="./assets/image2_181_349.png" 
                        alt="Palenque Map" 
                        className="w-full h-full object-cover filter contrast-105"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#0D1B2A] shadow-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#FF2A5F]" />
                        <span>Palenque · 墨西哥</span>
                      </div>
                    </div>

                    {/* Trip Form Elements */}
                    <div className="mt-4 space-y-3">
                      <div className="p-3 rounded-2xl bg-[#FCFAF6] border border-black/5">
                        <div className="flex items-center justify-between text-xs font-bold text-[#0D1B2A]">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#FF2A5F]" />
                            抵店日期
                          </span>
                          <span className="text-xs text-[#FF2A5F] font-mono">1 Feb 2027</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#FCFAF6] border border-black/5 flex items-center justify-between text-xs font-bold text-[#0D1B2A]">
                        <span className="flex items-center gap-1.5">
                          <Moon className="w-3.5 h-3.5 text-[#FF2A5F]" />
                          入住天数
                        </span>
                        <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl shadow-xs">
                          <button className="w-4 h-4 text-xs font-bold text-gray-400">-</button>
                          <span className="font-mono text-xs">3</span>
                          <button className="w-4 h-4 text-xs font-bold text-[#FF2A5F]">+</button>
                        </div>
                      </div>
                    </div>

                    <div className="h-20" />
                  </div>

                  {/* THE SIGNATURE 3D FLOATING TILTED CARD BREAKING OUT OF PHONE (Matching Screenshot 2) */}
                  <motion.div 
                    initial={{ scale: 0.9, rotate: -8 }}
                    animate={{ scale: 1, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="absolute bottom-12 -left-6 sm:-left-10 z-40 w-64 p-4 rounded-3xl bg-[#0D1B2A] text-white shadow-2xl border border-white/20 select-none cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-[10px] font-bold mb-1">
                      <span className="text-white/80">Palenque 雨林木屋</span>
                      <span className="bg-[#34D399] text-black px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase">
                        BOOKED
                      </span>
                    </div>

                    <div className="text-[11px] text-white/50 font-mono mt-1">
                      Check-in · Sun 1 Feb 15:00
                    </div>

                    {/* Floating Parallax Icons beside card (Airbnb, cutlery, pin) */}
                    <div className="absolute -top-6 -right-4 flex flex-col gap-2 pointer-events-none">
                      <div className="w-8 h-8 rounded-xl bg-[#FF5A5F] text-white flex items-center justify-center shadow-lg transform rotate-12">
                        <Home className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-8 rounded-xl bg-[#34D399] text-white flex items-center justify-center shadow-lg transform -rotate-6">
                        <Utensils className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right Column: Copywriting (Matching Screenshot 2) */}
              <div className="lg:col-span-6">
                <span className="text-xs font-mono font-bold tracking-widest text-[#FF2A5F] uppercase block mb-3">
                  TRIP OVERVIEW
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0D1B2A] tracking-tight leading-[1.15]">
                  Add your stays<br />and activities
                </h2>
                <p className="mt-5 text-base sm:text-lg text-[#0D1B2A]/70 leading-relaxed max-w-lg">
                  随手将秘境营地、特色客栈、山野徒步与沿途体验加入时间轴。屿间自动规划最优接驳路线并标注在地图上，让每一段旅程井井有条。
                </p>
                <div className="mt-8 flex items-center gap-3 text-xs font-bold text-[#0D1B2A]/80">
                  <span className="px-3 py-1.5 rounded-full bg-white border border-black/5 shadow-xs">
                    ✓ 预订邮件一键导入
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white border border-black/5 shadow-xs">
                    ✓ 自动生成每日行程单
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* ================= MODE 2: TRACK (Matching Screenshot 4) ================= */}
          {mode === 'track' && (
            <motion.div 
              key="track"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Left Column: Dark Mode Headline (Matching Screenshot 4) */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <span className="text-xs font-mono font-bold tracking-widest text-[#FF2A5F] uppercase block mb-3">
                  STEP-BY-STEP UPDATES
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]">
                  Share the journey with<br />family and friends
                </h2>
                <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-lg">
                  离线无感静默追踪。每一条翻山公路、每一场车窗外的晚霞微风，实时与你在乎的人同步经纬心跳。
                </p>
                <div className="mt-8 flex items-center gap-4 text-xs font-semibold text-white/60">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#34D399]" /> 实时报安守候
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF2A5F]" /> 零延迟好友点赞互动
                  </span>
                </div>
              </div>

              {/* Right Column: Phone Screen with Real-life Windblown Video Card (Matching Screenshot 4) */}
              <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
                <div className="relative w-[310px] sm:w-[350px] aspect-[9/18.5] rounded-[48px] bg-[#121417] p-3 shadow-phone-frame border-[3.5px] border-[#2A2F37]">
                  {/* Island Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30" />

                  {/* Inside Screen (Fullbleed Sunset Highway Photo) */}
                  <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-black flex flex-col justify-between p-4 pt-8">
                    <img 
                      src="./assets/image6_181_349.jpeg" 
                      alt="The road to Memphis" 
                      className="absolute inset-0 w-full h-full object-cover filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60" />

                    {/* Top Story Bar Segments */}
                    <div className="relative z-20 flex gap-1 w-full pt-2">
                      <div className="h-1 flex-1 rounded-full bg-white" />
                      <div className="h-1 flex-1 rounded-full bg-white/40" />
                      <div className="h-1 flex-1 rounded-full bg-white/40" />
                    </div>

                    {/* Overlay Text Details (Matching Screenshot 4: The road to Memphis) */}
                    <div className="relative z-20 text-white">
                      <div className="text-lg font-black text-white">The road to Memphis</div>
                      <div className="text-[10px] text-white/70 font-mono mt-0.5">
                        UNITED STATES · 23 MAY 2026 · 24°
                      </div>
                      <p className="text-[11px] text-white/80 mt-2 line-clamp-2 leading-relaxed">
                        After a few hours of driving, we were finally getting close... music was on, and the mood was just right.
                      </p>

                      {/* Floating Reactions Bar */}
                      <div className="mt-3.5 pt-2.5 border-t border-white/20 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button className="flex items-center gap-1 text-xs text-white/90 hover:text-[#FF2A5F]">
                            <Heart className="w-3.5 h-3.5 fill-[#FF2A5F] text-[#FF2A5F]" />
                            <span className="text-[10px] font-mono">56</span>
                          </button>
                          <button className="flex items-center gap-1 text-xs text-white/90">
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-mono">4</span>
                          </button>
                        </div>
                        <Share2 className="w-3.5 h-3.5 text-white/80" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ================= MODE 3: RELIVE (Matching Screenshot 7) ================= */}
          {mode === 'relive' && (
            <motion.div 
              key="relive"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              {/* Centerpiece: Real 3D Hardcover Travel Book (Matching Screenshot 7) */}
              <div className="relative max-w-3xl w-full mx-auto my-4 perspective-1000">
                {/* Book Binding Shadow & Outer Binder */}
                <div className="relative rounded-2xl bg-[#0D1B2A] p-2.5 sm:p-4 shadow-2xl border border-white/20 flex shadow-card-elevated">
                  
                  {/* Left Page (Tilted slightly in 3D perspective to simulate page curl) */}
                  <div className="flex-1 bg-white rounded-l-xl p-4 sm:p-6 text-left border-r border-black/10 relative shadow-inner">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF2A5F]" />
                      <span className="text-[10px] font-bold tracking-wider text-[#FF2A5F] uppercase">SRI LANKA</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-[#0D1B2A] tracking-tight">ELLA</div>

                    <div className="mt-3 w-full aspect-[4/3] rounded-lg overflow-hidden bg-black/5">
                      <img 
                        src="./assets/image0_181_349.jpeg" 
                        alt="Ella Sri Lanka" 
                        className="w-full h-full object-cover" 
                      />
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[10px] font-mono font-bold text-[#0D1B2A]/70 pt-2 border-t border-black/5">
                      <span>29 OCT</span>
                      <span>27°C</span>
                      <span className="text-[#FF2A5F]">3,415 km</span>
                    </div>
                  </div>

                  {/* Right Page (4-photo grid matching Screenshot 7) */}
                  <div className="flex-1 bg-white rounded-r-xl p-4 sm:p-6 shadow-inner flex flex-col justify-between">
                    <div className="grid grid-cols-2 gap-2 h-full">
                      <div className="rounded-lg overflow-hidden aspect-square bg-black/5">
                        <img src="./assets/雪山树木横屏.jpg" alt="Train route" className="w-full h-full object-cover" />
                      </div>
                      <div className="rounded-lg overflow-hidden aspect-square bg-black/5">
                        <img src="./assets/草原横屏.jpg" alt="Mountain bridge" className="w-full h-full object-cover" />
                      </div>
                      <div className="rounded-lg overflow-hidden aspect-square bg-black/5">
                        <img src="./assets/藏地竖屏.jpg" alt="Tuk tuk" className="w-full h-full object-cover" />
                      </div>
                      <div className="rounded-lg overflow-hidden aspect-square bg-black/5">
                        <img src="./assets/image5_181_349.jpeg" alt="Smiling girl" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="text-right text-[9px] font-mono text-gray-400 mt-2">
                      @yujian.echo · 精装纪念画册
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Below Book (Matching Screenshot 7) */}
              <div className="mt-10 max-w-xl mx-auto">
                <span className="text-xs font-mono font-bold tracking-widest text-[#FF2A5F] uppercase block mb-2">
                  IN YOUR HANDS
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0D1B2A] tracking-tight">
                  Transform your trip into<br />a Travel Book
                </h2>
                <p className="mt-4 text-base text-[#0D1B2A]/70">
                  A beautiful keepsake of your travel memories.<br />Created with the push of a button.
                </p>
                <div className="mt-6">
                  <button className="px-7 py-3 rounded-full bg-[#0D1B2A] text-white text-xs font-bold hover:bg-black transition-all shadow-md active:scale-95">
                    一键定制专属旅行书
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Signature Hand-drawn Sticker Tab Bar (Matching Polarsteps PLAN / TRACK / RELIVE) */}
        <div className="mt-16 sm:mt-24 flex items-center justify-center gap-3 select-none">
          {/* Tab 1: PLAN */}
          <button
            onClick={() => setMode('plan')}
            className={`px-6 py-2 rounded-full font-mono text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-all duration-300 ${
              mode === 'plan'
                ? 'bg-[#E5DFD5] text-[#0D1B2A] shadow-md scale-105'
                : 'text-gray-400 hover:text-[#0D1B2A]'
            }`}
          >
            PLAN
          </button>

          {/* Tab 2: TRACK */}
          <button
            onClick={() => setMode('track')}
            className={`px-6 py-2 rounded-full font-mono text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-all duration-300 ${
              mode === 'track'
                ? 'bg-[#FF2A5F] text-white shadow-glow-coral scale-105'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            TRACK
          </button>

          {/* Tab 3: RELIVE */}
          <button
            onClick={() => setMode('relive')}
            className={`px-6 py-2 rounded-full font-mono text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-all duration-300 ${
              mode === 'relive'
                ? 'bg-[#13383B] text-white shadow-md scale-105'
                : 'text-gray-400 hover:text-[#0D1B2A]'
            }`}
          >
            RELIVE
          </button>
        </div>

      </div>
    </section>
  );
};
