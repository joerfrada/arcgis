//>>built
(function(a,e){"object"===typeof exports&&"undefined"!==typeof module?e(exports):"function"===typeof define&&define.amd?define(["exports"],e):(a=a||self,e(a.maquetteCssTransitions={}))})(this,function(a){var e=function(a,f){for(var b=0,c=a.length;b<c;b++){var d=a[b];Array.isArray(d)?e(d,f):null!==d&&void 0!==d&&!1!==d&&(d.hasOwnProperty("vnodeSelector")||(d={vnodeSelector:"",properties:void 0,children:void 0,text:d.toString(),domNode:null}),f.push(d))}},g=function(a,f){for(var b=[],c=2;c<arguments.length;c++)b[c-
2]=arguments[c];if(1===b.length&&"string"===typeof b[0])return{vnodeSelector:a,properties:f||void 0,children:void 0,text:b[0],domNode:null};c=[];e(b,c);return{vnodeSelector:a,properties:f||void 0,children:c,text:void 0,domNode:null}};a.enableGlobalJsx=function(){window.jsx=g};a.jsx=g;Object.defineProperty(a,"__esModule",{value:!0})});