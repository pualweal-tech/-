import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar({ onExperience }: { onExperience: () => void }) {
  const menuButton = useRef<HTMLButtonElement>(null);
  const [menu, setMenu] = useState(false);
  const [tone, setTone] = useState<'hero' | 'paper' | 'night'>('hero');

  useEffect(() => {
    // 监听叙事区自定义分镜变化事件
    const handlePhaseChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ phase: number; tone: 'hero' | 'paper' | 'night' }>;
      if (window.scrollY <= 20) {
        setTone(customEvent.detail.tone);
      }
    };
    window.addEventListener('story-phase-change', handlePhaseChange);

    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const story = document.getElementById('story');
        if (!story) return;

        const scrollY = window.scrollY;
        // 如果在叙事区内部（顶部）
        if (scrollY <= 20) {
          const storyTone = (story.dataset.tone as 'hero' | 'paper' | 'night') || 'hero';
          setTone(storyTone);
        } else {
          // 离开了叙事区，进入七机画册或关于页面
          setTone('paper');
        }
      });
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('story-phase-change', handlePhaseChange);
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    if (!menu) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenu(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [menu]);

  const handleNavClick = (id: string) => {
    setMenu(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (id === 'datong-route') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // 触发分镜 1 (路线规划)
      const story = document.getElementById('story');
      if (story) {
        const dot = story.querySelector<HTMLButtonElement>('.story-stepper button:nth-child(2)');
        dot?.click();
      }
      return;
    }
    if (id === 'cultural-track') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // 触发分镜 5 (暗夜旅途追迹)
      const story = document.getElementById('story');
      if (story) {
        const dot = story.querySelector<HTMLButtonElement>('.story-stepper button:nth-child(6)');
        dot?.click();
      }
      return;
    }
    if (id === 'travel-book') {
      const el = document.getElementById('multi-devices');
      el?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (id === 'details') {
      const el = document.getElementById('details');
      el?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
  };

  return (
    <header className={'site-header tone-' + tone}>
      <div className="nav-wrap">
        <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); handleNavClick('top'); }} aria-label="屿间，返回首页">
          <img src="./assets/sail.svg" alt="" />
          <span>屿间</span>
        </a>

        <nav id="main-navigation" aria-label="主要导航" className={menu ? 'nav-links is-open' : 'nav-links'}>
          {[
            ['datong-route', '旅行计划'],
            ['cultural-track', '旅途追迹'],
            ['travel-book', '旅行画册'],
            ['details', '关于屿间']
          ].map(([id, name]) => (
            <a
              key={id}
              href={'#' + id}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(id);
              }}
            >
              {name}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="button button-small" onClick={onExperience}>
            体验屿间
          </button>
          <button
            ref={menuButton}
            className="menu-toggle"
            aria-label={menu ? '关闭导航' : '打开导航'}
            aria-controls="main-navigation"
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
