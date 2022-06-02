// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/mathUtils ../../../../../core/Quantity ../../../../../core/libs/earcut/earcut ../../../../../core/libs/gl-matrix-2/vec2 ../../../../../core/libs/gl-matrix-2/vec2f64 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../../../core/libs/gl-matrix-2/vec4f64 ../../../../../geometry/SpatialReference ../../../../../geometry/support/intersects ../support/measurementUtils ../support/viewUtils ../../../support/earthUtils ../../../support/mathUtils ../../../support/projectionUtils".split(" "),
function(K,L,F,u,r,x,w,k,e,G,H,B,t,C,I,y,m){function D(e,a){for(var c=new Float64Array(e.length*a),d=0;d<e.length;++d)for(var b=e[d],f=0;f<a;++f)c[d*a+f]=b[f];return c}return function(){function g(){this.positionsWorldCoords=[];this.positionsRenderCoords=[];this.positionsProjectedWorldCoords=[];this.positionsFittedRenderCoords=[];this.positionsGeographic=[];this.positionsSpherical=[];this.positionsStereographic=[];this.pathSegmentLengths=[];this.geodesicPathSegmentLengths=[];this.perimeterSegmentLengths=
[];this.intersectingSegments=new Set;this.geodesicIntersectingSegments=new Set;this.areaCentroidWorldCoords=e.vec3f64.create();this.areaCentroidRenderCoords=e.vec3f64.create();this.geodesicAreaCentroidRenderCoords=e.vec3f64.create();this._length=0;this._centroidRenderCoords=e.vec3f64.create();this._planeWorldCoords=G.vec4f64.create();this._worldUp=e.vec3f64.create();this._worldTangent=e.vec3f64.create();this._frame=[e.vec3f64.create(),e.vec3f64.create(),e.vec3f64.create()];this._tempU=e.vec3f64.create();
this._tempV=e.vec3f64.create();this._tempVec3=e.vec3f64.create();this._tempSphere={center:e.vec3f64.create(),radius:0}}g.prototype.update=function(a,c,d,b,f,e,g,p){c.clear();this._resize(a.length);c=m.canProject(d.spatialReference,m.SphericalECEFSpatialReference)&&m.canProjectToWGS84ComparableLonLat(d.spatialReference);for(var J=this.positionsGeographic,l=this.positionsWorldCoords,h=this.positionsRenderCoords,z=this.positionsSpherical,n=0;n<a.length;++n){var q=a.vertex(n);m.pointToVector(q,l[n],g);
m.pointToVector(q,h[n],e);c&&(m.pointToWGS84ComparableLonLat(q,J[n]),m.pointToVector(q,z[n],m.SphericalECEFSpatialReference),k.vec3.normalize(z[n],z[n]))}a=this._updatePathLengths(f);this.pathLength=0<this._length?new u(b.normalizeDistance(a),"meters"):null;c?(a=this._updateGeodesicPathLengths(f),this.geodesicPathLength=0<this._length?new u(a,"meters"):null):this.geodesicPathLength=null;f?(this._updateArea(d,b,e,g,p),c&&this._updateGeodesicArea(d)):(this.geodesicTriangleIndices=this.triangleIndices=
this.perimeterLength=this.geodesicArea=this.area=null,this.intersectingSegments.clear(),this.geodesicIntersectingSegments.clear())};g.prototype._resize=function(a){a<this._length&&(this.positionsWorldCoords.length=a,this.positionsRenderCoords.length=a,this.positionsProjectedWorldCoords.length=a,this.positionsFittedRenderCoords.length=a,this.positionsGeographic.length=a,this.positionsSpherical.length=a,this.positionsStereographic.length=a,this.pathSegmentLengths.length=a,this.geodesicPathSegmentLengths.length=
a,this._length=this.perimeterSegmentLengths.length=a);for(;this._length<a;)this.positionsWorldCoords.push(e.vec3f64.create()),this.positionsRenderCoords.push(e.vec3f64.create()),this.positionsProjectedWorldCoords.push(w.vec2f64.create()),this.positionsFittedRenderCoords.push(e.vec3f64.create()),this.positionsGeographic.push(e.vec3f64.create()),this.positionsSpherical.push(e.vec3f64.create()),this.positionsStereographic.push(w.vec2f64.create()),this.pathSegmentLengths.push(0),this.geodesicPathSegmentLengths.push(0),
this.perimeterSegmentLengths.push(0),++this._length};g.prototype._updatePathLengths=function(a){for(var c=this.positionsWorldCoords,d=this.pathSegmentLengths,b=0,f=0;f<this._length;++f){var e=d[f]=k.vec3.distance(c[f],c[(f+1)%this._length]);if(f<this._length-1||a)b+=e}return b};g.prototype._updateGeodesicPathLengths=function(a){for(var c=this.positionsGeographic,d=this.geodesicPathSegmentLengths,b=0,f=0;f<this._length;++f){var e=d[f]=t.segmentLengthGeodesicVector(c[f],c[(f+1)%this._length]);if(f<
this._length-1||a)b+=e}return b};g.prototype._updateArea=function(a,c,d,b,f){var e=a.renderCoordsHelper;a=this.positionsWorldCoords;var g=this.positionsRenderCoords,p=this.positionsProjectedWorldCoords,E=this.positionsFittedRenderCoords,l=this._planeWorldCoords,h=this._centroidRenderCoords;C.midpoint(g,h);e.worldUpAtPosition(h,this._worldUp);e.worldBasisAtPosition(h,0,this._worldTangent);m.transformDirection(h,this._worldUp,d,this._worldUp,b);m.transformDirection(h,this._worldTangent,d,this._worldTangent,
b);t.bestFitPlane(a,l);this.fittingMode=this._selectFittingMode(l,a,this._worldUp,f);var r=0;if("horizontal"===this.fittingMode){var n=-Infinity;g.forEach(function(a,b){a=e.getAltitude(g[b]);a>n&&(n=a,r=b)})}f=a[r];var h=l,q=this._worldTangent;"horizontal"===this.fittingMode?h=this._worldUp:"vertical"===this.fittingMode&&(h=this._tempVec3,q=this._worldUp,y.makeOrthonormal(l,this._worldUp,h));k.vec3.copy(this._frame[2],h);y.makeOrthonormal(q,h,this._frame[0]);k.vec3.cross(this._frame[1],this._frame[0],
this._frame[2]);k.vec3.negate(this._frame[1],this._frame[1]);for(var l=this._tempVec3,h=this._tempU,q=this._tempV,v=0;v<this._length;++v){var A=p[v],w=E[v];k.vec3.subtract(l,a[v],f);x.vec2.set(A,k.vec3.dot(this._frame[0],l),k.vec3.dot(this._frame[1],l));k.vec3.scale(h,this._frame[0],A[0]);k.vec3.scale(q,this._frame[1],A[1]);k.vec3.add(l,h,q);k.vec3.add(l,l,f);m.vectorToVector(l,b,w,d)}this.perimeterLength=0<this._length?new u(c.normalizeDistance(this._updatePerimeterLengths()),"meters"):null;C.midpoint(E,
this.areaCentroidRenderCoords);m.vectorToVector(this.areaCentroidRenderCoords,d,this.areaCentroidWorldCoords,b);this._updateIntersectingSegments();this.area=0===this.intersectingSegments.size?new u(c.normalizeArea(this._computeArea()),"square-meters"):null};g.prototype._updateGeodesicArea=function(a){a=a.renderCoordsHelper;var c=this.positionsSpherical,d=this.positionsStereographic,b=this._tempVec3,f=t.fitHemisphere(c,b);if(f){var e=this._tempU,g=this._tempV;y.tangentFrame(b,e,g);for(var p=0;p<this._length;++p){var r=
k.vec3.dot(c[p],e),l=k.vec3.dot(c[p],g),h=k.vec3.dot(c[p],b);x.vec2.set(d[p],r/h,l/h)}k.vec3.scale(b,b,I.earthRadius);a.toRenderCoords(b,m.SphericalECEFSpatialReference,this.geodesicAreaCentroidRenderCoords);this._updateGeodesicIntersectingSegments();this.geodesicArea=f&&0===this.geodesicIntersectingSegments.size?new u(this._computeGeodesicArea(),"square-meters"):null}else this.geodesicArea=null};g.prototype._updatePerimeterLengths=function(){for(var a=this.positionsProjectedWorldCoords,c=this.perimeterSegmentLengths,
d=0,b=0;b<this._length;++b)var e=c[b]=x.vec2.distance(a[b],a[(b+1)%this._length]),d=d+e;return d};g.prototype._updateIntersectingSegments=function(){var a=this.positionsProjectedWorldCoords,c=this.intersectingSegments;c.clear();for(var d=0;d<this._length;++d)for(var b=d+2;b<this._length;++b)(b+1)%this._length!==d&&B.segmentIntersects(a[d],a[(d+1)%this._length],a[b],a[(b+1)%this._length])&&(c.add(d),c.add(b))};g.prototype._computeArea=function(){for(var a=this.positionsProjectedWorldCoords,c=D(a,2),
c=this.triangleIndices=new Uint32Array(r.earcut(c,[],2)),d=0,b=0;b<c.length;b+=3)d+=t.triangleAreaEuclidean(a[c[b]],a[c[b+1]],a[c[b+2]]);return d};g.prototype._updateGeodesicIntersectingSegments=function(){var a=this.positionsStereographic,c=this.geodesicIntersectingSegments;c.clear();for(var d=0;d<this._length;++d)for(var b=d+2;b<this._length;++b)(b+1)%this._length!==d&&B.segmentIntersects(a[d],a[(d+1)%this._length],a[b],a[(b+1)%this._length])&&(c.add(d),c.add(b))};g.prototype._computeGeodesicArea=
function(){for(var a=this.positionsGeographic,c=D(this.positionsStereographic,2),c=this.geodesicTriangleIndices=new Uint32Array(r.earcut(c,[],2)),d=0,b=0;b<c.length;b+=3)d+=t.triangleAreaGeodesic(a[c[b]],a[c[b+1]],a[c[b+2]],H.WGS84);return d};g.prototype._selectFittingMode=function(a,c,d,b){var e=c.map(function(b){return Math.abs(t.planePointDistance(a,b))}).reduce(function(a,b){return Math.max(a,b)},0);t.boundingSphere(c,this._tempSphere);c=e/(2*this._tempSphere.radius);var e=c<b.maxRelativeErrorAlmostCoplanar,
g="horizontal";c<b.maxRelativeErrorCoplanar?g="oblique":e&&(g=Math.abs(k.vec3.dot(d,a))>Math.cos(F.deg2rad(b.verticalAngleThreshold))?"horizontal":"vertical");return g};return g}()});