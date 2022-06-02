// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/accessorSupport/decorators ../../../layers/support/LOD".split(" "),function(v,w,r,f,t,d,u){return function(l){function c(a){a=l.call(this,a)||this;a._lodByScale={};a._scales=[];a.effectiveLODs=null;a.effectiveMinZoom=-1;a.effectiveMaxZoom=-1;a.effectiveMinScale=0;a.effectiveMaxScale=0;a.lods=null;a.minZoom=-1;a.maxZoom=-1;a.minScale=0;a.maxScale=0;a.snapToZoom=
!0;return a}r(c,l);k=c;c.prototype.initialize=function(){var a=this,b,h,e=this.lods;h=this.minScale;b=this.maxScale;var c=this.minZoom,g=this.maxZoom,d=-1,f=-1,k=!1,l=!1;0!==h&&0!==b&&h<b&&(b=[b,h],h=b[0],b=b[1]);if(e&&e.length){e=e.map(function(a){return a.clone()});e.sort(function(a,b){return b.scale-a.scale});e.forEach(function(a,b){return a.level=b});for(var n,p=0,q=e;p<q.length;p++){var m=q[p];!k&&0<h&&h>=m.scale&&(d=m.level,k=!0);!l&&0<b&&b>=m.scale&&(f=n?n.level:-1,l=!0);n=m}-1===c&&(c=0===
h?0:d);-1===g&&(g=0===b?e.length-1:f);c=Math.max(c,0);c=Math.min(c,e.length-1);g=Math.max(g,0);g=Math.min(g,e.length-1);c>g&&(h=[g,c],c=h[0],g=h[1]);h=e[c].scale;b=e[g].scale;e.splice(0,c);e.splice(g-c+1,e.length);e.forEach(function(b,c){a._lodByScale[b.scale]=b;a._scales[c]=b.scale});this._set("effectiveLODs",e);this._set("effectiveMinZoom",c);this._set("effectiveMaxZoom",g)}this._set("effectiveMinScale",h);this._set("effectiveMaxScale",b)};c.prototype.constrain=function(a,b){if(b&&a.scale===b.scale)return a;
var c=this.effectiveMinScale,e=this.effectiveMaxScale,d=a.targetGeometry,g=b&&b.targetGeometry,f=0!==c&&a.scale>c;if(0!==e&&a.scale<e||f)c=f?c:e,g&&(b=(c-b.scale)/(a.scale-b.scale),d.x=g.x+(d.x-g.x)*b,d.y=g.y+(d.y-g.y)*b),a.scale=c;this.snapToZoom&&this.effectiveLODs&&(a.scale=this._getClosestScale(a.scale));return a};c.prototype.fit=function(a){if(!this.effectiveLODs||!this.snapToZoom)return this.constrain(a,null);var b=this.scaleToZoom(a.scale);a.scale=this.zoomToScale(.99<Math.abs(b-Math.floor(b))?
Math.round(b):Math.floor(b));return a};c.prototype.zoomToScale=function(a){if(!this.effectiveLODs)return 0;a-=this.effectiveMinZoom;a=Math.max(0,a);var b=this._scales;if(0>=a)return b[0];if(a>=b.length)return b[b.length-1];var c=Math.round(a);return b[c]+(c-a)*(b[Math.round(a-.5)]-b[c])};c.prototype.scaleToZoom=function(a){if(!this.effectiveLODs)return-1;var b=this._scales,c,e;if(a>=b[0])return this.effectiveMinZoom;if(a<=b[b.length-1])return this.effectiveMaxZoom;for(var d=0;d<b.length-1;d++){c=
b[d];e=b[d+1];if(e===a)return b=d+this.effectiveMinZoom,b+1;if(c>a&&e<a)return b=d+this.effectiveMinZoom,b+1-(a-e)/(c-e)}};c.prototype.snapToClosestScale=function(a){if(!this.effectiveLODs)return a;a=this.scaleToZoom(a);return this.zoomToScale(Math.round(a))};c.prototype.snapToNextScale=function(a,b){void 0===b&&(b=.5);if(!this.effectiveLODs)return a*b;a=Math.round(this.scaleToZoom(a));return this.zoomToScale(a+1)};c.prototype.snapToPreviousScale=function(a,b){void 0===b&&(b=2);if(!this.effectiveLODs)return a*
b;a=Math.round(this.scaleToZoom(a));return this.zoomToScale(a-1)};c.prototype.clone=function(){return new k({lods:this.lods,minZoom:this.minZoom,maxZoom:this.maxZoom,minScale:this.minScale,maxScale:this.maxScale})};c.prototype._getClosestScale=function(a){if(this._lodByScale[a])return this._lodByScale[a].scale;a=this._scales.reduce(function(b,c){return Math.abs(c-a)<=Math.abs(b-a)?c:b},this._scales[0]);return this._lodByScale[a].scale};var k;f([d.property({readOnly:!0})],c.prototype,"effectiveLODs",
void 0);f([d.property({readOnly:!0})],c.prototype,"effectiveMinZoom",void 0);f([d.property({readOnly:!0})],c.prototype,"effectiveMaxZoom",void 0);f([d.property({readOnly:!0})],c.prototype,"effectiveMinScale",void 0);f([d.property({readOnly:!0})],c.prototype,"effectiveMaxScale",void 0);f([d.property({type:[u]})],c.prototype,"lods",void 0);f([d.property()],c.prototype,"minZoom",void 0);f([d.property()],c.prototype,"maxZoom",void 0);f([d.property()],c.prototype,"minScale",void 0);f([d.property()],c.prototype,
"maxScale",void 0);f([d.property()],c.prototype,"snapToZoom",void 0);return c=k=f([d.subclass("esri.views.2d.constraints.ZoomConstraint")],c)}(d.declared(t))});