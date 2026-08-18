import { useState } from "react";


export default function Photo(){


const images=[

`${import.meta.env.BASE_URL}zp1.webp`,
`${import.meta.env.BASE_URL}zp2.webp`,
`${import.meta.env.BASE_URL}zp3.webp`,
`${import.meta.env.BASE_URL}zp4.webp`,
`${import.meta.env.BASE_URL}zp5.webp`,
`${import.meta.env.BASE_URL}zp6.webp`

];


const [active,setActive]=useState(0);



const prev=()=>{

setActive(
(active-1+images.length)%images.length
);

};



const next=()=>{

setActive(
(active+1)%images.length
);

};



return(

<section
id="photo"
className="photo"
>


<div className="photo-content">


<div className="section-title">

PHOTO

</div>



<h1>

摄影作品

</h1>




<div className="carousel">



<button
className="arrow left"
onClick={prev}
>

‹

</button>




<div className="photo-track">


{
images.map((img,index)=>{

const position=(index-active+images.length)%images.length;
const visible=position===0 || position===1 || position===images.length-1;

if(!visible) return null;

return(
<div
key={index}
className={`photo-slide ${position===0?"active":""} ${position===1?"right":""} ${position===images.length-1?"left":""}`}
onClick={()=>setActive(index)}
>
<img src={img} loading={position===0?"eager":"lazy"} decoding="async" alt={`摄影作品 ${index+1}`} />
</div>
)
})
}



</div>




<button

className="arrow right-arrow"

onClick={next}

>

›

</button>



</div>



</div>


</section>


)

}