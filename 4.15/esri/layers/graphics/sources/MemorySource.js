// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../geometry ../../../Graphic ../../../core/Collection ../../../core/Error ../../../core/has ../../../core/Loadable ../../../core/Logger ../../../core/maybe ../../../core/Promise ../../../core/promiseUtils ../../../core/workers ../../../core/accessorSupport/decorators ../../../core/accessorSupport/ensureType ../../../tasks/operations/zscale ../../../tasks/support/FeatureSet".split(" "),
function(l,t,F,p,P,y,u,w,D,G,z,H,I,J,A,K,E,L,q,M,B,N){Object.defineProperty(t,"__esModule",{value:!0});var O=0,C=J.getLogger("esri.layers.graphics.sources.MemorySource");l=function(l){function b(a){a=l.call(this,a)||this;a._idToClientGraphic=null;a.type="memory";return a}F(b,l);b.prototype.load=function(a){a=A.isSome(a)?a.signal:null;this.addResolvingPromise(this._startWorker(a));return E.resolve(this)};Object.defineProperty(b.prototype,"workerGeometryType",{get:function(){var a=this.layer&&this.layer.geometryType;
return a?this._geometryTypeRequiresClientGraphicMapping(a)?"polygon":a:null},enumerable:!0,configurable:!0});b.prototype.applyEdits=function(a){var c=this;return this.load().then(function(){return c._applyEdits(a)})};b.prototype.openPorts=function(){var a=this;return this.load().then(function(){return a._connection.openPorts()})};b.prototype.queryFeatures=function(a,c){void 0===c&&(c={});return u(this,void 0,void 0,function(){var d,b,h,f,k,e,r,m;return y(this,function(g){switch(g.label){case 0:return[4,
this.load(c)];case 1:return g.sent(),[4,this._connection.invoke("queryFeatures",a?a.toJSON():null,c)];case 2:d=g.sent();B.applyFeatureSetZUnitScaling(a,this.layer.spatialReference,d);b=N.fromJSON(d);if(!this._requiresClientGraphicMapping())return[2,b];h=this.layer.objectIdField;f=0;for(k=b.features;f<k.length;f++)if(e=k[f],r=e.attributes[h],m=this._idToClientGraphic.get(r))e.geometry=m.geometry;b.geometryType=this.layer.geometryType;return[2,b]}})})};b.prototype.queryFeaturesJSON=function(a,c){void 0===
c&&(c={});return u(this,void 0,void 0,function(){var b;return y(this,function(d){switch(d.label){case 0:return this._requiresClientGraphicMapping()?[2,E.reject(new z("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)"))]:[4,this.load(c)];case 1:return d.sent(),[4,this._connection.invoke("queryFeatures",a?a.toJSON():null,c)];case 2:return b=d.sent(),B.applyFeatureSetZUnitScaling(a,this.layer.spatialReference,b),[2,b]}})})};b.prototype.queryFeatureCount=
function(a,c){var b=this;void 0===c&&(c={});return this.load(c).then(function(){return b._connection.invoke("queryFeatureCount",a?a.toJSON():null,c)})};b.prototype.queryObjectIds=function(a,c){var b=this;void 0===c&&(c={});return this.load(c).then(function(){return b._connection.invoke("queryObjectIds",a?a.toJSON():null,c)})};b.prototype.queryExtent=function(a,c){var b=this;void 0===c&&(c={});return this.load(c).then(function(){return b._connection.invoke("queryExtent",a?a.toJSON():null,c)}).then(function(a){return{count:a.count,
extent:w.Extent.fromJSON(a.extent)}})};b.prototype._applyEdits=function(a){var c=this;if(!this._connection)throw new z("feature-layer-source:edit-failure","Memory source not loaded");var b=this.layer.objectIdField,g=null,h=[],f=[],k=function(a){return"objectId"in a&&null!=a.objectId?a.objectId:"attributes"in a&&null!=a.attributes[b]?a.attributes[b]:null};a.addFeatures&&(g=this._prepareAddFeatures(a.addFeatures));if(a.deleteFeatures)for(var e=0,r=a.deleteFeatures;e<r.length;e++){var m=r[e],n=k(m);
null!=n&&h.push(n)}var x=a.updateFeatures&&this._idToClientGraphic?new Map:null;if(a.updateFeatures)for(e=0,a=a.updateFeatures;e<a.length;e++)m=a[e],f.push(this._serializeFeature(m)),x&&(n=k(m),null!=n&&x.set(n,m));B.unapplyEditsZUnitScaling(g?g.features:null,f,this.layer.spatialReference);return this._connection.invoke("applyEdits",{adds:g?g.features:[],updates:f,deletes:h}).then(function(a){var b=a.featureEditResults;c.fullExtent=a.fullExtent;g&&g.finish(b.uidToObjectId);if(c._idToClientGraphic){if(x){a=
0;for(var d=b.updateResults;a<d.length;a++){var e=d[a];e.success&&(e=x.get(e.objectId),null!=e&&c._addIdToClientGraphic(e))}}a=0;for(d=b.deleteResults;a<d.length;a++)e=d[a],e.success&&c._idToClientGraphic.delete(e.objectId)}return c._createEditsResult(b)})};b.prototype._createEditsResult=function(a){return{addFeatureResults:a.addResults?a.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:a.deleteResults?
a.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}};b.prototype._createFeatureEditResult=function(a){var b=!0===a.success?null:a.error||{code:void 0,description:void 0};return{objectId:a.objectId,globalId:a.globalId,error:b?new z("feature-layer-source:edit-failure",b.description,{code:b.code}):null}};b.prototype._prepareAddFeatures=function(a){for(var b=new Map,d=Array(a.length),g=null,h=0;h<a.length;h++){var f=
a[h],k=this._serializeFeature(f);!g&&A.isSome(f.geometry)&&(g=f.geometry.type);d[h]=k;b.set(""+k.uid,f)}var e=this;return{features:d,inferredGeometryType:g,finish:function(a){var c=e.sourceJSON.objectIdField,d;for(d in a){var g=a[d],f=b.get(d);f&&(f.attributes||(f.attributes={}),-1===g?delete f.attributes[c]:f.attributes[c]=g,e._addIdToClientGraphic(f))}}}};b.prototype._addIdToClientGraphic=function(a){if(this._idToClientGraphic){var b=this.sourceJSON.objectIdField,b=a.attributes&&a.attributes[b];
null!=b&&this._idToClientGraphic.set(b,a)}};b.prototype._requiresClientGraphicMapping=function(){return this._geometryTypeRequiresClientGraphicMapping(this.layer.geometryType||this.sourceJSON.geometryType)};b.prototype._geometryRequiresClientGraphicMapping=function(a){return this._geometryTypeRequiresClientGraphicMapping(a.type)};b.prototype._geometryTypeRequiresClientGraphicMapping=function(a){return"mesh"===a||"multipatch"===a||"extent"===a};b.prototype._serializeFeature=function(a){var b=a.attributes;
a=this._geometryForSerialization(a);var d=(O++).toString();return a?{uid:d,geometry:a.toJSON(),attributes:b}:{uid:d,attributes:b}};b.prototype._geometryForSerialization=function(a){a=a.geometry;return A.isNone(a)?null:this._geometryRequiresClientGraphicMapping(a)?w.Polygon.fromExtent(a.extent):a};b.prototype._startWorker=function(a){return u(this,void 0,void 0,function(){var b,d,g,h,f,k,e,r,m,n,q,v,l,p,t,u;return y(this,function(c){switch(c.label){case 0:return b=this,[4,L.open("MemorySourceWorker",
{strategy:H("esri-workers-for-memory-layers")?"dedicated":"local",signal:a})];case 1:return b._connection=c.sent(),d=this.layer,g=d.fields,h=d.spatialReference,f=d.objectIdField,k=d.hasM,e=d.hasZ,r=d.timeInfo,m="defaults"===this.layer.originOf("spatialReference"),n=this._prepareAddFeatures(this.items),this.on("before-changes",function(a){C.error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead");a.preventDefault()}),q={features:n.features,fields:g&&
g.map(function(a){return a.toJSON()}),geometryType:w.typeKebabDictionary.toJSON(this.workerGeometryType),hasM:k,hasZ:e,objectIdField:f,spatialReference:m?null:h&&h.toJSON(),timeInfo:r?r.toJSON():null},[4,this._connection.invoke("load",q,{signal:a})];case 2:v=c.sent();l=0;for(p=v.warnings;l<p.length;l++)t=p[l],C.warn(t.message,{layer:this.layer,warning:t});v.featureErrors.length&&C.warn("Encountered "+v.featureErrors.length+" validation errors while loading features",v.featureErrors);u=v.layerDefinition;
this._geometryTypeRequiresClientGraphicMapping(n.inferredGeometryType)&&(u.geometryType=w.typeKebabDictionary.toJSON(n.inferredGeometryType));this.sourceJSON=u;this._requiresClientGraphicMapping()&&(this._idToClientGraphic=new Map);n.finish(v.assignedObjectIds);return[2]}})})};p([q.shared({Type:D,ensureType:M.ensureType(D)})],b.prototype,"itemType",void 0);p([q.property()],b.prototype,"type",void 0);p([q.property({constructOnly:!0})],b.prototype,"layer",void 0);p([q.property({readOnly:!0,dependsOn:["layer.geometryType"]})],
b.prototype,"workerGeometryType",null);p([q.property()],b.prototype,"sourceJSON",void 0);return b=p([q.subclass("esri.layers.graphics.sources.MemorySource")],b)}(q.declared(I.LoadableMixin(K.EsriPromiseMixin(G))));t.MemorySource=l;t.default=l});