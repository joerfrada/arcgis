// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(m,h){function k(a,d,e,c,b){if(null!=c&&null!=b&&c===b)return function(b){return c>=a.getAttribute(b,d)&&c<=a.getAttribute(b,e)};if(null!=c&&null!=b)return function(f){var g=a.getAttribute(f,d);f=a.getAttribute(f,e);return!(g>b||f<c)};if(null!=c)return function(b){return!(a.getAttribute(b,e)<c)};if(null!=b)return function(c){return!(a.getAttribute(c,d)>b)}}function l(a,d,e,c){if(null!=e&&null!=c&&e===c)return function(b){return a.getAttribute(b,d)===e};if(null!=
e&&null!=c)return function(b){return a.getAttribute(b,d)>=e&&a.getAttribute(b,d)<=c};if(null!=e)return function(b){return a.getAttribute(b,d)>=e};if(null!=c)return function(b){return a.getAttribute(b,d)<=c}}Object.defineProperty(h,"__esModule",{value:!0});h.getTimeExtent=function(a,d){if(!a)return null;var e=d.featureAdapter,c=a.startTimeField,b=a.endTimeField,f=Number.POSITIVE_INFINITY,g=Number.NEGATIVE_INFINITY;if(c&&b)d.forEach(function(a){var d=e.getAttribute(a,c);a=e.getAttribute(a,b);null==
d||isNaN(d)||(f=Math.min(f,d));null==a||isNaN(a)||(g=Math.max(g,a))});else{var h=c||b;d.forEach(function(a){a=e.getAttribute(a,h);null==a||isNaN(a)||(f=Math.min(f,a),g=Math.max(g,a))})}return{start:f,end:g}};h.getTimeOperator=function(a,d,e){if(!d||!a)return null;var c=a.startTimeField;a=a.endTimeField;if(!c&&!a)return null;var b=d.start;d=d.end;return null==b&&null==d?null:c&&a?k(e,c,a,b,d):l(e,c||a,b,d)}});