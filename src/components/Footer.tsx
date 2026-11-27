import { Compass, Map, Plus } from 'lucide-react';
import './Details.css';

type FooterProps = { onExperience: () => void };

export function Footer({ onExperience }: FooterProps) {
  return (
    <footer className="footer-section">
      <div className="footer-cta">
        <svg className="footer-route-art" viewBox="0 0 1200 420" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-40 300C150 140 260 420 450 265S670 90 820 155s180 5 440-120" />
          <circle cx="450" cy="265" r="6" /><circle cx="820" cy="155" r="6" />
        </svg>
        <div className="footer-cta-content">
          <span className="footer-eyebrow">好风景，也值得被好好记住</span>
          <h2>下一段旅途，<br />从这里开始。</h2>
          <p>从一条路线出发，让沿途的地方、人物与故事，<br className="footer-desktop-break" />成为属于你的旅行记忆。</p>
          <div className="footer-actions">
            <button type="button" className="footer-primary" onClick={onExperience}><Compass size={19} aria-hidden="true" /> 体验屿间</button>
            <a href="#datong-route" className="footer-secondary"><Map size={19} aria-hidden="true" /> 看看大同路线</a>
          </div>
        </div>
      </div>
      <div className="footer-base">
        <div className="footer-main">
          <div className="footer-brand-block">
            <a href="#top" className="footer-brand" aria-label="屿间，返回页面顶部"><img src="./assets/sail.svg" alt="" /><span>屿间</span></a>
            <p>在路上，遇见生活。</p>
          </div>
          <nav className="footer-nav" aria-label="页脚导航">
            <h3>发现屿间</h3>
            <a href="#datong-route">规划一段旅程</a>
            <a href="#cultural-track">记录沿途故事</a>
            <a href="#travel-book">收藏旅行记忆</a>
            <a href="#details">了解贴心细节</a>
          </nav>
          <div className="footer-help">
            <h3>你可能想知道</h3>
            <details><summary>这个页面可以体验什么？<Plus size={17} aria-hidden="true" /></summary><p>向下滚动，体验路线规划、旅途影像与旅行画册的交互展示；也可以通过导航直接前往各个章节。</p></details>
            <details><summary>现在可以安装应用吗？<Plus size={17} aria-hidden="true" /></summary><p>应用仍在设计与完善中。你可以先点击“体验屿间”查看当前展示内容，正式安装入口尚未开放。</p></details>
            <details><summary>这里的路线可以直接导航吗？<Plus size={17} aria-hidden="true" /></summary><p>页面中的大同路线用于展示行程规划的方式。实际出行前，请再确认景点开放信息和交通安排。</p></details>
          </div>
        </div>
        <div className="footer-bottom"><p>© 2026 屿间 · 旅行社区毕业设计</p><a href="#top">回到顶部</a></div>
      </div>
    </footer>
  );
}
