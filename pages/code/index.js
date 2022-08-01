// pages/code/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Interval: null,
    time: '',
    time2: '',
    date: '',
    dateY: '',
    newArr: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  /*  
    对日期进行改造
  */
  getDate() {
    var day = new Date();
    //获取年份
    var year = day.getFullYear();
    //获取月份0~11月份
    var month = day.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    //获取日期
    var today = day.getDate();
    today = today < 10 ? '0' + today : today;
    let retDate = year + '-' + month + '-' + today;
    return retDate
  },
  /*  
    对时间进行改造
  */
  getTime() {
    var day = new Date();
    //获取小时
    var hours = day.getHours();
    hours = hours < 10 ? '0' + hours : hours;
    //获取分钟
    var minutes = day.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let retTime = hours + ':' + minutes
    return retTime
  },
  /*  
      对时间进行改造
    */
  getTime2() {
    var day = new Date();
    //获取秒数
    var seconds = day.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return seconds;
  },
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  /*  
    对日期进行改造
  */
  getDateY() {
    var day = new Date();
    //获取年份
    var year = day.getFullYear();
    //获取月份0~11月份
    var month = day.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    //获取日期
    var today = day.getDate();
    today = today < 10 ? '0' + today : today;
    //获取小时
    var hours = day.getHours();
    hours = hours < 10 ? '0' + hours : hours;
    let retDate = month + '/' + today + '   ' + hours + '时';
    return retDate
  },
  ///重复执行
  getdata() {
    let that = this;
    that.data.Interval = setInterval(() => {
      this.setData({
        time: this.getTime(),
        time2: this.getTime2(),
        date: this.getDate(),
      })
    }, 1000);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  getColor() {
    let colorArr = ['#90a2f4', '#b0c7f0', "#d8e3f7"];
    var newArr = [];
    for (var a = 0; a < 500; a++) {
      var color = '';
      if (a % 3 == 0) {
        color = colorArr[2]
      } else if (a % 2 == 0) {
        color = colorArr[1]
      } else {
        color = colorArr[0]
      }
      newArr.push(color)
    }
    this.setData({
      newArr: newArr,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      dateY: this.getDateY(),
      time: this.getTime(),
      time2: this.getTime2(),
      date: this.getDate(),
    })
    this.getdata();
    this.getColor();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    let that = this;
    clearInterval(that.data.Interval);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    let that = this;
    clearInterval(that.data.Interval);
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