// pages/setting/index.js
const chooseLocation = requirePlugin('chooseLocation');
var that = '';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //用户个人信息
    userInfo: {
      avatarUrl: "", //用户头像
      nickName: "", //用户昵称
      name: '',
    telphone: '',
    address: '',
    },
  },
  /**
   * 获取头像
   * @param {*} e 
   */
  async getHead() {
    let res = await this.getUserProfile();
    let avatarUrl= 'userInfo.avatarUrl'
    let nickName = 'userInfo.nickName'
    that.setData({
      [avatarUrl]: res.userInfo.avatarUrl,
      [nickName]: res.userInfo.nickName,
    })
  },
  /**
   * 获取用户昵称
   * @param {*} e 
   */
  async getUserProfile(e) {
    const res = await wx.getUserProfile({
      desc: '用于完善会员资料',
    });
    return res
  },
  /**
   * 输入框值改变事件
   * @param {*} e 
   */
  getInputValue(e) {
    let name = e.currentTarget.dataset.name;
    let value = e.detail.detail.value;
    this.setData({
      [name]: value
    })
  },
  /**
   * 获取 详细地址
   * @param {*} e 
   */
  getAddress() {
    const key = 'MCDBZ-VRBWW-MMDRC-RODOM-NRU6J-54BI5'; //使用在腾讯位置服务申请的key
    const referer = 'Fairy小程序'; //调用插件的app的名称
    const category = '生活服务,娱乐休闲,银行金融';
    wx.navigateTo({
      url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&category=' + category
    });
  },
  /**
   * 按钮点击事件
   * @param {*} options 
   */
  handleClick(e) {
    let userInfo = that.data.userInfo;
    console.log(userInfo);
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
    // 从地图选点插件返回后，在页面的onShow生命周期函数中能够调用插件接口，取得选点结果对象
    const location = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
    if (location) {
      let name = 'userInfo.address'
      this.setData({
        [name]: location.address
      })
    }
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    // 页面卸载时设置插件选点数据为null，防止再次进入页面，geLocation返回的是上次选点结果
    chooseLocation.setLocation(null);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

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