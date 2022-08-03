// custom-tab-bar/index.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 'home',
    urlObj: {
      my: '/pages/my/index',
      index: '/pages/index/index',
      find: '/pages/find/index',
      home: '/pages/home/index',
    }
  },
  /**
   * created：组件实例刚被创建好，此时还不能调用setData -- 刚被创建出来
    attached：组件完全初始化完毕，进入页面节点树
    这个生命周期很有用，绝大多数初始化的工作可以在这时进行（如：发起网络请求）
    放到UI结构中，还没有被渲染完成
    ready:  组件视图层布局完成后执行。-- 渲染完成
    moved:  组件实例被移动到另一个节点树时执行
    detached：离开页面节点树。可以清理一些定时器等工作  --  被销毁的时候
    error:  每当组件方法抛错时执行
   */
  attached() {},
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 自定义tabBar
     * @param {*} param0 
     */
    handleChange({
      detail
    }) {
      let url = this.data.urlObj[detail.key];
      wx.switchTab({
        url
      })
      this.setData({
        current: detail.key
      });
    }
  }
})