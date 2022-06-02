// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/assignHelper ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ../shaders/SSAO.glsl ../../../webgl/Program ../../../webgl/renderState".split(" "),function(k,e,g,f,b,l,m,c,n,p,q,h){Object.defineProperty(e,"__esModule",{value:!0});b=function(d){function a(){return null!==
d&&d.apply(this,arguments)||this}g(a,d);a.prototype.initializeProgram=function(d){var b=a.shader.get(),c=this.configuration,b=b.build({output:c.output,samples:c.samples,radius:c.radius});return new q(d.rctx,b.generateSource("vertex"),b.generateSource("fragment"),n.Default3D)};a.prototype.initializePipeline=function(){return h.makePipelineState({colorWrite:h.defaultColorWriteParams})};a.shader=new l.ReloadableShaderModule(p,"../shaders/SSAO.glsl",k);return a}(m.ShaderTechnique);e.SSAOTechnique=b;b=
function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.output=0;a.samples=64;a.radius=4;return a}g(a,b);f([c.parameter({count:2})],a.prototype,"output",void 0);f([c.parameter()],a.prototype,"samples",void 0);f([c.parameter()],a.prototype,"radius",void 0);return a}(c.ShaderTechniqueConfiguration);e.SSAOTechniqueConfiguration=b});