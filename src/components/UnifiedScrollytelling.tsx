import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useTransform, animate, MotionValue } from 'framer-motion';
import { Map, CalendarDays, NotebookPen, Mouse, Sparkles } from 'lucide-react';
import { Phone, RouteMap } from './Phone';
import { chapters, pictures } from '../data';

// 9个离散分镜对应的精确进度锚点
const PHASE_PROGRESS = [0.0, 0.16, 0.28, 0.38, 0.48, 0.60, 0.73, 0.86, 1.0];

const STEP_LABELS = [
  '行走之间',
  '大同慢游',
  '时空便签',
  '停留时刻',
  '故事归处',
  '华严晨钟',
  '云冈微笑',
  '悬空奇迹',
  '古城长烟'
];

const plans = [
  {
    title: '把想去的地方，连成路线',
    text: '从大同到云冈区，再去浑源。地图上看清沿途，让出发更从容。',
    icon: Map
  },
  {
    title: '为每一站，留一点时间',
    text: '安排住宿与停留，把时间花在喜欢的地方，也给偶遇留些空白。',
    icon: CalendarDays
  },
  {
    title: '让照片和心情，都有归处',
    text: '添上沿途的影像与随记。回头看时，每次故事都能找到来处。',
    icon: NotebookPen
  }
];

function useViewport() {
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });
  useEffect(() => {
    const change = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', change);
    return () => window.removeEventListener('resize', change);
  }, []);
  return size;
}

function FloatingNote({ p, index }: { p: MotionValue<number>; index: number }) {
  const images = [pictures.carvings, pictures.temple, pictures.hiker];
  const names = ['石壁上的时光', '抬头，看见悬空寺', '山野间的我们'];
  const targets = [[-126, -156], [137, 0], [-99, 191]][index];

  // 便签在 Phase 2~4 (p: 0.24 ~ 0.50) 浮现出来
  const x = useTransform(p, [0.18, 0.27, 0.48, 0.54], [0, targets[0], targets[0], 0]);
  const y = useTransform(p, [0.18, 0.27, 0.48, 0.54], [0, targets[1], targets[1], 30]);
  const opacity = useTransform(p, [0.18, 0.24, 0.49, 0.53], [0, 1, 1, 0]);
  const scale = useTransform(p, [0.18, 0.27, 0.49, 0.54], [0.45, 1, 1, 0.4]);

  return (
    <motion.figure
      className={'floating-note floating-note-' + index}
      style={{ x, y, opacity, scale, rotate: [-9, 9, -5][index] }}
      aria-hidden="true"
    >
      <img src={images[index]} alt="" />
      <figcaption>{names[index]}</figcaption>
    </motion.figure>
  );
}

function HeroCopy({ onExperience, onStart }: { onExperience: () => void; onStart: () => void }) {
  return (
    <div className="hero-copy">
      <span className="hero-eyebrow">
        <Sparkles size={14} className="inline mr-1 text-[#ff5279]" /> 让每一次出发，都有迹可循
      </span>
      <h1>行走之间，<br /><em>遇见生活。</em></h1>
      <p>沿着地图出发，向地方生活靠近。<br />用路线、影像与手记，收藏属于你的旅途。</p>
      <div className="hero-actions">
        <button className="button" onClick={onExperience}>开启我的旅途</button>
        <button
          className="hero-secondary"
          onClick={onStart}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          看看如何记录 ↓
        </button>
      </div>
      <div className="hero-caption">此刻出发 · 山西大同</div>
    </div>
  );
}

function StaticStory({ onExperience }: { onExperience: () => void }) {
  return (
    <div className="static-story" id="story">
      <section className="static-hero">
        <img src={pictures.hero} alt="树木环绕的古城与寺庙" />
        <HeroCopy onExperience={onExperience} onStart={() => {}} />
      </section>
      <section className="static-plan" id="datong-route">
        <span className="section-label">TRIP OVERVIEW · 旅程规划</span>
        <h2 className="section-title">规划你的<br />下一次探索</h2>
        <div className="static-map"><RouteMap /></div>
        {plans.map(s => (
          <article key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </section>
      <section className="static-films" id="cultural-track">
        <span className="section-label">TRAVEL TRACKER · 旅途追迹</span>
        <h2 className="section-title">重温每一个<br />值得记住的瞬间</h2>
        <div>
          {chapters.map(c => (
            <figure key={c.title}>
              <img src={c.image} alt={c.location} />
              <figcaption>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

export function UnifiedScrollytelling({ onExperience }: { onExperience: () => void }) {
  const v = useViewport();
  if (v.w < 900) {
    return <StaticStory onExperience={onExperience} />;
  }
  return <DesktopStory onExperience={onExperience} width={v.w} height={v.h} />;
}

function DesktopStory({ onExperience, width, height }: { onExperience: () => void; width: number; height: number }) {
  const ref = useRef<HTMLElement>(null);
  const p = useMotionValue(0);

  // 状态机：0 ~ 8
  const [phase, setPhase] = useState(0);
  const phaseRef = useRef(0);
  const [chapter, setChapter] = useState(0);

  // 动画控制引用
  const animControls = useRef<{ stop: () => void } | null>(null);
  const lastWheelTime = useRef(0);
  const accumulatedDelta = useRef(0);

  const w = Math.min(326, height * 0.375, width * 0.24);
  const h = w * 2.04;
  const side = Math.min(width * 0.23, 306);

  // 核心平滑切换函数：立即起步，自然减速，准确停住
  const goToPhase = useCallback((target: number, duration = 0.62) => {
    target = Math.max(0, Math.min(8, target));
    if (animControls.current) {
      animControls.current.stop();
    }

    phaseRef.current = target;
    setPhase(target);
    const targetChapter = Math.max(0, Math.min(3, target - 5));
    setChapter(targetChapter);

    const targetP = PHASE_PROGRESS[target];

    // 同步到 DOM 属性，便于 Navbar 读取 tone
    if (ref.current) {
      ref.current.dataset.phase = String(target);
      const tone = target === 0 ? 'hero' : target >= 5 ? 'night' : 'paper';
      ref.current.dataset.tone = tone;
      window.dispatchEvent(new CustomEvent('story-phase-change', { detail: { phase: target, tone } }));
    }

    // 采用专业高精度减速曲线 [0.16, 1, 0.3, 1]
    animControls.current = animate(p, targetP, {
      duration,
      ease: [0.16, 1, 0.3, 1]
    });
  }, [p]);

  // 滚轮交互拦截与分镜推进
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // 只有当页面在顶部（叙事区内）时才拦截
      const scrollY = window.scrollY;
      const isAtTop = scrollY <= 15;

      if (!isAtTop) {
        // 用户已经滚动到多机画册或下方内容
        // 如果向上滚动且已回到了顶部，重新激活第8分镜
        if (scrollY <= 15 && e.deltaY < 0) {
          goToPhase(8);
        }
        return;
      }

      const now = Date.now();
      const dt = now - lastWheelTime.current;
      const delta = e.deltaY;

      // 惯性抑制与快速连滚保护
      if (dt < 460) {
        // 允许中途反向立即生效
        const isReverse = (accumulatedDelta.current > 0 && delta < -18) || (accumulatedDelta.current < 0 && delta > 18);
        if (isReverse) {
          accumulatedDelta.current = delta;
          lastWheelTime.current = now;
          if (delta > 0 && phaseRef.current < 8) {
            e.preventDefault();
            goToPhase(phaseRef.current + 1);
          } else if (delta < 0 && phaseRef.current > 0) {
            e.preventDefault();
            goToPhase(phaseRef.current - 1);
          }
          return;
        }

        // 同方向的惯性余量只算一次，阻止页面跳动
        if ((delta > 0 && phaseRef.current < 8) || (delta < 0 && phaseRef.current > 0)) {
          e.preventDefault();
        }
        return;
      }

      // 过滤轻微触控漂移
      if (Math.abs(delta) < 16) {
        return;
      }

      if (delta > 0) {
        // 向下滚动一格
        if (phaseRef.current < 8) {
          e.preventDefault();
          accumulatedDelta.current = delta;
          lastWheelTime.current = now;
          goToPhase(phaseRef.current + 1);
        } else {
          // 在第8分镜向下滚动：平滑离开叙事区，进入七机画册
          const nextSec = document.getElementById('multi-devices');
          if (nextSec) {
            e.preventDefault();
            nextSec.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else if (delta < 0) {
        // 向上滚动一格
        if (phaseRef.current > 0) {
          e.preventDefault();
          accumulatedDelta.current = delta;
          lastWheelTime.current = now;
          goToPhase(phaseRef.current - 1);
        }
      }
    };

    // 键盘支持
    const handleKeyDown = (e: KeyboardEvent) => {
      if (window.scrollY > 15) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (phaseRef.current < 8) {
          e.preventDefault();
          goToPhase(phaseRef.current + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (phaseRef.current > 0) {
          e.preventDefault();
          goToPhase(phaseRef.current - 1);
        }
      }
    };

    // 监听全局滚动，当用户从下方平滑回到顶部时恢复
    const handleScroll = () => {
      if (window.scrollY <= 5 && phaseRef.current === 8) {
        // 维持在第8分镜
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [goToPhase]);

  // ── 关键动效映射 ──
  // 1. 手机位置与旋转
  const x = useTransform(p,
    [0,   0.04, 0.16,  0.28,  0.38,       0.48,       0.58, 1.0],
    [0,   0,    -side, -side, -side + 32, -side + 32, side, side]
  );
  const y = useTransform(p,
    [0,                       0.04,                    0.16, 0.48, 0.58, 1.0],
    [height * 0.12 + h * 0.5, height * 0.12 + h * 0.5, 25,   25,   20,   20]
  );
  const rotateX = useTransform(p, [0, 0.04, 0.16], [18, 18, 0]);
  const rotateY = useTransform(p, [0, 0.16, 0.48, 0.58, 1.0], [0, 6, 4, -6, -6]);
  const phoneScale = useTransform(p, [0, 0.16, 0.48, 0.58, 1.0], [1.06, 1, 1, 1, 1]);

  // 2. 背景颜色：首屏与规划区为暖沙白(#fcfaf6)，Phase 5 之后进入灰蓝暗夜(#293e42)
  const background = useTransform(p,
    [0,         0.48,      0.58,      1.0],
    ['#fcfaf6', '#fcfaf6', '#293e42', '#293e42']
  );

  // 3. 首页退场：在 p 从 0 到 0.07 之间迅速退净，绝无虚影
  const heroOpacity = useTransform(p, [0, 0.06], [1, 0]);
  const heroY = useTransform(p, [0, 0.08], [0, -60]);

  // 4. 右侧规划内容出现：在 p=0.08 开始淡入，p=0.14 完全就位，同第一次下滚结束时组成完整画面
  const planOpacity = useTransform(p, [0.08, 0.14, 0.50, 0.56], [0, 1, 1, 0]);

  // 5. 旅途影像区出现（Phase 5~8）
  const filmOpacity = useTransform(p, [0.52, 0.58], [0, 1]);

  return (
    <section
      className="scroll-story"
      id="story"
      ref={ref}
      aria-label="旅游规划与旅途影像互动展示"
      data-phase={phase}
      data-tone={phase === 0 ? 'hero' : phase >= 5 ? 'night' : 'paper'}
      style={{ height: '100svh', minHeight: '620px', position: 'relative' }}
    >
      {/* 锚点支持外部跳转 */}
      <div id="datong-route" className="story-anchor" style={{ top: '0%' }} />
      <div id="cultural-track" className="story-anchor" style={{ top: '0%' }} />

      <motion.div
        className="story-stage"
        style={{
          backgroundColor: background,
          height: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* 首页背景图：在转场前段彻底退净 */}
        <motion.div
          className="hero-background"
          style={{ opacity: heroOpacity, pointerEvents: phase === 0 ? 'auto' : 'none' }}
        >
          <img src={pictures.hero} alt="树木环绕的古城与寺庙" />
          <div />
        </motion.div>

        {/* 首页文字与操作按钮 */}
        <motion.div
          className="hero-content"
          style={{
            opacity: heroOpacity,
            y: heroY,
            pointerEvents: phase === 0 ? 'auto' : 'none'
          }}
          aria-hidden={phase !== 0}
          inert={phase !== 0}
        >
          <HeroCopy onExperience={onExperience} onStart={() => goToPhase(1)} />
        </motion.div>

        {/* 规划区（右侧内容）：与手机到达左侧同步显现 */}
        <motion.div
          className="story-planning"
          style={{
            opacity: planOpacity,
            pointerEvents: phase >= 1 && phase < 5 ? 'auto' : 'none'
          }}
          aria-hidden={phase < 1 || phase >= 5}
        >
          <span className="section-label">
            <span className="font-mono tracking-wider">TRIP OVERVIEW</span> · 在路上，自有安排
          </span>
          <h2 className="section-title">
            规划你的<br />下一次探索
          </h2>
          <p className="section-description">
            从想去的地方，到沿途的小事，<br />让每一次出发，都多一点期待。
          </p>
          <div className="plan-list">
            {plans.map((item, i) => {
              const Icon = item.icon;
              // 分步高亮已出现的内容：已出现的内容保留
              const isRevealed = phase >= 1;
              const isHighlighted = (phase === 1 && i === 0) || (phase === 2 && i === 0) || (phase === 3 && i <= 1) || (phase === 4);
              return (
                <div className="plan-mask" key={item.title}>
                  <motion.div
                    className="plan-line"
                    animate={{
                      opacity: isRevealed ? (isHighlighted ? 1 : 0.6) : 0,
                      y: isRevealed ? 0 : 25,
                      scale: isHighlighted ? 1.02 : 1
                    }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    <span className="plan-icon"><Icon /></span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 影像区（左侧内容，暗夜场景）：四次滚动展示四组视频短片与文案 */}
        <motion.div
          className="story-films"
          style={{
            opacity: filmOpacity,
            pointerEvents: phase >= 5 ? 'auto' : 'none'
          }}
          aria-hidden={phase < 5}
          inert={phase < 5}
        >
          <span className="section-label" style={{ color: '#34D399' }}>
            <span className="font-mono tracking-wider">TRAVEL TRACKER</span> · 影像追迹
          </span>
          <h2 className="section-title">
            走过的路，<br />总有故事留下。
          </h2>

          <div className="chapter-copy" key={chapter}>
            <span>{chapters[chapter].location}</span>
            <h3>{chapters[chapter].title}</h3>
            <p>{chapters[chapter].text}</p>
          </div>

          <div className="chapter-tabs" aria-label="选择旅途短片">
            {chapters.map((c, i) => (
              <button
                key={c.title}
                onClick={() => goToPhase(5 + i)}
                aria-current={chapter === i ? 'step' : undefined}
                tabIndex={phase >= 5 ? 0 : -1}
              >
                <i />
                <span>{['石窟', '街巷', '悬空寺', '山野'][i]}</span>
              </button>
            ))}
          </div>
          <p className="film-note">
            {phase < 8 ? '继续向下滚动，翻到下一段旅途。' : '再向下滑动，开启实体旅行画册 ↓'}
          </p>
        </motion.div>

        {/* 核心手机模型容器：在全页面沿用同一台手机外壳平滑位移 */}
        <motion.div
          className="story-phone-position"
          style={{
            width: w,
            height: h,
            marginLeft: -w / 2,
            marginTop: -h / 2,
            x,
            y,
            scale: phoneScale,
            rotateX,
            rotateY,
            transformPerspective: 1400
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Phone progress={p} phase={phase} chapter={chapter} />
          {[0, 1, 2].map(i => <FloatingNote key={i} p={p} index={i} />)}
        </motion.div>

        {/* 底部鼠标滚动引导提示 */}
        <div className={'story-guide ' + (phase === 0 || phase >= 5 ? 'is-white' : '')}>
          <Mouse size={16} />
          <span>
            {phase === 0
              ? '拨动滚轮，开启探索'
              : phase >= 5
              ? (phase === 8 ? '继续下滚，进入画册' : '拨动滚轮，故事继续')
              : '拨动滚轮，展开下一段'}
          </span>
        </div>

        {/* 右侧离散分镜导航点（点击可精准跳转） */}
        <nav
          className={'story-stepper ' + (phase === 0 || phase >= 5 ? 'is-white' : '')}
          aria-label="互动故事分镜导航"
        >
          {PHASE_PROGRESS.map((_, i) => (
            <button
              key={i}
              className={phase === i ? 'active' : ''}
              title={STEP_LABELS[i]}
              aria-label={STEP_LABELS[i]}
              onClick={() => goToPhase(i)}
            >
              <i />
              <span className="stepper-tooltip">{STEP_LABELS[i]}</span>
            </button>
          ))}
        </nav>
      </motion.div>
    </section>
  );
}
