import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, MapPin, Compass, Calendar, Sparkles, ChevronRight, Volume2, Maximize2 } from 'lucide-react';

export const CulturalScrollChoreography: React.FC = () => {
  // Section 1: Scroll Text Step (1, 2, 3)
  const [scrollStep, setScrollStep] = useState<number>(1);

  // Section 2: Dark Mode Celadon/Slate Video Chapter (1, 2, 3, 4)
  const [videoChapter, setVideoChapter] = useState<number>(1);

  const CHAPTERS = [
    {
      id: 1,
      title: "华严晨钟 · 辽金木构的呼吸",
      subtitle: "大同古城 · 上华严寺大雄宝殿",
      desc: "单檐歇山顶之冠，鸱吻高逾三米。清晨鸽群掠过琉璃重檐，阳光斜切进藻井，殿内辽代彩塑静默伫立千载。",
      image: "./assets/04c7fad501674580f9f550c41b74edd1.jpg",
      duration: "02:45",
      elevation: "1,040m"
    },
    {
      id: 2,
      title: "云冈微笑 · 佛光破晓的千佛造像",
      subtitle: "云冈区 · 昙曜五窟第廿窟",
      desc: "露天大佛面庞圆润，鼻梁高挺，隐蕴胡风汉韵。夕阳金光拂照在斧凿斑驳的砂岩壁面，一眼越过一千五百年时光。",
      image: "./assets/33c949a8d9d45a62b67c26044f40447f.jpg",
      duration: "03:12",
      elevation: "1,120m"
    },
    {
      id: 3,
      title: "飞阁凌空 · 恒山绝壁的悬空奇迹",
      subtitle: "浑源县 · 金龙峡翠屏峰悬崖",
      desc: "危楼高百尺，手可摘星辰。三十余根立木飞梁借岩石暗托，三教合一殿宇悬于万仞峭壁之上，风吹悬铎声如天籁。",
      image: "./assets/1c826d87ebf480447dbb8ecb8a47c7bb.jpg",
      duration: "04:05",
      elevation: "1,260m"
    },
    {
      id: 4,
      title: "古城长烟 · 暮色里坊的人间烟火",
      subtitle: "大同古城 · 善化寺与鼓楼街巷",
      desc: "转经僧人的背影渐隐于青砖巷弄，茶汤沸腾的白汽升起，古都重现千百年前九边重镇的温厚余韵。",
      image: "./assets/5e9f31e69989056d7d2f5ef388f6fa9c.jpg",
      duration: "01:58",
      elevation: "1,045m"
    }
  ];

  return (
    <div id="datong-route" className="relative">
      
      {/* =========================================================================
          STAGE 1: WARM CANVAS (#FCFAF6)
          Phone moves to bottom center-left + 3D floating photo sticky notes +
          Chinese text rolling out like a scroll in 3 parts!
          ========================================================================= */}
      <section className="py-24 md:py-36 bg-[#FCFAF6] relative overflow-hidden transition-all duration-700">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          
          {/* Section Indicator */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF2A5F] uppercase block mb-2">
              HERITAGE ROUTE · 大同文脉寻踪
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0D1B2A] tracking-tight">
              步履所至，皆成时空古建便签
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#0D1B2A]/65">
              无需频繁手动记录，当穿行于古城石窟与绝壁古刹间，屿间为你实时捕捉古迹光影。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Phone Model Container: Located at Bottom Center-Left */}
            <div className={`lg:col-span-6 flex justify-center transition-all duration-700 ${
              scrollStep === 2 ? 'lg:translate-x-6' : ''
            }`}>
              <div className="relative w-[310px] sm:w-[350px] aspect-[9/18.5] rounded-[48px] bg-[#121417] p-3 shadow-phone-frame border-[3.5px] border-[#2A2F37]">
                
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30" />

                {/* Inner Screen: Map Transitioning into Photo Notes */}
                <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#FAF7F2] p-4 pt-10 flex flex-col justify-between">
                  {/* Top Map Segment */}
                  <div className="h-44 w-full rounded-2xl overflow-hidden relative shadow-inner">
                    <img 
                      src="./assets/datong-map.jpg" 
                      alt="Datong route" 
                      className="w-full h-full object-cover filter brightness-95 contrast-105"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-white flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#FF2A5F]" />
                      <span>大同古城 ➔ 浑源县</span>
                    </div>
                  </div>

                  {/* Notes / Itinerary inside phone */}
                  <div className="space-y-2.5 my-2">
                    <div className="p-2.5 rounded-xl bg-white shadow-xs border border-black/5 flex items-center justify-between text-xs">
                      <span className="font-bold text-[#0D1B2A]">华严寺薄伽教藏殿</span>
                      <span className="text-[10px] font-mono text-[#FF2A5F]">已抵达 · 10:15</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white shadow-xs border border-black/5 flex items-center justify-between text-xs">
                      <span className="font-bold text-[#0D1B2A]">云冈石窟五华洞</span>
                      <span className="text-[10px] font-mono text-[#34D399]">记录中 · 14:30</span>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="text-center py-2 text-[10px] font-mono text-[#0D1B2A]/50">
                    屿间 · 东方古建无感记录引擎
                  </div>
                </div>

                {/* =========================================================
                    FLOATING PHOTO STICKY NOTES POPPING OUT OF PHONE IN 3D
                    (User's requirement: 做出漂浮出手机的效果)
                    ========================================================= */}
                <motion.div 
                  initial={{ opacity: 0, rotate: -12, scale: 0.85, x: -20 }}
                  animate={{ opacity: 1, rotate: -8, scale: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 180, damping: 16 }}
                  className="absolute -top-8 -left-8 sm:-left-12 z-40 w-44 rounded-2xl bg-white p-2.5 shadow-2xl border border-black/10 select-none cursor-pointer hover:rotate-0 hover:scale-105 transition-transform"
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black/5 mb-2">
                    <img src="./assets/0adb3ed794717f2ecd8f0e73e4ca133b.jpg" alt="华严寺彩塑" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center justify-between text-[9px] font-bold text-[#0D1B2A]">
                    <span>华严寺 · 合掌露齿菩萨</span>
                    <span className="text-[#FF2A5F]">辽代绝品</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, rotate: 14, scale: 0.85, x: 20 }}
                  animate={{ opacity: 1, rotate: 9, scale: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.15 }}
                  className="absolute bottom-16 -right-6 sm:-right-10 z-40 w-48 rounded-2xl bg-[#0D1B2A] text-white p-3 shadow-2xl border border-white/20 select-none cursor-pointer hover:rotate-0 hover:scale-105 transition-transform"
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-white/10 mb-2">
                    <img src="./assets/1c826d87ebf480447dbb8ecb8a47c7bb.jpg" alt="悬空寺飞梁" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-[10px] font-bold text-white">浑源 · 悬空寺金龙峡栈道</div>
                  <div className="text-[9px] text-white/60 font-mono mt-0.5">海拔 1,260m · 步道 2.4km</div>
                </motion.div>

              </div>
            </div>

            {/* Right Column: Chinese Scroll Text Rolling Out in 3 Steps (User's requirement) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF2A5F]" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#FF2A5F] uppercase">
                  SCROLL ROLL-OUT · 滚轴式时空呈现
                </span>
              </div>

              {/* Step Toggle Bar */}
              <div className="inline-flex p-1.5 rounded-2xl bg-black/5 border border-black/5 mb-8 max-w-fit">
                <button
                  onClick={() => setScrollStep(1)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    scrollStep === 1 ? 'bg-white text-[#0D1B2A] shadow-sm' : 'text-[#0D1B2A]/60'
                  }`}
                >
                  卷轴一 · 刹那千年
                </button>
                <button
                  onClick={() => setScrollStep(2)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    scrollStep === 2 ? 'bg-white text-[#0D1B2A] shadow-sm' : 'text-[#0D1B2A]/60'
                  }`}
                >
                  卷轴二 · 栈道悬空
                </button>
                <button
                  onClick={() => setScrollStep(3)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    scrollStep === 3 ? 'bg-white text-[#0D1B2A] shadow-sm' : 'text-[#0D1B2A]/60'
                  }`}
                >
                  卷轴三 · 凝炼华章
                </button>
              </div>

              {/* Scroll Content Area (Simulating Chinese Scroll Paper / Bamboo slip) */}
              <div className="relative min-h-[190px] p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E2D8] shadow-soft-float overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF2A5F]/5 rounded-bl-full pointer-events-none" />

                <AnimatePresence mode="wait">
                  {scrollStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="text-xs font-mono font-bold text-[#FF2A5F] mb-1">01 / 千载造像</div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#0D1B2A] leading-snug tracking-tight">
                        一眼千年，云冈石窟二十窟大佛默然微笑。
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-[#0D1B2A]/75 leading-relaxed font-normal">
                        凝固北魏胡风汉韵的辽阔气象，斧凿之迹在晨光下泛起微光，历史的温度扑面而来。
                      </p>
                    </motion.div>
                  )}

                  {scrollStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="text-xs font-mono font-bold text-[#FF2A5F] mb-1">02 / 绝壁飞梁</div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#0D1B2A] leading-snug tracking-tight">
                        穿行浑源金龙峡，悬空寺飞阁依悬崖而建。
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-[#0D1B2A]/75 leading-relaxed font-normal">
                        离线追踪步道于翠壁绝险间无感留痕，千载风雨不朽，记录行者每一处屏息凝神的仰望。
                      </p>
                    </motion.div>
                  )}

                  {scrollStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="text-xs font-mono font-bold text-[#FF2A5F] mb-1">03 / 东方札记</div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#0D1B2A] leading-snug tracking-tight">
                        每一次步履停歇，皆为你自动凝练为东方札记。
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-[#0D1B2A]/75 leading-relaxed font-normal">
                        自动串联拍摄经纬、气压海拔与建筑测绘档案，把散落的照片编织为永不褪色的学术文脉。
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Progress bar inside the text scroll */}
                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#0D1B2A]/50">
                  <span>滑动切换卷轴段落</span>
                  <div className="flex gap-1.5">
                    <span className={`w-6 h-1 rounded-full transition-colors ${scrollStep === 1 ? 'bg-[#FF2A5F]' : 'bg-black/10'}`} />
                    <span className={`w-6 h-1 rounded-full transition-colors ${scrollStep === 2 ? 'bg-[#FF2A5F]' : 'bg-black/10'}`} />
                    <span className={`w-6 h-1 rounded-full transition-colors ${scrollStep === 3 ? 'bg-[#FF2A5F]' : 'bg-black/10'}`} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          STAGE 2: CELADON GREY-GREEN / SLATE BLUE DARK MODE (#131F22)
          Phone moves from top center-left to CENTER-RIGHT!
          Pop up text & play video clip with dynamic progress bar moving on scroll!
          (User's requirement: 全灰绿/灰蓝色页面，手机模型由中间靠左移动到中间靠右，滚四次弹出四段视频四段文案)
          ========================================================================= */}
      <section id="cultural-track" className="py-24 md:py-36 bg-[#131F22] text-white relative overflow-hidden transition-colors duration-700">
        
        {/* Ambient Celadon & Mineral Pigment Glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#1E3A3A]/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#0E1719]/80 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-[#34D399] uppercase block mb-2">
              CINEMATIC ARCHIVES · 东方光影纪实
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              四重声色，重温梁林走过的晋北大地
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/70">
              随着鼠标滚动，依次展开四段深度影视级纪实镜头与建筑学者旁白。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: 4 Sequential Video Chapters & Text Blocks (User's requirement: 滚四次弹出四段视频四段文案) */}
            <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
              {CHAPTERS.map((chap) => {
                const isActive = videoChapter === chap.id;
                return (
                  <motion.div
                    key={chap.id}
                    onClick={() => setVideoChapter(chap.id)}
                    className={`p-5 rounded-3xl transition-all duration-300 cursor-pointer border ${
                      isActive 
                        ? 'bg-[#1C2C30] border-[#34D399]/40 shadow-xl ring-1 ring-[#34D399]/30' 
                        : 'bg-[#162326]/60 hover:bg-[#162326] border-white/5 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-xs ${
                          isActive ? 'bg-[#34D399] text-[#131F22]' : 'bg-white/10 text-white'
                        }`}>
                          0{chap.id}
                        </span>
                        <div>
                          <h4 className="text-base font-bold text-white leading-tight">{chap.title}</h4>
                          <div className="text-xs text-white/50 flex items-center gap-1.5 mt-0.5">
                            <MapPin className="w-3 h-3 text-[#34D399]" />
                            <span>{chap.subtitle}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-mono font-bold text-[#34D399]">{chap.elevation}</span>
                      </div>
                    </div>

                    {/* Expanded Text when active */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-3 border-t border-white/10 text-xs sm:text-sm text-white/80 leading-relaxed"
                      >
                        {chap.desc}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column: Phone Model Positioned at CENTER-RIGHT (User's requirement: 手机移动到中间靠右) */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-[310px] sm:w-[350px] aspect-[9/18.5] rounded-[48px] bg-[#0E1517] p-3 shadow-phone-frame border-[3.5px] border-[#2A3F44]">
                
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-between px-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#1A1A1A]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                </div>

                {/* Inside Screen: Live Video Frame with Center Play Button & Dynamic Moving Progress Bar */}
                <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-black flex flex-col justify-between p-4 pt-8">
                  {/* Video Thumbnail Image */}
                  <img 
                    src={CHAPTERS[videoChapter - 1].image} 
                    alt={CHAPTERS[videoChapter - 1].title} 
                    className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60" />

                  {/* Top Bar inside Video */}
                  <div className="relative z-20 flex justify-between items-center text-white text-[11px] pt-2">
                    <span className="font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF2A5F] animate-ping" />
                      4K 空间立体原声
                    </span>
                    <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full font-mono text-[10px]">
                      {CHAPTERS[videoChapter - 1].duration}
                    </span>
                  </div>

                  {/* Center Glowing Play Button */}
                  <div className="relative z-20 flex items-center justify-center my-auto">
                    <button className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/50 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform group">
                      <Play className="w-6 h-6 fill-white ml-1 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>

                  {/* Bottom Video HUD & DYNAMIC PROGRESS BAR (Moves with Chapter / Scroll) */}
                  <div className="relative z-20 text-white pb-2">
                    <div className="text-xs font-bold truncate">{CHAPTERS[videoChapter - 1].title}</div>
                    <div className="text-[10px] text-white/70 truncate mt-0.5">{CHAPTERS[videoChapter - 1].subtitle}</div>

                    {/* Progress Bar Container */}
                    <div className="mt-3 w-full bg-white/20 h-1.5 rounded-full overflow-hidden relative">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-[#FF2A5F] to-[#34D399]"
                        animate={{ width: `${videoChapter * 25}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>
                    <div className="flex justify-between items-center text-[9px] font-mono text-white/60 mt-1">
                      <span>0{videoChapter} / 04 章节</span>
                      <span>进度 {(videoChapter * 25)}%</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
