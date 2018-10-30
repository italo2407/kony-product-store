define({
    //Type your controller code here 
    onNavigate: function(navInfo) {
        this.displayData(navInfo.data);
    },
    displayData: function(sku) {
        debugger;
        var data = {
            "sku": sku
        };
        var inputProductDetail = buildInputRequest(SERVICE_NAME, GET_PRODUCT_DETAIL, {}, data);
        var inputProductReviews = buildInputRequest(SERVICE_NAME, GET_PRODUCT_REVIEWS, {}, data);
        this.getProductDetail(inputProductDetail);
        this.getProductReviews(inputProductReviews);
    },
    getProductDetail: function(input) {
        kony.application.showLoadingScreen(null, "Loading...", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
        var productDetailPromise = invokeServiceIntegration(input);
        var self = this;
        productDetailPromise.then(function(response) {
            kony.application.dismissLoadingScreen();
            kony.print("Response:" + JSON.stringify(response));
            debugger;
            var productDetail = response.products === undefined ? null : response.products[0];
            self.renderProductDetail(productDetail);
        }, function(error) {
            kony.application.dismissLoadingScreen();
            alert('Error:' + JSON.stringify(error));
        });
    },
    getProductReviews: function(input) {
        kony.application.showLoadingScreen(null, "Loading...", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
        var productReviewsPromise = invokeServiceIntegration(input);
        var self = this;
        productReviewsPromise.then(function(response) {
            kony.application.dismissLoadingScreen();
            kony.print("Response:" + JSON.stringify(response));
            debugger;
            var productReviews = response.reviews === undefined ? null : response.reviews;
            self.renderProductReviews(productReviews);
        }, function(error) {
            kony.application.dismissLoadingScreen();
            alert('Error:' + JSON.stringify(error));
        });
    },
    renderProductDetail: function(productDetail) {
        debugger;
        if (productDetail !== null) {
            this.view.flxDetailProductContent.isVisible = true;
            this.view.lblName.text = productDetail.name;
            this.view.lblPrice.text = "$ " + productDetail.salePrice;
            var isVisibleOnSale = productDetail.onSale === "false" ? false : true;
            this.view.lblOnsale.isVisible = isVisibleOnSale;
            this.view.lblDescripcion.text = productDetail.description;
            this.view.imgProduct.src = productDetail.image;
            var isVisibleAvgUserRating = (productDetail.customerReviewAverage === undefined || productDetail.customerReviewAverage === "null") ? false : true;
            this.view.flxAveReview.isVisible = isVisibleAvgUserRating;
            if (isVisibleAvgUserRating) {
                this.view.lblAveReview.text = "Ave review:" + productDetail.customerReviewAverage;
                var widthRating = this.calculateWidthForRating(productDetail.customerReviewAverage) + "%";
                this.view.flxUnfilledStart.width = widthRating;
            }
            this.view.lblNumberReview.text = "Number of Reviews:" + productDetail.customerReviewCount;
        } else {
            alert("This product does not contain information");
        }
    },
    renderProductReviews: function(productReviews) {
        this.view.flxScrollReviewUserContent.isVisible = true;
        this.view.lblNumberReview.isVisible = true;
        if (productReviews !== null) {
            this.view.sgmReviews.isVisible = true;
            this.populateReviewSegment(productReviews);
        } else {
            this.view.lblNumberReview.text = "No customer reviews for this product";
            this.view.sgmReviews.isVisible = false;
        }
    },
    populateReviewSegment: function(productReviews) {
        debugger;
        var data = [];
        for (var i = 0; i < productReviews.length; i++) {
            var widthRating = this.calculateWidthForRating(productReviews[i].rating) + "%";
            data[i] = {
                lblName: {
                    text: productReviews[i].reviewer[0].name
                },
                lblRating: {
                    text: productReviews[i].rating
                },
                lblTitle: {
                    text: productReviews[i].title
                },
                lblDate: {
                    text: productReviews[i].submissionTime
                },
                lblDescription: {
                    text: productReviews[i].comment
                },
                imgRating: {
                    src: "start.png"
                },
                flxUnfilledStart: {
                    width: widthRating
                }
            };
        }
        this.view.sgmReviews.setData(data);
    },
    calculateWidthForRating: function(ratingNumber) {
        return (1 - (ratingNumber / 5)) * 100;
    },
    preShow: function() {
        this.view.flxDetailProductContent.isVisible = false;
        this.view.flxScrollReviewUserContent.isVisible = false;
        this.view.lblNumberReview.isVisible = false;
    },
    onClickBtnBack: function() {
        var productLength = kony.store.getItem("productsCount");
        if (productLength == 1) {
            navigationForm("frmHome", null, null);
        } else {
            kony.print("getPreviousForm :: " + kony.application.getPreviousForm().id);
            var navigationInfo = kony.store.getItem("navigationInfo");
            kony.print("navigationInfo :: " + JSON.stringify(navigationInfo));
            navigationForm(kony.application.getPreviousForm().id, navigationInfo.data, navigationInfo.origin);
        }
    }
});