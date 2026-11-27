import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon, MapPin, Sparkles, BookOpen, Clock, Heart, Share2, Compass } from 'lucide-react';

interface StoryStep {
  id: number;
  time: string;
  location: string;
  title: string;
  desc: string;
  image: string;
  weather: string;
  elevation: string;
}

const STORY_STEPS: StoryStep[] = [
  {
    id: 1,
    time: '14:20',
    location: '甘孜藏族自治州 · 塔公草原',
    title: '雅拉雪山下的暮色风马旗',
    desc: '日光倾泻在金顶寺庙与木雅大寺的白塔群上，微风拂过草原，牛羊慢行。',
    image: './assets/草原山脉竖屏.jpg',
    weather: '18°C 晴空',
    elevation: '3,750m'
  },
  {
    id: 2,
    time: '17:45',
    location: '理塘县 · 长青春科尔寺',
    title: '高城之巅的落日钟声',
    desc: '从山顶俯瞰理塘全景，落日将整座谷地染上琥珀色。',
    image: './assets/藏地竖屏.jpg',
    weather: '12°C 阵风',
    elevation: '4,014m'
  },
  {
    id: 3,
    time: '09:10',
    location: '稻城县 · 洛绒牛场',
    title: '三怙主神山晨雾破晓',
    desc: '晨雾在夏诺多吉与央迈勇的刃脊间流转，溪流清澈见底，宛若仙境。',
    image: './assets/image6_181_349.jpeg',
    weather: '8°C 微凉',
    elevation: '4,180m'
  }
];

export const TimelineShowcase: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<StoryStep>(STORY_STEPS[2]);

  return (
    <section id="features" className="py-20 md:py-32 bg-[#FCFAF6] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Timeline Details */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF2A5F]/10 text-[#FF2A5F] text-xs font-bold uppercase tracking-wider mb-4">
                <Camera className="w-3.5 h-3.5" />
                <span>光影切片与时空轴心</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D1B2A] tracking-tight leading-[1.2]">
                旅途照片散落各处？<br />
                屿间为你自动串联成诗。
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[#0D1B2A]/70 leading-relaxed">
                每次快门按下，屿间根据精准地理坐标与时间戳，将你的相片与视频无缝嵌合在三维轨迹的精确航点上，无需繁琐整理。
              </p>

              {/* Interactive Story Step Selector */}
              <div className="mt-8 space-y-3.5">
                {STORY_STEPS.map((step) => {
                  const isCurrent = step.id === selectedStep.id;
                  return (
                    <div
                      key={step.id}
                      onClick={() => setSelectedStep(step)}
                      className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer border ${
                        isCurrent
                          ? 'bg-white shadow-soft-float border-[#FF2A5F]/30 ring-1 ring-[#FF2A5F]/20'
                          : 'bg-white/50 hover:bg-white border-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                            isCurrent ? 'bg-[#FF2A5F] text-white shadow-glow-coral' : 'bg-black/5 text-[#0D1B2A]'
                          }`}>
                            0{step.id}
                          </span>
                          <div>
                            <div className="text-sm font-bold text-[#0D1B2A]">{step.title}</div>
                            <div className="text-xs text-[#0D1B2A]/50 flex items-center gap-2 mt-0.5">
                              <MapPin className="w-3 h-3 text-[#FF2A5F]" />
                              <span>{step.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right text-xs">
                          <span className="font-semibold text-[#0D1B2A]/80">{step.time}</span>
                          <div className="text-[10px] text-[#FF2A5F] font-bold">{step.elevation}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center gap-6 text-xs text-[#0D1B2A]/60 font-medium">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#FF2A5F]" />
                  EXIF 深度地理匹配
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#FF2A5F]" />
                  自动生成每日旅行剪报
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Phone Mockup from Figma (Matching 350x758 rx=44) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-[320px] sm:w-[350px] aspect-[9/19.5] rounded-[48px] bg-[#171717] p-3 shadow-phone-frame border-[3.5px] border-[#2A2F37]"
            >
              {/* Dynamic Island Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-between px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] border border-white/10" />
                <div className="w-2 h-2 rounded-full bg-[#34D399]" />
              </div>

              {/* Inner Screen */}
              <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-black flex flex-col justify-between">
                {/* Visual Imagery */}
                <img 
                  src={selectedStep.image} 
                  alt={selectedStep.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50" />

                {/* Top Overlay Meta */}
                <div className="relative z-20 pt-10 px-5 flex justify-between items-center text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF2A5F]" />
                    <span className="text-xs font-bold tracking-wider uppercase">屿间 故事卡片</span>
                  </div>
                  <span className="text-[11px] bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full font-mono">{selectedStep.weather}</span>
                </div>

                {/* Bottom Card Overlay */}
                <div className="relative z-20 p-5 text-white">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#FF2A5F] font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{selectedStep.location}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mt-1 leading-snug">{selectedStep.title}</h4>
                  <p className="text-xs text-white/75 mt-2 leading-relaxed">{selectedStep.desc}</p>

                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-white/70">
                    <div className="flex items-center gap-1.5 font-mono text-[11px]">
                      <Clock className="w-3 h-3 text-[#FF2A5F]" />
                      <span>{selectedStep.time} 记录</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="w-4 h-4 text-white/80 hover:text-[#FF2A5F] transition-colors cursor-pointer" />
                      <Share2 className="w-4 h-4 text-white/80 hover:text-white transition-colors cursor-pointer" />
                    </div>
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
