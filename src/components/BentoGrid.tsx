import { useEffect, useRef, useState } from 'react';
import { BatteryCharging, Compass, Globe, Hand, LockKeyhole, ShieldCheck, Users, WifiOff, Zap } from 'lucide-react';
import './Details.css';

type Privacy = 'public' | 'friends' | 'private';
const privacyOptions = [
  { value: 'public' as const, label: '公开', icon: Globe, title: '把沿途的发现，分享给更多人。', description: '所有人都能看见这段旅程，认识与你有同样兴趣的旅行者。' },
  { value: 'friends' as const, label: '仅好友', icon: Users, title: '让熟悉的人，陪你一起在路上。', description: '只有你的好友能看见这段旅程，让关心的人知道你的近况。' },
  { value: 'private' as const, label: '仅自己', icon: LockKeyhole, title: '留一段只属于自己的旅行。', description: '这段旅程只对你可见。什么时候分享、分享给谁，都由你决定。' },
];
const selections = [
  { image: './assets/04c7fad501674580f9f550c41b74edd1.jpg', alt: '岩壁上层叠的石窟与造像', tag: '石窟寻迹', title: '在石壁之间，读一段时间', text: '抬头看一眼造像，也记下此刻照进来的光。' },
  { image: './assets/84e084592a54d881434fe6b0d54ecc81.jpg', alt: '古城街巷尽头的楼阁', tag: '街巷漫游', title: '往老街里，再走一会儿', text: '不急着奔向下一站，街角也有值得停留的日常。' },
  { image: './assets/de83d06987cf6438c5facd6262292d23.jpg', alt: '应县木塔的层层飞檐', tag: '古建慢看', title: '把目光，留给一座木塔', text: '看飞檐与木构，也看一个地方延续至今的生活。' },
];

export function BentoGrid() {
  const [privacy, setPrivacy] = useState<Privacy>('private');
  const [charging, setCharging] = useState(false);
  const batteryRef = useRef<HTMLElement>(null);
  const selected = privacyOptions.find(option => option.value === privacy)!;
  const SelectedIcon = selected.icon;
  useEffect(() => {
    const node = batteryRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') { setCharging(true); return; }
    const observer = new IntersectionObserver(([entry]) => setCharging(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <section id="details" className="details-section" aria-labelledby="details-title">
      <div className="details-container">
        <header className="details-heading">
          <p className="details-eyebrow">安心出发，尽兴而归</p>
          <h2 id="details-title">旅途里的小事，<br className="details-mobile-break" />也被认真照顾</h2>
          <p>把复杂留在身后，把注意力留给眼前的风景。</p>
        </header>
        <div className="details-grid">
          <article className="details-card details-privacy" aria-labelledby="privacy-title">
            <div className="details-privacy-intro">
              <span className="details-card-label"><ShieldCheck size={18} aria-hidden="true" /> 分享由你决定</span>
              <h3 id="privacy-title">旅程的可见范围，<br />你说了算。</h3>
              <p>一段路线、一张照片、一则心情，<br />可以分享，也可以好好收藏。</p>
            </div>
            <div className="details-privacy-controls">
              <div className="details-privacy-options" role="group" aria-label="选择旅程可见范围">
                {privacyOptions.map(option => {
                  const Icon = option.icon;
                  return <button key={option.value} type="button" aria-pressed={privacy === option.value} onClick={() => setPrivacy(option.value)}><Icon size={17} aria-hidden="true" /><span>{option.label}</span></button>;
                })}
              </div>
              <div className="details-privacy-feedback" role="status" aria-live="polite" aria-atomic="true">
                <SelectedIcon size={21} aria-hidden="true" /><div><strong>{selected.title}</strong><p>{selected.description}</p></div>
              </div>
              <span className="details-preview-note">可见范围互动预览</span>
            </div>
          </article>
          <article className="details-card details-offline">
            <img src="./assets/d15c1154e6281c8cfd0d8c5f377b2079.jpg" alt="建于崖壁之间的悬空寺" loading="lazy" />
            <div className="details-offline-shade" />
            <div className="details-card-content"><span className="details-card-label"><WifiOff size={18} aria-hidden="true" /> 走远一点，也安心</span><h3>暂时离线，<br />仍然在路上。</h3><p>提前收好路线和地点，<br />山间的信号不必打乱旅行的节奏。</p></div>
          </article>
          <article ref={batteryRef} className={`details-card details-energy${charging ? ' details-is-charging' : ''}`}>
            <span className="details-card-label"><BatteryCharging size={19} aria-hidden="true" /> 轻装出行</span><h3>少一点电量焦虑，<br />多一点自在。</h3><p>让旅行记录安静地陪伴，<br />为一路上的精彩留出余量。</p>
            <div className="details-battery" aria-hidden="true"><div className="details-battery-fill" /><Zap size={38} strokeWidth={1.8} /></div>
          </article>
          <article className="details-card details-traveler"><Compass size={31} strokeWidth={1.6} aria-hidden="true" /><div><h3>因为热爱旅行，<br />所以在意每一次出发。</h3><p>走过古城、山野和街巷，也把真实的旅行感受，放进每一个细节。</p></div></article>
          <article className="details-card details-adfree"><div><span className="details-card-label">好好旅行，就好</span><h3>少一点打扰，<br />多一点沉浸。</h3><p>不把广告放进风景，让页面回到路线、照片和故事本身。</p></div><Hand size={50} strokeWidth={1.5} aria-hidden="true" /></article>
        </div>
        <div className="details-editorial" aria-labelledby="editorial-title">
          <header className="details-editorial-heading"><div><p className="details-eyebrow">下一次，不妨慢一点</p><h2 id="editorial-title">在地方，遇见生活。</h2></div><p>古迹之外，还有巷口的风，<br />和那些平常却鲜活的瞬间。</p></header>
          <div className="details-stories">{selections.map(story => <article className="details-story" key={story.title}><div className="details-story-image"><img src={story.image} alt={story.alt} loading="lazy" /></div><span>{story.tag}</span><h3>{story.title}</h3><p>{story.text}</p></article>)}</div>
        </div>
      </div>
    </section>
  );
}
