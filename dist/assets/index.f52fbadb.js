/* empty css                  */import{cd as U,r as p,aA as C,az as V,ax as B,Z as D,W as E,o as K,g as N,C as e,S as _,ca as m,aB as g,M as L,w as M,aC as f,cn as R,aD as r,V as h,k as T,a0 as j,a1 as z}from"./index.2f5fdfe0.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";const o=a=>(j("data-v-327f50d5"),a=a(),z(),a),H={class:"login-content"},W={class:"content"},Z={class:"form sign-in"},q=o(()=>e("h2",null,"Drive Harbor Login",-1)),G=o(()=>e("span",null,"Username",-1)),J=["onKeyup"],O=o(()=>e("span",null,"Password",-1)),Q=["onKeyup"],X=o(()=>e("div",{class:"img__text m--up"},[e("h2",null,"Not Registered?"),e("p",null,"Signup Now!")],-1)),Y=o(()=>e("span",{class:"m--up"},"Signup",-1)),$=[Y],ee={__name:"index",setup(a){const l=U(),i=p(!1),t=C({username:"",password:""}),v=V(),w=B(),{setParentId:x,setDefaultParentId:y,setDefaultParentFilename:k}=v,{setUsername:S}=w,u=p(null);D(()=>{u.value.focus()});const d=()=>{I()&&(i.value=!0,f.login(t,n=>{R(n.data),f.info(s=>{x(s.data.rootFileId),y(s.data.rootFileId),k(s.data.rootFilename),S(s.data.username),l.push({name:"Index"})},s=>{r.error(s.message)})},n=>{r.error(n.message),i.value=!1}))},F=()=>{l.push({name:"Forget"})},I=()=>h.checkUsername(t.username)?h.checkPassword(t.password)?!0:(r.error("Please enter 8-16 digit password"),!1):(r.error("Please enter username with 6-16 digits, nunbers and letters only"),!1),b=()=>{l.push({name:"Register"})};return(n,s)=>{const P=E;return K(),N("div",H,[e("div",W,[e("div",Z,[q,e("label",null,[G,_(e("input",{type:"text",onKeyup:g(d,["enter"]),"onUpdate:modelValue":s[0]||(s[0]=c=>t.username=c),ref_key:"usernameEl",ref:u},null,40,J),[[m,t.username]])]),e("label",null,[O,_(e("input",{type:"password",onKeyup:g(d,["enter"]),"onUpdate:modelValue":s[1]||(s[1]=c=>t.password=c)},null,40,Q),[[m,t.password]])]),e("p",{class:"forgot-pass"},[e("a",{href:"javascript:",onClick:F}," Forgot the password? ")]),L(P,{type:"warning",class:"submit",loading:i.value,onClick:d,round:""},{default:M(()=>[T("Login")]),_:1},8,["loading"])]),e("div",{class:"sub-cont"},[e("div",{class:"img"},[X,e("div",{class:"img__btn",onClick:b},$)])])])])}}},ae=A(ee,[["__scopeId","data-v-327f50d5"]]);export{ae as default};