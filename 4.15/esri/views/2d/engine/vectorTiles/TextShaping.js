// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../webgl/Rect"],function(u,y,z){Object.defineProperty(y,"__esModule",{value:!0});u=function(){function k(c,d,e,b,g,h,a,f){this._glyphItems=c;this._maxWidth=d;this._lineHeight=e;this._letterSpacing=b;this._offset=g;this._hAnchor=h;this._vAnchor=a;this._justify=f}k.prototype.getShaping=function(c,d){for(var e=this._letterSpacing,b=this._lineHeight,g=this._justify,h=this._maxWidth,a=[],f=0,l=0,v=0,p=0,q=-1,r=0,k=-1,u=c.length,w=0;w<u;w++){var x=c.charCodeAt(w);if(10===x){if(w!==
u-1){if(q>=p){var f=a[q],m=f.x+f.glyphMosaicItem.metrics.advance,r=Math.max(m,r);g&&this._applyJustification(a,p,q);p=a.length}l=d?l-b:l+b;f=0;++v}}else{for(var m=void 0,t=0,n=this._glyphItems;t<n.length&&!(m=n[t][x]);t++);if(m){a.push({codePoint:x,x:f,y:l,glyphMosaicItem:m});f+=m.metrics.advance+e;if(0<h&&f>h&&0<=k){t=k+1;m=a[t].x;r=Math.max(m,r);for(n=t;n<a.length;n++)a[n].y=d?a[n].y-b:a[n].y+b,a[n].x-=m;g&&this._applyJustification(a,p,k);l=d?l-b:l+b;f-=m;++v;p=t;k=-1}++q;32===x&&(k=a.length-1)}}}q>=
p&&(f=a[q],r=Math.max(r,f.x+f.glyphMosaicItem.metrics.advance),g&&this._applyJustification(a,p,q));if(0<a.length)for(c=(g-this._hAnchor)*r,e=(-this._vAnchor*(v+1)+.5)*b,d&&v&&(e+=v*b),c+=this._offset[0],e+=this._offset[1],d=0;d<a.length;d++)b=a[d],b.x+=c,b.y+=e;return a};k.getBox=function(c){if(!c.length)return null;for(var d=Infinity,e=Infinity,b=0,g=0,h=0;h<c.length;h++)var a=c[h],f=a.glyphMosaicItem.metrics,l=f.height,k=a.x,a=a.y-(l-Math.abs(f.top)),f=k+f.width+f.left,l=a+l,d=Math.min(d,k),b=Math.max(b,
f),e=Math.min(e,a),g=Math.max(g,l);return{x:d,y:e,width:b-d,height:g-e}};k.addDecoration=function(c,d){var e=c.length;if(0!==e){for(var b=c[0].x+c[0].glyphMosaicItem.metrics.left,g=c[0].y,h=1;h<e;h++){var a=c[h];if(a.y!==g){var f=c[h-1].x+c[h-1].glyphMosaicItem.metrics.left+c[h-1].glyphMosaicItem.metrics.width;c.push({codePoint:0,x:b,y:g+d-3,glyphMosaicItem:{sdf:!0,rect:new z.default(4,0,4,8),metrics:{width:f-b,height:8,left:0,top:0,advance:0},page:0,code:0}});g=a.y;b=a.x+a.glyphMosaicItem.metrics.left}}e=
c[e-1].x+c[e-1].glyphMosaicItem.metrics.left+c[e-1].glyphMosaicItem.metrics.width;c.push({codePoint:0,x:b,y:g+d-3,glyphMosaicItem:{sdf:!0,rect:new z.default(4,0,4,8),metrics:{width:e-b,height:8,left:0,top:0,advance:0},page:0,code:0}})}};k.prototype._applyJustification=function(c,d,e){for(var b=c[e],b=(b.x+b.glyphMosaicItem.metrics.advance)*this._justify;d<=e;d++)c[d].x-=b};return k}();y.TextShaping=u});