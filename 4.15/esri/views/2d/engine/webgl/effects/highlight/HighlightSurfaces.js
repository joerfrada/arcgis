// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../webgl"],function(e,f,g){function h(a,b,c){b=new g.Texture(a,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,width:b,height:c,samplingMode:9729});a=new g.FramebufferObject(a,{colorTarget:0,depthStencilTarget:2},b);return[b,a]}Object.defineProperty(f,"__esModule",{value:!0});e=function(){function a(){this._height=this._width=void 0;this._resources=null}a.prototype.dispose=function(){this._resources&&(this._resources.sharedBlur1Tex.dispose(),this._resources.sharedBlur1Fbo.dispose(),
this._resources.sharedBlur2Tex.dispose(),this._resources.sharedBlur2Fbo.dispose(),this._resources=null)};a.prototype._initialize=function(a,c,d){this._width=c;this._height=d;var b=h(a,c,d),e=b[0],b=b[1];a=h(a,c,d);this._resources={sharedBlur1Tex:e,sharedBlur1Fbo:b,sharedBlur2Tex:a[0],sharedBlur2Fbo:a[1]}};a.prototype.setup=function(a,c,d){!this._resources||this._width===c&&this._height===d||this.dispose();this._resources||this._initialize(a,c,d)};Object.defineProperty(a.prototype,"sharedBlur1Tex",
{get:function(){return this._resources.sharedBlur1Tex},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"sharedBlur1Fbo",{get:function(){return this._resources.sharedBlur1Fbo},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"sharedBlur2Tex",{get:function(){return this._resources.sharedBlur2Tex},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"sharedBlur2Fbo",{get:function(){return this._resources.sharedBlur2Fbo},enumerable:!0,configurable:!0});
return a}();f.default=e});