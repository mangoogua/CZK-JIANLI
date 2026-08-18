import { useEffect, useRef, useState } from "react";

export default function ProjectShowcase(){

const showcaseRef = useRef(null);
const [active,setActive] = useState(0);

const slides=[
{
type:"image",
src:`${import.meta.env.BASE_URL}project-display/1.png`,
title:"项目展示 01",
sub:"微信小程序游戏搭建展示"
},
{
type:"image",
src:`${import.meta.env.BASE_URL}project-display/2.png`,
title:"项目展示 02",
sub:"微信小程序游戏搭建展示"
},
{
type:"image",
src:`${import.meta.env.BASE_URL}project-display/3.png`,
title:"项目展示 03",
sub:"微信小程序游戏搭建展示"
},
{
type:"image",
src:`${import.meta.env.BASE_URL}project-display/4.png`,
title:"项目展示 04",
sub:"微信小程序游戏搭建展示"
},
{
type:"image",
src:`${import.meta.env.BASE_URL}project-display/5.png`,
title:"项目展示 05",
sub:"微信小程序游戏搭建展示"
},
{
type:"text",
text:"微信小程序游戏搭建完全由AI制作，跑酷小游戏中的角色图和背景图则是利用了网络现有资源，加上AI生成动作帧以及一些ai修改和手动修改，耗时1一天，可进行正常游玩，仅作为作品集展示以及个人能力学习用。",
title:"项目说明",
sub:"AI独立完成微信小程序游戏搭建"
}
];

useEffect(()=>{

const current=showcaseRef.current;
if(!current)return;

const observer=new IntersectionObserver(
(entries)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
observer.unobserve(entry.target);
}
});
},
{threshold:0.2}
);

observer.observe(current);

return ()=>observer.disconnect();

},[]);

const changeSlide=(step)=>{
setActive((active+step+slides.length)%slides.length);
};

const current=slides[active];

return(

<section
id="project-showcase"
className="project-showcase"
ref={showcaseRef}
>

<div className="project-showcase-content">

<div className="section-title animate">
PROJECT SHOWCASE
</div>

<h1 className="animate">
项目展示
</h1>

<div className="work-video animate">

<div className="showcase-frame">

{current.type==="image" ? (
<img
className="showcase-image"
src={current.src}
alt={current.title}
/>
) : (
<div className="showcase-text">
{current.text}
</div>
)}

</div>

<div className="video-controls">
<button onClick={()=>changeSlide(-1)}>‹ 上一个</button>
<span>{active+1} / {slides.length}</span>
<button onClick={()=>changeSlide(1)}>下一个 ›</button>
</div>

<div className="video-description">

<div className="video-project-meta">
<span>PROJECT {String(active+1).padStart(2,"0")}</span>
<h2>{current.title}</h2>
<p>{current.sub}</p>
</div>

</div>

</div>

</div>

</section>

)

}
