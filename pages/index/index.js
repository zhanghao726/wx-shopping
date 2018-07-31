//index.js
//获取应用实例
import {ajax} from "../../utils/api.js"
const app = getApp()

Page({
  data: {
   bannerImgUrls:[],
   goodSmallImgUrls:[],
   goodBigImgUrls:[],
   listArr:{
     newProductData: [
       { name: '瓜子', imgUrl: '../../image/list4.png', price: '0.01' },
       { name: '瓜子', imgUrl: '../../image/list5.png', price: '0.01' },
       { name: '瓜子', imgUrl: '../../image/list6.png', price: '0.01' }
     ]
   },  
  },
  onLoad: function () {
    let that = this;
    
    // 请求广告图
    ajax(null,(res)=>{
      res.data.forEach((item)=>{

        if (item.type === "index_banner") {
          that.setData({
            "bannerImgUrls": item.imgUrl
          })
        }
        if (item.type === "index_good_small") {
          that.setData({
            "goodSmallImgUrls": item.imgData
          })
        }
        if (item.type === "index_good_big") {
          that.setData({
            "goodBigImgUrls": item.imgUrl
          })
        }
        
      })
      
    
    },'/ad')

    // 请求最近新品
    ajax(null,(res)=>{
      console.log(res.data)
      that.setData({
        "listArr":res.data
      })
    }, '/productList')
  },

})
