// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/generatorHelper ../../../../../core/tsSupport/awaiterHelper ../../../../../core/Error ../../../../../core/has ../../../../../core/Logger ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../layers/support/FieldsIndex ../../../../../support/arcadeOnDemand ../../../../webgl ../../../engine ../../../arcade/utils ../../../engine/webgl/definitions ../tileRenderers/support/visualVariablesUtils @dojo/framework/shim/Promise".split(" "),
function(D,B,q,n,u,t,E,F,h,r,G,H,M,k,I,x,J){Object.defineProperty(B,"__esModule",{value:!0});var p=E.getLogger("esri.views.layers.2d.features.support.AttributeStore"),w=k.debug.createDebugLogger(k.debug.DEBUG_ATTR_UPDATES,p),y=function(c,a){return function(b,d,e){var f;try{f=a(b,d,e)}catch(g){f=NaN}return(null===f||isNaN(f)||Infinity===f)&&c||f}},z=t("esri-shared-array-buffer"),A=t("esri-webgl-texture-float"),K=t("esri-webgl-max-texture-size"),C=t("esri-atomics"),L=function(){function c(a,b,d,e){this.texelSize=
4;var f=e.pixelType,c=e.layout;this.textureOnly=(e=e.textureOnly)||!1;this.pixelType=f;this._ctype=b;this.layout=c;this._resetRange();this._shared=a;e||(this.data=this._initData(f,d,a,b))}Object.defineProperty(c.prototype,"buffer",{get:function(){return h.andThen(this.data,function(a){return a.buffer})},enumerable:!0,configurable:!0});c.prototype.getData=function(a,b){a&=2147483647;return h.expect(this.data)[a*this.texelSize+b]};c.prototype.setData=function(a,b,d){a&=2147483647;0===(this.layout&1<<
b)?p.error("mapview-attributes-store","Tried to set a value for a texel's readonly component"):(this.data[a*this.texelSize+b]=d,this.dirtyStart=Math.min(this.dirtyStart,a),this.dirtyEnd=Math.max(this.dirtyEnd,a))};c.prototype.lock=function(){5121===this.pixelType&&this._shared&&C&&"local"!==this._ctype&&Atomics.store(this.data,0,1)};c.prototype.unlock=function(){5121===this.pixelType&&this._shared&&C&&"local"!==this._ctype&&Atomics.store(this.data,0,0)};c.prototype.expand=function(a){if(!this.textureOnly){a=
this._initData(this.pixelType,a,this._shared,this._ctype);var b=h.expect(this.data);a.set(b);this.data=a}};c.prototype.toMessage=function(){var a=this.dirtyStart,b=this.dirtyEnd,d=this.texelSize;if(a>b)return null;this._resetRange();var e=!this._shared&&"local"!==this._ctype,c=this.pixelType,g=this.layout,m=h.expect(this.data);if(!m.slice){if(!e)return{start:a,end:b,data:null,pixelType:c,layout:g};d=new (k.Utils.getPixelArrayCtor(this.pixelType))(Array.prototype.slice.call(this.data,a*d,(b+1)*d));
return{start:a,end:b,data:d,pixelType:c,layout:g}}d=e&&m.slice(a*d,(b+1)*d)||null;return{start:a,end:b,data:d,pixelType:c,layout:g}};c.prototype._initData=function(a,b,d,e){d=d&&"local"!==e?SharedArrayBuffer:ArrayBuffer;a=k.Utils.getPixelArrayCtor(a);b=new a(new d(b*b*4*a.BYTES_PER_ELEMENT));for(a=0;a<b.length;a+=4)b[a+1]=255;return b};c.prototype._resetRange=function(){this.dirtyStart=2147483647;this.dirtyEnd=0};return c}();t=function(){function c(a){this._attributeComputeMap=new Map;this._blocks=
[];this._idMap=new Map;this._localToObjectId=new Map;this._filters=Array(k.definitions.MAX_FILTERS);this._freeTexelsList=[];this._abortController=r.createAbortController();this._hasScaleExpr=!1;this._size=32;this._idCounter=1;this._idsToHighlight=new Set;var b=A?5126:5121;w("Creating AttributeStore "+(z?"with":"without")+" shared memory");this._client=a;this._blockDescriptors=[{pixelType:5121,layout:1},{pixelType:5121,layout:15,textureOnly:!0},{pixelType:b,layout:15},{pixelType:b,layout:15}];this._blocks=
this._blockDescriptors.map(function(){return null})}c.prototype.destroy=function(){this._abortController.abort()};Object.defineProperty(c.prototype,"hasScaleExpr",{get:function(){return this._hasScaleExpr},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"_signal",{get:function(){return this._abortController.signal},enumerable:!0,configurable:!0});c.prototype.invalidateResources=function(){this._createResourcesPromise=null;this._abortController.abort();this._abortController=r.createAbortController()};
c.prototype.createLocalId=function(a,b){void 0===b&&(b=!1);if(!this._idMap.has(a)){var d=this._getFreeTexel();b=((b?2147483648:0)|d)>>>0;this._idMap.set(a,-1===b?0:b);this._localToObjectId.set(b,a)}return this._idMap.get(a)};c.prototype.addLocalId=function(a){this._getBlock(0).setData(a,0,0);this._freeTexelsList.push(a&2147483647)};c.prototype.removeLocalId=function(a){var b=this._idMap.get(a);this._idMap.delete(a);this._localToObjectId.delete(b);return b};c.prototype.freeLocalId=function(a){var b=
this._idMap.get(a);this._getBlock(0).setData(b,0,0);this._idMap.delete(a);this._localToObjectId.delete(b);this._freeTexelsList.push(b&2147483647)};c.prototype.getFeatureId=function(a){return this._localToObjectId.get(a)};c.prototype.getLocalId=function(a){return this._idMap.has(a)?this._idMap.get(a):null};c.prototype.setHighlight=function(a){return n(this,void 0,void 0,function(){var b,d,e,c,g,m,l=this;return q(this,function(f){switch(f.label){case 0:this._getBlock(0).lock();this._idsToHighlight.forEach(function(a){if(a=
l.getLocalId(a)){var b=l._getBlock(0).getData(a,0);l._getBlock(0).setData(a,0,b&-2)}});this._idsToHighlight.clear();b=0;for(d=a;b<d.length;b++)e=d[b],this._idsToHighlight.add(e);for(c=0;c<a.length;c++)g=this.getLocalId(a[c]),null!=g&&(m=this._getBlock(0).getData(g,0),this._getBlock(0).setData(g,0,m|1));this._getBlock(0).unlock();return[4,this.sendUpdates()];case 1:return f.sent(),[2]}})})};c.prototype.addHighlight=function(){return n(this,void 0,void 0,function(){return q(this,function(a){return[2]})})};
c.prototype.removeHighlight=function(){return n(this,void 0,void 0,function(){return q(this,function(a){return[2]})})};c.prototype.updateFilters=function(a){return n(this,void 0,void 0,function(){var b,d,c,f,g,m=this;return q(this,function(e){switch(e.label){case 0:return b=a.config,d=a.service,c=a.spatialReference,f=b.filters,g=f.map(function(b,e){return m._updateFilter(a,b,e,d,c)}),[4,r.all(g)];case 1:return e.sent(),[2]}})})};c.prototype.setAttributeBindings=function(a,b){return n(this,void 0,
void 0,function(){return q(this,function(d){this._hasScaleExpr=!1;switch(a.type){case "simple":case "class-breaks":case "unique-value":case "dictionary":return[2,this._bindVVEvaluators(a.visualVariables,b)];case "dot-density":return[2,this._bindDDEvaluators(a.attributes,b)];case "heatmap":break;default:p.error(u("attribute-store","Found invalid renderer type: "+a))}return[2]})})};c.prototype.setData=function(a,b,d,c){this._getBlock(b).setData(a,d,c)};c.prototype.getData=function(a,b,d){return this._getBlock(b).getData(a,
d)};c.prototype.getHighlightFlag=function(a){return this._idsToHighlight.has(a)?x.HIGHLIGHT_FLAG:0};c.prototype.setAttributeData=function(a,b,d,c){var e=this;this._getBlock(0).setData(a,0,this.getFilterFlags(b));var g=A?1:2;this._attributeComputeMap.forEach(function(f,l){var m=l*g%4;l=e._getBlock(Math.floor(l*g/4)+x.ATTRIBUTE_DATA_VV);f=f(b,{$view:c},d);if(A)l.setData(a,m,f);else if(f===k.definitions.NAN_MAGIC_NUMBER)l.setData(a,m,255),l.setData(a,m+1,255);else{f=F.clamp(Math.round(f),-32767,32766)+
32768;var h=(f&65280)>>8;l.setData(a,m,f&255);l.setData(a,m+1,h)}})};c.prototype.sendUpdates=function(){var a=this;if(this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=r.createResolver(),this._nextUpdate.promise;var b={blocks:this._blocks.map(function(a){return h.isSome(a)?a.toMessage():null})};return this._currUpdate=this._createResources().then(function(){var d=function(){a._currUpdate=null;if(a._nextUpdate){var b=a._nextUpdate;a._nextUpdate=null;a.sendUpdates().then(function(){return b.resolve()})}},
d=a._client.update(b,a._signal).then(d).catch(d);a._client.render();return d}).catch(function(b){if(r.isAbortError(b))return a._createResourcesPromise=null,a._createResources();p.error(u("mapview-attribute-store","Encountered an error during client update",b));return r.resolve()})};c.prototype._createResources=function(){var a=this;if(h.isSome(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(x.ATTRIBUTE_DATA_ANIMATION);w("Initializing AttributeStore");var b={shared:z&&
"local"!==this._client.type,size:this._size,blocks:h.mapMany(this._blocks,function(a){return{textureOnly:a.textureOnly,buffer:a.buffer,pixelType:a.pixelType}})};this._createResourcesPromise=b=this._client.initialize(b,this._signal).catch(function(b){r.isAbortError(b)?a._createResourcesPromise=null:p.error(u("mapview-attribute-store","Encountered an error during client initialization",b))});b.then(function(){return h.isNone(a._createResourcesPromise)?a._createResources():void 0});return b};c.prototype._getBlock=
function(a){var b=this._blocks[a];if(h.isSome(b))return b;w("Initializing AttributeBlock at index "+a);b=new L(z,this._client.type,this._size,this._blockDescriptors[a]);this._blocks[a]=b;this._createResourcesPromise=null;return b};c.prototype._expand=function(){if(this._size<K){var a=this._size<<=1;w("Expanding block size to",a,this._blocks);h.forEachSome(this._blocks,function(b){return b.expand(a)});this._createResourcesPromise=null;this._size=a;return 0}p.error(u("mapview-limitations","Maximum number of onscreen features exceeded."));
return-1};c.prototype._getFreeTexel=function(){return this._freeTexelsList.length?this._freeTexelsList.pop():this._idCounter>=this._size*this._size&&this._expand()?-1:this._idCounter++};c.prototype._updateFilter=function(a,b,d,c,f){return n(this,void 0,void 0,function(){var e,m,l,k,n,r,p,t,u,v=this;return q(this,function(g){switch(g.label){case 0:e=this._filters[d];m=h.isSome(e)&&e.hash;if(m===JSON.stringify(b))return[2];l=1<<d+1;return h.isNone(b)?(this._filters[d]=null,this._idMap.forEach(function(a){var b=
v._getBlock(0).getData(a,0);v._getBlock(0).setData(a,0,b|l)}),[2]):[4,a.queryObjectIds(b)];case 1:return k=g.sent(),b.hiddenIds&&b.hiddenIds.length&&(k=k.filter(function(a){return-1===b.hiddenIds.indexOf(a)})),n=k.map(function(a){return v._idMap.get(a)}),[4,this._getFilter(d,c)];case 2:r=g.sent();r.update(b,f);this._getBlock(0).lock();this._idMap.forEach(function(a){if(1!==(a&2147483648)>>>31){var b=v._getBlock(0).getData(a,0);v._getBlock(0).setData(a,0,b&~l)}});for(p=0;p<n.length;p++)t=n[p],null!=
t&&(u=this._getBlock(0).getData(t,0),this._getBlock(0).setData(t,0,u|l));this._getBlock(0).unlock();return[2]}})})};c.prototype._getFilter=function(a,b){return n(this,void 0,void 0,function(){var c,e,f;return q(this,function(d){switch(d.label){case 0:return c=this._filters[a],h.isSome(c)?[2,c]:[4,new Promise(function(a,b){D(["../../../../../layers/graphics/data/FeatureFilter"],a,b)})];case 1:return e=d.sent().default,f=new e({geometryType:b.geometryType,hasM:!1,hasZ:!1,timeInfo:b.timeInfo,fieldsIndex:new G(b.fields)}),
this._filters[a]=f,[2,f]}})})};c.prototype.isVisible=function(a){return!!(this._getBlock(0).getData(a.localId,0)&2)};c.prototype.getFilterFlags=function(a){for(var b=0,c=1===(a.localId&2147483648)>>>31?254:255,e=0;e<this._filters.length;e++)var f=this._filters[e],f=!(c&1<<e)||h.isNone(f)||f.check(a),b=b|(f?1:0)<<e;a=this.getFeatureId(a.localId);return b<<1|this.getHighlightFlag(a)};c.prototype._bindVVEvaluators=function(a,b){return n(this,void 0,void 0,function(){var c,e=this;return q(this,function(d){switch(d.label){case 0:this._attributeComputeMap.clear();
if(!h.isSome(a))return[3,2];c=r.all(a.map(function(a){return n(e,void 0,void 0,function(){var c,d;return q(this,function(e){switch(e.label){case 0:return c=k.Utils.getVVType(a.type),[4,this._createGetValueFunction(a,b)];case 1:return d=e.sent(),h.isSome(d)&&this._attributeComputeMap.set(c,d),[2]}})})}));return[4,c];case 1:d.sent(),d.label=2;case 2:return[2]}})})};c.prototype._bindDDEvaluators=function(a,b){return n(this,void 0,void 0,function(){var c,e,f,g=this;return q(this,function(d){switch(d.label){case 0:return this._attributeComputeMap.clear(),
a.length>k.definitions.DOT_DENSITY_MAX_FIELDS&&p.warn("mapview-invalid-value","DotDensityRenderer supports a maximum of "+k.definitions.DOT_DENSITY_MAX_FIELDS+" attribtues, but found "+a.length),[4,r.all(a.map(function(a){return g._createNormalizedFunction(a,b)}))];case 1:c=d.sent().map(function(a){return y(0,a)});for(e=0;e<k.definitions.DOT_DENSITY_MAX_FIELDS;e++)(f=e<a.length&&c[e])?this._attributeComputeMap.set(e,f):this._attributeComputeMap.has(e)&&this._attributeComputeMap.delete(e);return[2]}})})};
c.prototype._createGetValueFunction=function(a,b){return n(this,void 0,void 0,function(){var c,e,f,g,m,l,h;return q(this,function(d){switch(d.label){case 0:if("size"!==a.type)return[3,2];c=k.getTypeOfSizeVisualVariable(a);if(c===k.enums.WGLVVFlag.SIZE_SCALE_STOPS)return[2,null];f=(e=c===k.enums.WGLVVFlag.SIZE_UNIT_VALUE)&&function(b){return J.getVisualVariableSizeValueRepresentationRatio(b,a.valueRepresentation)};g=y;m=[k.definitions.NAN_MAGIC_NUMBER];return[4,this._createNormalizedFunction(a,b,f)];
case 1:return[2,g.apply(void 0,m.concat([d.sent()]))];case 2:return l=y,h=[k.definitions.NAN_MAGIC_NUMBER],[4,this._createNormalizedFunction(a,b)];case 3:return[2,l.apply(void 0,h.concat([d.sent()]))]}})})};c.prototype._createNormalizedFunction=function(a,b,c){return n(this,void 0,void 0,function(){var d,f,g;return q(this,function(e){switch(e.label){case 0:if(d=a.field){if("string"===typeof d)return(f=a.normalizationField)?[2,function(a){if(a.attributes[d]&&a.attributes[f])return a=a.attributes[d]/
a.attributes[f],c?c(a):a}]:[2,c?function(a){return c(a.attributes[d])}:function(a){return a.attributes[d]}];p.error(u("mapview-rendering:invalid-type","The field for a vv must be a string or a number, but got "+typeof d));return[2,function(){}]}if(!a.valueExpression)return[3,2];this._hasScaleExpr=this._hasScaleExpr||-1!==a.valueExpression.indexOf("scale");return[4,H.createVVExpression(a.valueExpression,b.spatialReference,b.fields)];case 1:return g=e.sent(),[2,I.callWithOptimizedFeature.bind(null,
g)];case 2:return p.error("Unable to create a normalized function for visual variable: "+a),[2,function(){}]}})})};return c}();B.default=t});