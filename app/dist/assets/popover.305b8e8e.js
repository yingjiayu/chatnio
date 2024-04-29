import{$ as D,cV as h,r as e,bQ as C,cW as I,_ as p,bN as O,cU as M,cX as y,cY as N,bP as g,cZ as T,c_ as k,c$ as S,d0 as j,bL as K,d1 as z,d2 as G,G as L,d3 as U,j as x,n as V}from"./index.9642abf5.js";const E="Popover",[_,ae]=D(E,[h]),m=h(),[Z,l]=_(E),H=o=>{const{__scopePopover:s,children:a,open:d,defaultOpen:c,onOpenChange:t,modal:n=!1}=o,r=m(s),f=e.useRef(null),[u,b]=e.useState(!1),[v=!1,i]=K({prop:d,defaultProp:c,onChange:t});return e.createElement(z,r,e.createElement(Z,{scope:s,contentId:G(),triggerRef:f,open:v,onOpenChange:i,onOpenToggle:e.useCallback(()=>i(P=>!P),[i]),hasCustomAnchor:u,onCustomAnchorAdd:e.useCallback(()=>b(!0),[]),onCustomAnchorRemove:e.useCallback(()=>b(!1),[]),modal:n},a))},Q="PopoverTrigger",W=e.forwardRef((o,s)=>{const{__scopePopover:a,...d}=o,c=l(Q,a),t=m(a),n=O(s,c.triggerRef),r=e.createElement(L.button,p({type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":w(c.open)},d,{ref:n,onClick:g(o.onClick,c.onOpenToggle)}));return c.hasCustomAnchor?r:e.createElement(U,p({asChild:!0},t),r)}),R="PopoverPortal",[X,Y]=_(R,{forceMount:void 0}),q=o=>{const{__scopePopover:s,forceMount:a,children:d,container:c}=o,t=l(R,s);return e.createElement(X,{scope:s,forceMount:a},e.createElement(C,{present:a||t.open},e.createElement(I,{asChild:!0,container:c},d)))},$="PopoverContent",B=e.forwardRef((o,s)=>{const a=Y($,o.__scopePopover),{forceMount:d=a.forceMount,...c}=o,t=l($,o.__scopePopover);return e.createElement(C,{present:d||t.open},t.modal?e.createElement(J,p({},c,{ref:s})):e.createElement(ee,p({},c,{ref:s})))}),J=e.forwardRef((o,s)=>{const a=l($,o.__scopePopover),d=e.useRef(null),c=O(s,d),t=e.useRef(!1);return e.useEffect(()=>{const n=d.current;if(n)return M(n)},[]),e.createElement(y,{as:N,allowPinchZoom:!0},e.createElement(A,p({},o,{ref:c,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:g(o.onCloseAutoFocus,n=>{var r;n.preventDefault(),t.current||(r=a.triggerRef.current)===null||r===void 0||r.focus()}),onPointerDownOutside:g(o.onPointerDownOutside,n=>{const r=n.detail.originalEvent,f=r.button===0&&r.ctrlKey===!0,u=r.button===2||f;t.current=u},{checkForDefaultPrevented:!1}),onFocusOutside:g(o.onFocusOutside,n=>n.preventDefault(),{checkForDefaultPrevented:!1})})))}),ee=e.forwardRef((o,s)=>{const a=l($,o.__scopePopover),d=e.useRef(!1),c=e.useRef(!1);return e.createElement(A,p({},o,{ref:s,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var n;if((n=o.onCloseAutoFocus)===null||n===void 0||n.call(o,t),!t.defaultPrevented){var r;d.current||(r=a.triggerRef.current)===null||r===void 0||r.focus(),t.preventDefault()}d.current=!1,c.current=!1},onInteractOutside:t=>{var n,r;(n=o.onInteractOutside)===null||n===void 0||n.call(o,t),t.defaultPrevented||(d.current=!0,t.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const f=t.target;((r=a.triggerRef.current)===null||r===void 0?void 0:r.contains(f))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&c.current&&t.preventDefault()}}))}),A=e.forwardRef((o,s)=>{const{__scopePopover:a,trapFocus:d,onOpenAutoFocus:c,onCloseAutoFocus:t,disableOutsidePointerEvents:n,onEscapeKeyDown:r,onPointerDownOutside:f,onFocusOutside:u,onInteractOutside:b,...v}=o,i=l($,a),P=m(a);return T(),e.createElement(k,{asChild:!0,loop:!0,trapped:d,onMountAutoFocus:c,onUnmountAutoFocus:t},e.createElement(S,{asChild:!0,disableOutsidePointerEvents:n,onInteractOutside:b,onEscapeKeyDown:r,onPointerDownOutside:f,onFocusOutside:u,onDismiss:()=>i.onOpenChange(!1)},e.createElement(j,p({"data-state":w(i.open),role:"dialog",id:i.contentId},P,v,{ref:s,style:{...v.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))});function w(o){return o?"open":"closed"}const oe=H,te=W,ce=q,F=B,se=oe,de=te,ne=e.forwardRef(({className:o,align:s="center",sideOffset:a=4,...d},c)=>x.jsx(ce,{children:x.jsx(F,{ref:c,align:s,sideOffset:a,className:V("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",o),...d})}));ne.displayName=F.displayName;export{se as P,de as a,ne as b};