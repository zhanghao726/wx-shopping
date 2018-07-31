// pages/cart/cart.js

let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartTotalData:[
      {
        isChecked:false,
        imageUrl:"../../image/list5.png",
        needNum:1,
        price:'99',
        name:'新鲜芹菜 半斤1',
      }
    ],
    cartTotalPrice:0,
    iconTypeFlag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
   
    console.log(app.globalData.cartData);
    app.globalData.cartData.forEach((item) =>{
      item.isChecked = true;
    })
    that.setData({
      "cartTotalData": app.globalData.cartData
    })
    that.countCartTotalPrice();
  },
  // 是否选中
  switchCheck: function(e){
    
    let that = this;
   
    that.setData({
      ["cartTotalData[" + e.currentTarget.dataset.ind + "].isChecked"]: !that.data.cartTotalData[e.currentTarget.dataset.ind].isChecked
    })
    that.countCartTotalPrice();
  },
  // 数量的加减
  cartProCount: function(e){

    let that = this;
    let oldNeedNumStr = 'cartTotalData[' + e.currentTarget.dataset.index + '].needNum';
    let oldNeedNum = that.data.cartTotalData[e.currentTarget.dataset.index].needNum;
    if (e.currentTarget.dataset.count == "cancel"){
      console.log(e.currentTarget.dataset.index);
      that.data.cartTotalData.splice(e.currentTarget.dataset.index, 1)
      app.globalData.cartData.splice(e.currentTarget.dataset.index, 1)
      that.setData({
        'cartTotalData': that.data.cartTotalData
      })
      
    }else{
      that.setData({
        [oldNeedNumStr]: oldNeedNum + Number(e.currentTarget.dataset.count)
      })
      if (that.data.cartTotalData[e.currentTarget.dataset.index].needNum < 0){
        that.setData({
          [oldNeedNumStr]: 0
        })
     }
    }

    that.countCartTotalPrice();
  },
  // 计算购物车的总价格
  countCartTotalPrice: function(e){
    
    let that = this;
    let totalPrice = 0;
    that.data.cartTotalData.forEach((item) =>{
      
      if (item.isChecked == true){
        totalPrice = totalPrice + (item.needNum * item.price);
      }
    })
    that.setData({
      'cartTotalPrice': Number(totalPrice).toFixed(2)
    })
  },
  // 全选
  allCheckHandle: function(){
    let that = this;
    that.setData({
      'iconTypeFlag': !that.data.iconTypeFlag
    })
    that.data.cartTotalData.forEach((item,index) => {
      that.setData({
        ['cartTotalData[' + index + "].isChecked"]: that.data.iconTypeFlag,
        
      })
    })
    that.countCartTotalPrice();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    app.globalData.cartData.forEach((item) => {
      item.isChecked = true;
    })
    let that = this;
    that.setData({
      "cartTotalData": app.globalData.cartData
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})