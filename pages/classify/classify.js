// pages/classify/classify.js
import {ajax} from "../../utils/api.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifyData:[
      { isChecked: true, text: "果味 " , id: 1},
      { isChecked: false, text: "蔬菜 " , id: 2},
      { isChecked: false, text: "炒货 " , id: 3},
      { isChecked: false, text: "点心 " , id: 4},
    ],
    contentShowIndex:0,
    classifyContentData:[
      {
        "id|100-999": 100,
        bannerIamge:"../../image/classify_banner1.png",
        navType:"果味",
        contentList:[
          { name: "雪梨", productNum: "5个", productImage: "../../image/list1.png" },
          { name: "雪梨", productNum: "6斤", productImage: "../../image/list1.png" },
          { name: "雪梨", productNum: "7两", productImage: "../../image/list1.png" }
        ]
      }
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    ajax(null,(res)=>{
      console.log(res.data)
      let listNameArr = [];
      let listArr = [];
      res.data.arr.forEach((item)=>{
        listNameArr.push({"isChecked":false,"text":item.name,"id":item.children.id}),
        listArr.push({ "id": item.children.id, "navType": item.children.navType, "contentList": item.children.contentList})
      })
      that.setData({
        "classifyData": listNameArr,
        "classifyContentData": listArr
      })
    },"/classify")
    
    
  },

  switchTab: function(e){
    let that = this;
    that.data.classifyData.forEach((ele,ind) =>{
      that.setData({
        ["classifyData[" + ind + "].isChecked"]: false,
        "contentShowIndex": e.currentTarget.dataset.index,
        ["classifyData[" + e.currentTarget.dataset.index + "].isChecked"]: true
      })      
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