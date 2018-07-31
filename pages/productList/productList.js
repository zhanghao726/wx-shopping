// pages/prductList/productList.js
import { ajax } from "../../utils/api.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listBanner:'../../image/list-banner.png',
    listArr:{
      newProductData: [
       { name: '瓜子', imgUrl: '../../image/list5.png', price: '0.01' },
       { name: '枸杞', imgUrl: '../../image/list4.png', price: '0.01' },
       { name: '大米', imgUrl: '../../image/list6.png', price: '0.01' }
     ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let that = this;
    let url = "/productList?category="+options.type;
    // 请求列表数据
    ajax(null, (res) => {
      console.log(res.data)
      that.setData({
        "listArr": res.data
      })
    }, url)
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