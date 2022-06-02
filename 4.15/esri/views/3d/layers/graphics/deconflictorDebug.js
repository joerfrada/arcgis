// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../support/debugFlags"],function(v,h,w,n){function t(a,f,e,u,k){g&&(g(),g=null);var d=b.height,c=l;c.beginPath();c.lineWidth=1;c.strokeStyle=k;c.moveTo(a,d-e);c.lineTo(f,d-e);c.stroke();c.lineTo(f,d-u);c.stroke();c.lineTo(f,d-e);c.stroke();c.lineTo(a,d-e);c.stroke();c.lineTo(a,d-e);c.stroke();c.closePath()}Object.defineProperty(h,"__esModule",{value:!0});var m=!1,q=!1,p=!1,r=!1,g=null,b,l;h.drawAccelerationStruct=function(a,
b){if(q&&l){g&&(g(),g=null);for(var e=l,f=0,k=0;k<a.accBinsNumX;k++)for(var d=0;d<a.accBinsNumY;d++){var c=a.accBins[k][a.accBinsNumY-1-d],f=f+c.length,h=k*a.accBinsSizeX,n=(k+1)*a.accBinsSizeX,m=d*a.accBinsSizeY,p=(d+1)*a.accBinsSizeY;e.fillText(c.length.toFixed(),h+5,m+15);t(h,n,m,p,"blue")}e.fillText("total totalShownLabels: "+f,70,40);e.fillText("total visible labels: "+b.size,70,50);e.fillText("total numTests: "+a.accNumTests,70,30)}};h.prepare=function(a){p=n.DECONFLICTOR_SHOW_OUTLINES;r=n.DECONFLICTOR_SHOW_OUTLINES_INVISIBLE;
m=p||r;q=n.DECONFLICTOR_SHOW_GRID;g=null;m||q?g=function(){null==b&&(b=document.createElement("canvas"),b.setAttribute("id","canvas2d"),a.surface.parentElement.style.position="relative",a.surface.parentElement.appendChild(b));var f=a.height*a.pixelRatio;b.setAttribute("width",a.width*a.pixelRatio+"px");b.setAttribute("height",f+"px");b.setAttribute("style","position:absolute;left:0px;top:0px;display:block;pointer-events:none;width:"+a.width+"px;height:"+a.height+"px");l=b.getContext("2d");l.clearRect(0,
0,a.width,a.height);l.font="12px Arial"}:b&&(b.parentElement.removeChild(b),b=null)};h.drawPoly=function(a,b){m&&(b&&p||!b&&r)&&t(a.xMin,a.xMax,a.yMin,a.yMax,b?"green":"red")}});