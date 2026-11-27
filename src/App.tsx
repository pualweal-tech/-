import {useEffect,useRef,useState} from 'react';
import {X,MapPin,BookOpen,Image} from 'lucide-react';
import {Navbar} from './components/Navbar';
import {UnifiedScrollytelling} from './components/UnifiedScrollytelling';
import {SevenPhonesAndAlbum} from './components/SevenPhonesAndAlbum';
import {BentoGrid} from './components/BentoGrid';
import {Footer} from './components/Footer';
export function App(){
 const dialog=useRef<HTMLDialogElement>(null);const[open,setOpen]=useState(false);const trigger=useRef<HTMLElement|null>(null);
 const show=()=>{trigger.current=document.activeElement as HTMLElement;setOpen(true);};
 useEffect(()=>{const d=dialog.current;if(!d)return;if(!open){if(d.open)d.close();return;}if(!d.open)d.showModal();const previous=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=previous;};},[open]);
 const close=()=>{setOpen(false);trigger.current?.focus();};
 return <><a className="skip-link" href="#details">跳到产品介绍</a><div id="top"/><Navbar onExperience={show}/><main><UnifiedScrollytelling onExperience={show}/><SevenPhonesAndAlbum/><BentoGrid/><Footer onExperience={show}/></main><dialog aria-labelledby="experience-heading" className="experience-dialog" ref={dialog} onCancel={close} onClose={close} onClick={e=>{if(e.target===dialog.current)close();}}><button className="dialog-close" aria-label="关闭体验窗口" onClick={close}><X/></button><img className="dialog-logo" src="./assets/sail.svg" alt=""/><span className="section-label">屿间 · 旅行社区</span><h2 id="experience-heading">先看看，<br/>旅途可以怎样被记住。</h2><p>欢迎体验屿间的交互原型。你可以查看旅行路线、翻看影像，或打开一册旅行记忆。</p><div className="experience-options">{[{id:'datong-route',icon:MapPin,name:'规划一段旅途',text:'大同、云冈区、浑源的三日行程'},{id:'cultural-track',icon:Image,name:'重温沿途影像',text:'翻看四段照片短片与旅行故事'},{id:'travel-book',icon:BookOpen,name:'翻开旅行画册',text:'把沿途风景与同行的人收进纸页'}].map(o=><a href={'#'+o.id} onClick={close} key={o.id}><o.icon/><span><b>{o.name}</b><small>{o.text}</small></span></a>)}</div><small className="prototype-note">当前为毕业设计演示，客户端尚未上架。</small></dialog></>;
}
export default App;
