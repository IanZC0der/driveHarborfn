import{b as f,af as C,d as l,u as _,r as k,a3 as E,Z as w,o as t,g as p,j as y,n as o,a as r,_ as B,q as P,a4 as S,C as $,f as d,w as j,E as x,F as N,t as q,aj as A,p as D,ao as K}from"./index.b1ab2185.js";const g=Symbol("breadcrumbKey"),T=f({separator:{type:String,default:"/"},separatorIcon:{type:C}}),z=l({name:"ElBreadcrumb"}),F=l({...z,props:T,setup(u){const a=u,n=_("breadcrumb"),s=k();return E(g,a),w(()=>{const e=s.value.querySelectorAll(`.${n.e("item")}`);e.length&&e[e.length-1].setAttribute("aria-current","page")}),(e,c)=>(t(),p("div",{ref_key:"breadcrumb",ref:s,class:o(r(n).b()),"aria-label":"Breadcrumb",role:"navigation"},[y(e.$slots,"default")],2))}});var M=B(F,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);const O=f({to:{type:P([String,Object]),default:""},replace:{type:Boolean,default:!1}}),V=l({name:"ElBreadcrumbItem"}),Z=l({...V,props:O,setup(u){const a=u,n=A(),s=S(g,void 0),e=_("breadcrumb"),c=n.appContext.config.globalProperties.$router,I=k(),h=()=>{!a.to||!c||(a.replace?c.replace(a.to):c.push(a.to))};return(m,G)=>{var i,b;return t(),p("span",{class:o(r(e).e("item"))},[$("span",{ref_key:"link",ref:I,class:o([r(e).e("inner"),r(e).is("link",!!m.to)]),role:"link",onClick:h},[y(m.$slots,"default")],2),(i=r(s))!=null&&i.separatorIcon?(t(),d(r(N),{key:0,class:o(r(e).e("separator"))},{default:j(()=>[(t(),d(x(r(s).separatorIcon)))]),_:1},8,["class"])):(t(),p("span",{key:1,class:o(r(e).e("separator")),role:"presentation"},q((b=r(s))==null?void 0:b.separator),3))],2)}}});var v=B(Z,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const J=D(M,{BreadcrumbItem:v}),L=K(v);export{L as E,J as a};
