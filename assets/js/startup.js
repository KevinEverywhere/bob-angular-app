function pixelWrap(_var){return null!=window[_var]?window[_var]+"px":""}function changeOrient(event){console.log("changeOrient . startup---");try{changeSize(event)}catch(oops){console.log("no orient change")}}function isMobile(){var _isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iPhone:function(){return navigator.userAgent.match(/iPhone/i)},iPod:function(){return navigator.userAgent.match(/iPod/i)},iPad:function(){return navigator.userAgent.match(/iPad/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Desktop:function(){return navigator.userAgent.match(/Chrome/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return _isMobile.Android()||_isMobile.BlackBerry()||_isMobile.iOS()||_isMobile.Opera()||_isMobile.Windows()},type:function(){var _type="NotMobile";for(var z in _isMobile)if("type"!=z&&"any"!=z&&"iOS"!=z&&_isMobile[z]()){_type=z;break}return _type}};return _isMobile}function changeSize(){getCurrentDimensions(),less.modifyVars({"@bobAppX":pixelWrap("bobAppX"),"@bobAppY":pixelWrap("bobAppY"),"@axis1L":pixelWrap("axis1L"),"@axis1T":pixelWrap("axis1T"),"@axis1R":pixelWrap("axis1R"),"@axis1B":pixelWrap("axis1B"),"@axis1W":pixelWrap("axis1W"),"@axis1H":pixelWrap("axis1H"),"@axis2L":pixelWrap("axis2L"),"@axis2T":pixelWrap("axis2T"),"@axis2R":pixelWrap("axis2R"),"@axis2B":pixelWrap("axis2B"),"@axis2W":pixelWrap("axis2W"),"@axis2H":pixelWrap("axis2H"),"@axis3L":pixelWrap("axis3L"),"@axis3T":pixelWrap("axis3T"),"@axis3R":pixelWrap("axis3R"),"@axis3B":pixelWrap("axis3B"),"@axis3W":pixelWrap("axis3W"),"@axis3H":pixelWrap("axis3H"),"@pageBottomL":pixelWrap("pageBottomL"),"@pageBottomT":pixelWrap("pageBottomT"),"@pageBottomR":pixelWrap("pageBottomR"),"@pageBottomB":pixelWrap("pageBottomB"),"@pageBottomW":pixelWrap("pageBottomW"),"@pageBottomH":pixelWrap("pageBottomH"),"@isMobile":isMobile().any(),"@mobileType":isMobile().type(),"@rowTrim":pixelWrap("rowTrim"),"@columnTrim":pixelWrap("columnTrim"),"@trimmedBox":pixelWrap("trimmedBox"),"@svgWorld":pixelWrap("svgWorld")}),window.hardcoded&&window.hardcoded(svgWorld)}function getCurrentDimensions(){try{theLarge=Math.max(window.innerWidth,window.innerHeight),theSmall=Math.min(window.innerWidth,window.innerHeight),theOrientation=window.innerWidth>window.innerHeight?"horizontal":"vertical"}catch(noBodyClient){try{theLarge=Math.max(document.body.clientWidth,document.body.clientHeight),theSmall=Math.min(document.body.clientWidth,document.body.clientHeight),theOrientation=document.body.clientWidth>document.body.clientHeight?"horizontal":"vertical"}catch(noBodyClient){theLarge=Math.max(window.screen.width,window.screen.height),theSmall=Math.min(window.screen.width,window.screen.height),theOrientation=window.screen.width>window.screen.height?"horizontal":"vertical"}}var actualSVGW=1117;axis1L=0,axis1T=0,axis1R=0,axis1H=rowTrim,axis1W="horizontal"==theOrientation?theLarge:theSmall,axis1B="horizontal"==theOrientation?theSmall-rowTrim:theLarge-rowTrim,isMobile().any()&&(480>theSmall||720>theLarge)||480>theSmall||720>theLarge||"vertical"==theOrientation?(axis2L=0,axis2T=rowTrim,axis2R=0,axis2B=rowTrim,axis2W="horizontal"==theOrientation?theLarge:theSmall,axis2H="horizontal"==theOrientation?theSmall-2*rowTrim:theLarge-2*rowTrim,axis3L=0,axis3H=0,axis3R="horizontal"==theOrientation?theLarge:theSmall,axis3B="horizontal"==theOrientation?theSmall:theLarge,axis3W=0,axis3T="horizontal"==theOrientation?theSmall:theLarge):(axis2L=0,axis2T=rowTrim,axis2R="horizontal"==theOrientation?columnTrim:0,axis2B="horizontal"==theOrientation?rowTrim:2*rowTrim,axis2W="horizontal"==theOrientation?theLarge-columnTrim:theSmall,axis2H="horizontal"==theOrientation?theSmall-2*rowTrim:theLarge-3*rowTrim,axis3L="horizontal"==theOrientation?theLarge-columnTrim:0,axis3H="horizontal"==theOrientation?theSmall-2*rowTrim:2*rowTrim,axis3R=0,axis3B=rowTrim,axis3W="horizontal"==theOrientation?columnTrim:theSmall,axis3T="horizontal"==theOrientation?rowTrim:theLarge-3*rowTrim),svgWorld=axis2W/actualSVGW,pageBottomL=0,pageBottomH=rowTrim,pageBottomR=0,pageBottomB=0,pageBottomT="horizontal"==theOrientation?theSmall-rowTrim:theLarge-rowTrim,pageBottomW="horizontal"==theOrientation?theLarge:theSmall,bobAppX="horizontal"==theOrientation?(theLarge-theSmall)/2:(theSmall-theLarge)/2,bobAppY="vertical"==theOrientation?(theLarge-theSmall)/2:(theSmall-theLarge)/2}function updateFormFieldHints(){$("INPUT.auto-hint, TEXTAREA.auto-hint").focus(function(){$(this).val()==$(this).attr("title")&&($(this).val(""),$(this).removeClass("auto-hint"))}),$("INPUT.auto-hint, TEXTAREA.auto-hint").blur(function(){""==$(this).val()&&""!=$(this).attr("title")&&($(this).val($(this).attr("title")),$(this).addClass("auto-hint"))}),$("INPUT.auto-hint, TEXTAREA.auto-hint").each(function(){""!=$(this).attr("title")&&(""==$(this).val()?$(this).val($(this).attr("title")):$(this).removeClass("auto-hint"))})}var rowTrim=50,columnTrim=200,trimmedBox=180,apiKey="AIzaSyA-pLtbyLpZuLivlcOZSIq54horCyM8FlU",handleClientLoad=function(){gapi.client.setApiKey(apiKey)};