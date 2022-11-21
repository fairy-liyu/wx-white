// pages/register/index.js
const {
  $Toast
} = require('../../iwiew/weapp/dist/base/index');
const {
  $Message
} = require('../../iwiew/weapp/dist/base/index');
var that = '';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    cerNo: '',
    verType: '居民身份证',
    verify: false,
    checked: false,
  },

  /**
   * 输入框
   */
  inputChangeValue(e) {
    let name = e.currentTarget.dataset.name
    that.setData({
      [name]: e.detail.detail.value
    })
  },

  /**
   * 身份证失去焦点
   */
  cerNoBlur(e) {
    let value = e.detail.detail.value;
    if (value) {
      let pat = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
      if (pat.test(value)) {
        that.setData({
          [name]: value
        })
      } else {
        $Message({
          content: '证件号码格式错误',
          type: 'error'
        });
      }
    }
  },
  /**
   * 按钮点击
   */
  bindClick() {
    console.log('点击')
  },

  /**
   * 同意协议点击
   */
  checkedClick() {
    that.setData({
      checked: !that.data.checked
    })
  },

  /**
   * 滑块验证通过
   * @param {*} options 
   */
  verificationResult() {
    that.setData({
      verify: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
    that = this;
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