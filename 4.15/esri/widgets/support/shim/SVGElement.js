// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/has"],function(h,e,f){Object.defineProperty(e,"__esModule",{value:!0});f.add("esri-svg-classlist","classList"in SVGElement.prototype);var g=function(){function a(b){this._node=b}a.prototype.add=function(b){var c=this._node;c.className.baseVal=(c.className.baseVal+" "+b).trim()};a.prototype.contains=function(b){return-1<this._node.className.baseVal.split(" ").indexOf(b)};a.prototype.remove=function(b){for(var c=this._node,a="",d=0,e=c.className.baseVal.split(" ");d<
e.length;d++){var f=e[d];f!==b&&(a+=f+" ")}c.className.baseVal=a.trim()};a.prototype.toggle=function(b,c){var a=this.contains(b),d;if(d=a?!0!==c&&"remove":!1!==c&&"add")this[d](b);return void 0!==c?c:!a};return a}();e.DOMTokenListSubset=g;f("esri-svg-classlist")||Object.defineProperty(SVGElement.prototype,"classList",{get:function(){return new g(this)}})});