import { useEffect, useRef, useState } from 'react';
import { animate, motion, MotionValue, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion';
import { BatteryFull, Signal, Wifi, Play, Pause, MapPin, ChevronRight, Heart, Image as ImageIcon, Sparkles } from 'lucide-react';
import { chapters, pictures } from '../data';

export function RouteMap() {
  return (
    <div className="map-art">
      <img className="map-underlay" src={pictures.map} alt="大同至浑源卫星地图" />
      <svg viewBox="0 0 1024 867" role="img" aria-label="大同至云冈区再到浑源县的行程示意路线">
        <image href={pictures.map} width="1024" height="867" />
        <path d="M350 185 Q250 214 165 300 Q330 395 572 589 T836 795" fill="none" stroke="#122b34" strokeWidth="18" />
        <path className="route-dash" d="M350 185 Q250 214 165 300 Q330 395 572 589 T836 795" fill="none" stroke="#ff5279" strokeWidth="10" strokeDasharray="18 15" />
        {([[350, 185, '大同古城', 380, 159], [165, 300, '云冈区', 190, 354], [836, 795, '浑源县', 628, 797]] as [number, number, string, number, number][]).map(([x, y, t, tx, ty]) => (
          <g key={t}>
            <circle cx={x} cy={y} r="19" fill="#ff2a5f" stroke="white" strokeWidth="8" />
            <text x={tx} y={ty} fill="white" stroke="#233c3a" strokeWidth="9" paintOrder="stroke" fontSize="42" fontWeight="700">{t}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function PhotoFilm({ chapter, active }: { chapter: number; active: boolean }) {
  const [playing, setPlaying] = useState(false);
  const shown = useMotionValue(0);
  const barPercent = (chapter + 1) * 25;

  useEffect(() => {
    setPlaying(false);
    shown.set(0);
  }, [chapter]);

  useEffect(() => {
    if (!playing || !active) return;
    const controls = animate(shown, 1, {
      duration: 10,
      ease: 'linear',
      onComplete: () => setPlaying(false)
    });
    return () => controls.stop();
  }, [playing, active, shown]);

  const c = chapters[chapter] || chapters[0];

  return (
    <div className="film-screen">
      <motion.img
        key={c.image}
        src={c.image}
        alt={c.location}
        initial={{ opacity: 0.4, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="film-shade" />

      {/* Top HUD */}
      <div className="film-top">
        <span className="flex items-center gap-1">
          <Sparkles size={11} className="text-[#34D399]" />
          4K 原声 · 旅途短片
        </span>
        <span className="font-mono text-[10px] bg-black/40 px-2 py-0.5 rounded-full">
          0{chapter + 1} / 04
        </span>
      </div>

      {/* Center Play Button */}
      <button
        className="film-play"
        tabIndex={active ? 0 : -1}
        aria-label={playing ? '暂停短片' : '播放短片'}
        aria-pressed={playing}
        onClick={() => setPlaying(!playing)}
      >
        {playing ? <Pause fill="currentColor" size={24} /> : <Play fill="currentColor" size={24} className="ml-1" />}
      </button>

      {/* Bottom HUD & Dynamic Progress Bar */}
      <div className="film-bottom">
        <span className="film-kind">旅行短片 · 空间音画</span>
        <h3>{c.title}</h3>
        <p><MapPin size={12} />{c.location}</p>

        {/* 随分镜推进的动态进度条（25%、50%、75%、100%） */}
        <div className="film-progress" role="progressbar" aria-label="短片进度" aria-valuemin={0} aria-valuemax={100} aria-valuenow={barPercent}>
          <motion.i
            animate={{ width: `${barPercent}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
        <div className="film-time">
          <span>00:0{chapter + 1}</span>
          <span>进度 {barPercent}%</span>
        </div>
      </div>
    </div>
  );
}

export function Phone({ progress, chapter, phase }: { progress: MotionValue<number>; chapter: number; phase: number }) {
  // ── 修复三：手机内界面切换以实底滑入覆盖，彻底杜绝两套界面互相透出 ──
  // 地图层：只在 Phase 0 和 Phase 1 保持活跃
  const isMapLayer = phase < 2;

  // 便签层：在 Phase 2~4 活跃，从底部 100% 滑入，实底 #FAF7F2 覆盖地图
  const isNotesLayer = phase >= 2 && phase <= 4;
  const notesSlideY = useTransform(progress, [0.17, 0.26, 0.49, 0.55], ['100%', '0%', '0%', '100%']);

  // 影像层：在 Phase 5~8 活跃
  const isFilmLayer = phase >= 5;
  const filmOpacity = useTransform(progress, [0.52, 0.58], [0, 1]);

  // 行程规划卡片在首屏到行程时弹出（Phase 0 -> 1）
  const sheetY = useTransform(progress, [0, 0.05, 0.15], [260, 240, 0]);

  return (
    <div className="phone-shell" data-testid="story-phone">
      <div className="phone-buttons" />
      <div className="phone-screen">

        {/* 1. 地图层：实底背景，位于最底层 */}
        <div
          className="phone-map-layer"
          aria-hidden={!isMapLayer}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: isMapLayer ? 1 : 0,
            transition: 'opacity 0.15s ease',
            zIndex: 1,
            pointerEvents: isMapLayer ? 'auto' : 'none'
          }}
        >
          <div className="phone-map-title">
            <span>TRIP OVERVIEW · 晋北慢游</span>
            <h3>大同至浑源</h3>
            <p>大同 · 云冈区 · 浑源县</p>
          </div>
          <RouteMap />

          {/* 手机下方做弹出效果：线路和时间规划单 */}
          <motion.div className="trip-sheet" style={{ y: sheetY }}>
            <div className="sheet-handle" />
            <h4>把想去的地方，连成一条路</h4>
            <p>三天两晚 · 规划示例</p>
            {[
              { name: '大同古城', time: '第一天 · 漫游街巷与华严寺', img: pictures.hero },
              { name: '云冈区', time: '第二天 · 昙曜五窟佛像寻迹', img: pictures.buddha },
              { name: '浑源县', time: '第三天 · 恒山悬空奇迹', img: pictures.temple }
            ].map(s => (
              <div className="trip-stop" key={s.name}>
                <img src={s.img} alt="" />
                <div>
                  <b>{s.name}</b>
                  <small>{s.time}</small>
                </div>
                <ChevronRight size={13} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* 2. 便签层：实底背景滑入覆盖，彻底隔绝地图透光 */}
        <motion.div
          className="phone-notes-layer"
          aria-hidden={!isNotesLayer}
          style={{
            position: 'absolute',
            inset: 0,
            y: notesSlideY,
            zIndex: 2,
            background: '#FAF7F2',
            pointerEvents: isNotesLayer ? 'auto' : 'none'
          }}
        >
          <div className="notes-title">
            <span>TRAVEL NOTES · 旅行手记</span>
            <h3>行走晋北</h3>
            <p>三天两晚，慢慢走，慢慢看。</p>
          </div>
          <img className="notes-cover" src={pictures.street} alt="古城街巷" />
          <div className="notes-meta">
            <span><MapPin size={11} />大同古城</span>
            <span><Heart size={11} />已收藏手记</span>
          </div>
          <h4>把日常，装进旅途</h4>
          <p className="notes-copy">檐角的光、路过的小巷，<br />还有那些计划之外的惊喜。</p>
          <div className="notes-images">
            <img src={pictures.carvings} alt="石窟岩壁造像" />
            <img src={pictures.temple} alt="悬空寺崖壁" />
          </div>
          <div className="phone-tabbar">
            <MapPin />
            <ImageIcon />
            <Heart />
          </div>
        </motion.div>

        {/* 3. 影像层：暗夜视频模式 */}
        <motion.div
          className="phone-film-layer"
          style={{
            opacity: filmOpacity,
            pointerEvents: isFilmLayer ? 'auto' : 'none',
            position: 'absolute',
            inset: 0,
            zIndex: 3
          }}
          aria-hidden={!isFilmLayer}
          inert={!isFilmLayer}
        >
          <PhotoFilm chapter={chapter} active={isFilmLayer} />
        </motion.div>

        {/* 状态栏：暗浅自适应 */}
        <div className={'phone-status ' + (isNotesLayer ? 'is-ink' : '')}>
          <span>09:41</span>
          <span><Signal /><Wifi /><BatteryFull /></span>
        </div>
        <div className="phone-island" />
        <div className="phone-home" />
      </div>
    </div>
  );
}
