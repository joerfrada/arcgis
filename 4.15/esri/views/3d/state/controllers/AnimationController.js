// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/maybe ../../../../core/promiseUtils ../../../ViewAnimation ./CameraController".split(" "),function(c,f,h,d,e,g,b){Object.defineProperty(f,"__esModule",{value:!0});c=function(c){function a(b){var a=c.call(this)||this;a.viewAnimation=b;return a}h(a,c);Object.defineProperty(a.prototype,"canStop",{get:function(){return!0},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"asyncResult",{get:function(){return this._asyncResult},
set:function(a){this._asyncResult&&(this._asyncResult.reject(e.createAbortError()),this._asyncResult=null);this.state===b.State.Finished||this.state===b.State.Stopped?this.state===b.State.Finished?a.resolve():a.reject(e.createAbortError()):this._asyncResult=a},enumerable:!0,configurable:!0});a.prototype.onControllerStart=function(){var a=this;this.state=b.State.Running;d.isSome(this.viewAnimation)&&this.viewAnimation.when(function(){return a.updateStateFromViewAnimation()},function(){return a.updateStateFromViewAnimation()})};
a.prototype.updateStateFromViewAnimation=function(){!d.isSome(this.viewAnimation)||this.state!==b.State.Ready&&this.state!==b.State.Running||(this.viewAnimation.state===g.State.FINISHED?this.finish():this.viewAnimation.state===g.State.STOPPED&&(this.state=b.State.Stopped))};a.prototype.onControllerEnd=function(){d.isSome(this.viewAnimation)&&!this.viewAnimation.done&&(this.state===b.State.Finished?this.viewAnimation.finish():this.state===b.State.Stopped&&this.viewAnimation.stop());this._asyncResult&&
(this.state===b.State.Finished?this._asyncResult.resolve():this._asyncResult.reject(e.createAbortError()))};a.prototype.finish=function(){this.finishController()};return a}(b.CameraController);f.AnimationController=c});