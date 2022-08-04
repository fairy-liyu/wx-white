// components/input-search/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectValue: {
      type: String,
      value: '', //默认值
    },
    placeholder: {
      type: String,
      value: '', //默认值
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 实时获取数据
     * @param {*} e 
     */
    bindKeyInput: function (e) {
      this.setData({
        selectValue: e.detail.value
      })
      this.triggerEvent('ok', this.data.selectValue)
    },
  }
})