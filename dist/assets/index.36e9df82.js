import{_ as B,a as k,b as F}from"./index.b60eb53e.js";/* empty css                  */import{E as C}from"./el-divider.7569b926.js";import{E as I,a as S}from"./el-breadcrumb-item.113a55fd.js";import{ay as f,az as b,Q as v,o as i,g as d,M as a,w as l,C as m,am as w,bR as E,a as $,f as P,t as T,r as A,Z as L}from"./index.b1ab2185.js";import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";import"./el-input.68a624f5.js";import"./el-icon.6cf20f75.js";import"./el-link.a774dbff.js";import"./index.5ee98fc1.js";import"./debounce.0bdc5006.js";import"./el-loading.7e6d6370.js";import"./el-tag.de2594e3.js";import"./el-tooltip.89296c46.js";import"./el-tree.5461fde7.js";import"./index.1ca9696f.js";import"./index.7ca08e25.js";import"./index.ab853572.js";const R={class:"pan-main-breadcrumb-content"},D=["onClick"],M={__name:"index",setup(y){const r=f(),o=b(),{breadCrumbs:s}=v(r),_=()=>{if(o.setSearchFlag(!1),s.value.length>1){let e=[...s.value];e.pop();let t=e.pop().id;c(t)}},c=e=>{if(e!=="-1"){let t=new Array;s.value.some(n=>{if(t.push(n),n.id==e)return!0}),r.reset(t),o.setParentId(e),o.setSearchFlag(!1),o.loadFileList()}};return(e,t)=>{const n=I,u=S,g=C;return i(),d("div",R,[a(u,{style:{display:"inline-block"}},{default:l(()=>[a(n,null,{default:l(()=>[m("a",{class:"breadcrumb-item-a",onClick:_,href:"#"},"Back")]),_:1})]),_:1}),a(g,{direction:"vertical",style:{"vertical-align":"top !important"}}),a(u,{"separator-icon":"ArrowRight",style:{display:"inline-block"}},{default:l(()=>[(i(!0),d(w,null,E($(s),(p,x)=>(i(),P(n,{key:x},{default:l(()=>[m("a",{class:"breadcrumb-item-a",onClick:Q=>c(p.id),href:"#"},T(p.name),9,D)]),_:2},1024))),128))]),_:1})])}}},N=h(M,[["__scopeId","data-v-91168174"]]);const V={class:"button-search-content"},z={__name:"index",setup(y){const r=b(),o=f(),{searchFlag:s,defaultParentId:_,defaultParentFilename:c}=v(r),e=A(["upload","createFolder","download","delete","rename","share","copy","transfer"]);return L(()=>{if(!s.value){let t={id:_.value,name:c.value};o.clear(),o.addItem(t),r.refreshParentId(),r.setFileTypes("-1"),r.loadFileList()}}),(t,n)=>(i(),d("div",null,[m("div",V,[a(B,{"button-array":e.value},null,8,["button-array"]),a(k)]),a(N),a(F)]))}},ne=h(z,[["__scopeId","data-v-10a9995f"]]);export{ne as default};
