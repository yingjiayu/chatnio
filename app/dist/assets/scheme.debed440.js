import{ah as E}from"./index.9642abf5.js";function y(a,n){for(var e=0;e<n.length;e++){const t=n[e];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in a)){const i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(a,r,i.get?i:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var u,b;function x(){if(b)return u;b=1;function a(n){const e="[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+",t="(-|\\+)?\\d+([./]\\d+)?",r=t+"[+\\-]"+t+"i",i={$pattern:e,"builtin-name":"case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"},g={className:"literal",begin:"(#t|#f|#\\\\"+e+"|#\\\\.)"},c={className:"number",variants:[{begin:t,relevance:0},{begin:r,relevance:0},{begin:"#b[0-1]+(/[0-1]+)?"},{begin:"#o[0-7]+(/[0-7]+)?"},{begin:"#x[0-9a-f]+(/[0-9a-f]+)?"}]},s=n.QUOTE_STRING_MODE,p=[n.COMMENT(";","$",{relevance:0}),n.COMMENT("#\\|","\\|#")],o={begin:e,relevance:0},l={className:"symbol",begin:"'"+e},m={endsWithParent:!0,relevance:0},d={variants:[{begin:/'/},{begin:"`"}],contains:[{begin:"\\(",end:"\\)",contains:["self",g,s,c,o,l]}]},h={className:"name",relevance:0,begin:e,keywords:i},f={variants:[{begin:"\\(",end:"\\)"},{begin:"\\[",end:"\\]"}],contains:[{begin:/lambda/,endsWithParent:!0,returnBegin:!0,contains:[h,{endsParent:!0,variants:[{begin:/\(/,end:/\)/},{begin:/\[/,end:/\]/}],contains:[o]}]},h,m]};return m.contains=[g,c,s,o,l,d,f].concat(p),{name:"Scheme",illegal:/\S/,contains:[n.SHEBANG(),c,s,l,d,f].concat(p)}}return u=a,u}var v=x();const M=E(v),N=y({__proto__:null,default:M},[v]);export{N as s};
