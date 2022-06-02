// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/assignHelper ../environment/Stars.glsl ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/lib/DefaultVertexAttributeLocations ../../webgl/Program ../../webgl/renderState".split(" "),function(g,e,h,f,q,k,l,m,n,p,c){Object.defineProperty(e,"__esModule",{value:!0});f=function(d){function a(){return null!==
d&&d.apply(this,arguments)||this}h(a,d);a.prototype.initializeProgram=function(c){var b=a.shader.get().build();return new p(c.rctx,b.generateSource("vertex"),b.generateSource("fragment"),n.Default3D)};a.prototype.initializePipeline=function(){return c.makePipelineState({blending:c.separateBlendingParams(770,1,771,771),depthTest:{func:515},colorWrite:c.defaultColorWriteParams})};a.prototype.bindPass=function(a,b){this.program.setUniformMatrix4fv("view",b.viewMatrix);this.program.setUniformMatrix4fv("proj",
b.projectionMatrix);this.program.setUniform4fv("viewport",b.fullViewport);this.program.setUniform1f("pixelRatio",b.pixelRatio)};a.shader=new l.ReloadableShaderModule(k,"../shaders/Stars.glsl",g);return a}(m.ShaderTechnique);e.StarsTechnique=f});