// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/scheduling"],function(h,l,m){Object.defineProperty(l,"__esModule",{value:!0});h=function(){function d(a){var b=this;this.view=a;this._frameTaskHandle=null;this.updateEnabled=this.stationary=!0;this.animationInProgress=!1;this.prepare=function(){b._updateParameters.state=b.view.state;b._updateParameters.stationary=b.view.stationary;b._updateParameters.pixelRatio=window.devicePixelRatio;b._updateParameters.renderingOptions=b.view.renderingOptions};this.update=
function(){if(b.updateEnabled){var c=b.view,a=c.labelManager,e=b.graphicsView,d=c.allLayerViews.toArray().filter(function(a){return!("layerViews"in a)&&a.isFulfilled()}),f=d.length,g=c.state,k=0;for(;k<d.length;k++)if(c=d[k],c.attached){var h=c.lastUpdateId;if(null==h||!b.stationary&&!c.moving)c.moving=!0,c.moveStart();h!==g.id&&c.viewChange();b.stationary&&c.moving&&(c.moving=!1,c.moveEnd());c.lastUpdateId=g.id}a&&a.lastUpdateId!==g.id&&(a.viewChange(),a.lastUpdateId=g.id);e&&e.lastUpdateId!==g.id&&
(e.viewChange(),e.lastUpdateId=g.id);a=b._layerViewsTrash;for(e=0;e<a.length;e++)c=a[e],b._detachLayerView(c);for(e=a.length=0;e<f;e++)c=d[e],c.isFulfilled()&&!c.attached&&b._attachLayerView(c);d=b._updateParameters;f=b._layerViewsToUpdate;c=f.slice();e=f.length=0;for(g=c;e<g.length;e++)c=g[e],"layerViews"in c?f.push(c):c.processUpdate(d);f=b._updatablesToUpdate;c=f.slice();for(f=f.length=0;f<c.length;f++)c[f].processUpdate(d);b.animationInProgress||0!==b._layerViewsToUpdate.length||0!==b._updatablesToUpdate.length||
0!==a.length||b._frameTaskHandle.pause()}}}d.prototype.destroy=function(){this.stop()};d.prototype.start=function(){var a=this;this.stationary=this.view.stationary;this._updateParameters={state:this.view.state,pixelRatio:window.devicePixelRatio,stationary:this.stationary,renderingOptions:this.view.renderingOptions};this._layerViewsTrash=[];this._layerViewsToUpdate=[];this._updatablesToUpdate=[];this._allLayerViewsChangeHandle=this.view.allLayerViews.on("change",function(b){Array.prototype.push.apply(a._layerViewsTrash,
b.removed);a.requestFrame()});this._stationaryHandle=this.view.watch("stationary",function(b){a.stationary=b;a.requestFrame()});this._frameTaskHandle=m.addFrameTask(this)};d.prototype.stop=function(){var a=this;this._frameTaskHandle&&(this.view.allLayerViews.forEach(function(b){"layerViews"in b||a._detachLayerView(b)}),this._stationaryHandle.remove(),this._allLayerViewsChangeHandle.remove(),this._frameTaskHandle.remove(),this._updateParameters=this._stationaryHandle=this._allLayerViewsChangeHandle=
this._frameTaskHandle=this._layerViewsTrash=this._layerViewsToUpdate=null,this.stationary=!0,this.animationInProgress=!1)};d.prototype.requestLayerViewUpdate=function(a){this._layerViewsToUpdate.push(a);this.requestFrame()};d.prototype.requestUpdate=function(a){this._updatablesToUpdate.push(a);this.requestFrame()};d.prototype.requestFrame=function(){this._frameTaskHandle&&this._frameTaskHandle.resume()};d.prototype._attachLayerView=function(a){a.attached||(a.attached=!0,a.attach(),this._updateParameters.stationary?
a.moving=!1:(a.moving=!0,a.moveStart()))};d.prototype._detachLayerView=function(a){a.attached&&(a.detach(),a.attached=!1,a.moving=!1)};return d}();l.default=h});