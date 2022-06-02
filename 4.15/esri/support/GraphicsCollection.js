// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/decorateHelper ../core/tsSupport/declareExtendsHelper ../Graphic ../core/Collection ../core/collectionUtils ../core/accessorSupport/decorators ../core/accessorSupport/ensureType".split(" "),function(q,d,g,l,m,n,h,f,p){Object.defineProperty(d,"__esModule",{value:!0});var k=n.ofType(m),e=function(c){function b(a){var b=c.call(this,a)||this;b.on("before-add",function(a){a.item||a.preventDefault()});b.on("after-add",function(a){return b._own(a.item)});b.on("after-remove",
function(a){a.item.layer=null});return b}l(b,c);b.prototype.destroy=function(){this._unownAll()};Object.defineProperty(b.prototype,"owner",{get:function(){return this._get("owner")},set:function(a){a!==this._get("owner")&&(this._unownAll(),this._set("owner",a),this._ownAll())},enumerable:!0,configurable:!0});b.prototype._createNewInstance=function(a){return new k(a)};b.prototype._ownAll=function(){var a=this;this.items.forEach(function(b){return a._own(b)})};b.prototype._own=function(a){a.layer&&
"group"!==a.layer.type&&"remove"in a.layer&&a.layer!==this.owner&&a.layer.remove(a);a.layer=this.owner};b.prototype._unownAll=function(){var a=this;this.items.forEach(function(b){return a._unown(b)})};b.prototype._unown=function(a){a.layer===this.owner&&(a.layer=null)};g([f.property()],b.prototype,"owner",null);return b=g([f.subclass("esri.support.GraphicsCollection")],b)}(f.declared(k));d.GraphicsCollection=e;d.castGraphicsCollection=function(c){if(c=p.default(e,c))c.owner=this;return c};d.graphicsCollectionProperty=
{type:e,cast:h.castForReferenceSetter,set:function(c){c=h.referenceSetter(c,this._get("graphics"),e);c.owner=this;this._set("graphics",c)}};d.default=e});