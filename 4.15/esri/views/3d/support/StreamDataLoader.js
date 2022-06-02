// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/assignHelper ../../../request ../../../core/Accessor ../../../core/arrayUtils ../../../core/Error ../../../core/lang ../../../core/maybe ../../../core/now ../../../core/promiseUtils ../../../core/accessorSupport/decorators ./AsyncWorkerQueue ./StreamDataLoaderTask ../webgl-engine/lib/Util ../../../views/support/Scheduler".split(" "),function(n,h,r,w,x,p,y,z,A,B,t,u,k,
q,C,D,E,F){function G(d){if(2>d.byteLength)return"unknown";d=new Uint8Array(d,0,d.byteLength);return 137===d[0]&&80===d[1]?"image/png":71===d[0]&&73===d[1]?"image/gif":66===d[0]&&77===d[1]?"image/bmp":255===d[0]&&216===d[1]?"image/jpeg":"unknown"}Object.defineProperty(h,"__esModule",{value:!0});n=function(d){function c(){var a=null!==d&&d.apply(this,arguments)||this;a.tasks=new Map;a.onLoadQueue=[];a.doneQueue=[];a.updating=!1;return a}w(c,d);c.prototype.setup=function(a,b,c){var e=this;this.loadQueue=
new C.AsyncWorkerQueue(function(a,b){return e.startLoading(a,b)},function(a,b){return e.doneLoadingCallback(a,b)},a,b);c&&(this.taskHandle=c.registerTask(F.Task.STREAM_DATA_LOADER,function(a){return e.update(a)},function(){return 0<e.doneQueue.length||0<e.onLoadQueue.length}))};c.prototype.destroy=function(){this.taskHandle&&(this.taskHandle.remove(),this.taskHandle=null);this.tasks.forEach(function(a){a.abortController&&a.abortController.abort()});this.loadQueue.clear();this.tasks=this.doneQueue=
this.onLoadQueue=this.loadQueue=null};Object.defineProperty(c.prototype,"busy",{get:function(){return this.loadQueue.busy},enumerable:!0,configurable:!0});c.prototype.request=function(a,b,c,e){var g=this;void 0===e&&(e={});var f=k.createResolver();f.__signal=t.isSome(e)?e.signal:null;var d=this.createOrUpdateTask(a,b,c,e,f);k.onAbort(e,function(){return g.cancelRequest(d,f)});return f.promise};c.prototype.createTask=function(a,b,c,e,d,f){a=new D.default(a,b,c,e,d);this.updateTask(a,f);this.tasks.set(d,
a);1===this.tasks.size&&this._set("updating",!0);this.loadQueue.push(a);return a};c.prototype.cancelRequest=function(a,b){z.removeUnordered(a.resolvers,b);b.reject(k.createAbortError());0===a.resolvers.length&&(2===a.status&&(a.status=4,this.loadQueue.cancel(a),a.abortController.abort(),a.request=null,a.abortController=null),a.status=4,this.tasks.delete(a.key),0===this.tasks.size&&this._set("updating",!1))};c.prototype.taskKey=function(a,b,c){return a+":"+b+":"+c};c.prototype.updateTask=function(a,
b){a.resolvers.push(b)};c.prototype.createOrUpdateTask=function(a,b,c,e,d){var f=t.isSome(e)&&e.uid||a,f=this.taskKey(f,b,c),g=this.tasks.get(f);return g?(this.updateTask(g,d),g):this.createTask(a,e,b,c,f,d)};c.prototype.doneLoadingCallback=function(a,b){this.loadQueue&&(E.assert(2===a.status),a.status=3,this.taskHandle?this.doneQueue.push({task:a,err:b}):this.doneLoading(a,b))};c.prototype.update=function(a){for(;!a.done&&0<this.onLoadQueue.length;){var b=this.onLoadQueue.shift();k.throwIfAborted(b.task.abortController);
b.task.abortController=null;b.callback(b.task);a.madeProgress()}for(;!a.done&&0<this.doneQueue.length;)b=this.doneQueue.shift(),3!==b.task.status&&(b.err=b.err||k.createAbortError()),this.doneLoading(b.task,b.err),a.madeProgress()};c.prototype.doneLoading=function(a,b){for(var c=a.result instanceof HTMLImageElement?0:a.resolvers.length,e=0,d=a.resolvers;e<d.length;e++){var f=d[e];if(b)k.isAbortError(b)?f.reject(b):f.reject(new A("stream-data-loader:request-error","Failed to request resource at '"+
a.url+"'. "+b,{url:a.url,error:b}));else{--c;var l=0>=c?a.result:B.clone(a.result);f.resolve(l)}}this.tasks.delete(a.key);0===this.tasks.size&&this._set("updating",!1)};c.prototype.startLoading=function(a,b){var c=this;if(4===a.status)return!1;a.startTime=u();a.status=2;var d,g;switch(a.docType){case "binary":g="array-buffer";d=0;break;case "image":g="image";break;case "image+type":g="array-buffer";break;default:g="json"}a.abortController=k.createAbortController();var f=a.abortController.signal;a.request=
p(a.url,x({},a.options,{responseType:g,timeout:d,signal:f}));var l=function(){},h=function(d){a.duration=u()-a.startTime;a.size=d instanceof ArrayBuffer?d.byteLength:a.size||0;a.result=d;c.taskHandle?c.onLoadQueue.push({callback:b,task:a}):(a.abortController=null,b(a))},m=function(d){2===a.status&&b(a,d);l()};if("image+type"!==a.docType)return a.request.then(function(a){return h(a.data)},m),!0;a.request.then(function(b){b=b.data;var c=G(b);g="image";a.size=b.byteLength;if("unknown"===c)a.request=
p(a.url,{responseType:g,timeout:d,signal:f}),a.request.then(function(a){return h(a.data)},m);else{b=new Blob([b],{type:c});var e=window.URL.createObjectURL(b);l=function(){return window.URL.revokeObjectURL(e)};a.request=p(e,{responseType:g,timeout:d,signal:f});a.request.then(function(a){return h(new v(a.data,c,l))},m)}},m);return!0};Object.defineProperty(c.prototype,"test",{get:function(){return{loadQueue:this.loadQueue}},enumerable:!0,configurable:!0});r([q.property({readOnly:!0})],c.prototype,"updating",
void 0);return c=r([q.subclass("esri.views.3d.support.StreamDataLoader")],c)}(q.declared(y));h.StreamDataLoader=n;var v=function(){return function(d,c,a){this.image=d;this.type=c;this.release=a}}();h.ImageWithType=v;h.default=n});