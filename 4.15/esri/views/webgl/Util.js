// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/tsSupport/assignHelper","../../core/compilerUtils"],function(v,d,u,p){function q(a){return a[0].stride}function r(a){switch(a){case 5126:return 4;case 5124:return 4;case 5125:return 4;case 5122:return 2;case 5123:return 2;case 5120:return 1;case 5121:return 1;default:throw p.neverReached(a),Error("Unknown data type");}}function t(a){switch(a){case 6406:case 6409:return 1;case 6410:return 2;case 6407:return 3;case 6408:return 4;case 34041:return 4;case 33325:return 2;
case 33326:return 4;case 35898:return 4;case 33327:return 4;case 33328:return 8;case 34842:return 8;case 34836:return 16;case 33189:return 2;case 34041:return 4;case 32854:return 2;case 36168:return 1;default:p.neverReached(a)}return 0}function n(a){if(!a)return 0;if("colorAttachment"in a)return a.glName?n(a.colorAttachment)+n(a.depthStencilAttachment):0;if("descriptor"in a)return a.glName?n(a.descriptor):0;var e=a.internalFormat||"pixelFormat"in a&&a.pixelFormat;if(!e)return 0;var b="hasMipmap"in
a&&a.hasMipmap?1.3:1;a=a.width*a.height;return t(e)*a*b}Object.defineProperty(d,"__esModule",{value:!0});d.vertexCount=function(a,e){return a.vertexBuffers[e].size/q(a.layout[e])};d.getStride=q;d.getBytesPerElement=r;d.getTypedArrayConstructor=function(a){switch(a){case 5120:return Int8Array;case 5126:return Float32Array;case 5124:return Int32Array;case 5122:return Int16Array;case 5121:return Uint8Array;case 5125:return Uint32Array;case 5123:return Uint16Array;default:throw p.neverReached(a),Error("Unknown data type");
}};d.addDescriptor=function(a,e,b,g,m,h){var c=r(g);if(0<a.length){var f=a[0].stride,k=f+c*b;a.forEach(function(a){return a.stride=k});a.push({name:e,count:b,type:g,offset:f,stride:k,normalized:m,divisor:h})}else a.push({name:e,count:b,type:g,offset:0,stride:c*b,normalized:m,divisor:h})};d.hasAttribute=function(a,e){for(var b=0;b<a.length;b++)if(a[b].name===e)return!0;return!1};d.findAttribute=function(a,e){for(var b=0;b<a.length;b++)if(a[b].name===e)return a[b];return null};d.copyFramebufferToTexture=
function(a,e,b,g,m){void 0===m&&(m=0);var h=a.getBoundFramebufferObject(),c=a.getBoundTexture(0);a.bindFramebuffer(e);a.bindTexture(b,0);a.gl.copyTexImage2D(a.gl.TEXTURE_2D,m,b.descriptor.pixelFormat,g[0],g[1],g[2],g[3],0);a.gl.flush();a.bindFramebuffer(h);a.bindTexture(c,0)};d.setBaseInstanceOffset=function(a,e){var b={},g;for(g in a)b[g]=a[g].map(function(a){return a.divisor?u({},a,{baseInstance:e}):a});return b};d.bindVertexBufferLayout=function(a,e,b,g,d){var h=a.gl,c=a.capabilities.instancing;
a.bindBuffer(b);for(a=0;a<g.length;a++){b=g[a];var f=e[b.name],k=(d?d:0+b.baseInstance?b.baseInstance:0)*b.stride;void 0===f&&console.error("There is no location for vertex attribute '"+b.name+"' defined.");b.baseInstance&&!b.divisor&&console.error("Vertex attribute '"+b.name+"' uses baseInstanceOffset without divisor.");if(4>=b.count)h.vertexAttribPointer(f,b.count,b.type,b.normalized,b.stride,b.offset+k),h.enableVertexAttribArray(f),b.divisor&&0<b.divisor&&c&&c.vertexAttribDivisor(f,b.divisor);
else if(9===b.count)for(var l=0;3>l;l++)h.vertexAttribPointer(f+l,3,b.type,b.normalized,b.stride,b.offset+12*l+k),h.enableVertexAttribArray(f+l),b.divisor&&0<b.divisor&&c&&c.vertexAttribDivisor(f+l,b.divisor);else if(16===b.count)for(l=0;4>l;l++)h.vertexAttribPointer(f+l,4,b.type,b.normalized,b.stride,b.offset+16*l+k),h.enableVertexAttribArray(f+l),b.divisor&&0<b.divisor&&c&&c.vertexAttribDivisor(f+l,b.divisor);else console.error("Unsupported vertex attribute element count: "+b.count)}};d.unbindVertexBufferLayout=
function(a,e,b,g){var d=a.gl,h=a.capabilities.instancing;a.bindBuffer(b);for(b=0;b<g.length;b++){var c=g[b],f=e[c.name];if(4>=c.count)d.disableVertexAttribArray(f),c.divisor&&0<c.divisor&&h&&h.vertexAttribDivisor(f,0);else if(9===c.count)for(var k=0;3>k;k++)d.disableVertexAttribArray(f+k),c.divisor&&0<c.divisor&&h&&h.vertexAttribDivisor(f+k,0);else if(16===c.count)for(k=0;4>k;k++)d.disableVertexAttribArray(f+k),c.divisor&&0<c.divisor&&h&&h.vertexAttribDivisor(f+k,0);else console.error("Unsupported vertex attribute element count: "+
c.count)}a.unbindBuffer(34962)};d.getBytesPerElementFormat=t;d.getGpuMemoryUsage=n});