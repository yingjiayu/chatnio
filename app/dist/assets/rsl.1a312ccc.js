import{ah as l}from"./index.9642abf5.js";function m(r,e){for(var n=0;n<e.length;n++){const t=e[n];if(typeof t!="string"&&!Array.isArray(t)){for(const o in t)if(o!=="default"&&!(o in r)){const a=Object.getOwnPropertyDescriptor(t,o);a&&Object.defineProperty(r,o,a.get?a:{enumerable:!0,get:()=>t[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var s,i;function p(){if(i)return s;i=1;function r(e){return{name:"RenderMan RSL",keywords:{keyword:"float color point normal vector matrix while for if do return else break extern continue",built_in:"abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp faceforward filterstep floor format fresnel incident length lightsource log match max min mod noise normalize ntransform opposite option phong pnoise pow printf ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan texture textureinfo trace transform vtransform xcomp ycomp zcomp"},illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_NUMBER_MODE,{className:"meta",begin:"#",end:"$"},{className:"class",beginKeywords:"surface displacement light volume imager",end:"\\("},{beginKeywords:"illuminate illuminance gather",end:"\\("}]}}return s=r,s}var c=p();const f=l(c),d=m({__proto__:null,default:f},[c]);export{d as r};
