// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
  
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  }
})
