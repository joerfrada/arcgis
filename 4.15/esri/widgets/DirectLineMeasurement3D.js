// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!./DirectLineMeasurement3D/nls/DirectLineMeasurement3D ../core/accessorSupport/decorators ./Widget ./DirectLineMeasurement3D/DirectLineMeasurement3DViewModel ./support/widget".split(" "),function(r,t,p,b,e,d,q,g,a){return function(k){function c(a){a=k.call(this,a)||this;a.view=null;a.visible=null;a.iconClass="esri-icon-measure-line";a.label=e.widgetLabel;a.viewModel=new g;a.unitOptions=null;a.unit=
null;return a}p(c,k);c.prototype.render=function(){var c=this,b=this.viewModel.isSupported,d=this.viewModel.active,g="disabled"===this.viewModel.state,m="ready"===this.viewModel.state,n="measuring"===this.viewModel.state||"measured"===this.viewModel.state,h=this.viewModel.measurement,m=d&&m?a.tsx("section",{key:"esri-direct-line-measurement-3d__hint",class:"esri-direct-line-measurement-3d__hint"},a.tsx("p",{class:"esri-direct-line-measurement-3d__hint-text"},e.hint)):null,k=b?null:a.tsx("section",
{key:"esri-direct-line-measurement-3d__unsupported",class:"esri-direct-line-measurement-3d__panel--error"},a.tsx("p",null,e.unsupported)),f=function(b,d,e){switch(d.state){case "available":return a.tsx("div",{key:e+"-enabled",class:"esri-direct-line-measurement-3d__measurement-item"},a.tsx("span",{class:"esri-direct-line-measurement-3d__measurement-item-title"},b),a.tsx("span",{class:"esri-direct-line-measurement-3d__measurement-item-value"},d.text));case "unavailable":return a.tsx("div",{key:e+"-disabled",
class:c.classes("esri-direct-line-measurement-3d__measurement-item","esri-direct-line-measurement-3d__measurement-item--disabled")},a.tsx("span",{class:"esri-direct-line-measurement-3d__measurement-item-title"},b))}},h=n?a.tsx("section",{key:"esri-direct-line-measurement-3d__measurement",class:"esri-direct-line-measurement-3d__measurement"},f(e.direct,h.directDistance,"direct"),f(e.horizontal,h.horizontalDistance,"horizontal"),f(e.vertical,h.verticalDistance,"vertical")):null,l=this.id+"__units",
f=a.tsx("label",{class:"esri-direct-line-measurement-3d__units-label",for:l},e.unit),l=a.tsx("div",{class:"esri-direct-line-measurement-3d__units-select-wrapper"},a.tsx("select",{class:"esri-direct-line-measurement-3d__units-select esri-select",id:l,onchange:this._changeUnit,bind:this},this.viewModel.unitOptions.map(function(b){return b===c.viewModel.unit?a.tsx("option",{key:b,value:b,selected:!0},e.units[b]):a.tsx("option",{key:b,value:b},e.units[b])}))),f=a.tsx("section",{key:"esri-direct-line-measurement-3d__units",
class:"esri-direct-line-measurement-3d__units"},f,l),f=n?a.tsx("div",{key:"settings",class:"esri-direct-line-measurement-3d__settings"},f):null,b=!b||d&&!n?null:a.tsx("div",{class:"esri-direct-line-measurement-3d__actions"},a.tsx("button",{disabled:g,class:this.classes("esri-button esri-button--secondary","esri-direct-line-measurement-3d__clear-button",g&&"esri-button--disabled"),bind:this,onclick:this._newMeasurement},e.newMeasurement)),b=this.visible?a.tsx("div",{class:"esri-direct-line-measurement-3d__container"},
k,m,f,h,b):null;return a.tsx("div",{key:"",class:this.classes("esri-direct-line-measurement-3d","esri-widget","esri-widget--panel"),role:"presentation"},b)};c.prototype._newMeasurement=function(){this.viewModel.newMeasurement()};c.prototype._changeUnit=function(a){a=a.target;if(a=a.options[a.selectedIndex])this.unit=a.value};b([d.aliasOf("viewModel.view")],c.prototype,"view",void 0);b([d.aliasOf("viewModel.visible"),a.renderable()],c.prototype,"visible",void 0);b([d.aliasOf("viewModel.active"),a.renderable()],
c.prototype,"active",void 0);b([d.property()],c.prototype,"iconClass",void 0);b([d.property()],c.prototype,"label",void 0);b([d.property({type:g}),a.renderable(["viewModel.state","viewModel.unitOptions","viewModel.unit","viewModel.measurement"])],c.prototype,"viewModel",void 0);b([d.aliasOf("viewModel.unitOptions")],c.prototype,"unitOptions",void 0);b([d.aliasOf("viewModel.unit")],c.prototype,"unit",void 0);b([a.accessibleHandler()],c.prototype,"_newMeasurement",null);b([a.accessibleHandler()],c.prototype,
"_changeUnit",null);return c=b([d.subclass("esri.widgets.DirectLineMeasurement3D")],c)}(d.declared(q))});