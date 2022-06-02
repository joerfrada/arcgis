// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/accessorSupport/decorators".split(" "),function(g,d,h,f,k,e){Object.defineProperty(d,"__esModule",{value:!0});var c;(function(b){b.Ready="ready";b.Rejected="rejected";b.Running="running";b.Stopped="stopped";b.Finished="finished"})(c=d.State||(d.State={}));g=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.state=c.Ready;
return a}h(a,b);Object.defineProperty(a.prototype,"active",{get:function(){return this.state===c.Running},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"isInteractive",{get:function(){return!1},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"canStop",{get:function(){return!1},enumerable:!0,configurable:!0});a.prototype.stopController=function(){return this.canStop?(this.state=c.Stopped,!0):!1};a.prototype.finishController=function(){this.state=c.Finished};Object.defineProperty(a.prototype,
"steppingFinished",{get:function(){return!1},enumerable:!0,configurable:!0});f([e.property({readOnly:!0,dependsOn:["state"]})],a.prototype,"active",null);f([e.property()],a.prototype,"state",void 0);return a=f([e.subclass("esri.views.3d.state.controllers.CameraController")],a)}(e.declared(k));d.CameraController=g});