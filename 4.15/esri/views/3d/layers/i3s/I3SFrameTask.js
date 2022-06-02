// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/arrayUtils","../../../support/Scheduler"],function(m,g,h,k){Object.defineProperty(g,"__esModule",{value:!0});var l=function(){function c(a){var b=this;this.referenceCount=0;this.callbacks=[];this.runIndex=0;this.handle=a.registerTask(k.Task.I3S_CONTROLLER,function(a){return b.update(a)},function(){return b.needsUpdate()})}c.prototype.destroy=function(){this.handle&&(this.handle.remove(),this.handle=null)};c.prototype.needsUpdate=function(){for(var a=0,
b=this.callbacks;a<b.length;a++)if(b[a].needsUpdate())return!0;return!1};c.prototype.update=function(a){this.sort();for(var b=this.callbacks,c={numIndexLoading:0,numNodesLoading:0},d=0;d<b.length&&!a.done;++d)b[d].priority=b[d].update(a,c),this.runIndex=d};c.prototype.sort=function(){for(var a=this.callbacks,b=a.length,c=this.runIndex;0<c;c--){for(var d=a[c-1],e=c;e<a.length&&d.priority<=a[e].priority&&(e!==b||d.priority<a[e].priority);)a[e-1]=a[e],e++;a[e-1]=d;b=e-1}this.runIndex=0};c.prototype.add=
function(a){this.sort();a.priority=Infinity;this.callbacks.unshift(a)};c.prototype.remove=function(a){h.removeUnordered(this.callbacks,a);this.runIndex=this.callbacks.length;this.sort()};return c}(),f=new Map;g.addTask=function(c,a){var b=f.get(c);null==b&&(b=new l(c),f.set(c,b));b.add(a);return{remove:function(){null!=b&&(b.remove(a),0<b.callbacks.length||(f.delete(c),b.destroy()),b=null)}}}});