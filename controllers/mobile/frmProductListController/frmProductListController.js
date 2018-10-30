define({ 

  gblInfo:{},

  populateSegment: function(products){
	var data=[];
    for(var i=0;i<products.length;i++){
    	var sknPrice=products[i].onSale == "true" ? "sknlblPriceOnSale":"sknlblPrice";
      	var isOnSale=products[i].onSale == "true" ? true : false;
      	var isVisibleAvgUserRating= (products[i].customerReviewAverage === undefined || products[i].customerReviewAverage === "null") ? false : true;
      	data[i]={
          imgProduct:{ src: products[i].thumbnailImage },
          lblNameProduct:{ text:products[i].name },
          lblPrice: { text: "$ "+products[i].salePrice, skin:sknPrice},
          lblOnSale: { text: "ON SALE!", isVisible:isOnSale },
          lblAvgUserRating: { text: "Avg User Rating:"+products[i].customerReviewAverage, isVisible:isVisibleAvgUserRating },
          id:products[i].productId,
          sku:products[i].sku
        };
    }
	var animation=this.animationProductSegment();
    this.view.sgmProductList.setData(data);
    this.view.sgmProductList.setAnimations({visible:animation});
  },

  onNavigate:function(navInfo){
    gblInfo=navInfo;
    kony.store.setItem("navigationInfo", navInfo);
    this.displayData(navInfo);
  },

  getProducts: function(input){
    var productsPromise=invokeServiceIntegration(input);
    var self=this;
    productsPromise.then(function(response){
      kony.application.dismissLoadingScreen();
      kony.print("Response:"+JSON.stringify(response));
      debugger;
      var products=response.products===undefined?null:response.products;
      //self.renderProductList(products);
      self.verifyProductLength(products);
    },function(error){
      kony.application.dismissLoadingScreen();
      alert('Error:'+JSON.stringify(error));
    });
  },

  onClickProductSegment:function(){
    debugger;
    var selectedRow=this.view.sgmProductList.selectedRowItems[0];
    navigationForm("frmProductDetail",selectedRow.sku,null);
  },

  displayData:function(navInfo){
    debugger;
    kony.application.showLoadingScreen(null, "Loading...", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    var input = {};
    var data={};
    if(navInfo.origin==="search"){
      data={"search":navInfo.data};
      input=buildInputRequest(SERVICE_NAME, GET_PRODUCTS_BY_SEARCH_TEXT, {},data);
    }
    else {
      data={"categoryId":navInfo.data.id};
      input=buildInputRequest(SERVICE_NAME, GET_PRODUCTS_BY_CATEGORY, {},data);
    }
    this.getProducts(input);
  },
  
  renderProductList:function(products){
    debugger;
    if(products===null && gblInfo.origin==="search"){
      this.view.lblProductHeader.text="No results for "+gblInfo.data;
      this.view.sgmProductList.isVisible=false;
      this.view.lblProductHeader.isVisible=true;
    }
    else if (products===null && gblInfo.origin==="categoryList"){
      this.view.lblProductHeader.text="This category does not have any products.";
      this.view.sgmProductList.isVisible=false;
      this.view.lblProductHeader.isVisible=true;
    }
    else if(products.length>0 && gblInfo.origin=="search"){
      this.view.lblProductHeader.text="Results for : "+gblInfo.data;
      this.populateSegment(products);
      this.view.sgmProductList.isVisible=true;
      this.view.lblProductHeader.isVisible=true;
      
    }
    else{
      this.view.lblProductHeader.text="category : "+gblInfo.data.name;
      this.populateSegment(products);
      this.view.sgmProductList.isVisible=true;
      this.view.lblProductHeader.isVisible=true;
    }
  },
  
  animationProductSegment:function(){
    var animConfig={ "duration":0.5, 
                     "iterationCount":1, 
                     "delay":0, 
                     "fillMode":kony.anim.FILL_MODE_FORWARDS 
                   };
    var transformProp1=kony.ui.makeAffineTransform();
    transformProp1.scale(0.0,0.0);
    var transformProp2=kony.ui.makeAffineTransform();
    transformProp2.scale(1,1);
    var animDefinition={ 0 : { "transform":transformProp1 },
                       	 100 : { "transform":transformProp2 }};
    var animationObj=kony.ui.createAnimation(animDefinition);
    var animation={ definition: animationObj, config:animConfig, callbacks:null };
    return animation;
  },
  
  preShow:function(){
  	this.view.lblProductHeader.isVisible=false;
    this.view.sgmProductList.isVisible=false;
  },
  
  onClickBtnBack:function(){
    navigationForm("frmHome", null, null);
  },
  
  verifyProductLength:function(products){
   	if(products!==null && products.length==1){
      	kony.store.setItem("productsCount", products.length);
    	navigationForm("frmProductDetail",products[0].sku,null);
    }
    else{
    	this.renderProductList(products);
    }
  }
   
  

});