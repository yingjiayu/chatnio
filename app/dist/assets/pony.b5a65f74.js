import{ah as l}from"./index.9642abf5.js";function f(n,e){for(var o=0;o<e.length;o++){const r=e[o];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in n)){const a=Object.getOwnPropertyDescriptor(r,t);a&&Object.defineProperty(n,t,a.get?a:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var i,s;function d(){if(s)return i;s=1;function n(e){const o={keyword:"actor addressof and as be break class compile_error compile_intrinsic consume continue delegate digestof do else elseif embed end error for fun if ifdef in interface is isnt lambda let match new not object or primitive recover repeat return struct then trait try type until use var where while with xor",meta:"iso val tag trn box ref",literal:"this false true"},r={className:"string",begin:'"""',end:'"""',relevance:10},t={className:"string",begin:'"',end:'"',contains:[e.BACKSLASH_ESCAPE]},a={className:"string",begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE],relevance:0},E={className:"type",begin:"\\b_?[A-Z][\\w]*",relevance:0},_={begin:e.IDENT_RE+"'",relevance:0};return{name:"Pony",keywords:o,contains:[E,r,t,a,_,{className:"number",begin:"(-?)(\\b0[xX][a-fA-F0-9]+|\\b0[bB][01]+|(\\b\\d+(_\\d+)?(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",relevance:0},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]}}return i=n,i}var c=d();const u=l(c),g=f({__proto__:null,default:u},[c]);export{g as p};
