import{ah as f}from"./index.9642abf5.js";function _(a,e){for(var r=0;r<e.length;r++){const t=e[r];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in a)){const o=Object.getOwnPropertyDescriptor(t,n);o&&Object.defineProperty(a,n,o.get?o:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var i,s;function O(){if(s)return i;s=1;function a(e){const r={literal:"true false null"},t=[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],n=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],o={end:",",endsWithParent:!0,excludeEnd:!0,contains:n,keywords:r},u={begin:/\{/,end:/\}/,contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(o,{begin:/:/})].concat(t),illegal:"\\S"},l={begin:"\\[",end:"\\]",contains:[e.inherit(o)],illegal:"\\S"};return n.push(u,l),t.forEach(function(E){n.push(E)}),{name:"JSON",contains:n,keywords:r,illegal:"\\S"}}return i=a,i}var c=O();const g=f(c),p=_({__proto__:null,default:g},[c]);export{p as j};
