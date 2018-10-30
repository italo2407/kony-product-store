define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** preShow defined for frmProductList **/
    AS_Form_b1db1196a1e34437bbcf2d47f35bdf19: function AS_Form_b1db1196a1e34437bbcf2d47f35bdf19(eventobject) {
        var self = this;
        return self.preShow.call(this);
    },
    /** onRowClick defined for sgmProductList **/
    AS_Segment_e04995c84d0d4db3816c7266c0016214: function AS_Segment_e04995c84d0d4db3816c7266c0016214(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.onClickProductSegment.call(this);
    },
    /** onClick defined for btnBack **/
    AS_Button_f3b480288afe4ea09fec8daae200871f: function AS_Button_f3b480288afe4ea09fec8daae200871f(eventobject) {
        var self = this;
        return self.onClickBtnBack.call(this);
    },
    /** onDeviceBack defined for frmProductList **/
    AS_Form_bc26b31956804c2ba9625d15e57437e6: function AS_Form_bc26b31956804c2ba9625d15e57437e6(eventobject) {
        var self = this;
        return self.onClickBtnBack.call(this);
    }
});