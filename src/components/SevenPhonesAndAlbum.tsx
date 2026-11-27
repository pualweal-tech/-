import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useTransform, type MotionValue } from 'framer-motion';
import { useSectionProgress } from '../useSectionProgress';
import './album.css';

const PLACES = [
  { name: '石窟里的光', place: '石窟 · 岩壁', image: '04c7fad501674580f9f550c41b74edd1.jpg' },
  { name: '穿过千年', place: '洞窟 · 造像', image: '0adb3ed794717f2ecd8f0e73e4ca133b.jpg' },
  { name: '与山河对望', place: '石佛 · 远望', image: '7e7df3e93e9a4d40416f15fe6a98ae50.jpg' },
  { name: '走进日常', place: '大同 · 街巷', image: '84e084592a54d881434fe6b0d54ecc81.jpg' },
  { name: '悬在云间', place: '浑源 · 悬空寺', image: 'd15c1154e6281c8cfd0d8c5f377b2079.jpg' },
  { name: '木构的回声', place: '应县 · 木塔', image: 'de83d06987cf6438c5facd6262292d23.jpg' },
  { name: '抬头的一瞬', place: '浑源 · 悬空寺', image: 'fa21f951c2e4ef5d244fa69c3dacfa71.jpg' },
];
const MEMORIES = [
  { title: '山野里的自由', note: '把脚步交给远方', image: '33c949a8d9d45a62b67c26044f40447f.jpg' },
  { title: '也把自己拍进风景', note: '这一刻，我在这里', image: '1c08f1e95b744f7a92fa102930aafad2.jpg' },
  { title: '同行的人', note: '一起走过的，才叫回忆', image: '36d35630d1bcfdda88402a8be74f7a98.jpg' },
  { title: '向雪山出发', note: '留住冬天，也留住笑容', image: '5e9f31e69989056d7d2f5ef388f6fa9c.jpg' },
];
type Memory = typeof MEMORIES[number];
type Size = { width: number; height: number };

function useAnimatedAlbum() {
  const [enabled, setEnabled] = useState(() => typeof window !== 'undefined' && window.matchMedia('(min-width: 900px) and (prefers-reduced-motion: no-preference)').matches);
  useEffect(() => {
    const query = window.matchMedia('(min-width: 900px) and (prefers-reduced-motion: no-preference)');
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return enabled;
}

function TravelingPhone({ index, progress, size, animated }: { index: number; progress: MotionValue<number>; size: Size; animated: boolean }) {
  const place = PLACES[index];
  const spread = [-0.405, -0.27, -0.135, 0, 0.135, 0.27, 0.405][index];
  const lift = [12, -24, 5, -40, 0, -20, 16][index];
  const tilt = [-10, -6, -3, 0, 4, 7, 11][index];
  const x = useTransform(progress, [0, 0.18, 0.4, 0.7, 1], [0, size.width * spread, size.width * spread, (index - 3) * 49, (index - 3) * 49]);
  const y = useTransform(progress, [0, 0.18, 0.4, 0.7, 1], [20, lift, lift, size.height * 0.24 + 52, size.height * 0.24 + 52]);
  const rotate = useTransform(progress, [0, 0.18, 0.4, 0.7, 1], [(index - 3) * 2, tilt, tilt, 0, 0]);
  const scale = useTransform(progress, [0, 0.18, 0.4, 0.7, 1], [index === 3 ? 1.16 : 1.02, 1, 1, 0.22, 0.22]);
  const opacity = useTransform(progress, [0, 0.07, 0.12, 0.69, 0.77, 1], [index === 3 ? 1 : 0, index === 3 ? 1 : 0, 1, 1, 0, 0]);
  return <motion.div className="album-device" style={animated ? { x, y, rotate, scale, opacity, zIndex: index === 3 ? 12 : 8 - Math.abs(index - 3) } : undefined}>
    <div className="album-device-drift" style={{ animationDelay: `${index * -0.7}s` }}><div className="album-device-frame"><div className="album-device-screen">
      <img src={`./assets/${place.image}`} alt={place.place} loading="lazy" />
      <span className="album-device-island" aria-hidden="true" /><span className="album-device-time" aria-hidden="true">09:41</span><span className="album-device-brand">屿间</span>
      <div className="album-device-caption"><span>{place.place}</span><strong>{place.name}</strong></div><span className="album-device-home" aria-hidden="true" />
    </div></div></div>
  </motion.div>;
}

function MemoryCard({ index, progress, size, animated, revealed, onOpen }: { index: number; progress: MotionValue<number>; size: Size; animated: boolean; revealed: boolean; onOpen: (memory: Memory, button: HTMLButtonElement) => void }) {
  const memory = MEMORIES[index];
  const start = 0.69 + index * 0.04;
  const endX = size.width * [-0.3, -0.1, 0.1, 0.3][index];
  const endY = [-64, -108, -114, -70][index];
  const endRotate = [-9, -4, 5, 10][index];
  const x = useTransform(progress, [0, start, start + 0.09, 1], [0, 0, endX, endX]);
  const y = useTransform(progress, [0, start, start + 0.09, 1], [55, 55, endY, endY]);
  const rotate = useTransform(progress, [0, start, start + 0.09, 1], [0, 0, endRotate, endRotate]);
  const scale = useTransform(progress, [0, start, start + 0.09, 1], [0.25, 0.25, 1, 1]);
  const opacity = useTransform(progress, [0, start, start + 0.04, 1], [0, 0, 1, 1]);
  return <motion.div className="album-memory" style={animated ? { x, y, rotate, scale, opacity, pointerEvents: revealed ? 'auto' : 'none' } : undefined} aria-hidden={!revealed} inert={!revealed}>
    <button className="album-memory-button" type="button" tabIndex={revealed ? 0 : -1} onClick={event => onOpen(memory, event.currentTarget)} aria-label={`查看大图：${memory.title}`}>
      <img src={`./assets/${memory.image}`} alt={memory.title} loading="lazy" /><span className="album-memory-title">{memory.title}</span><span className="album-memory-note">{memory.note}</span><span className="album-memory-corner" aria-hidden="true">＋</span>
    </button>
  </motion.div>;
}

export const SevenPhonesAndAlbum: React.FC = () => {
  const section = useRef<HTMLElement>(null);
  const scene = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const [selected, setSelected] = useState<Memory | null>(null);
  const [size, setSize] = useState<Size>({ width: 1100, height: 540 });
  const [revealedCount, setRevealedCount] = useState(0);
  const animated = useAnimatedAlbum();
  const scrollYProgress = useSectionProgress(section);
  const bookOpacity = useTransform(scrollYProgress, [0, 0.32, 0.5, 1], [0, 0, 1, 1]);
  const bookY = useTransform(scrollYProgress, [0, 0.32, 0.55, 1], [70, 70, 0, 0]);
  const bookScale = useTransform(scrollYProgress, [0, 0.32, 0.55, 1], [0.88, 0.88, 1, 1]);
  const printsOpacity = useTransform(scrollYProgress, [0, 0.66, 0.77, 1], [0, 0, 1, 1]);
  const firstCaption = useTransform(scrollYProgress, [0, 0.4, 0.52, 1], [1, 1, 0, 0]);
  const secondCaption = useTransform(scrollYProgress, [0, 0.44, 0.58, 1], [0, 0, 1, 1]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  useEffect(() => {
    const element = scene.current;
    if (!element) return;
    const resize = () => setSize({ width: element.clientWidth, height: element.clientHeight });
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  useMotionValueEvent(scrollYProgress, 'change', value => {
    const count = MEMORIES.filter((_, index) => value >= 0.73 + index * 0.04).length;
    setRevealedCount(previous => previous === count ? previous : count);
  });
  useEffect(() => {
    if (!selected) return;
    if (dialog.current && !dialog.current.open) dialog.current.showModal();
    const previous = document.body.style.overflow; document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [selected]);
  function openMemory(memory: Memory, button: HTMLButtonElement) { trigger.current = button; setSelected(memory); }
  function restoreFocus() { setSelected(null); trigger.current?.focus({ preventScroll: true }); }
  return <section ref={section} id="multi-devices" className={`album-section${animated ? ' album-animated' : ' album-static'}`} aria-labelledby="album-heading">
    <span id={animated ? 'travel-book' : undefined} className="album-scroll-anchor" aria-hidden="true" />
    <div className="album-stage">
      <header className="album-header"><span className="album-eyebrow"><span />旅途，值得好好收藏</span><h2 id="album-heading">散落在路上的，<br className="album-mobile-break" />汇成一本旅行。</h2><div className="album-description"><motion.p style={animated ? { opacity: firstCaption } : undefined}>七段行迹，各有风景。把沿途的每一次心动，留在屿间。</motion.p>{animated && <motion.p className="album-description-later" style={{ opacity: secondCaption }}>照片回到纸页，回忆有了形状。点开一张照片，重温那时的自己。</motion.p>}</div></header>
      <div ref={scene} className="album-scene">
        <div className="album-phone-deck" aria-label="七段旅行记录">{PLACES.map((place, index) => <TravelingPhone key={place.image} index={index} progress={scrollYProgress} size={size} animated={animated} />)}</div>
        <motion.article id={animated ? undefined : 'travel-book'} className="album-book" style={animated ? { opacity: bookOpacity, y: bookY, scale: bookScale } : undefined} aria-label="打开的纸质旅行画册">
          <div className="album-book-cover"><div className="album-book-pages"><div className="album-page album-page-left"><span className="album-page-kicker">屿间 · 旅行手记</span><h3>这一程，<br />有山河，也有我们。</h3><p>从一张照片，到一段故事。<br />让走过的路，成为翻得开的回忆。</p><motion.div className="album-printed-photos" style={animated ? { opacity: printsOpacity } : undefined}>{PLACES.slice(0, 4).map(place => <img key={place.image} src={`./assets/${place.image}`} alt="" loading="lazy" />)}</motion.div><span className="album-page-number">— 01 —</span></div><div className="album-page album-page-right"><span className="album-page-kicker">我的旅途收藏</span><motion.div className="album-printed-photos album-printed-right" style={animated ? { opacity: printsOpacity } : undefined}>{PLACES.slice(4).map(place => <img key={place.image} src={`./assets/${place.image}`} alt="" loading="lazy" />)}</motion.div><p className="album-handwritten">风景会远去，<br />而这一刻会留下。</p><span className="album-page-number">— 02 —</span></div></div><span className="album-book-ribbon" aria-hidden="true" /></div>
        </motion.article>
        <div className="album-memories" aria-label="旅途中的我们">{MEMORIES.map((memory, index) => <MemoryCard key={memory.image} index={index} progress={scrollYProgress} size={size} animated={animated} revealed={!animated || revealedCount > index} onOpen={openMemory} />)}</div>
      </div>
      <div className="album-bottom"><span>收藏沿途风景</span><div className="album-progress" aria-hidden="true"><motion.span style={animated ? { scaleX: lineScale } : undefined} /></div><span>重温旅行的我们</span></div>
    </div>
    <dialog ref={dialog} className="album-dialog" aria-labelledby="album-dialog-title" onClose={restoreFocus} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}><div className="album-dialog-content"><button className="album-dialog-close" type="button" onClick={() => dialog.current?.close()} aria-label="关闭照片" autoFocus>×</button>{selected && <><img className="album-dialog-image" src={`./assets/${selected.image}`} alt={selected.title} /><div className="album-dialog-caption"><h3 id="album-dialog-title">{selected.title}</h3><p>{selected.note}</p></div></>}</div></dialog>
  </section>;
};
