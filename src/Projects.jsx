import { useEffect, useRef, useState } from "react";

export default function Projects(){

const projectsRef = useRef(null);
const [active,setActive] = useState(0);
const [playing,setPlaying] = useState(false);
const videoRef = useRef(null);

const videos=[
"work1.mp4",
"work2.mp4",
"work3.mp4"
];

const videoInfo=[
{title:"末日世界视觉探索",sub:"AI小短片实验"},
{title:"历史人物梗创意广告",sub:"AI剧情广告实验"},
{title:"文明1028游戏广告",sub:"SLG买量视频设计"}
];

useEffect(()=>{

const current = projectsRef.current;
if(!current) return;

const observer = new IntersectionObserver(
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

useEffect(()=>{
setPlaying(false);
if(videoRef.current){
videoRef.current.pause();
videoRef.current.currentTime=0;
}
},[active]);


const changeVideo=(step)=>{
setActive((active+step+videos.length)%videos.length);
};


const handlePlay=()=>{

if(!videoRef.current)return;

if(videoRef.current.paused){
videoRef.current.play();
setPlaying(true);
}else{
videoRef.current.pause();
setPlaying(false);
}

};


return(

<section
id="projects"
className="projects"
ref={projectsRef}
>

<div className="projects-content">

<div className="section-title animate">
PROJECTS
</div>

<h1 className="animate">
作品效果
</h1>

<div className="work-video animate">

<div className="video-frame">

<video
className="showcase-video"
ref={videoRef}
src={`${import.meta.env.BASE_URL}video/${videos[active]}`}
preload="none"
playsInline
onClick={handlePlay}
onPause={()=>setPlaying(false)}
/>

{!playing && (
<div className="play-cover" onClick={handlePlay}>
<div className="play-button">▶</div>
<p>点击观看作品</p>
</div>
)}

</div>

<div className="video-controls">
<button onClick={()=>changeVideo(-1)}>‹ 上一个</button>
<span>{active+1} / {videos.length}</span>
<button onClick={()=>changeVideo(1)}>下一个 ›</button>
</div>

<div className="video-description">

<div className="video-project-meta">
<span>PROJECT {String(active+1).padStart(2,"0")}</span>
<h2>{videoInfo[active].title}</h2>
<p>{videoInfo[active].sub}</p>
</div>

<a className="analysis-link" href="#analysis">查看作品解析 →</a>

</div>

</div>

</div>

</section>

)

}
