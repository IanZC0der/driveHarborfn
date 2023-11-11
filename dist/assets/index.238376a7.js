/* empty css                  */import{E as le}from"./el-link.a774dbff.js";import{aX as re,co as ie,K as ue,b as Z,b$ as Y,J as ee,d as q,u as se,a9 as J,a3 as ce,o as v,g as k,j as M,n as d,a as t,_ as te,aj as ne,af as pe,r as c,a4 as de,Z as ae,a5 as ve,c as g,aA as fe,h as N,C as a,D as X,f as z,w,E as _e,F as Q,M as m,y as me,z as he,t as W,k as b,p as ye,ao as ge,cd as Se,W as we,S as A,ca as G,aB as H,aD as S,aC as R,ae as F,a0 as ke,a1 as Ce,V as Ee}from"./index.b1ab2185.js";import{_ as be}from"./_plugin-vue_export-helper.cdc0426e.js";const Pe=(p,u,s)=>ie(p.subTree).filter(r=>{var e;return ue(r)&&((e=r.type)==null?void 0:e.name)===u&&!!r.component}).map(r=>r.component.uid).map(r=>s[r]).filter(r=>!!r),Ve=(p,u)=>{const s={},l=re([]);return{children:l,addChild:e=>{s[e.uid]=e,l.value=Pe(p,u,s)},removeChild:e=>{delete s[e],l.value=l.value.filter(i=>i.uid!==e)}}},$e=Z({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,values:["wait","process","finish","error","success"],default:"finish"},processStatus:{type:String,values:["wait","process","finish","error","success"],default:"process"}}),Ne={[Y]:(p,u)=>[p,u].every(ee)},xe=q({name:"ElSteps"}),Ie=q({...xe,props:$e,emits:Ne,setup(p,{emit:u}){const s=p,l=se("steps"),{children:f,addChild:r,removeChild:e}=Ve(ne(),"ElStep");return J(f,()=>{f.value.forEach((i,o)=>{i.setIndex(o)})}),ce("ElSteps",{props:s,steps:f,addStep:r,removeStep:e}),J(()=>s.active,(i,o)=>{u(Y,i,o)}),(i,o)=>(v(),k("div",{class:d([t(l).b(),t(l).m(i.simple?"simple":i.direction)])},[M(i.$slots,"default")],2))}});var Ke=te(Ie,[["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/steps.vue"]]);const Te=Z({title:{type:String,default:""},icon:{type:pe},description:{type:String,default:""},status:{type:String,values:["","wait","process","finish","error","success"],default:""}}),Be=q({name:"ElStep"}),Ue=q({...Be,props:Te,setup(p){const u=p,s=se("step"),l=c(-1),f=c({}),r=c(""),e=de("ElSteps"),i=ne();ae(()=>{J([()=>e.props.active,()=>e.props.processStatus,()=>e.props.finishStatus],([n])=>{_(n)},{immediate:!0})}),ve(()=>{e.removeStep(h.uid)});const o=g(()=>u.status||r.value),x=g(()=>{const n=e.steps.value[l.value-1];return n?n.currentStatus:"wait"}),U=g(()=>e.props.alignCenter),I=g(()=>e.props.direction==="vertical"),y=g(()=>e.props.simple),K=g(()=>e.steps.value.length),D=g(()=>{var n;return((n=e.steps.value[K.value-1])==null?void 0:n.uid)===(i==null?void 0:i.uid)}),C=g(()=>y.value?"":e.props.space),j=g(()=>[s.b(),s.is(y.value?"simple":e.props.direction),s.is("flex",D.value&&!C.value&&!U.value),s.is("center",U.value&&!I.value&&!y.value)]),T=g(()=>{const n={flexBasis:ee(C.value)?`${C.value}px`:C.value?C.value:`${100/(K.value-(U.value?0:1))}%`};return I.value||D.value&&(n.maxWidth=`${100/K.value}%`),n}),O=n=>{l.value=n},L=n=>{const E=n==="wait",V={transitionDelay:`${E?"-":""}${150*l.value}ms`},B=n===e.props.processStatus||E?0:100;V.borderWidth=B&&!y.value?"1px":0,V[e.props.direction==="vertical"?"height":"width"]=`${B}%`,f.value=V},_=n=>{n>l.value?r.value=e.props.finishStatus:n===l.value&&x.value!=="error"?r.value=e.props.processStatus:r.value="wait";const E=e.steps.value[l.value-1];E&&E.calcProgress(r.value)},h=fe({uid:i.uid,currentStatus:o,setIndex:O,calcProgress:L});return e.addStep(h),(n,E)=>(v(),k("div",{style:X(t(T)),class:d(t(j))},[N(" icon & line "),a("div",{class:d([t(s).e("head"),t(s).is(t(o))])},[t(y)?N("v-if",!0):(v(),k("div",{key:0,class:d(t(s).e("line"))},[a("i",{class:d(t(s).e("line-inner")),style:X(f.value)},null,6)],2)),a("div",{class:d([t(s).e("icon"),t(s).is(n.icon||n.$slots.icon?"icon":"text")])},[M(n.$slots,"icon",{},()=>[n.icon?(v(),z(t(Q),{key:0,class:d(t(s).e("icon-inner"))},{default:w(()=>[(v(),z(_e(n.icon)))]),_:1},8,["class"])):t(o)==="success"?(v(),z(t(Q),{key:1,class:d([t(s).e("icon-inner"),t(s).is("status")])},{default:w(()=>[m(t(me))]),_:1},8,["class"])):t(o)==="error"?(v(),z(t(Q),{key:2,class:d([t(s).e("icon-inner"),t(s).is("status")])},{default:w(()=>[m(t(he))]),_:1},8,["class"])):t(y)?N("v-if",!0):(v(),k("div",{key:3,class:d(t(s).e("icon-inner"))},W(l.value+1),3))])],2)],2),N(" title & description "),a("div",{class:d(t(s).e("main"))},[a("div",{class:d([t(s).e("title"),t(s).is(t(o))])},[M(n.$slots,"title",{},()=>[b(W(n.title),1)])],2),t(y)?(v(),k("div",{key:0,class:d(t(s).e("arrow"))},null,2)):(v(),k("div",{key:1,class:d([t(s).e("description"),t(s).is(t(o))])},[M(n.$slots,"description",{},()=>[b(W(n.description),1)])],2))],2)],6))}});var oe=te(Ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/item.vue"]]);const De=ye(Ke,{Step:oe}),Le=ge(oe);const P=p=>(ke("data-v-3af34d97"),p=p(),Ce(),p),je={class:"content"},ze={class:"steps-content"},Ae={key:0,class:"form"},Ge=P(()=>a("h2",null,"Drive Harbor Verify Username",-1)),He={class:"forget-form-content"},Me={class:"forget-form-item"},We=P(()=>a("span",null,"Username",-1)),qe=["onKeyup"],Oe={class:"login-link-content"},Qe={key:1,class:"form"},Re=P(()=>a("h2",null,"Drive Harbor Verify Security Questions",-1)),Fe={class:"forget-form-content"},Je={class:"forget-form-item"},Xe=P(()=>a("span",null,"Security Question",-1)),Ze={class:"question-content"},Ye=P(()=>a("span",null,"Answer",-1)),es=["onKeyup"],ss={class:"login-link-content"},ts={key:2,class:"form"},ns=P(()=>a("h2",null,"Drive Harbor Reset Password",-1)),as={class:"forget-form-content"},os={class:"forget-form-item"},ls=P(()=>a("span",null,"New Password",-1)),rs=["onKeyup"],is=P(()=>a("span",null,"Confirm Password",-1)),us=["onKeyup"],cs={class:"login-link-content"},ps={__name:"index",setup(p){const u=c(1),s=c("process"),l=c(""),f=c(""),r=c(""),e=c(""),i=c(""),o=c(!1),x=c(""),U=Se(),I=c(null),y=c(null),K=c(null);ae(()=>{I.value.focus()});const D=()=>{o.value=!0,u.value=1,l.value="",f.value="",r.value="",e.value="",i.value="",x.value="",s.value="process",F(function(){I.focus()}),o.value=!1},C=()=>{if(!l.value){S.error("Please enter username");return}o.value=!0,R.checkUsername({username:l.value},_=>{f.value=_.data,u.value=2,F(function(){y.value.focus(),o.value=!1})},_=>{S.error(_.message),o.value=!1})},j=()=>{if(!r.value){S.error("Please enter answer");return}o.value=!0,R.checkAnswer({username:l.value,question:f.value,answer:r.value},_=>{x.value=_.data,u.value=3,F(function(){K.value.focus(),o.value=!1})},_=>{S.error(_.message),o.value=!1})},T=()=>{U.push({name:"Login"})},O=()=>Ee.checkPassword(e.value)?!i.value||e.value!==i.value?(S.error("Inconsistent passwords"),!1):!0:(S.error("Please enter 8-16 digit password"),!1),L=()=>{if(!x.value){S.error("Timed out, returning to the last step..."),D();return}O()&&(o.value=!0,R.resetPassword({username:l.value,password:e.value,token:x.value},()=>{o.value=!1,s.value="success",S.success("Password reset success, jumping to the login pag, jumping to the login page..."),setTimeout(T,1e3)},_=>{_.code===2?(o.value=!1,S.error("Timed out, returning to the last step..."),D()):(o.value=!1,S.error(_.message))}))};return(_,h)=>{const n=Le,E=De,V=we,B=le;return v(),k("div",je,[a("div",ze,[m(E,{active:u.value,direction:"vertical","finish-status":"success","process-status":s.value},{default:w(()=>[m(n,{title:"Verify Username"}),m(n,{title:"Verify Security Questions"}),m(n,{title:"Change Password"})]),_:1},8,["active","process-status"])]),u.value===1?(v(),k("div",Ae,[Ge,a("div",He,[a("div",Me,[a("label",null,[We,A(a("input",{type:"text","onUpdate:modelValue":h[0]||(h[0]=$=>l.value=$),onKeyup:H(C,["enter"]),ref_key:"usernameEl",ref:I},null,40,qe),[[G,l.value]])])])]),m(V,{type:"warning",class:"submit",loading:!1,onClick:C,round:""},{default:w(()=>[b("Next Step")]),_:1}),a("div",Oe,[m(B,{type:"primary",onClick:T},{default:w(()=>[b("Go Login")]),_:1})])])):N("",!0),u.value===2?(v(),k("div",Qe,[Re,a("div",Fe,[a("div",Je,[a("label",null,[Xe,a("div",Ze,W(f.value),1)]),a("label",null,[Ye,A(a("input",{type:"text","onUpdate:modelValue":h[1]||(h[1]=$=>r.value=$),onKeyup:H(j,["enter"]),ref_key:"answerEl",ref:y},null,40,es),[[G,r.value]])])])]),m(V,{type:"warning",class:"submit",loading:o.value,onClick:j,round:""},{default:w(()=>[b("\u4E0B\u4E00\u6B65")]),_:1},8,["loading"]),a("div",ss,[m(B,{type:"primary",onClick:T},{default:w(()=>[b("Go Login")]),_:1})])])):N("",!0),u.value===3?(v(),k("div",ts,[ns,a("div",as,[a("div",os,[a("label",null,[ls,A(a("input",{type:"password","onUpdate:modelValue":h[2]||(h[2]=$=>e.value=$),onKeyup:H(L,["enter"]),ref_key:"newPasswordEl",ref:K},null,40,rs),[[G,e.value]])]),a("label",null,[is,A(a("input",{type:"password","onUpdate:modelValue":h[3]||(h[3]=$=>i.value=$),onKeyup:H(L,["enter"])},null,40,us),[[G,i.value]])])])]),m(V,{type:"warning",class:"submit",loading:!1,onClick:L,round:""},{default:w(()=>[b("\u63D0 \u4EA4")]),_:1}),a("div",cs,[m(B,{type:"primary",onClick:T},{default:w(()=>[b("Go Login")]),_:1})])])):N("",!0)])}}},ms=be(ps,[["__scopeId","data-v-3af34d97"]]);export{ms as default};