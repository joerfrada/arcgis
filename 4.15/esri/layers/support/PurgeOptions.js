// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/decorateHelper ../../core/tsSupport/declareExtendsHelper ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(h,k,c,f,g,b){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.age=null;a.displayCount=null;a.maxObservations=1;return a}f(a,d);e=a;a.prototype.clone=function(){return new e({age:this.age,displayCount:this.displayCount,maxObservations:this.maxObservations})};var e;c([b.property({type:Number,
json:{write:!0}})],a.prototype,"age",void 0);c([b.property({type:Number,json:{write:!0}})],a.prototype,"displayCount",void 0);c([b.property({type:Number,json:{write:!0}})],a.prototype,"maxObservations",void 0);return a=e=c([b.subclass("esri.layers.support.PurgeOptions")],a)}(b.declared(g.JSONSupport))});