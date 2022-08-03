// index.js
// 获取应用实例
var requst = require('../../utils/requst.js');
const app = getApp();

Page({
  data: {
    data: []
  },
  onChange(event) {
    console.log(event.detail, 'click right menu callback data')
  },
  onReady() {
    let storeData = new Array(26);
    const words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    words.forEach((item, index) => {
      storeData[index] = {
        key: item,
        list: []
      }
    })
    // 使用 Mock
    requst.ajax('getPeople', {}, function (res) {
      res.forEach((item) => {
        let firstName = item.pinyin.substring(0, 1);
        let index = words.indexOf(firstName);
        storeData[index].list.push({
          name: item.name,
          key: firstName,
        });
      })
    });
    this.data.data = storeData;
    this.setData({
      data: this.data.data
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getTabBar().setData({
      current: 'index'
    })
  },
  onLoad() {

  },
})