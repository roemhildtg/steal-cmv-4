define("spectre-canjs@2.1.3#util/string/string",["exports"],function(e){"use strict";function t(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}Object.defineProperty(e,"__esModule",{value:!0}),e.makeSentenceCase=function(e){return e=String(e),t(String.prototype.trim.call(e.split("_").join(" ").toLowerCase().replace(/ +/g," ")))}}),define("can-arcgis@2.2.2#components/identify/util/identifyMapImage",["exports","esri-loader","can-util/js/get/get","can-util/js/assign/assign","spectre-canjs/util/string/string"],function(e,t,r,a,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r){return e.results?e.results.map(function(e){var a=(0,o.default)(t,r.id+"."+e.layerId)||{};return e.feature.popupTemplate=(0,l.default)({title:e.layerName,content:[{type:"fields",fieldInfos:Object.keys(e.feature.attributes).map(function(e){return{fieldName:e,label:(0,n.makeSentenceCase)(e),visible:!0}})}]},a.serialize?a.serialize():a),e.feature}):[]}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,r,a){return(0,t.loadModules)(["esri/tasks/support/IdentifyParameters","esri/tasks/IdentifyTask"]).then(function(t){var n=c(t,2),s=n[0],l=n[1],p=(0,o.default)(a.layerInfos,r.id+".include"),u=(0,o.default)(a.layerInfos,r.id+".exclude"),y=new s({layerIds:r.sublayers.filter(function(e){return(!p||!p.length||-1!==p.indexOf(e.id))&&!(u&&u.length&&u.indexOf(e.id)>-1)&&e.visible}).map(function(e){return e.id}),layerOption:"visible",returnGeometry:!0,spatialReference:e.mapPoint.spatialReference,tolerance:15,geometry:e.mapPoint,height:a.view.height,width:a.view.width,mapExtent:a.view.extent});return new l({url:r.url}).execute(y).then(function(e){return i(e,a.popupTemplates,r)})})};var o=s(r),l=s(a),c=function(){function e(e,t){var r=[],a=!0,n=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,s=e}finally{try{!a&&o.return&&o.return()}finally{if(n)throw s}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()}),define("can-arcgis@2.2.2#components/identify/identify",["exports","can-define/map/map","./util/identifyMapImage","esri-loader"],function(e,t,r,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.IDENTIFY_METHODS=void 0;var s=n(t),i=n(r),o=function(){function e(e,t){var r=[],a=!0,n=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,s=e}finally{try{!a&&o.return&&o.return()}finally{if(n)throw s}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=void 0;(0,a.loadModules)(["esri/geometry/geometryEngine"]).then(function(e){var t=o(e,1);l=t[0]});var c=e.IDENTIFY_METHODS={"esri.layers.MapImageLayer":i.default,"esri.layers.FeatureLayer":function(e,t,r){return r.view.hitTest(e).then(function(e){return e.results.filter(function(e){return e.graphic.layer&&"esri.layers.VectorTileLayer"!==e.graphic.layer.declaredClass}).map(function(e){return e.graphic})})}};e.default=s.default.extend({clickHandle:"*",layerInfos:s.default,timeout:{type:"number",value:2e3},view:{type:"*",set:function(e){return this.clickHandle&&this.clickHandle.remove(),e&&(this.clickHandle=e.on("click",this.identify.bind(this))),e}},identify:function(e){var t=this;e.stopPropagation(),this.view.popup.features=[];var r=[],a=this.view.map.allLayers;return a.toArray().sort(function(e,t){if("esri.layers.FeatureLayer"===e.declaredClass)return-1;var r=a.indexOf(e);return a.indexOf(t)-r}).forEach(function(a){if(a.visible&&c.hasOwnProperty(a.declaredClass)){var n=new Promise(function(r){var n=!1;c[a.declaredClass](e,a,t).then(function(e){n=!0,r(e)}).catch(function(e){r([])}),setTimeout(function(){n||r([])},t.timeout)});r.push(n)}}),Promise.all(r).then(function(r){var a=r.reduce(function(e,t){return e.concat(t)},[]);return a.sort(function(t,r){var a=[t,r].map(function(e){return e.geometry.extent?e.geometry.extent.center:e.geometry}),n=a.map(function(t,r){return l.distance(e.mapPoint,a[r],"feet")}),s=n[0]-n[1];if(Math.round(100*s)/100==0){if(t.layer&&"esri.layers.FeatureLayer"===t.layer.declaredClass)return-1;if(r.layer&&"esri.layers.FeatureLayer"===r.layer.declaredClass)return 1}return s}),a.length&&t.view.popup.open({selectedFeatureIndex:0,features:a,updateLocationEnabled:!0}),a})}})}),define("can-arcgis@2.2.2#components/draw-widget/template.stache!steal-stache@4.0.1#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@4.0.1#can-view-import","can-stache-bindings@4.0.5#can-stache-bindings"],function(e,t,r){var a=t("components/draw-widget/template.stache",[{tokenType:"start",args:["div",!1,1]},{tokenType:"attrStart",args:["class",1]},{tokenType:"attrValue",args:["btn-group mt-2",1]},{tokenType:"attrEnd",args:["class",1]},{tokenType:"end",args:["div",!1,1]},{tokenType:"chars",args:["                         ",1]},{tokenType:"special",args:["#each(geometries, type=value)",1]},{tokenType:"chars",args:["\r\n        ",1]},{tokenType:"special",args:["#with(button=../buttons[type])",2]},{tokenType:"chars",args:["\r\n        ",2]},{tokenType:"start",args:["button",!1,3]},{tokenType:"attrStart",args:["class",3]},{tokenType:"attrValue",args:["btn btn-default tooltip ",3]},{tokenType:"special",args:["#is ../type ../../active",3]},{tokenType:"attrValue",args:["active",3]},{tokenType:"special",args:["/is",3]},{tokenType:"attrEnd",args:["class",3]},{tokenType:"attrStart",args:["data-tooltip",3]},{tokenType:"special",args:["button.tooltip",3]},{tokenType:"attrEnd",args:["data-tooltip",3]},{tokenType:"attrStart",args:["type",3]},{tokenType:"attrValue",args:["button",3]},{tokenType:"attrEnd",args:["type",3]},{tokenType:"attrStart",args:["on:el:click",3]},{tokenType:"attrValue",args:["../../draw(../type)",3]},{tokenType:"attrEnd",args:["on:el:click",3]},{tokenType:"end",args:["button",!1,4]},{tokenType:"start",args:["i",!1,4]},{tokenType:"attrStart",args:["class",4]},{tokenType:"special",args:["button.iconClass",4]},{tokenType:"attrEnd",args:["class",4]},{tokenType:"end",args:["i",!1,4]},{tokenType:"close",args:["i",4]},{tokenType:"close",args:["button",4]},{tokenType:"chars",args:["\r\n        ",4]},{tokenType:"special",args:["/with",5]},{tokenType:"chars",args:["\r\n    ",5]},{tokenType:"special",args:["/each",6]},{tokenType:"chars",args:["\r\n    ",6]},{tokenType:"special",args:["#if(graphicsLayer.graphics.items.length)",7]},{tokenType:"chars",args:["\r\n        ",7]},{tokenType:"start",args:["button",!1,8]},{tokenType:"attrStart",args:["class",8]},{tokenType:"attrValue",args:["btn btn-action tooltip",8]},{tokenType:"attrEnd",args:["class",8]},{tokenType:"attrStart",args:["data-tooltip",8]},{tokenType:"attrValue",args:["Clear Selection",8]},{tokenType:"attrEnd",args:["data-tooltip",8]},{tokenType:"attrStart",args:["on:el:click",8]},{tokenType:"attrValue",args:["clearGraphics()",8]},{tokenType:"attrEnd",args:["on:el:click",8]},{tokenType:"end",args:["button",!1,8]},{tokenType:"chars",args:["\r\n        ",8]},{tokenType:"start",args:["i",!1,9]},{tokenType:"attrStart",args:["class",9]},{tokenType:"attrValue",args:["esri-icon-trash",9]},{tokenType:"attrEnd",args:["class",9]},{tokenType:"end",args:["i",!1,9]},{tokenType:"close",args:["i",9]},{tokenType:"close",args:["button",9]},{tokenType:"chars",args:["\r\n    ",9]},{tokenType:"special",args:["/if",10]},{tokenType:"chars",args:["\r\n",10]},{tokenType:"close",args:["div",11]},{tokenType:"chars",args:["\r\n",11]},{tokenType:"special",args:["#if allowContinuous",12]},{tokenType:"chars",args:["\r\n    ",12]},{tokenType:"start",args:["div",!1,13]},{tokenType:"attrStart",args:["class",13]},{tokenType:"attrValue",args:["form-group",13]},{tokenType:"attrEnd",args:["class",13]},{tokenType:"end",args:["div",!1,13]},{tokenType:"chars",args:["\r\n        ",13]},{tokenType:"start",args:["label",!1,14]},{tokenType:"attrStart",args:["class",14]},{tokenType:"attrValue",args:["form-switch",14]},{tokenType:"attrEnd",args:["class",14]},{tokenType:"end",args:["label",!1,14]},{tokenType:"chars",args:["\r\n            ",14]},{tokenType:"start",args:["input",!0,15]},{tokenType:"attrStart",args:["type",15]},{tokenType:"attrValue",args:["checkbox",15]},{tokenType:"attrEnd",args:["type",15]},{tokenType:"attrStart",args:["el:checked:bind",15]},{tokenType:"attrValue",args:["continueDraw",15]},{tokenType:"attrEnd",args:["el:checked:bind",15]},{tokenType:"end",args:["input",!0,15]},{tokenType:"chars",args:["\r\n            ",15]},{tokenType:"start",args:["i",!1,16]},{tokenType:"attrStart",args:["class",16]},{tokenType:"attrValue",args:["form-icon",16]},{tokenType:"attrEnd",args:["class",16]},{tokenType:"end",args:["i",!1,16]},{tokenType:"close",args:["i",16]},{tokenType:"chars",args:[" Enable continuous drawing\r\n        ",16]},{tokenType:"close",args:["label",17]},{tokenType:"chars",args:["\r\n    ",17]},{tokenType:"close",args:["div",18]},{tokenType:"chars",args:["\r\n",18]},{tokenType:"special",args:["/if",19]},{tokenType:"done",args:[19]}]);return function(t,r,n){var s=Object.assign({module:e},r);return a(t,s,n)}}),define("can-arcgis@2.2.2#components/draw-widget/defaults",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.graphics={pointSymbol:{type:"simple-marker",style:"square",color:"#8A2BE2",size:"16px",outline:{color:[255,255,255],width:3}},polylineSymbol:{type:"simple-line",color:"#8A2BE2",width:"4",style:"dash"},polygonSymbol:{type:"simple-fill",color:"rgba(138,43,226, 0.8)",style:"solid",outline:{color:"white",width:1}}},e.buttons={point:{type:"point",tooltip:"Draw a point",iconClass:"esri-icon-blank-map-pin"},polyline:{type:"polyline",tooltip:"Draw a line",iconClass:"esri-icon-polyline"},polygon:{type:"polygon",tooltip:"Draw a polygon",iconClass:"esri-icon-polygon"}}}),define("can-arcgis@2.2.2#components/draw-widget/ViewModel",["exports","can-define/map/map","./defaults","can-arcgis/util/decorateAccessor","esri-loader"],function(e,t,r,a,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(t),o=s(a),l=function(){function e(e,t){var r=[],a=!0,n=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,s=e}finally{try{!a&&o.return&&o.return()}finally{if(n)throw s}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.default=i.default.extend("DrawWidget",{sketch:{type:"*",set:function(e){var t=this;return this.sketch&&this.sketch.destroy(),e&&(this.sketchHandle=e.on("draw-complete",function(r){t.graphicsLayer.add(r.graphic),t.continueDraw?setTimeout(function(){e.create(t.active)}):setTimeout(function(){t.active=null})})),e}},sketchHandle:{type:"*",set:function(e){return this.sketchHandle&&this.sketchHandle.remove(),e}},graphicsLayer:{},active:{type:"string",set:function(e){return e?(this.viewHandle=this.view.on("click",function(e){e.stopPropagation()}),this.sketch.create(e),e):(this.sketch&&this.sketch.reset(),this.viewHandle=null,e)}},geometries:{type:function(e){return"string"==typeof e?e.split(","):e},value:function(){return["point","polyline","polygon"]}},buttons:{value:r.buttons},allowContinuous:{value:!0,type:"boolean"},continueDraw:{value:!1,type:"boolean"},view:{set:function(e){var t=this;return this.graphicsLayer&&this.view&&this.view.map&&this.view.map.remove(this.graphicsLayer),this.sketchHandle=null,this.sketch=null,this.viewHandle=null,e&&(0,n.loadModules)(["esri/layers/GraphicsLayer","esri/widgets/Sketch/SketchViewModel"]).then(function(a){var n=l(a,2),s=n[0],i=n[1],c=t.graphicsLayer||(0,o.default)(new s({title:"Selection Graphics",listMode:"hide"}));e.map.add(c),t.graphicsLayer=c;var p=new i({view:e,pointSymbol:r.graphics.pointSymbol,polylineSymbol:r.graphics.polylineSymbol,polygonSymbol:r.graphics.polygonSymbol});t.sketch=p}),e}},viewHandle:{type:"*",set:function(e){return this.viewHandle&&this.viewHandle.remove(),e}},draw:function(e){this.active=e===this.active?null:e},clearGraphics:function(){this.graphicsLayer.graphics.removeAll()}})}),define("can-arcgis@2.2.2#components/draw-widget/draw-widget",["exports","can-component","./template.stache","./ViewModel"],function(e,t,r,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(t),i=n(r),o=n(a);e.default=s.default.extend({tag:"draw-widget",ViewModel:o.default,view:i.default,events:{removed:function(){this.viewModel.view=null}}})});
//# sourceMappingURL=edit-features-gr-d3cd05fb.js.map