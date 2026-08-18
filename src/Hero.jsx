import { useEffect, useState } from "react";
export default function Hero(){
const [loaded,setLoaded] = useState(false);


useEffect(()=>{

setTimeout(()=>{

setLoaded(true);

},300);


},[]);

return(
<section 
id="home"
className="hero"
>


<video
className="video"
autoPlay
loop
muted
playsInline
src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260803_192301_9231ed6b-c55c-4a48-909c-4ebe11cf2e11.mp4"
/>

<div className="overlay"></div>
<div className="page">



<nav className={loaded ? "hero-show" : ""}>


<a 
href="#home"
className="logo"
>

<span>
Mango
</span>

</a>



<div className="nav">


<div className="pill">

<a href="#about">
关于我
</a>

<a href="#experience">
工作经历
</a>

<a href="#project-showcase">
项目展示
</a>

<a href="#projects">
作品效果
</a>

<a href="#analysis">
作品解析
</a>

<a href="#photo">
摄影作品
</a>

</div>


<button className="nav-btn">
Nothing
</button>


</div>



</nav>




<main>



<div className={loaded ? "hero-show delay1" : ""}>

<h1 className="hero-title">

您好，欢迎访问我的主页

<br/>

CHEN
ZHENKUN

</h1>



<div className="email">


<button>
我的邮箱
</button>


<input
value="2356458873@qq.com"
readOnly
/>


</div>


</div>



<div className={loaded ? "cards hero-show delay2" : "cards"}>


<div className="card">


<div className="number">

60W+

</div>


<p>

蓝V账号累计获赞
<br/>
粉丝量6W+

</p>


</div>



<div className="card">

<b>
■ NEW MEDIA
</b>


<p>

2年新媒体运营经验

</p>

<p>

运用AI独立开发网站
<br/>
运用AI独立开发小程序游戏

</p>


<p>

公众号 | 拍摄 | 短视频 | 策划 | AI


</p>


</div>


</div>


</main>



</div>


</section>

)

}
