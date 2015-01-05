"use strict";angular.module("bobApp.svg",["bobApp","threeModule","ngRoute","ui.router","ng"]).service("svgD3Data",["$rootScope","$http","$q","$state","$window","countryService",function($rootScope,$http,$q,$state,$window){var service={d3Data:null,wrapURL:function(str){var _str="assets/media/"+str+".json";return _str},mapWBStats:function(whichStat){var me=service;d3.json(service.wrapURL(whichStat),function(err,d){err||(me.d3Data=d[1].sort(function(a,b){return 1*b.value>1*a.value}),$window.d3Data=me.d3Data,angular.forEach(d3Data,function(value,key){var countryLength=210;try{var key1=key/countryLength,key2=255*key1,_color="rgba("+key2/5+", "+key2/4+", "+key2+", "+key1+")",country=value.country.id.toLowerCase();d3.select("#"+country).attr("opacity",key1),d3.select("#"+country).attr("fill",_color),d3.select("#"+country).selectAll("g").attr("fill",_color),d3.select("#"+country).selectAll("g").selectAll("path").attr("fill",_color)}catch(oops){}}))})}};return service}]).controller("ThreeSVGController",["$window","$scope","$rootScope","$state","$stateParams","LocalCRUDService","threeCSSService","countryService","svgD3Data",function($window,$scope,$rootScope,$state,$stateParams,LocalCRUDService,threeCSSService,countryService){$scope.name="ThreeSVGController",$scope._position={z:-70},$scope._rotation={x:0,y:threeCSSService.radianCalculator(200),z:threeCSSService.radianCalculator(180)},$scope.threeCSSService=threeCSSService,$scope.currentItem=null,$scope.activeAnimations=["animate"],$scope.activeParams={},$scope.d3World={},$scope._dir=-1,$scope.incr=.008,$scope.initialScale=.4,$scope.currentRotate=180,$scope.maxRotate=190,$scope.minRotate=170,$scope.svgDiv=function(){return document.getElementById($scope._svgDiv)},$scope.initWorld=function(){var me=this;$scope.svgDiv().addEventListener("touchend",function(evt){me.svgCall(evt)},!1),$scope.svgDiv().addEventListener("click",function(evt){me.svgCall(evt)},!1)},$scope.svgCall=function(evt){null!=$scope.currentItem&&d3.select("#"+$scope.currentItem).attr("opacity",1),$scope.currentItem=evt.target.parentNode.id,console.log("$scope.currentItem="+$scope.currentItem+"; "+countryService.getNameFrom2($scope.currentItem)),d3.select("#"+evt.target.parentNode.id).attr("opacity",0),$window.location.href="#/mapfeed/geo-location/"+countryService.getNameFrom2($scope.currentItem)},$scope.loadSVG=function(xml){console.log("scope.loadSVG");try{null==$window.document.getElementById("theWorld")&&($scope.importedNode=document.importNode(xml.documentElement,!0),$window.d3.select("#"+$scope._svgDiv).node().appendChild($scope.importedNode),$scope.threeCSSService.init($scope.elem,$scope,$scope.__content,$scope._context),render())}catch(oops){}},$scope.loadWBData=function(indicator){},$scope.init=function(elem,_content,_svgDiv,_context,svgURL){var me=$scope;me.isInited||($scope.elem=elem,$scope.__content=_content,$scope._context=_context,$scope._svgDiv=_svgDiv,$scope.svgURL=svgURL,null==$window.document.getElementById("theWorld")&&($scope.d3World=d3.xml($scope.svgURL,"image/svg+xml",function(xml){$window._xml=xml,me.loadSVG(xml),me.initWorld()})),me.isInited=!0)},$scope.animate=function(){$scope.currentRotate+=$scope._dir*$scope.incr,$scope.currentRotate<$scope.maxRotate?$scope.currentRotate<$scope.minRotate&&($scope._dir=-$scope._dir,$scope.currentRotate+=$scope._dir):($scope._dir=-$scope._dir,$scope.currentRotate+=$scope._dir),$scope.css3DObject.rotation.y=threeCSSService.radianCalculator($scope.currentRotate),$scope.css3DObject.position.z=$scope.css3DObject.position.z+$scope._dir*$scope.incr*10,$scope.renderer.render($scope.scene,$scope.camera)};var render=function(){$scope.renderer.render($scope.scene,$scope.camera),threeCSSService.render($scope)}}]).directive("threeSVG",function(){var threeObj={restrict:"AE",replace:!1,scope:{id:"@",eventHandler:"&ngClick"},template:"<div id='svgDiv' data-ng-click='mapClick(this)'></div>"};return threeObj});