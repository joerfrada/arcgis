// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/declareExtendsHelper ../../../../core/arrayUtils ../../../../core/maybe ../../../../layers/graphics/dehydratedFeatures".split(" "),function(d,f,l,m,h,g,k){Object.defineProperty(f,"__esModule",{value:!0});d=function(){function b(a){var c=this;this.graphicsCore=a;this.idToState=new Map;this.states=new Set;var b=a.owner.layer&&a.owner.layer.objectIdField;b?(this.getGraphicId=function(a){return k.getObjectId(a,
b)},this.getGraphics3DGraphicById=function(a){return c.graphicsCore.getGraphics3DGraphicByObjectId(a)}):(this.getGraphicId=function(a){return a.uid},this.getGraphics3DGraphicById=function(a){return c.graphicsCore.getGraphics3DGraphicById(a)})}b.prototype.destroy=function(){var a=this;this.idToState.clear();this.states.forEach(function(c,b){return a.remove(b)})};b.prototype.add=function(a){var c=this,b={remove:function(){return c.remove(a)}};if(this.states.has(a))return b;var d=this.getGraphicId(a.graphic),
e=this.getGraphics3DGraphicById(d);this.states.has(a)||this.states.add(a);this.ensureStateList(d).push(a);a.displaying=g.isSome(e)?e.isVisible():!1;a.isDraped=g.isSome(e)?e.isDraped:!1;a.tracking=!0;return b};b.prototype.remove=function(a){if(this.states.has(a)){if(this.idToState.size){var c=this.getGraphicId(a.graphic),b=this.idToState.get(c);b&&(h.remove(b,a),0===b.length&&this.idToState.delete(c))}this.states.delete(a);a.tracking=!1;a.displaying=!1}};b.prototype.addGraphic=function(a){this.forEachState(a,
function(c){c.displaying=a.isVisible();c.isDraped=a.isDraped;c.emit("changed",{})})};b.prototype.removeGraphic=function(a){this.forEachState(a,function(a){a.displaying=!1;a.isDraped=!1})};b.prototype.updateGraphicGeometry=function(a){this.forEachState(a,function(a){a.emit("changed",{})})};b.prototype.updateGraphicVisibility=function(a){this.forEachState(a,function(b){b.displaying=a.isVisible()})};b.prototype.allGraphicsDeleted=function(){this.states.forEach(function(a){a.displaying=!1})};b.prototype.ensureStateList=
function(a){var b=this.idToState.get(a);if(b)return b;b=[];this.idToState.set(a,b);return b};b.prototype.forEachState=function(a,b){0!==this.states.size&&0!==this.idToState.size&&(a=this.getGraphicId(a.graphic),a=this.idToState.get(a),null!=a&&a.forEach(b))};return b}();f.GraphicStateTracking=d});