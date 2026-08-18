import { useEffect, useRef } from "react";


export default function Experience(){

const experienceRef = useRef(null);


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



if(experienceRef.current){

observer.observe(experienceRef.current);

}



return()=>observer.disconnect();


},[]);


return(

<section
id="experience"
className="experience"
ref={experienceRef}
>


<div className="experience-content">


<div className="section-title animate">
EXPERIENCE
</div>



<h1 className="animate">
工作经历
</h1>



<div className="timeline">



<div className="timeline-item animate">


<div className="year">

2025

<span>
03 - 09
</span>

</div>



<div className="experience-card animate delay1">


<h2>
广州市大猫音乐文化发展有限公司
</h2>


<h3>
数字媒体运营岗位
</h3>


<p>

负责公司公众号内容运营，
覆盖选题策划、活动摄影、
视频拍摄与后期剪辑，
参与品牌活动宣传及内容增长。

</p>


<div className="tags">

<span>
公众号
</span>

<span>
推文
</span>

<span>
图文编排
</span>

<span>
账号运营
</span>

</div>


</div>


</div>




<div className="timeline-item animate">


<div className="year">

2025

<span>
10-2026.08


</span>
</div>



<div className="experience-card animate delay2">


<h2>
广州市境遇文化发展有限公司
</h2>


<h3>
新媒体运营岗
</h3>


<p>

负责账号从0到1搭建，
进行赛道分析、竞品对标、
内容策划、宣传片拍摄及视频制作，
结合AI工具提升内容生产效率。

</p>


<div className="tags">

<span>
摄影
</span>

<span>
剪辑
</span>

<span>
AI
</span>

</div>


</div>


</div>



</div>


</div>


</section>


)

}