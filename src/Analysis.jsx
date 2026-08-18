import { useState } from "react";

export default function Analysis(){

const pages=[
{
 title:"AI视频实验解析",
 subtitle:"末日世界视觉观探索",
 type:"AI SHORT FILM EXPERIMENT",
 blocks:[
 {title:"项目定位",text:"AI小短片实验——末日世界视觉观探索——尝试AI模型生成氛围能力边界"},
 {title:"面临困难",text:"AI限制 → 人物一致性 → 环境复杂性 → 细节真实性 → 大环境氛围"},
 {title:"处理方法",text:"GPT辅助完善想法 → 世界观设计确定 → GPT脚本制作 → 分镜制作 → 限定词生成 → AI生成视频初稿 → 修改完善生成内容、修改、添加限定词 → 最终生成 → 剪辑包装"}
 ]
},
{
 title:"文明1028 游戏买量广告分析",
 subtitle:"历史策略题材 AI广告创作案例",
 type:"GAME ADVERTISING CASE",
 blocks:[
 {title:"项目定位",text:"15秒短视频广告，吸引SLG、历史游戏题材用户，尤其是PC端《文明6》《钢铁雄心》等策略游戏玩家群体。"},
 {title:"核心策略",text:"利用历史事件与文化认知，通过创意梗元素快速吸引同好眼球。"},
 {title:"广告拆解",text:"标志性人物/冲突台词出现，抓人眼球——历史人物/事件作为玩笑梗加入，好笑且抽象的剧情和台词能够令人继续观看——最终广告加入，突出视频重点，给人留下印象。"}
 ]
},
{
 title:"AI视频制作流程",
 subtitle:"从创意到终版成片的完整工作流",
 type:"AI CREATIVE WORKFLOW",
 blocks:[
 {title:"制作流程",text:"创意构思 → GPT辅助完善 → 剧本分镜制作 → 关键限定词提示 → AI生成 → 修改调试 → 终版确定 → 剪辑包装"}
 ]
}
];

const [active,setActive]=useState(0);

return(
<section id="analysis" className="analysis">
<div className="analysis-content">
<div className="section-title">ANALYSIS</div>
<h1>作品解析</h1>

<div className="analysis-card">
<div className="analysis-meta">{pages[active].type}</div>
<h2>{pages[active].title}</h2>
<h3>{pages[active].subtitle}</h3>

<div className="analysis-blocks">
{pages[active].blocks.map((item,index)=>(
<div className="analysis-block" key={index}>
<strong>{item.title}</strong>
<p>{item.text}</p>
</div>
))}
</div>
</div>

<div className="analysis-controls">
<button onClick={()=>setActive((active-1+3)%3)}>‹ 上一页</button>
<span>{active+1} / 3</span>
<button onClick={()=>setActive((active+1)%3)}>下一页 ›</button>
</div>
</div>
</section>
)
}
