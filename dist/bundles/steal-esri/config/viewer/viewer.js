define("can-arcgis@1.0.0#config/viewer/viewer",["exports","~/util/dom/getFragNode","can-stache"],function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(t),r=(0,i(o).default)('<property-table id="stachePropTable" {object}="graphic.attributes" />'),a=document.createElement("p");a.innerHTML="Hello!",a.style="background-color: #4CAF50; \n                border: none;\n                color: white;\n                padding: 15px 32px;\n                text-align: center;\n                text-decoration: none;\n                display: inline-block;\n                font-size: 16px;",a.onclick=function(){alert("you clicked me!")},e.default={viewOptions:{center:[-93.28697204589844,44.294471740722656],zoom:12},mapOptions:{layers:[{path:"esri/layers/FeatureLayer",options:{url:"https://services1.arcgis.com/6bXbLtkf4y11TosO/arcgis/rest/services/Restaurants/FeatureServer/0",id:"workorders",outFields:["*"],popupTemplate:{title:"{task_name} Task - {id}",content:function(e){return(0,n.default)(r(e))},actions:[{title:"Quick Complete",id:"complete",className:"esri-icon-check-mark"}]}}}]},widgets:[{type:"esri",parent:"expand",path:"dijit/layout/ContentPane",position:"top-right",iconClass:"esri-icon-description",options:{style:"background-color: #ff8040",content:"Hello!"}},{parent:"view",component:a,position:"bottom-left"},{type:"esri",parent:"expand",path:"esri/widgets/LayerList",position:"top-right"}]}});
//# sourceMappingURL=viewer.js.map