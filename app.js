// app.js
App({
  /**
   * 小程序加载时执行
   */
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    // 从前面加随机数
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        console.log('登录', res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  /**
   * 调用时机：小程序启动，或从后台进入前台显示时触发。如果想要在小程序每次进入到前台时都执行一些事情，那么可以将代码放在这个里面。
   * 比如一些实时动态更新的数据，用户每次进来都要从服务器更新，那么我们就可以在这个里面做。
   */
  onShow() {},
  /**
   * 小程序发生脚本错误或 API 调用报错时触发
   */
  onError: function (msg) {},
  /**
   * 小程序被切换到后台（包括微信自身被切换到后台或者小程序暂时被切换到后台）。可以在这个方法中共做一些数据的保存。
   * 小程序从前台进入后台时触发。
   */
  onHide() {},
  /**
   * 自定义方法，如果其他页面要使用，引入然后使用，如下：
   * var app = getApp();
   * app.getLogin();
   * 就可以使用
   */
  getLogin() {},
  globalData: {
    userInfo: null
  }
})