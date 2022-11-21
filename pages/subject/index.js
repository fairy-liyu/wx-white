// pages/subject/index.js
var requst = require('../../utils/requst.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current_scroll: 'tab1',
    scrollTab: [
      {
        key: 'tab1',
        title: '关注',
      },
      {
        key: 'tab2',
        title: '推荐',
      },
      {
        key: 'tab3',
        title: '热榜',
      },
      {
        key: 'tab4',
        title: '头条精选',
      },
      {
        key: 'tab5',
        title: '后端',
      },
      {
        key: 'tab6',
        title: '前端',
      },
      {
        key: 'tab7',
        title: 'Android',
      },
      {
        key: 'tab8',
        title: 'iOS',
      },
      {
        key: 'tab9',
        title: '人工智能',
      },
      {
        key: 'tab10',
        title: '开发工具',
      },
      {
        key: 'tab11',
        title: '代码人生',
      },
      {
        key: 'tab12',
        title: '阅读',
      },
    ]
  },
  /**
   * 标签页事件
   * @param {*} param0 
   */
  handleChangeScroll({
    detail
  }) {
    this.setData({
      current_scroll: detail.key
    });
    this.getData();
  },
/**
   * 获取数据
   * @param {*} options 
   */
  getData() {
    var that = this;
    let param = {
      name: that.data.current_scroll,
    }
    // 使用 Mock
    requst.ajax('getsubjcetdata', param, function (res) {
      //这里既可以获取模拟的res
      console.log(res)
      that.setData({
        listData: res
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