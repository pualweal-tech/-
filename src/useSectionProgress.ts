import {RefObject,useEffect} from 'react';
import {useMotionValue} from 'framer-motion';
/** One native scroll source for all transforms; no wheel interception or browser scroll timelines. */
export function useSectionProgress(ref:RefObject<HTMLElement|null>){
 const progress=useMotionValue(0);
 useEffect(()=>{
  let frame=0;
  const measure=()=>{const el=ref.current;if(!el)return;const rect=el.getBoundingClientRect();const distance=el.offsetHeight-window.innerHeight;progress.set(distance>0?Math.max(0,Math.min(1,-rect.top/distance)):0);};
  const queue=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(measure);};
  const observer=new ResizeObserver(queue);if(ref.current)observer.observe(ref.current);
  window.addEventListener('scroll',queue,{passive:true});window.addEventListener('resize',queue);measure();
  return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('scroll',queue);window.removeEventListener('resize',queue);};
 },[ref,progress]);
 return progress;
}
