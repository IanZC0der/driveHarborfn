import{b as c,q as p,d as n,u,c as v,o as s,g as o,n as i,a as r,j as m,h as f,D as y,_ as S,p as _}from"./index.b1ab2185.js";const h=c({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:p(String),default:"solid"}}),b=n({name:"ElDivider"}),g=n({...b,props:h,setup(a){const l=a,e=u("divider"),d=v(()=>e.cssVar({"border-style":l.borderStyle}));return(t,D)=>(s(),o("div",{class:i([r(e).b(),r(e).m(t.direction)]),style:y(r(d)),role:"separator"},[t.$slots.default&&t.direction!=="vertical"?(s(),o("div",{key:0,class:i([r(e).e("text"),r(e).is(t.contentPosition)])},[m(t.$slots,"default")],2)):f("v-if",!0)],6))}});var k=S(g,[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]);const z=_(k);export{z as E};
