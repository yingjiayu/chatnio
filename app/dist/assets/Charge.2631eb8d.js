import{c as F,$ as U,bJ as B,r as o,bK as oe,bL as ce,bM as le,_ as w,G as T,bN as K,bO as ie,bP as P,bQ as de,bR as ue,bS as pe,j as e,n as q,bT as me,aM as R,aN as M,bU as G,bV as $,u as N,d as S,m as he,bW as fe,B as v,aQ as xe,bX as be,bY as ye,b5 as ge,aJ as je,bZ as ve,b_ as we,b$ as $e,W as k,aU as _,I,i as Ne,bv as ke,bw as Ce,bx as Re,by as Me,c0 as W,c1 as Se,b8 as H,e as Ee,bz as D,c2 as _e,c3 as De,c4 as Pe,bD as Ae,bj as Ye,c5 as Te,c6 as qe,bh as E,bi as Ge,b1 as O,b2 as L,c7 as Ie,b3 as Oe,c8 as Le,aX as Ve,aY as ze,aZ as Fe,a_ as Ue,a$ as Be,b0 as Ke,J as We,K as He,O as Je,P as Qe}from"./index.9642abf5.js";import{C as Xe,a as Ze,c as ea,d as aa}from"./command.6605a855.js";import{T as sa,a as ta,b as V,c as j,d as na}from"./table.3bc0dcc0.js";import{O as z}from"./OperationAction.37161161.js";import{d as ra,e as oa}from"./hook.09114b1f.js";import{A as ca}from"./activity.bd5287d7.js";import{S as la}from"./settings-2.2a3c9014.js";import"./popover.305b8e8e.js";/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=F("KanbanSquareDashed",[["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M21 14v1",key:"169vum"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M3 9v1",key:"1r0deq"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=F("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),J="Radio",[ua,Q]=U(J),[pa,ma]=ua(J),ha=o.forwardRef((a,s)=>{const{__scopeRadio:n,name:r,checked:l=!1,required:t,disabled:p,value:i="on",onCheck:d,...b}=a,[x,f]=o.useState(null),y=K(s,m=>f(m)),u=o.useRef(!1),h=x?!!x.closest("form"):!0;return o.createElement(pa,{scope:n,checked:l,disabled:p},o.createElement(T.button,w({type:"button",role:"radio","aria-checked":l,"data-state":X(l),"data-disabled":p?"":void 0,disabled:p,value:i},b,{ref:y,onClick:P(a.onClick,m=>{l||d==null||d(),h&&(u.current=m.isPropagationStopped(),u.current||m.stopPropagation())})})),h&&o.createElement(ba,{control:x,bubbles:!u.current,name:r,value:i,checked:l,required:t,disabled:p,style:{transform:"translateX(-100%)"}}))}),fa="RadioIndicator",xa=o.forwardRef((a,s)=>{const{__scopeRadio:n,forceMount:r,...l}=a,t=ma(fa,n);return o.createElement(de,{present:r||t.checked},o.createElement(T.span,w({"data-state":X(t.checked),"data-disabled":t.disabled?"":void 0},l,{ref:s})))}),ba=a=>{const{control:s,checked:n,bubbles:r=!0,...l}=a,t=o.useRef(null),p=ue(n),i=pe(s);return o.useEffect(()=>{const d=t.current,b=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(b,"checked").set;if(p!==n&&f){const y=new Event("click",{bubbles:r});f.call(d,n),d.dispatchEvent(y)}},[p,n,r]),o.createElement("input",w({type:"radio","aria-hidden":!0,defaultChecked:n},l,{tabIndex:-1,ref:t,style:{...a.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function X(a){return a?"checked":"unchecked"}const ya=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],Z="RadioGroup",[ga,Ha]=U(Z,[B,Q]),ee=B(),ae=Q(),[ja,va]=ga(Z),wa=o.forwardRef((a,s)=>{const{__scopeRadioGroup:n,name:r,defaultValue:l,value:t,required:p=!1,disabled:i=!1,orientation:d,dir:b,loop:x=!0,onValueChange:f,...y}=a,u=ee(n),h=oe(b),[m,c]=ce({prop:t,defaultProp:l,onChange:f});return o.createElement(ja,{scope:n,name:r,required:p,disabled:i,value:m,onValueChange:c},o.createElement(le,w({asChild:!0},u,{orientation:d,dir:h,loop:x}),o.createElement(T.div,w({role:"radiogroup","aria-required":p,"aria-orientation":d,"data-disabled":i?"":void 0,dir:h},y,{ref:s}))))}),$a="RadioGroupItem",Na=o.forwardRef((a,s)=>{const{__scopeRadioGroup:n,disabled:r,...l}=a,t=va($a,n),p=t.disabled||r,i=ee(n),d=ae(n),b=o.useRef(null),x=K(s,b),f=t.value===l.value,y=o.useRef(!1);return o.useEffect(()=>{const u=m=>{ya.includes(m.key)&&(y.current=!0)},h=()=>y.current=!1;return document.addEventListener("keydown",u),document.addEventListener("keyup",h),()=>{document.removeEventListener("keydown",u),document.removeEventListener("keyup",h)}},[]),o.createElement(ie,w({asChild:!0},i,{focusable:!p,active:f}),o.createElement(ha,w({disabled:p,required:t.required,checked:f},d,l,{name:t.name,ref:x,onCheck:()=>t.onValueChange(l.value),onKeyDown:P(u=>{u.key==="Enter"&&u.preventDefault()}),onFocus:P(l.onFocus,()=>{var u;y.current&&((u=b.current)===null||u===void 0||u.click())})})))}),ka=o.forwardRef((a,s)=>{const{__scopeRadioGroup:n,...r}=a,l=ae(n);return o.createElement(xa,w({},l,r,{ref:s}))}),se=wa,te=Na,Ca=ka,ne=o.forwardRef(({className:a,...s},n)=>e.jsx(se,{className:q("grid gap-2",a),...s,ref:n}));ne.displayName=se.displayName;const re=o.forwardRef(({className:a,...s},n)=>e.jsx(te,{ref:n,className:q("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),...s,children:e.jsx(Ca,{className:"flex items-center justify-center",children:e.jsx(me,{className:"h-2.5 w-2.5 fill-current text-current"})})}));re.displayName=te.displayName;async function Ra(){try{return(await R.get("/admin/charge/list")).data}catch(a){return{status:!1,error:M(a),data:[]}}}async function Ma(a){try{return(await R.post("/admin/charge/set",a)).data}catch(s){return{status:!1,error:M(s)}}}async function Sa(a){try{return(await R.get(`/admin/charge/delete/${a}`)).data}catch(s){return{status:!1,error:M(s)}}}async function Ea(a){try{return(await R.post("/admin/charge/sync",a)).data}catch(s){return{status:!1,error:M(s)}}}const _a=[{models:["gpt-3.5-turbo","gpt-3.5-turbo-0301","gpt-3.5-turbo-0613","gpt-3.5-turbo-instruct"],input:.0015,output:.002},{models:["gpt-3.5-turbo-1106"],input:.001,output:.002},{models:["gpt-3.5-turbo-0125"],input:5e-4,output:.0015},{models:["gpt-3.5-turbo-16k","gpt-3.5-turbo-16k-0301","gpt-3.5-turbo-16k-0613"],input:.003,output:.004},{models:["gpt-4","gpt-4-0314","gpt-4-0613"],input:.03,output:.06},{models:["gpt-4-1106-preview","gpt-4-0125-preview","gpt-4-turbo-preview","gpt-4-1106-vision-preview","gpt-4-vision-preview"],input:.01,output:.03},{models:["gpt-4-32k","gpt-4-32k-0314","gpt-4-32k-0613"],input:.06,output:.12},{models:["dalle","dall-e-2"],output:.018,billing_type:$},{models:["dall-e-3"],output:.08,billing_type:$},{models:["claude-1","claude-1-100k","claude-1.2","claude-1.3","claude-instant","claude-instant-1.2","claude-slack"],input:8e-4,output:.0024},{models:["claude-2","claude-2-100k","claude-2.1"],input:.008,output:.024},{models:["claude-3-haiku-20240307"],input:25e-5,output:.00125},{models:["claude-3-sonnet-20240229"],input:.003,output:.015},{models:["claude-3-opus-20240229"],input:.015,output:.075},{models:["midjourney"],output:.1,currency:"CNY",billing_type:$},{models:["midjourney-fast"],output:.2,currency:"CNY",billing_type:$},{models:["midjourney-turbo"],output:.5,currency:"CNY",billing_type:$},{models:["spark-desk-v1.5"],input:.015,output:.015,currency:"CNY"},{models:["spark-desk-v2","spark-desk-v3","spark-desk-v3.5"],input:.03,output:.03,currency:"CNY"},{models:["moonshot-v1-8k"],input:.012,output:.012,currency:"CNY"},{models:["moonshot-v1-32k"],input:.024,output:.024,currency:"CNY"},{models:["moonshot-v1-128k"],input:.06,output:.06,currency:"CNY"},{models:["glm-4","glm-4v"],input:.1,output:.1,currency:"CNY"},{models:["zhipu-chatglm-lite","zhipu-chatglm-std","zhipu-chatglm-turbo","glm-3-turbo"],input:.005,output:.005,currency:"CNY"},{models:["zhipu-chatglm-pro"],input:.01,output:.01,currency:"CNY"},{models:["qwen-plus","qwen-plus-net"],input:.02,output:.02,currency:"CNY"},{models:["qwen-turbo","qwen-turbo-net"],input:.008,output:.008,currency:"CNY"},{models:["chat-bison-001"],output:.001},{models:["gemini-pro","gemini-pro-vision"],input:125e-6,output:375e-6},{models:["hunyuan"],input:.1,output:.1,currency:"CNY"},{models:["360-gpt-v9"],input:.12,output:.12,currency:"CNY"},{models:["baichuan-53b"],input:.02,output:.02,currency:"CNY"},{models:["skylark-lite-public"],input:.004,output:.004,currency:"CNY"},{models:["skylark-plus-public"],input:.008,output:.008,currency:"CNY"},{models:["skylark-pro-public","skylark-chat"],input:.011,output:.011,currency:"CNY"},{models:["llama2-70b-4096","mixtral-8x7b-32768","gemma-7b-it"],output:.001,currency:"USD"}],A=(a,s,n)=>{const r=a??0;switch(s??"USD"){case"CNY":return r*10;case"USD":return r*10*(n??1);default:return A(r,"USD",n)}},Da=a=>_a.map((s,n)=>({id:n,models:s.models,type:s.billing_type??G,anonymous:!1,input:A(s.input,s.currency,a),output:A(s.output,s.currency,a)})),Y={id:-1,type:fe,models:[],anonymous:!1,input:0,output:0};function Pa(a,s){switch(s.type){case"set":return{...s.payload};case"set-models":return{...a,models:s.payload};case"add-model":const n=s.payload.trim();return n.length===0||a.models.includes(n)?a:{...a,models:[...a.models,n]};case"toggle-model":return s.payload.trim().length===0?a:a.models.includes(s.payload)?{...a,models:a.models.filter(r=>r!==s.payload)}:{...a,models:[...a.models,s.payload]};case"remove-model":return{...a,models:a.models.filter(r=>r!==s.payload)};case"set-type":return{...a,type:s.payload};case"set-anonymous":return{...a,anonymous:s.payload};case"set-input":return{...a,input:s.payload};case"set-output":return{...a,output:s.payload};case"clear":return Y;case"clear-param":return{...Y,id:a.id};default:return a}}function Aa(a){switch(a.models=a.models.map(s=>s.trim()).filter(s=>s.length>0),a.type){case W:a.input=0,a.output=0;break;case $:a.input=0,a.anonymous=!1;break;case G:a.anonymous=!1;break}return a.input<0&&(a.input=0),a.output<0&&(a.output=0),a}function Ya({builtin:a,current:s,open:n,setOpen:r,onRefresh:l}){const{t}=N(),{toast:p}=S(),[i,d]=o.useState([]),[b,x]=o.useState(!1),[f,y]=o.useState(!1),u=o.useMemo(()=>i.flatMap(m=>m.models),[i]),h=o.useMemo(()=>f?u:u.filter(m=>!s.includes(m)),[f,u,s]);return e.jsxs(e.Fragment,{children:[e.jsx(O,{type:L.Number,title:t("admin.charge.sync-builtin"),name:t("admin.charge.usd-currency"),open:n&&a,setOpen:r,defaultValue:"7.1",onSubmit:async m=>{const c=Ie(m),g=Da(c);return d(g),x(!0),!0}}),e.jsx(O,{type:L.Text,title:t("admin.charge.sync"),name:t("admin.charge.sync-site"),placeholder:t("admin.charge.sync-placeholder"),open:n&&!a,setOpen:r,defaultValue:"https://api.chatnio.net",alert:t("admin.chatnio-format-only"),onSubmit:async m=>{const c=Oe("/v1/charge",{endpoint:m}),g=await Le({endpoint:m});return g.length===0?(p({title:t("admin.charge.sync-failed"),description:t("admin.charge.sync-failed-prompt",{endpoint:c})}),!1):(d(g),x(!0),!0)}}),e.jsx(Ve,{open:b,onOpenChange:x,children:e.jsxs(ze,{children:[e.jsxs(Fe,{children:[e.jsx(Ue,{children:t("admin.charge.sync-option")}),e.jsx(Be,{className:"pt-1.5",children:t("admin.charge.sync-prompt",{length:u.length,influence:h.length})})]}),e.jsxs("div",{className:"pt-1 flex flex-row items-center justify-center",children:[e.jsx("span",{className:"mr-4 whitespace-nowrap",children:t("admin.charge.sync-overwrite")}),e.jsx(H,{checked:f,onCheckedChange:y})]}),e.jsxs(Ke,{children:[e.jsx(v,{variant:"outline",onClick:()=>{x(!1),d([])},children:t("cancel")}),e.jsx(v,{loading:!0,variant:f?"destructive":"default",onClick:async()=>{const m=await Ea({data:i,overwrite:f});E(p,t,m,!0),m.status&&(r(!1),x(!1),d([]),l())},children:t("admin.charge.sync-confirm")})]})]})})]})}function Ta({loading:a,onRefresh:s,currentModels:n}){const{t:r}=N(),[l,t]=o.useState(!1),[p,i]=o.useState(!1),d=b=>{i(b),t(!0)};return e.jsxs("div",{className:"flex flex-row w-full h-max",children:[e.jsx(Ya,{builtin:p,onRefresh:s,current:n,open:l,setOpen:t}),e.jsxs(v,{variant:"default",className:"mr-2",onClick:()=>d(!0),children:[e.jsx(ia,{className:"w-4 h-4 mr-2"}),r("admin.charge.sync-builtin")]}),e.jsxs(v,{variant:"outline",onClick:()=>d(!1),children:[e.jsx(ca,{className:"w-4 h-4 mr-2"}),r("admin.charge.sync")]}),e.jsx("div",{className:"grow"}),e.jsx(v,{variant:"outline",size:"icon",onClick:s,children:e.jsx(xe,{className:q("w-4 h-4",a&&"animate-spin")})})]})}function qa({models:a,onClick:s}){const{t:n}=N();return a.length>0&&e.jsxs(be,{className:"charge-alert",children:[e.jsxs(ye,{className:"flex flex-row items-center select-none",children:[e.jsx(ge,{className:"h-4 w-4 mr-2"}),e.jsx("p",{children:n("admin.charge.unused-model")}),e.jsx(je,{content:n("admin.charge.unused-model-tip")})]}),e.jsx(ve,{className:"model-list",children:a.map((r,l)=>e.jsx("div",{className:"model cursor-pointer select-none",onClick:()=>s(r),children:r},l))})]})}function Ga({form:a,dispatch:s,onRefresh:n,usedModels:r,allModels:l}){const{t}=N(),{toast:p}=S(),[i,d]=o.useState(""),b=o.useMemo(()=>we([...l,...oa]),[l]),x=o.useMemo(()=>b.filter(c=>!a.models.includes(c)&&!r.includes(c)&&c.trim()!==""),[a.models,r]),f=o.useMemo(()=>i.trim()!==""?!1:a.models.length===0,[i,a.models]),[y,u]=o.useState(!1);async function h(){const c=i.trim(),g=Aa({...a});c!==""&&!g.models.includes(c)&&(g.models=[c,...g.models],d(""));const C=await Ma(g);E(p,t,C,!0),C.status&&m(),n()}function m(){s({type:"clear"}),d("")}return e.jsxs("div",{className:"charge-editor",children:[e.jsx("div",{className:"w-full h-max mb-5",children:e.jsx(ne,{value:a.type,onValueChange:c=>s({type:"set-type",payload:c}),className:"flex flex-row gap-5 whitespace-nowrap flex-wrap",children:$e.map((c,g)=>e.jsxs("div",{className:"flex items-center space-x-2 cursor-pointer",children:[e.jsx(re,{className:"transition-all duration-200",value:c,id:c}),e.jsx(k,{htmlFor:c,className:"cursor-pointer",children:t(`admin.charge.${c}`)})]},g))})}),e.jsxs("div",{className:"flex flex-row w-full h-max mb-4",children:[e.jsx(v,{onClick:()=>{s({type:"add-model",payload:i}),d("")},size:"icon",className:"mr-2 shrink-0",children:e.jsx(_,{className:"w-4 h-4"})}),e.jsx(I,{value:i,onChange:c=>d(c.target.value),placeholder:t("admin.channels.model"),onKeyDown:c=>{Ne(c)&&(s({type:"add-model",payload:i}),d(""))}}),e.jsxs(ke,{children:[e.jsx(Ce,{asChild:!0,children:e.jsx(v,{size:"icon",className:"ml-2 shrink-0",children:e.jsx(Re,{className:"w-4 h-4"})})}),e.jsx(Me,{align:"end",asChild:!0,children:e.jsxs(Xe,{children:[e.jsx(Ze,{placeholder:t("admin.channels.search-model")}),e.jsx(ea,{className:"thin-scrollbar",children:x.map((c,g)=>e.jsx(aa,{value:c,onSelect:C=>s({type:"add-model",payload:C}),className:"px-2",children:c},g))})]})})]})]}),e.jsx("div",{className:"flex flex-col w-full h-max mb-2",children:a.models.map((c,g)=>e.jsxs("div",{className:"flex flex-row w-full h-max shrink-0 mb-2 select-none",children:[e.jsx(I,{value:c,readOnly:!0}),e.jsx(v,{onClick:()=>s({type:"remove-model",payload:c}),size:"icon",variant:"outline",className:"ml-2 shrink-0",children:e.jsx(da,{className:"w-4 h-4"})})]},g))}),a.type===W&&e.jsxs("div",{className:"flex flex-row w-full h-max items-center mt-4 mb-6",children:[e.jsx(Se,{className:"w-4 h-4 mr-2"}),e.jsx(k,{className:"grow",children:t("admin.charge.anonymous")}),e.jsx(H,{checked:a.anonymous,onCheckedChange:c=>s({type:"set-anonymous",payload:c})})]}),a.type===$&&e.jsxs("div",{className:"flex flex-row w-full h-max items-center",children:[e.jsx(Ee,{className:"w-4 h-4 mr-2"}),e.jsx(k,{className:"grow",children:t("admin.charge.time-count")}),e.jsx(D,{value:a.output,onValueChange:c=>s({type:"set-output",payload:c}),acceptNegative:!1,className:"w-20",min:0,max:99999})]}),a.type===G&&e.jsxs("div",{className:"flex flex-col w-full h-max gap-2",children:[e.jsxs("div",{className:"flex flex-row w-full h-max items-center",children:[e.jsx(_e,{className:"w-4 h-4 mr-2"}),e.jsxs(k,{className:"grow",children:[t("admin.charge.input-count"),e.jsx("span",{className:"token",children:" / 1k tokens"})]}),e.jsx(D,{value:a.input,onValueChange:c=>s({type:"set-input",payload:c}),acceptNegative:!1,className:"w-20",min:0,max:99999})]}),e.jsxs("div",{className:"flex flex-row w-full h-max items-center",children:[e.jsx(De,{className:"w-4 h-4 mr-2"}),e.jsxs(k,{className:"grow",children:[t("admin.charge.output-count"),e.jsx("span",{className:"token",children:" / 1k tokens"})]}),e.jsx(D,{value:a.output,onValueChange:c=>s({type:"set-output",payload:c}),acceptNegative:!1,className:"w-20",min:0,max:99999})]})]}),e.jsxs("div",{className:"flex flex-row w-full h-max mt-5 gap-2 items-center flex-wrap",children:[e.jsxs("div",{className:"object-id",children:[e.jsx("span",{className:"mr-2",children:"ID"}),a.id===-1?e.jsx(_,{className:"w-3 h-3"}):e.jsx("span",{className:"id",children:a.id})]}),e.jsx("div",{className:"grow"}),e.jsx(v,{variant:"outline",size:"icon",className:"shrink-0",onClick:m,children:e.jsx(Pe,{className:"w-4 h-4"})}),e.jsx(v,{disabled:f,onClick:h,loading:!0,onLoadingChange:u,className:"whitespace-nowrap shrink-0",children:a.id===-1?e.jsxs(e.Fragment,{children:[!y&&e.jsx(_,{className:"w-4 h-4 mr-2"}),t("admin.charge.add-rule")]}):e.jsxs(e.Fragment,{children:[!y&&e.jsx(Ae,{className:"w-4 h-4 mr-2"}),t("admin.charge.update-rule")]})})]})]})}function Ia({data:a,dispatch:s,onRefresh:n}){const{t:r}=N(),{toast:l}=S();return e.jsx("div",{className:"charge-table",children:e.jsxs(sa,{classNameWrapper:"table",children:[e.jsx(ta,{children:e.jsxs(V,{className:"select-none whitespace-nowrap",children:[e.jsx(j,{children:r("admin.charge.id")}),e.jsx(j,{children:r("admin.charge.type")}),e.jsx(j,{children:r("admin.charge.model")}),e.jsx(j,{children:r("admin.charge.input")}),e.jsx(j,{children:r("admin.charge.output")}),e.jsx(j,{children:r("admin.charge.support-anonymous")}),e.jsx(j,{children:r("admin.charge.action")})]})}),e.jsx(na,{children:a.map((t,p)=>e.jsxs(V,{children:[e.jsx(j,{className:"charge-id",children:t.id}),e.jsx(j,{children:e.jsx(Ye,{className:"whitespace-nowrap",children:r(`admin.charge.${t.type}`)})}),e.jsx(j,{children:e.jsx("pre",{children:t.models.join(`
`)})}),e.jsx(j,{children:t.input===0?0:t.input.toFixed(3)}),e.jsx(j,{children:t.output===0?0:t.output.toFixed(3)}),e.jsx(j,{children:r(String(t.anonymous))}),e.jsx(j,{children:e.jsxs("div",{className:"inline-flex flex-row flex-wrap gap-2",children:[e.jsx(z,{tooltip:r("admin.channels.edit"),onClick:async()=>{const i={...t};s({type:"set",payload:i}),Te(qe(".admin-content > .scrollarea-viewport"))},children:e.jsx(la,{className:"h-4 w-4"})}),e.jsx(z,{tooltip:r("admin.channels.delete"),variant:"destructive",onClick:async()=>{const i=await Sa(t.id);E(l,r,i,!0),n()},children:e.jsx(Ge,{className:"h-4 w-4"})})]})})]},p))})]})})}function Oa(){const{t:a}=N(),{toast:s}=S(),[n,r]=o.useState([]),[l,t]=o.useReducer(Pa,Y),[p,i]=o.useState(!1),{allModels:d,update:b}=ra(),x=o.useMemo(()=>n.flatMap(h=>h.models),[n]),f=o.useMemo(()=>n.flatMap(h=>h.models),[n]),y=o.useMemo(()=>p?[]:d.filter(h=>!f.includes(h)&&h.trim()!==""),[p,d,f]);async function u(h){i(!0);const m=await Ra();h||await b(),i(!1),E(s,a,m),r(m.data)}return he(async()=>await u(!0),[]),e.jsxs("div",{className:"charge-widget",children:[e.jsx(Ta,{loading:p,onRefresh:u,currentModels:x}),e.jsx(qa,{models:y,onClick:h=>t({type:"toggle-model",payload:h})}),e.jsx(Ga,{onRefresh:u,form:l,dispatch:t,allModels:d,usedModels:f}),e.jsx(Ia,{data:n,dispatch:t,onRefresh:u})]})}function Ja(){const{t:a}=N();return e.jsx("div",{className:"charge",children:e.jsxs(We,{className:"admin-card charge-card",children:[e.jsx(He,{className:"select-none",children:e.jsx(Je,{children:a("admin.prize")})}),e.jsx(Qe,{children:e.jsx(Oa,{})})]})})}export{Ja as default};
