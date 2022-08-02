// pages/weappCode/index.js
var QRCode = require('../../utils/weapp-qrcode.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: '',
  },
  /**
   * 创建二维码
   */
  createCode() {
    var that = this;
    new QRCode('myQrcode', {
      text: '扫描内容',
      width: 141, //canvas 画布的宽
      height: 141, //canvas 画布的高
      padding: 0, // 生成二维码四周自动留边宽度，不传入默认为0
      correctLevel: QRCode.CorrectLevel.L, // 二维码可辨识度
      colorDark: "#6bad6f", //分别为两种交替颜色
      colorLight: "white",
      callback: (res) => {
        //工具回调数据
        wx.hideLoading()
        //将图片路劲放入data中，显示在wxml的image标签上
        that.setData({
          imagePath: res.path
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.createCode();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})