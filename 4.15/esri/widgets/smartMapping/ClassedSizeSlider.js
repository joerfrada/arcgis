// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper dojo/i18n!./ClassedSizeSlider/nls/ClassedSizeSlider ../../Color ../../core/maybe ../../core/accessorSupport/decorators ../../renderers/support/ClassBreakInfo ./SmartMappingSliderBase ./ClassedSizeSlider/ClassedSizeSliderViewModel ./support/utils ./../support/widget".split(" "),function(y,z,l,t,f,u,h,p,e,v,w,x,q,g){var r={trackFillColor:new h([149,149,149]),trackBackgroundColor:new h([224,
224,224])};return function(h){function b(a){a=h.call(this,a)||this;a._rampNode=null;a.breaks=null;a.label=u.widgetLabel;a.style=l({},r);a.viewModel=new x;return a}t(b,h);k=b;b.prototype.castStyle=function(a){return l({},r,a)};b.fromRendererResult=function(a,c){a=a.renderer.classBreakInfos.map(function(a){var d=a.symbol,c;switch(d.type){case "simple-line":c=d.width;break;case "simple-marker":c=d.size;break;case "picture-marker":c=d.size}return{min:a.minValue,max:a.maxValue,size:c}});return new k({breaks:a,
histogramConfig:{bins:c?c.bins:[]}})};b.prototype.updateClassBreakInfos=function(a){var c=this.breaks;if(c.length!==a.length)console.error("Number of input breakInfos must match number of slider breaks: "+c.length);else return a.map(function(a,d){a=a.symbol;switch(a.type){case "simple-line":a.width=c[d].size;break;case "simple-marker":a.size=c[d].size;break;case "picture-marker":a.size=c[d].size}return new v({minValue:c[d].min,maxValue:c[d].max,symbol:a})})};b.prototype.updateFromRendererResult=function(a,
c){a=a.renderer.classBreakInfos.map(function(a){var c=a.symbol,b;switch(c.type){case "simple-line":b=c.width;break;case "simple-marker":b=c.size;break;case "picture-marker":b=c.size}return{min:a.minValue,max:a.maxValue,size:b}});this.set({breaks:a,histogramConfig:{bins:c?c.bins:[]}})};b.prototype.render=function(){var a,c=this.label,b="disabled"===this.state,d=this.classes("esri-classed-size-slider","esri-widget","esri-widget--panel",(a={},a["esri-disabled"]=b,a));return g.tsx("div",{"aria-label":c,
class:d},b?null:this.renderContent(this.renderRamp(),"esri-classed-size-slider__slider-container","esri-classed-size-slider__histogram-container"))};b.prototype.renderRamp=function(){return g.tsx("div",{afterCreate:g.storeNode,bind:this,class:"esri-classed-size-slider__ramp","data-node-ref":"_rampNode"},g.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},g.tsx("rect",{x:"0",y:"0",fill:q.getFillFromColor(this.style.trackBackgroundColor),height:"100%",width:"100%"}),this.renderPath()))};b.prototype.renderPath=
function(){if(this._rampNode){var a=this._rampNode,c=a.offsetHeight,b=void 0===c?0:c,a=a.offsetWidth,d=void 0===a?0:a;if(p.isSome(b)&&p.isSome(d)){var a=this.breaks,e=this.viewModel,f=e.min,c=this.style.trackFillColor,h=e.max-f,k=d/a.length,e=a.map(function(a){return b-Math.round((a.min-f)/h*b)+1}).reverse(),l=a[0].size>a[a.length-1].size||!1,m=l?k:d,n="M"+m+" 0 ";e.forEach(function(a,b){b=k*(b+1);n+="L"+m+" "+a+" ";m=l?k+b:d-b;n+="L"+m+" "+a+" "});n+="L0 "+b+" L0 "+b+" L0 0 Z";return g.tsx("path",
{d:n,fill:q.getFillFromColor(c)})}}};var k;f([e.aliasOf("viewModel.breaks")],b.prototype,"breaks",void 0);f([e.property()],b.prototype,"label",void 0);f([e.property(),g.renderable()],b.prototype,"style",void 0);f([e.cast("style")],b.prototype,"castStyle",null);f([e.property(),g.renderable("viewModel.hasTimeData viewModel.inputFormatFunction viewModel.inputParseFunction viewModel.labelFormatFunction viewModel.max viewModel.min viewModel.values".split(" "))],b.prototype,"viewModel",void 0);return b=
k=f([e.subclass("esri.widgets.smartMapping.ClassedSizeSlider")],b)}(e.declared(w.SmartMappingSliderBase))});