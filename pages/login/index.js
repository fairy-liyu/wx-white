// pages/login/index.js
var app = getApp();
var imgUrl = app.globalData.imgUrl;
var that = '';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrl,
    name: '',
    password: '',
    showMessage: false,
  },
  /**
   * 关闭提示信息
   */
  closeMessage() {
    if (that.data.showMessage) {
      that.setData({
        showMessage: false
      })
    }
  },
  /**
   * 打开提示信息
   */
  openMessage() {
    that.setData({
      showMessage: true
    })
  },
  /**
   * 获取输入框的值
   * @param {*} options 
   */
  getInputValue(e) {
    let name = e.currentTarget.dataset.name;
    that.setData({
      [name]: e.detail.detail.value
    })
  },
  /**
   * 滑块验证通过
   * @param {*} options 
   */
  verificationResult() {
    console.log("验证通过");
  },
  /**
   * 登录点击
   * @param {*} options 
   */
  loginClick() {},
  /**
   * 注册点击
   * @param {*} options 
   */
  registerClick() {
    wx.navigateTo({
      url: '/pages/register/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    that = this;
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