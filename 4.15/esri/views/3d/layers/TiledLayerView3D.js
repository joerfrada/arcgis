// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/assignHelper ../../../core/Error ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ./support/layerViewUpdatingProperties ../terrain/terrainUtils".split(" "),function(p,e,h,d,q,f,k,l,c,g,m){Object.defineProperty(e,"__esModule",{value:!0});e.TiledLayerView3D=function(e){return function(e){function a(){return null!==e&&e.apply(this,
arguments)||this}h(a,e);Object.defineProperty(a.prototype,"imageFormatIsOpaque",{get:function(){return!1},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"isOpaque",{get:function(){return 1<=this.fullOpacity&&this.imageFormatIsOpaque},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"dataLevelRange",{get:function(){var b=this.tileInfo.lods;return this.levelRangeFromScaleRange(b[0].scale,b[b.length-1].scale)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"displayLevelRange",{get:function(){var b=this.tileInfo.lods,b=this.levelRangeFromScaleRange(this.layer.minScale||b[0].scale,this.layer.maxScale||b[b.length-1].scale);this.layer.maxScale&&b.maxLevel++;return b},enumerable:!0,configurable:!0});a.prototype.getTileUrl=function(b,a,n){return this.layer.getTileUrl(b,a,n)};a.prototype._addTilingSchemeMatchPromise=function(){var b=this,a=this._getTileInfoSupportError(this.tileInfo,this.layer.fullExtent);a?this.addResolvingPromise(k.reject(a)):(a=l.whenTrueOnce(this.view,
"basemapTerrain.tilingSchemeLocked").then(function(){var a=b._getTileInfoCompatibilityError(b.tileInfo,b.view.basemapTerrain.tilingScheme);if(a)throw a;}),this.addResolvingPromise(a))};a.prototype._getTileInfoSupportError=function(a,c){if(a=m.checkIfTileInfoSupportedForView(a,c,this.view.spatialReference,this.view.basemapTerrain.manifold)){c={layer:this.layer,error:a};var b=void 0;switch(a.name){case "tilingscheme:local-gcs-not-supported":b=new f("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",
c);break;case "tilingscheme:spatial-reference-mismatch":case "tilingscheme:global-unsupported-spatial-reference":b=new f("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",c);break;default:b=new f("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",c)}return b}return null};a.prototype._getTileInfoCompatibilityError=function(a,c){return c.compatibleWith(a)?null:new f("layerview:tiling-scheme-incompatible",
"The tiling scheme of this layer is incompatible with the tiling scheme of the surface")};a.prototype.levelRangeFromScaleRange=function(a,c){var b={minLevel:0,maxLevel:Infinity},d=this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!d)return b;var e=d.levels[0],d=function(a){a=Math.log(e.scale/a)/Math.LN2;return 1E-9>.5-Math.abs(.5-a%1)?Math.round(a):Math.ceil(a)};null!=a&&0<a&&(b.minLevel=Math.max(0,d(a)));null!=c&&0<c&&(b.maxLevel=Math.max(0,d(c)));return b};a.prototype.isUpdating=
function(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)};d([c.property({readOnly:!0})],a.prototype,"imageFormatIsOpaque",null);d([c.property({readOnly:!0,dependsOn:["view.basemapTerrain.updating"]})],a.prototype,"updating",void 0);d([c.property(g.updatingProgress)],a.prototype,"updatingProgress",void 0);d([c.property(g.updatingProgressValue)],a.prototype,"updatingProgressValue",void 0);d([c.property({readOnly:!0})],a.prototype,"fullExtent",void 0);d([c.property({readOnly:!0,
dependsOn:["fullOpacity","imageFormatIsOpaque"]})],a.prototype,"isOpaque",null);d([c.property({readOnly:!0,dependsOn:["tileInfo","view.basemapTerrain.tilingScheme"]})],a.prototype,"dataLevelRange",null);d([c.property({readOnly:!0,dependsOn:["tileInfo","view.basemapTerrain.tilingScheme","layer.minScale","layer.maxScale"]})],a.prototype,"displayLevelRange",null);d([c.property()],a.prototype,"layer",void 0);d([c.property({readOnly:!0})],a.prototype,"tileInfo",void 0);return a=d([c.subclass("esri.views.3d.layers.TiledLayerView3D")],
a)}(c.declared(e))}});