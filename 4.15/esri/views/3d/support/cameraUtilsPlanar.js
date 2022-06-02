// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/mathUtils ../../../core/libs/gl-matrix-2/mat4 ../../../core/libs/gl-matrix-2/mat4f64 ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../../../geometry/Extent ./cameraUtilsInternal ./projectionUtils".split(" "),function(x,f,m,p,v,k,l,w,q,n){function r(a,c,b,d){void 0===d&&(d=q.createDirectionUp());p.mat4.identity(g);a=d.direction;var e=d.up;p.mat4.rotateZ(g,g,-m.deg2rad(c));p.mat4.rotateX(g,g,m.deg2rad(b));k.vec3.transformMat4(a,t,g);
k.vec3.scale(a,a,-1);k.vec3.transformMat4(e,u,g);return d}Object.defineProperty(f,"__esModule",{value:!0});var u=l.vec3f64.fromValues(0,1,0),t=l.vec3f64.fromValues(0,0,1),g=v.mat4f64.create(),c=l.vec3f64.create(),b=l.vec3f64.create();f.headingTiltToDirectionUp=r;f.directionToHeadingTilt=function(a,c,b,d){return q.directionToHeadingTilt(c,b,d,t,u)};f.eyeForCenterWithHeadingTilt=function(a,c,b,d){var e=r(a,b,d),h=l.vec3f64.create();k.vec3.scale(h,e.direction,-c);k.vec3.add(h,h,a);return{up:e.up,eye:h,
heading:b,tilt:d}};f.lookAtTiltToEyeTilt=function(a){return m.rad2deg(a)};f.eyeTiltToLookAtTilt=function(a){return m.deg2rad(a)};f.toExtent=function(a,f,g,d,e){var h=a.renderSpatialReference;a=a.map&&a.spatialReference||f.spatialReference;n.pointToVector(f,c,h);n.pointToVector(f,b,h);c[0]-=g/2;b[0]+=g/2;c[1]-=d/2;b[1]+=d/2;n.vectorToVector(c,h,c,a);n.vectorToVector(b,h,b,a);e?(e.xmin=c[0],e.ymin=c[1],e.xmax=b[0],e.ymax=b[1],e.spatialReference=a):e=new w(c[0],c[1],b[0],b[1],a);return e}});