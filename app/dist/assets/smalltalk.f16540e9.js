import{ah as c}from"./index.9642abf5.js";function u(n,e){for(var t=0;t<e.length;t++){const a=e[t];if(typeof a!="string"&&!Array.isArray(a)){for(const r in a)if(r!=="default"&&!(r in n)){const l=Object.getOwnPropertyDescriptor(a,r);l&&Object.defineProperty(n,r,l.get?l:{enumerable:!0,get:()=>a[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var s,o;function _(){if(o)return s;o=1;function n(e){const t="[a-z][a-zA-Z0-9_]*",a={className:"string",begin:"\\$.{1}"},r={className:"symbol",begin:"#"+e.UNDERSCORE_IDENT_RE};return{name:"Smalltalk",aliases:["st"],keywords:"self super nil true false thisContext",contains:[e.COMMENT('"','"'),e.APOS_STRING_MODE,{className:"type",begin:"\\b[A-Z][A-Za-z0-9_]*",relevance:0},{begin:t+":",relevance:0},e.C_NUMBER_MODE,r,a,{begin:"\\|[ ]*"+t+"([ ]+"+t+")*[ ]*\\|",returnBegin:!0,end:/\|/,illegal:/\S/,contains:[{begin:"(\\|[ ]*)?"+t}]},{begin:"#\\(",end:"\\)",contains:[e.APOS_STRING_MODE,a,e.C_NUMBER_MODE,r]}]}}return s=n,s}var i=_();const f=c(i),m=u({__proto__:null,default:f},[i]);export{m as s};
