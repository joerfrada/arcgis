// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/maybe ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/SpatialReference ../../support/projectionUtils ./Geometry ./GeometryData ./Layer ./localOrigin ./Object3D ./Util ../materials/RibbonLineMaterial".split(" "),function(m,E,r,t,u,v,w,x,y,z,A,n,B,q,C){var D=0;m=function(){function l(){this.ROOT_ORIGIN_ID="rg_root_"+D++;this._origins=new Map;this._gridSize=42E5}l.prototype.getOrigin=
function(b){var f=this._origins.get(this.ROOT_ORIGIN_ID);if(null==f){if(r.isSome(l.testOrigin)){var a=l.testOrigin;this._origins.set(this.ROOT_ORIGIN_ID,n.fromValues(a[0],a[1],a[2],this.ROOT_ORIGIN_ID));return this.getOrigin(b)}a=n.fromValues(b[0]+Math.random()-.5,b[1]+Math.random()-.5,b[2]+Math.random()-.5,this.ROOT_ORIGIN_ID);this._origins.set(this.ROOT_ORIGIN_ID,a);return a}u.vec3.subtract(c,b,f.vec3);c[0]=Math.abs(c[0]);c[1]=Math.abs(c[1]);c[2]=Math.abs(c[2]);a=this._gridSize;if(c[0]<a&&c[1]<
a&&c[2]<a)return f;var f=Math.round(b[0]/a),d=Math.round(b[1]/a);b=Math.round(b[2]/a);var p="rg_"+f+"/"+d+"/"+b,g=this._origins.get(p);g||(g=n.fromValues(f*a,d*a,b*a,p),this._origins.set(p,g));return g};l.prototype._drawOriginBox=function(b){var f=window.view,a=f._stage;if(null==this._object){this._material=new C({width:2,color:[0,1,0,1]},"GridLocalOriginMaterial");a.add(3,this._material);var d=new A("GridLocalOrigin",{isPickable:!1});a.add(0,d);this._object=new B({idHint:"GridLocalOrigin",castShadow:!1});
a.add(1,this._object);d.addObject(this._object);a.addToViewContent([d.id])}for(var c=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],g=c.length,h=new Float32Array(3*g),d=new Uint32Array(2*(g-1)),k=.5*this._gridSize,e=0;e<g;e++)h[3*e+0]=b[0]+(c[e]&1?k:-k),h[3*e+1]=b[1]+(c[e]&2?k:-k),h[3*e+2]=b[2]+(c[e]&4?k:-k),0<e&&(d[2*e+0]=e-1,d[2*e+1]=e);x.bufferToBuffer(h,w.WebMercator,0,h,f.spatialReference,0,g);f={};f[q.VertexAttrConstants.POSITION]={size:3,data:h};h={};h[q.VertexAttrConstants.POSITION]=d;d=new z.GeometryData(f,
h,void 0,"line");d=new y(d,"GridLocalOriginBox");a.add(2,d);this._object.addGeometry(d,this._material,t.mat4f64.IDENTITY);console.log(this._origins.size,b)};return l}();var c=v.vec3f64.create();(m||(m={})).testOrigin=null;return m});