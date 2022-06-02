// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../Color ../../../../symbols ../../../../core/compilerUtils ../../../../core/Error ../../../../core/maybe ../../../../core/promiseUtils ../../../../intl/date ../../heuristics/outline ../../statistics/classBreaks ../../statistics/summaryStatistics ../../support/utils ../../../support/numberUtils ../../../support/pointCloud/PointSizeSplatAlgorithm ../../../../views/support/colorUtils".split(" "),
function(N,h,A,p,q,B,g,r,C,t,D,u,E,v,F,m,w,G,H){function n(a,b){return new C(a,b)}function x(a,b,c){var d,e,l;(b=(d={statistics:a,isDate:b},d.statistics))||(b={});var f,k;null==b.min?d.isDate?(k=y(),f=k[0],k=k[1]):(f=0,k=100):b.min===b.max&&(d.isDate?(k=y(b.min),f=k[0],k=k[1]):0>b.min?(f=2*b.min,k=0):0<b.min?(f=0,k=2*b.min):(f=0,k=100));d=null!=f?f:b.min;b=null!=k?k:b.max;null!=f||null!=k?(e=d,l=b):!c||null!=a.avg&&a.stddev||(e=a.min,l=a.max);return null!=e?[e,l]:null}function y(a){var b=("number"===
typeof a?new Date(a):new Date).getUTCFullYear(),c=Date.UTC(b,0,1,12,0,0,0),b=Date.UTC(b,11,31,12,0,0,0);"number"===typeof a&&(a<c&&(c=a),a>b&&(b=a));return[c,b]}function I(a){var b=a.layer;return a.fields.filter(function(a){return!b.getField(a)})}function J(a){var b=a.layer;return a.fields.filter(function(a){a=b.getFieldUsageInfo(a);return!a||!a.supportsRenderer})}Object.defineProperty(h,"__esModule",{value:!0});var z=/^(\d+(\.\d+)?)\s*(%)$/i,K=[0,0,0,.4],L=["hours","minutes","seconds"],M=[].concat(m.defaultBasemapGroups.light).concat(m.defaultBasemapGroups.dark);
h.formatDate=function(a,b,c){if("string"===typeof a){if((b=c.getField(a))&&"date"===b.type)return b.alias||b.name}else if("number"===typeof a||a instanceof Date)return b=-1<L.indexOf(b)?"short-date-short-time":"short-date",u.formatDate(a,u.convertDateFormatToIntlOptions(b));return a};h.createError=n;h.getDefaultDataRange=x;h.createColors=function(a,b){for(var c=[],d=a.length,e=0;e<b;e++)c.push(new B(a[e%d]));return c};h.createStopValues=function(a,b){void 0===b&&(b=!0);var c=a.avg,d=c-a.stddev,e=
c+a.stddev;d<a.min&&(d=a.min);e>a.max&&(e=a.max);b&&(c=d+(e-d)/2);a=w.round([d,e],{strictBounds:!0});d=a[0];e=a[1];a=[d,d+(c-d)/2,c,c+(e-c)/2,e];return w.round(a,{strictBounds:!0})};h.getSymbolSizeFromScheme=function(a,b,c){switch(b){case "point":case "multipoint":return c?"noDataSize"in a?a.noDataSize:null:"size"in a?a.size:null;case "polyline":return c?"noDataWidth"in a?a.noDataWidth:null:"width"in a?a.width:null;case "polygon":return"size"in a?a.size:null;case "mesh":break;default:r.neverReached(b)}};
h.getSymbolOutlineFromScheme=function(a,b,c){switch(b){case "point":case "multipoint":case "polygon":if(!("outline"in a))return null;a={color:a.outline.color,width:a.outline.width};null!=c&&a.color&&(b=a.color.clone(),b.a=c,a.color=b);return a;case "polyline":case "mesh":break;default:r.neverReached(b)}};h.createSymbol=function(a,b){var c=b.type,d=b.size,e=b.color,l=b.outline,f;switch(a){case "point":case "multipoint":"2d"===c?f=new g.SimpleMarkerSymbol({color:e,size:d,outline:{color:l.color,width:l.width}}):
"3d-flat"===c?f=new g.PointSymbol3D({symbolLayers:[new g.IconSymbol3DLayer({size:d,resource:{primitive:"circle"},material:{color:e},outline:{color:l.color,size:l.width}})]}):-1<c.indexOf("3d-volumetric")&&(a="3d-volumetric-uniform"===c,e=new g.ObjectSymbol3DLayer({height:d,resource:{primitive:a?"sphere":"cylinder"},material:{color:e}}),a||(e.width=b.widthAndDepth,e.depth=b.widthAndDepth),f=new g.PointSymbol3D({symbolLayers:[e]}));break;case "polyline":"2d"===c?f=new g.SimpleLineSymbol({color:e,width:d}):
"3d-flat"===c?f=new g.LineSymbol3D({symbolLayers:[new g.LineSymbol3DLayer({size:d,material:{color:e}})]}):"3d-volumetric"===c&&(f=new g.LineSymbol3D({symbolLayers:[new g.PathSymbol3DLayer({size:d,material:{color:e}})]}));break;case "polygon":"2d"===c?f=new g.SimpleFillSymbol({color:e,outline:{color:l.color,width:l.width}}):"3d-flat"===c?f=new g.PolygonSymbol3D({symbolLayers:[new g.FillSymbol3DLayer({material:{color:e},outline:{color:l.color,size:l.width}})]}):"3d-volumetric"===c&&(f=new g.PolygonSymbol3D({symbolLayers:[new g.ExtrudeSymbol3DLayer({size:d,
material:{color:e}})]}));break;case "mesh":d=b.meshInfo&&b.meshInfo.edgesType,f=new g.MeshSymbol3D({symbolLayers:[new g.FillSymbol3DLayer({material:{color:e,colorMixMode:b.meshInfo&&b.meshInfo.colorMixMode},edges:null==d||"none"===d?null:{type:d,color:K}})]})}return f};h.verifyBasicFieldValidity=function(a,b,c){var d=I({layer:a,fields:b});if(d.length)return n(c,"Unknown fields: "+d.join(", ")+". You can only use fields defined in the layer schema");a=J({layer:a,fields:b});if(a.length)return n(c,"Unsupported fields: "+
a.join(", ")+". You can only use fields that are accessible to the renderer i.e. FieldUsageInfo.supportsRenderer must be true")};h.getClassBreaks=function(a,b){return q(this,void 0,void 0,function(){var c,d,e,l,f,k,h;return p(this,function(g){switch(g.label){case 0:return c={layer:a.layer,view:a.view,signal:a.signal},[4,D.all([v(a),b?E(c):null])];case 1:return d=g.sent(),e=d[0],l=d[1],(f=x({min:e.minValue,max:e.maxValue,avg:null,stddev:null},!1,!1))?[4,v(A({},a,{classificationMethod:"equal-interval",
numClasses:1,analyzeData:!1,minValue:f[0],maxValue:f[1],normalizationTotal:f[0]+f[1]}))]:[3,3];case 2:return h=g.sent(),[3,4];case 3:h=e,g.label=4;case 4:return k=h,[2,{result:k,defaultValuesUsed:!!f,outlineResult:l}]}})})};h.getSummaryStatistics=function(a){return F(a)};h.getSizeRangeForAxis=function(a,b){var c=a.minSize;a=a.maxSize;"height"===b&&(c=((a-c)/2+c)/4.6,a*=2);return{minSize:c,maxSize:a}};h.isValidPointSize=function(a){return z.test(a)};h.getPointSizeAlgorithm=function(a){a=a.match(z);
var b=Number(a[1]);if("%"===a[3])return new G.default({scaleFactor:b/100})};h.updateAgeRendererAuthoringInfoVV=function(a,b,c,d){a.startTime=b instanceof Date?b.getTime():b;a.endTime=c instanceof Date?c.getTime():c;a.units=d;a.field="string"===typeof b?b:"string"===typeof c?c:null};h.getBasemapInfo=function(a,b){return q(this,void 0,void 0,function(){var c,d,e;return p(this,function(g){switch(g.label){case 0:d=c=null;if(!a&&!b)return[2,{basemapId:c,basemapTheme:d}];!a&&b&&(a=b&&b.get("map.basemap"));
a&&(c=m.getBasemapId(a,M,!1))&&(e=m.getBasemapGroup(c),t.isSome(e)&&(d=e));return c||!b?[3,2]:[4,H.getBackgroundColorTheme(b)];case 1:d=g.sent(),t.isSome(d)&&(c="dark"===d?"dark-gray":"gray"),g.label=2;case 2:return[2,{basemapId:c,basemapTheme:d}]}})})}});