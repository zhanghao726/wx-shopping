let API_HOST = "http://119.23.49.239:3000/mock/24/shop-web1/v1";
let DEBUG = true;

let Mock = require('mock.js')
function ajax(mockData, fn, url, header, data, method ){
  
  if(DEBUG == true){//真实请求
    wx.request({
      url: API_HOST + url,
      method: method ? method : 'get',
      data: {},
      header: header ? header : { "Content-Type": "application/json" },
      success: function (res) {
        fn(res);
      }
    })
  }else{
    //模拟数据
    var res = Mock.mock(mockData);
    fn(res);
    console.log(res)
  }
}

module.exports = {
  ajax:ajax
}