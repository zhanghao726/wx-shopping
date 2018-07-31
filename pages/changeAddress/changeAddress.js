// pages/changeAddress/changeAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressData:{
      name:"汪大尧",
      sex:"先生",
      city:"四川 成都",
      phone:"1234567861  ",
      other:"补充"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let that = this;
    that.setData({
      "addressData":options
    })
  },
  // 点击选取地址
  test: function() {
    let that = this;
    wx.chooseLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          "addressData.location": res.address
        })
      }
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