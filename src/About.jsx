import { useEffect, useRef } from "react";


export default function About(){
const aboutRef = useRef(null);


useEffect(()=>{

const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.2
}

);


if(aboutRef.current){

observer.observe(aboutRef.current);

}


return()=>observer.disconnect();


},[]);
return(

<section 
id="about"
className="about"
ref={aboutRef}
>

<div className="about-content">



<div className="profile-title animate">
PROFILE
</div>


<div className="about-top">


{/* 左边头像区域 */}

<div className="profile-card animate">

<div className="avatar">

<img 
src={`${import.meta.env.BASE_URL}about-zhaop.webp`}
alt="陈贞坤头像"
/>

</div>



<h3>
陈贞坤
</h3>

</div>



{/* 右边介绍 */}

<div className="intro-card animate delay1">


<h1>

新媒体运营、设计
<br/>
缔造清晰、可执行的视觉结果。

</h1>


<p>

拥有数字媒体运营经验，
覆盖品牌设计、视频拍摄及制作、
摄影以及AI内容生产。
<br/>
多维度复合型人才，学习能力极强
<br/><br/>

本网站全部内容均为AI生成。

</p>

利用AI独立完成网站搭建项目，独立完成微信小程序游戏搭建。

<br/>

广东工贸职业技术学院22届数字媒体技术&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☎ 13143267361

&nbsp;&nbsp;
&nbsp;
✉ 2356458873@qq.com


<div className="contact">




</div>





</div>



</div>




<div className="stats animate delay2">


<div>
<h2>1年+</h2>
<p>工作经验</p>
</div>


<div>
<h2>60W+</h2>
<p>双账号累计获赞<br/>个人小红书账号获赞1W</p>

</div>


<div>
<h2>AI</h2>
<p>内容创作</p>
</div>


<div>
<h2>涨粉5W+</h2>
<p>双账号蓝V自然流累计涨粉</p>
</div>


</div>

</div>

</section>


)


}
