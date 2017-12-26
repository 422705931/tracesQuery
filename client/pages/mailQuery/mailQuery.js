//logs.js
const util = require('../../utils/util.js')
var text = ""
var yjcode = ""
Page({
  data: {
    logs: [],
    array: ['请滑动选择','太垃圾了', '不怎么样', '一般般吧', '比较满意','非常满意'],
  },
  bindBlur:function(e){
    text = e.detail.value
    console.log(text)
  },
  // bindButtonTap:function(){
  //   let that = this
  //   wx.request({
  //     url: "http://211.156.193.140:8000/cotrackapi/api/track/mail/" + text,
  //     header: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       "authenticate": "jsmobile_c8c8jk890qws",
  //       "version": "ems_track_cn_1.0"
  //     },
  //     method: "GET",
  //     // data: {},
  //     success(res) {
  //       that.setData({
  //         list:res.data.traces
  //       })
  //       text = ""
  //       console.log(res.data.traces)
  //     }
  //   })
  // },
  bindButtonTap: function () {
    let that = this
    wx.request({

      method: "GET",
      data: {
        mailNum: text
      },
      url: "https://srodc5dr.qcloud.la/weapp/mailTraces",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success(res) {
        that.setData({
          list: res.data.traces
        })
        text = ""
        console.log(res)
      }
    })
  },
  bindScanButton:function(){
    let that = this
    wx.scanCode({
      success:(res) =>{
        that.setData({
          yjcode:res.result
        })
        that.queryMailInfo(res.result)
      }
    })
  },
  queryMailInfo: function (mailnum) {
    let that = this
    that.bindBlur
    wx.request({
      url: "http://211.156.193.140:8000/cotrackapi/api/track/mail/" + mailnum,
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "authenticate": "jsmobile_c8c8jk890qws",
        "version": "ems_track_cn_1.0"
      },
      method: "GET",
      // data: {},
      success(res) {
        that.setData({
          list: res.data.traces
        })
        console.log(res.data.traces)
      }
    })
  },
  open: function () {
    wx.showActionSheet({
      itemList: ["请打分",'1', '2', '3', '4', '5'],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
        }
      }
    });
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

})
