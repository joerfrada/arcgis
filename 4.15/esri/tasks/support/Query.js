// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../geometry ../../geometry ../../symbols ../../TimeExtent ../../core/jsonMap ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ../../geometry/support/jsonUtils ../../symbols/support/jsonUtils ./QuantizationParameters ./StatisticDefinition".split(" "),function(y,z,k,d,l,m,n,p,f,q,r,c,t,u,v,w,x){var g=new f.default({esriSpatialRelIntersects:"intersects",
esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),h=new f.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",
esriSRUnit_USNauticalMile:"us-nautical-miles"});return function(f){function b(a){a=f.call(this,a)||this;a.cacheHint=!1;a.datumTransformation=null;a.distance=void 0;a.gdbVersion=null;a.geometry=null;a.geometryPrecision=void 0;a.groupByFieldsForStatistics=null;a.having=null;a.historicMoment=null;a.maxAllowableOffset=void 0;a.maxRecordCountFactor=1;a.multipatchOption=null;a.num=void 0;a.objectIds=null;a.orderByFields=null;a.outFields=null;a.outSpatialReference=null;a.outStatistics=null;a.parameterValues=
null;a.pixelSize=null;a.quantizationParameters=null;a.rangeValues=null;a.relationParameter=null;a.resultType=null;a.returnCentroid=!1;a.returnDistinctValues=!1;a.returnExceededLimitFeatures=!0;a.returnGeometry=!1;a.returnQueryGeometry=!1;a.returnM=void 0;a.returnZ=void 0;a.source=null;a.spatialRelationship="intersects";a.start=void 0;a.sqlFormat=null;a.text=null;a.timeExtent=null;a.units=null;a.where=null;return a}k(b,f);e=b;b.from=function(a){return t.ensureClass(e,a)};b.prototype.castDatumTransformation=
function(a){return"number"===typeof a||"object"===typeof a?a:null};b.prototype.writeHistoricMoment=function(a,b){b.historicMoment=a&&a.getTime()};b.prototype.writeParameterValues=function(a,b){if(a){var c={},d;for(d in a){var e=a[d];Array.isArray(e)?c[d]=e.map(function(a){return a instanceof Date?a.getTime():a}):c[d]=e instanceof Date?e.getTime():e}b.parameterValues=c}};b.prototype.writeStart=function(a,b){b.resultOffset=this.start;b.resultRecordCount=this.num||10;b.where="1\x3d1"};b.prototype.writeWhere=
function(a,b){b.where=a||"1\x3d1"};b.prototype.clone=function(){return new e(r.clone({cacheHint:this.cacheHint,datumTransformation:this.datumTransformation,distance:this.distance,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:this.historicMoment?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,
multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,
returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,source:this.source,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,units:this.units,where:this.where}))};var e;b.MAX_MAX_RECORD_COUNT_FACTOR=5;d([c.property({type:Boolean,json:{write:!0,default:!1}})],b.prototype,"cacheHint",void 0);d([c.property({json:{write:!0}})],
b.prototype,"datumTransformation",void 0);d([c.cast("datumTransformation")],b.prototype,"castDatumTransformation",null);d([c.property({type:Number,json:{write:{overridePolicy:function(a){return{enabled:0<a}}}}})],b.prototype,"distance",void 0);d([c.property({type:String,json:{write:!0}})],b.prototype,"gdbVersion",void 0);d([c.property({types:m.geometryTypes,json:{read:u.fromJSON,write:!0}})],b.prototype,"geometry",void 0);d([c.property({type:Number,json:{write:!0}})],b.prototype,"geometryPrecision",
void 0);d([c.property({type:[String],json:{write:!0}})],b.prototype,"groupByFieldsForStatistics",void 0);d([c.property({type:String,json:{write:!0}})],b.prototype,"having",void 0);d([c.property({type:Date})],b.prototype,"historicMoment",void 0);d([c.writer("historicMoment")],b.prototype,"writeHistoricMoment",null);d([c.property({type:Number,json:{write:!0}})],b.prototype,"maxAllowableOffset",void 0);d([c.property({type:Number,cast:function(a){return 1>a?1:a>e.MAX_MAX_RECORD_COUNT_FACTOR?e.MAX_MAX_RECORD_COUNT_FACTOR:
a},json:{write:{overridePolicy:function(a){return{enabled:1<a}}}}})],b.prototype,"maxRecordCountFactor",void 0);d([c.property({type:String,json:{write:!0}})],b.prototype,"multipatchOption",void 0);d([c.property({type:Number,json:{read:{source:"resultRecordCount"}}})],b.prototype,"num",void 0);d([c.property({type:[Number],json:{write:!0}})],b.prototype,"objectIds",void 0);d([c.property({type:[String],json:{write:!0}})],b.prototype,"orderByFields",void 0);d([c.property({type:[String],json:{write:!0}})],
b.prototype,"outFields",void 0);d([c.property({type:l.SpatialReference,json:{read:{source:"outSR"},write:{target:"outSR"}}})],b.prototype,"outSpatialReference",void 0);d([c.property({type:[x],json:{write:!0}})],b.prototype,"outStatistics",void 0);d([c.property({json:{write:!0}})],b.prototype,"parameterValues",void 0);d([c.writer("parameterValues")],b.prototype,"writeParameterValues",null);d([c.property({types:n.symbolTypes,json:{read:v.read,write:!0}})],b.prototype,"pixelSize",void 0);d([c.property({type:w.default,
json:{write:!0}})],b.prototype,"quantizationParameters",void 0);d([c.property({type:[Object],json:{write:!0}})],b.prototype,"rangeValues",void 0);d([c.property({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy:function(){return{enabled:"relation"===this.spatialRelationship}}}}})],b.prototype,"relationParameter",void 0);d([c.property({type:String,json:{write:!0}})],b.prototype,"resultType",void 0);d([c.property({type:Boolean,json:{write:{overridePolicy:function(a){return{enabled:a}}}}})],
b.prototype,"returnCentroid",void 0);d([c.property({type:Boolean,json:{write:{overridePolicy:function(a){return{enabled:a}}}}})],b.prototype,"returnDistinctValues",void 0);d([c.property({type:Boolean,json:{write:{overridePolicy:function(a){return{enabled:!a}}}}})],b.prototype,"returnExceededLimitFeatures",void 0);d([c.property({type:Boolean,json:{write:!0}})],b.prototype,"returnGeometry",void 0);d([c.property({type:Boolean,json:{write:{overridePolicy:function(a){return{enabled:a}}}}})],b.prototype,
"returnQueryGeometry",void 0);d([c.property({type:Boolean,json:{write:{overridePolicy:function(a){return{enabled:a}}}}})],b.prototype,"returnM",void 0);d([c.property({type:Boolean,json:{write:{overridePolicy:function(a){return{enabled:a}}}}})],b.prototype,"returnZ",void 0);d([c.property({json:{write:!0}})],b.prototype,"source",void 0);d([c.property({type:String,json:{read:{source:"spatialRel",reader:g.read},write:{target:"spatialRel",writer:g.write}}})],b.prototype,"spatialRelationship",void 0);d([c.property({type:Number,
json:{read:{source:"resultOffset"}}})],b.prototype,"start",void 0);d([c.writer("start"),c.writer("num")],b.prototype,"writeStart",null);d([c.property({type:String,json:{write:!0}})],b.prototype,"sqlFormat",void 0);d([c.property({type:String,json:{write:!0}})],b.prototype,"text",void 0);d([c.property({type:p,json:{write:!0}})],b.prototype,"timeExtent",void 0);d([c.property({type:String,json:{read:h.read,write:{writer:h.write,overridePolicy:function(a){return{enabled:a&&0<this.distance}}}}})],b.prototype,
"units",void 0);d([c.property({type:String,json:{write:{overridePolicy:function(a){return{enabled:null!=a||0<this.start}}}}})],b.prototype,"where",void 0);d([c.writer("where")],b.prototype,"writeWhere",null);return b=e=d([c.subclass("esri.tasks.support.Query")],b)}(c.declared(q.JSONSupport))});