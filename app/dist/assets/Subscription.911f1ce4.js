import{c as O,cx as H,aM as P,aN as L,u as C,j as e,J as R,K as U,O as G,P as J,r as u,Q,d as _,b_ as $,m as q,b1 as F,b2 as K,cy as W,B as m,aP as X,z as Y,aQ as Z,n as j,b8 as ee,cz as z,aJ as w,bz as I,I as D,bd as ae,be as se,bi as le,aU as ne,cA as T,cB as te,cC as ie,cD as re,bv as de,bw as oe,by as ce,cj as me,bh as pe,cE as ue}from"./index.9642abf5.js";import{M as he}from"./multi-combobox.fd736ff8.js";import{a as ve}from"./hook.09114b1f.js";import{A as xe}from"./activity.bd5287d7.js";import{M as ye}from"./minimize.4508267e.js";import{S as fe}from"./save.4c791d10.js";import"./command.6605a855.js";import"./popover.305b8e8e.js";import"./chevrons-up-down.562b365d.js";/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=O("BookDashed",[["path",{d:"M20 22h-2",key:"1rpnb6"}],["path",{d:"M20 15v2h-2",key:"fph276"}],["path",{d:"M4 19.5V15",key:"6gr39e"}],["path",{d:"M20 8v3",key:"deu0bs"}],["path",{d:"M18 2h2v2",key:"180o53"}],["path",{d:"M4 11V9",key:"v3xsx8"}],["path",{d:"M12 2h2",key:"cvn524"}],["path",{d:"M12 22h2",key:"kn7ki6"}],["path",{d:"M12 17h2",key:"13u4lk"}],["path",{d:"M8 22H6.5a2.5 2.5 0 0 1 0-5H8",key:"fiseg2"}],["path",{d:"M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8",key:"wywhs9"}]]);async function we(){try{const l=(await P.get("/admin/plan/view")).data;return l.plans=(l.plans||[]).filter(r=>r.level>0),l.plans.length===0&&(l.plans=[1,2,3].map(r=>({level:r,price:0,items:[]}))),l}catch(a){return console.warn(a),{enabled:!1,plans:[]}}}async function ge(a){const l=await H({endpoint:a});return{enabled:l.length>0,plans:l}}async function Ne(a){try{return(await P.post("/admin/plan/update",a)).data}catch(l){return{status:!1,error:L(l)}}}const be={enabled:!1,plans:[]};function Ce(a,l){switch(l.type){case"set":return l.payload;case"set-enabled":return{...a,enabled:l.payload};case"set-price":return{...a,plans:a.plans.map(s=>s.level===l.payload.level?{...s,price:l.payload.price}:s)};case"set-item-id":return{...a,plans:a.plans.map(s=>s.level===l.payload.level?{...s,items:s.items.map((t,n)=>n===l.payload.index?{...t,id:l.payload.id}:t)}:s)};case"set-item-name":return{...a,plans:a.plans.map(s=>s.level===l.payload.level?{...s,items:s.items.map((t,n)=>n===l.payload.index?{...t,name:l.payload.name}:t)}:s)};case"set-item-value":return{...a,plans:a.plans.map(s=>s.level===l.payload.level?{...s,items:s.items.map((t,n)=>n===l.payload.index?{...t,value:l.payload.value}:t)}:s)};case"set-item-icon":return{...a,plans:a.plans.map(s=>s.level===l.payload.level?{...s,items:s.items.map((t,n)=>n===l.payload.index?{...t,icon:l.payload.icon}:t)}:s)};case"add-item":return{...a,plans:a.plans.map(s=>s.level===l.payload.level?{...s,items:[...s.items,{id:"",name:"",value:0,icon:T[0],models:[]}]}:s)};case"set-item-models":return{...a,plans:a.plans.map(s=>s.level===l.payload.level?{...s,items:s.items.map((t,n)=>n===l.payload.index?{...t,models:l.payload.models}:t)}:s)};case"remove-item":return{...a,plans:a.plans.map(s=>s.level===l.payload.level?{...s,items:s.items.filter((t,n)=>n!==l.payload.index)}:s)};case"upward-item":return{...a,plans:a.plans.map(s=>{if(s.level===l.payload.level){const t=s.items,n=l.payload.index;if(n>0){const g=t[n];t[n]=t[n-1],t[n-1]=g}return{...s,items:t}}return s})};case"downward-item":return{...a,plans:a.plans.map(s=>{if(s.level===l.payload.level){const t=s.items,n=l.payload.index;if(n<t.length-1){const g=t[n];t[n]=t[n+1],t[n+1]=g}return{...s,items:t}}return s})};case"import-item":const{level:r,id:h,target:y}=l.payload,c=a.plans.find(s=>s.level===r),d=c==null?void 0:c.items.find(s=>s.id===h);return!c||!d?a:{...a,plans:a.plans.map(s=>{if(s.level===y){const t=s.items;return t.push(d),{...s,items:t}}return s})};default:throw new Error}}function ke({value:a,onValueChange:l}){return e.jsx(te,{variant:"outline",type:"single",value:a,onValueChange:l,className:"flex-wrap",children:T.map((r,h)=>e.jsx(ie,{value:r,children:e.jsx(re,{type:r,className:"h-4 w-4"})},h))})}function Me({plans:a,level:l,dispatch:r}){const{t:h}=C(),y=u.useMemo(()=>a.filter(d=>d.level!==l).map(d=>d.items.map(s=>({level:d.level,item:s}))).flat(),[a,l]);return e.jsxs(de,{children:[e.jsx(oe,{asChild:!0,children:e.jsxs(m,{variant:"outline",children:[e.jsx(je,{className:"h-4 w-4 mr-1"}),h("admin.plan.import-item")]})}),e.jsx(ce,{children:y.map(({level:c,item:d},s)=>e.jsxs(me,{onClick:()=>{r({type:"import-item",payload:{level:c,id:d.id,target:l}})},children:[h(`sub.${z(c)}`)," - ",d.name," (",d.id,")"]},s))})]})}function Se(){const{t:a}=C(),[l,r]=u.useReducer(Ce,be),[h,y]=u.useState(!1),c=Q(),{toast:d}=_(),{channelModels:s,update:t}=ve(),[n,g]=u.useState(!1),[A,k]=u.useState(!1),[E,M]=u.useState(!1),[f,V]=u.useState(null),N=u.useMemo(()=>f?f.plans.flatMap(i=>i.items):[],[f]),B=u.useMemo(()=>$(N.flatMap(i=>i.models)),[N]),S=async i=>{y(!0);const v=await we();i||await t(),r({type:"set",payload:v}),y(!1)},b=async i=>{const v=await Ne(i??l);pe(d,a,v,!0),v.status&&ue(c,l.enabled?l.plans:[])};return q(async()=>await S(!0),[]),e.jsxs("div",{className:"plan-config",children:[e.jsx(F,{type:K.Text,title:a("admin.plan.sync"),name:a("admin.plan.sync-site"),placeholder:a("admin.plan.sync-placeholder"),open:A,setOpen:k,defaultValue:"https://api.chatnio.net",alert:a("admin.chatnio-format-only"),onSubmit:async i=>{const v=await ge(i);return V(v),M(!0),!0}}),e.jsx(W,{title:a("admin.plan.sync"),description:a("admin.plan.sync-result",{length:N.length,models:B.length}),open:E,setOpen:M,destructive:!0,onSubmit:async()=>(r({type:"set",payload:f}),f&&await b(f),!0)}),e.jsxs("div",{className:"plan-config-row pb-2",children:[e.jsxs(m,{variant:"outline",onClick:()=>k(!0),children:[e.jsx(xe,{className:"h-4 w-4 mr-2"}),a("admin.plan.sync")]}),e.jsx("div",{className:"grow"}),e.jsx(m,{variant:"outline",size:"icon",className:"mr-2",onClick:()=>g(!n),children:e.jsx(X,{icon:n?e.jsx(ye,{}):e.jsx(Y,{}),className:"h-4 w-4"})}),e.jsx(m,{variant:"outline",className:"mr-2",size:"icon",onClick:async()=>await S(),children:e.jsx(Z,{className:j("h-4 w-4",h&&"animate-spin")})}),e.jsx(m,{variant:"default",size:"icon",onClick:async()=>await b(),loading:!0,children:e.jsx(fe,{className:"h-4 w-4"})})]}),e.jsxs("div",{className:"plan-config-row",children:[e.jsx("p",{children:a("admin.plan.enable")}),e.jsx("div",{className:"grow"}),e.jsx(ee,{checked:l.enabled,onCheckedChange:i=>r({type:"set-enabled",payload:i})})]}),l.enabled&&l.plans.map((i,v)=>e.jsxs("div",{className:"plan-config-card",children:[e.jsx("p",{className:"plan-config-title",children:a(`sub.${z(i.level)}`)}),e.jsxs("div",{className:"plan-editor-row",children:[e.jsxs("p",{className:"select-none flex flex-row items-center mr-2",children:[a("admin.plan.price"),e.jsx(w,{className:"inline-block",content:a("admin.plan.price-tip")})]}),e.jsx(I,{value:i.price,onValueChange:x=>{r({type:"set-price",payload:{level:i.level,price:x}})}})]}),e.jsx("div",{className:"plan-items-wrapper",children:i.items.map((x,o)=>e.jsxs("div",{className:j("plan-item",n&&"stacked"),children:[e.jsxs("div",{className:"plan-editor-row",children:[e.jsxs("p",{className:"plan-editor-label mr-2",children:[a("admin.plan.item-id"),e.jsx(w,{content:a("admin.plan.item-id-placeholder")})]}),e.jsx(D,{value:x.id,onChange:p=>{r({type:"set-item-id",payload:{level:i.level,id:p.target.value,index:o}})},placeholder:a("admin.plan.item-id-placeholder")})]}),!n&&e.jsxs("div",{className:"plan-editor-row",children:[e.jsxs("p",{className:"plan-editor-label mr-2",children:[a("admin.plan.item-name"),e.jsx(w,{content:a("admin.plan.item-name-placeholder")})]}),e.jsx(D,{value:x.name,onChange:p=>{r({type:"set-item-name",payload:{level:i.level,name:p.target.value,index:o}})},placeholder:a("admin.plan.item-name-placeholder")})]}),e.jsxs("div",{className:"plan-editor-row",children:[e.jsxs("p",{className:"plan-editor-label mr-2",children:[a("admin.plan.item-value"),e.jsx(w,{content:a("admin.plan.item-value-tip")})]}),e.jsx(I,{value:x.value,min:-1,acceptNegative:!0,onValueChange:p=>{r({type:"set-item-value",payload:{level:i.level,value:p,index:o}})}})]}),!n&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"plan-editor-row",children:[e.jsxs("p",{className:"plan-editor-label mr-2",children:[a("admin.plan.item-models"),e.jsx(w,{content:a("admin.plan.item-models-tip")})]}),e.jsx(he,{align:"start",value:x.models,onChange:p=>{r({type:"set-item-models",payload:{level:i.level,models:p,index:o}})},placeholder:a("admin.plan.item-models-placeholder",{length:x.models.length}),searchPlaceholder:a("admin.plan.item-models-search-placeholder"),list:s,className:"w-full max-w-full"})]}),e.jsxs("div",{className:"plan-editor-row",children:[e.jsxs("p",{className:"plan-editor-label mr-2",children:[a("admin.plan.item-icon"),e.jsx(w,{content:a("admin.plan.item-icon-tip")})]}),e.jsx("div",{className:"grow"}),e.jsx(ke,{value:x.icon,onValueChange:p=>{r({type:"set-item-icon",payload:{level:i.level,icon:p,index:o}})}})]})]}),e.jsxs("div",{className:j("flex flex-row gap-1",!n&&"flex-wrap"),children:[!n&&e.jsx("div",{className:"grow"}),e.jsxs(m,{variant:"outline",size:n?"icon":"default",onClick:()=>{r({type:"upward-item",payload:{level:i.level,index:o}})},disabled:o===0,children:[e.jsx(ae,{className:j("h-4 w-4",!n&&"mr-1")}),!n&&a("upward")]}),e.jsxs(m,{variant:"outline",size:n?"icon":"default",onClick:()=>{r({type:"downward-item",payload:{level:i.level,index:o}})},disabled:o===i.items.length-1,children:[e.jsx(se,{className:j("h-4 w-4",!n&&"mr-1")}),!n&&a("downward")]}),e.jsxs(m,{variant:"default",size:n?"icon":"default",onClick:()=>{r({type:"remove-item",payload:{level:i.level,index:o}})},children:[e.jsx(le,{className:j("h-4 w-4",!n&&"mr-1")}),!n&&a("remove")]})]})]},o))}),e.jsxs("div",{className:"plan-items-action",children:[e.jsx("div",{className:"grow"}),e.jsx(Me,{plans:l.plans,level:i.level,dispatch:r}),e.jsxs(m,{variant:"default",onClick:()=>{r({type:"add-item",payload:{level:i.level}})},children:[e.jsx(ne,{className:"h-4 w-4 mr-1"}),a("admin.plan.add-item")]})]})]},v)),e.jsxs("div",{className:"flex flex-row flex-wrap gap-1",children:[e.jsx("div",{className:"grow"}),e.jsx(m,{loading:!0,onClick:async()=>await b(),children:a("save")})]})]})}function Oe(){const{t:a}=C();return e.jsx("div",{className:"admin-subscription",children:e.jsxs(R,{className:"admin-card sub-card",children:[e.jsx(U,{className:"select-none",children:e.jsx(G,{children:a("admin.subscription")})}),e.jsx(J,{children:e.jsx(Se,{})})]})})}export{Oe as default};
