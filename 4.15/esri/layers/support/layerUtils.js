// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(l,c){Object.defineProperty(c,"__esModule",{value:!0});c.isTiledLayer=function(a){return a&&"base-tile"===a.type||"tile"===a.type||"elevation"===a.type||"base-elevation"===a.type||"open-street-map"===a.type||"web-tile"===a.type||"wmts"===a.type||"vector-tile"===a.type};c.serializeLayerDefinitions=function(a){var b=/[:;]/,h=[],e=!1;if(a&&(a.forEach(function(a,d){h.push([d,a]);!e&&b.test(a)&&(e=!0)}),0<h.length)){a=void 0;if(e){var c={};h.forEach(function(a){c[a[0]]=
a[1]});a=JSON.stringify(c)}else{var d=[];h.forEach(function(a){d.push(a[0]+":"+a[1])});a=d.join(";")}return a}return null};c.serializeTimeOptions=function(a){if(a){var b=[];a.forEach(function(a,c){b.push('"'+c+'":'+JSON.stringify(a))});if(b.length)return"{"+b.join(",")+"}"}};c.getLayersForScale=function(a,b){var c=[];if(0<a&&b)for(var e=function(d){if(0<=b[d].parentLayerId&&-1===c.indexOf(b[d].parentLayerId)&&b.some(function(a){return a.id===b[d].parentLayerId}))return"continue";if(0<=b[d].id){var e=
!0,f=b[d].maxScale,g=b[d].minScale;if(0<f||0<g)0<f&&0<g?e=f<=a&&a<=g:0<f?e=f<=a:0<g&&(e=a<=g);e&&c.push(b[d].id)}},k=0;k<b.length;k++)e(k);return c};c.areLabelsVisible=function(a){return!0===a.labelsVisible&&null!=a.labelingInfo&&0<a.labelingInfo.length}});