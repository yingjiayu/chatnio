import{ah as p}from"./index.9642abf5.js";function d(n,s){for(var i=0;i<s.length;i++){const r=s[i];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in n)){const t=Object.getOwnPropertyDescriptor(r,e);t&&Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var a,c;function m(){if(c)return a;c=1;function n(e){return e?typeof e=="string"?e:e.source:null}function s(...e){return e.map(o=>n(o)).join("")}function i(...e){return"("+e.map(o=>n(o)).join("|")+")"}function r(e){const t="lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid split  cint sin datepart ltrim sqr time derived eval date formatpercent exp inputbox left ascw chrw regexp cstr err".split(" "),o=["server","response","request","scriptengine","scriptenginebuildversion","scriptengineminorversion","scriptenginemajorversion"],u={begin:s(i(...t),"\\s*\\("),relevance:0,keywords:{built_in:t}};return{name:"VBScript",aliases:["vbs"],case_insensitive:!0,keywords:{keyword:"call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",built_in:o,literal:"true false null nothing empty"},illegal:"//",contains:[u,e.inherit(e.QUOTE_STRING_MODE,{contains:[{begin:'""'}]}),e.COMMENT(/'/,/$/,{relevance:0}),e.C_NUMBER_MODE]}}return a=r,a}var l=m();const f=p(l),g=d({__proto__:null,default:f},[l]);export{g as v};
