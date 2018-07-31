// pages/cart/cart.js

import {ajax} from "../../utils/api.js"
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex:1,
    
    singleProductData:null,
    
    classSelected:{},
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let url = "/shopInfo?id="+ options.id
    ajax(null,(res)=>{
      console.log(res)
      that.setData({
        'singleProductData':res.data,
      })
    },url)
    
  },
  // 下面切换导航
  changeTabNav: function(e){
    this.setData({
      "tabIndex": e.currentTarget.id
    })
  },
  // 商品数量计算
  productNumCount: function(e){
    if (e.currentTarget.id == 1){
      this.setData({
        "singleProductData.productNum": this.data.singleProductData.productNum + 1
      })
    } else if (e.currentTarget.id == 0 && this.data.singleProductData.productNum >1){
      this.setData({
        "singleProductData.productNum": this.data.singleProductData.productNum - 1
      })
    }
  },
  // 去到购物车
  goToCart: function(e){
    let that = this;
    if (JSON.stringify(that.data.classSelected) == "{}"){
      wx.showToast({
        title: '请选择类型',
        icon: 'none',
        duration: 1500,
        mask: true,
      })
    }else{
      console.log(app.globalData.cartData);      
      app.globalData.cartData.push({
        "classSelected": that.data.classSelected,
        "needNum": that.data.singleProductData.productNum,
        "price": that.data.singleProductData.price,
        "productId": that.data.singleProductData.id,
        "name": that.data.singleProductData.name,
        "imageUrl": that.data.singleProductData.imgUrls[0]
      })
      // wx.switchTab({
      //   url: '../cart/cart',
      // })
      wx.showToast({
        title: '加入购物车成功',
        icon: 'success',
        duration: 2000
      })
    }
  },
   

  // 选择类别
  selectClass: function(e){
    let that = this;
    that.data.classSelected[e.currentTarget.dataset.partentid] = e.currentTarget.dataset.select;
    that.setData({
      ["singleProductData.classListData[" + e.currentTarget.dataset.partentindex + "].selectIndex"]: e.currentTarget.dataset.ind
    })
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