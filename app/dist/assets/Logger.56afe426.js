import{c as x,aM as i,aN as m,u as d,j as e,J as h,K as j,O as w,P as p,r,m as u,W as y,bz as f,B as N,cr as L,n as b,d as v,d4 as C,cf as k,bi as S,bh as T}from"./index.9642abf5.js";import{P as E}from"./Paragraph.93a128db.js";/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=x("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);async function R(){try{return(await i.get("/admin/logger/list")).data||[]}catch(s){return console.warn(s),[]}}async function U(s){try{return(await i.get(`/admin/logger/console?n=${s??100}`)).data.content}catch(a){return console.warn(a),`failed to get info from server: ${m(a)}`}}async function q(s){try{const a=await i.get("/admin/logger/download",{responseType:"blob",params:{path:s}}),n=window.URL.createObjectURL(new Blob([a.data])),t=document.createElement("a");t.href=n,t.setAttribute("download",s),document.body.appendChild(t),t.click()}catch(a){console.warn(a)}}async function B(s){try{return(await i.post(`/admin/logger/delete?path=${s}`)).data}catch(a){return console.warn(a),{status:!1,error:m(a)}}}function D({path:s,size:a,onUpdate:n}){const{t}=d(),{toast:o}=v(),c=r.useMemo(()=>C(a),[a]);return e.jsxs("div",{className:"logger-item",children:[e.jsx("div",{className:"logger-item-title",children:s}),e.jsx("div",{className:"grow"}),e.jsx("div",{className:"logger-item-size",children:c}),e.jsx("div",{className:"logger-item-action",onClick:async()=>q(s),children:e.jsx(k,{className:"w-3 h-3"})}),e.jsx("div",{className:"logger-item-action",children:e.jsx(S,{className:"w-3 h-3 text-red-600",onClick:async()=>{const l=await B(s);l&&n(),T(o,t,l,!0)}})})]})}function I(){const[s,a]=r.useState([]),n=async()=>a(await R());return u(async()=>{await n()},[]),e.jsx("div",{className:"logger-list",children:s.map((t,o)=>r.createElement(D,{...t,key:o,onUpdate:n}))})}function M(){const{t:s}=d(),[a,n]=r.useState(""),[t,o]=r.useState(!1),[c,l]=r.useState(100),g=async()=>{t||(o(!0),n(await U(c)),o(!1))};return u(g,[]),e.jsxs(E,{title:s("admin.logger.console"),className:"logger-container mb-2",isCollapsed:!0,children:[e.jsxs("div",{className:"logger-toolbar",children:[e.jsx(y,{children:s("admin.logger.consoleLength")}),e.jsx(f,{value:c,onValueChange:l,min:1,max:1e3}),e.jsx("div",{className:"grow"}),e.jsx(N,{onClick:g,variant:"outline",size:"icon",children:e.jsx(L,{className:b("w-4 h-4",t&&"animate-spin")})})]}),e.jsxs("div",{className:"logger-console",children:[e.jsx(z,{className:"w-4 h-4 console-icon"}),e.jsx("pre",{className:"thin-scrollbar",children:a})]})]})}function A(){const{t:s}=d();return e.jsx("div",{className:"logger",children:e.jsxs(h,{className:"admin-card logger-card",children:[e.jsx(j,{className:"select-none",children:e.jsx(w,{children:s("admin.logger.title")})}),e.jsxs(p,{children:[e.jsx(M,{}),e.jsx(I,{})]})]})})}export{A as default};
