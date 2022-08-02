// pages/home/index.js
var requst = require('../../utils/requst.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardList: [
      //   {
      //   title: '卡片标题',
      //   label: '额外内容',
      //   thumb: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      //   content: '内容',
      //   footer: '尾部内容'
      // }
    ],
  },
  /**
   * 获取数据
   * @param {*} options 
   */
  getData() {
    var that = this;
    let param = {
      name: 'yes',
      active: true
    }
    // 使用 Mock
    requst.ajax('getdata', param, function (res) {
      //这里既可以获取模拟的res
      let data = [];
      res.forEach(item => {
        data.push({
          title: item.title,
          label: item.price,
          thumb: item.img,
          content: item.city,
          footer: item.marketing_start
        })
      })
      that.setData({
        cardList: data
      })
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getData();
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
    this.getTabBar().setData({
      current: 'home'
    })

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