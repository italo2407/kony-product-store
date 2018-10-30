define({ 

 //Type your controller code here 
 path:{},
 populateSegment: function(subCategories){
   this.view.sgmCategories.widgetDataMap={"lblCategoryName":"name", "id":"id"};
   var animation=this.animationCategorySegment();
   this.view.sgmCategories.setData(subCategories);
   this.view.sgmCategories.setAnimations({visible:animation});

 },
 
 init:function(){
   
	this.displayData("");
 },
  
 getCategories: function(input){
   	var categoryPromise=invokeServiceIntegration(input);
   	var self=this;
   	categoryPromise.then(function(response){
      kony.print("Response:"+JSON.stringify(response));
      debugger;
      var category=response.categories===undefined?null:response.categories[0];
      self.renderSubCategoriesOrShowProductList(category);
    },function(error){
      kony.application.dismissLoadingScreen();
      alert('Error:'+JSON.stringify(error));
    });
 },

 onClickRowCategorySegment:function(){
 	var selectedRow=this.view.sgmCategories.selectedRowItems[0];
   	this.displayData(selectedRow.id);
 },
 
 displayData:function(idCategory){
   	kony.application.showLoadingScreen(null, "Loading...", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    var data=idCategory===""?{}:{"id":idCategory};
   	var input=buildInputRequest(SERVICE_NAME, GET_CATEGORIES, {},data);
    this.getCategories(input);
 },
  
 buildBreadcrumbs:function(pathArray){
   	var navigation=HOME;
    if(pathArray!==null && pathArray!== undefined && pathArray.length>1){
    	for(var i=1;i<pathArray.length;i++){
     		navigation=navigation + " > " + pathArray[i].name;
    	}  
    }
   	this.view.lblNavigation.text=navigation;
 },
 
 renderSubCategoriesOrShowProductList:function(category){
   	if(category===null || category.subCategories===null || category.subCategories=== undefined || category.subCategories.length===0){
    	var selectedRow=this.view.sgmCategories.selectedRowItems[0];
      	navigationForm("frmProductList",selectedRow,"categoryList");
    }
   	else{
      	path=category.path;
    	this.populateSegment(category.subCategories);
   		this.buildBreadcrumbs(category.path);
      	this.showButtonBack(category.path);
        kony.application.dismissLoadingScreen();
      	this.view.sgmCategories.isVisible=true;
        this.view.lblNavigation.isVisible=true;
    }
 },
 
 animationCategorySegment:function(){
    var animConfig={ "duration":1, 
                     "iterationCount":1, 
                     "delay":0, 
                     "fillMode":kony.anim.FILL_MODE_FORWARDS 
                   };
    var transformProp1=kony.ui.makeAffineTransform();
    transformProp1.translate(500,0);
    var transformProp2=kony.ui.makeAffineTransform();
    transformProp2.translate(0,0);
    var animDefinition={ 0 : { "transform":transformProp1 },
                       	 100 : { "transform":transformProp2 }};
    var animationObj=kony.ui.createAnimation(animDefinition);
    var animation={ definition: animationObj, config:animConfig, callbacks:null };
    return animation;
  },
  
  animationWidget:function(topStart, topEnd, opacityStart, opacityEnd, isNeedEndCallback, isVisibleSearchComp){
    var self=this;
    
    function animationStartCallBack(){
      if(isNeedEndCallback!==null && !isNeedEndCallback)
      	self.view.searchComponent.isVisible=isVisibleSearchComp;
    }
    
    function animationEndCallBack(){
      if(isNeedEndCallback!==null && isNeedEndCallback)
      	self.view.searchComponent.isVisible=isVisibleSearchComp;
    }
    
    var animDef={
      "0":{
        "top":topStart,
        "stepConfig":{ "timingFunction":kony.anim.EASE_IN_OUT },
        "opacity":opacityStart
      },
      "100":{
        "top":topEnd,
        "stepConfig":{ "timingFunction":kony.anim.EASE_IN_OUT },
        "opacity":opacityEnd
      }
    };
    
    var animObj=kony.ui.createAnimation(animDef);
    var animConfig={ "duration":1,
                   	 "fillMode":kony.anim.FILL_MODE_FORWARDS,
                   	 "iterationCount":1,
                   	 "delay":0
                   };
    
    var callbacks = {
      "animationStart":animationStartCallBack,
      "animationEnd":animationEndCallBack
    };
    var animation={ animObj, animConfig, callbacks };
    return animation;
   	
  },
  
  animationSearchComponent:function(topStart, topEnd, opacityStart, opacityEnd, isNeedEndCallback, isVisibleSearchComp){
    var animation=this.animationWidget(topStart, topEnd, opacityStart,opacityEnd, isNeedEndCallback, isVisibleSearchComp);
    this.view.searchComponent.animate(animation.animObj, animation.animConfig, animation.callbacks);
  },
  
  animationSegmentListCategory:function(topStart, topEnd, opacityStart, opacityEnd, isNeedEndCallback, isVisibleSearchComp){
    var animation=this.animationWidget(topStart, topEnd, opacityStart,opacityEnd, isNeedEndCallback, isVisibleSearchComp);
    this.view.flxScrollMainContent.animate(animation.animObj, animation.animConfig, animation.callbacks);
  },
  
  onClickSearch:function(){
    this.animationSearchComponent("0","10%",0.0,1.0,false,true);
    this.animationSegmentListCategory("10%","20%",1.0,1.0,null,null);
  },
  
  onClickCancelSearch:function(){
    this.animationSearchComponent("10%","0",1.0,0.0,true,false);
	this.animationSegmentListCategory("20%","10%",1.0,1.0,null,null);
    this.view.searchComponent.searchValue="";
  },
  
  onSearchDone:function(){
    navigationForm("frmProductList",this.view.searchComponent.searchValue,"search");
  },
  
  postShow:function(){
    if(!this.view.sgmCategories.isVisible){
      kony.application.showLoadingScreen(null, "Loading...", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    }
    
  },
  
  showButtonBack:function(pathArray){
  	if(pathArray!==null && pathArray!== undefined && pathArray.length>1){
    	this.view.flxBack.isVisible=true;  
    }
    else{
      	this.view.flxBack.isVisible=false; 
    }
  },
  
  onClickBtnBack:function(){
    if(path!==null && path!== undefined && path.length>1){
      //get parent id of current category
      var id=path[path.length-2].id;
      this.displayData(id);
    }
  }

 });