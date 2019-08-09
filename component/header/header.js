// component/hello/hello.js
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
    title: [
      { name: "首页", txt: ["shouye", "shuxue"] },
      { name: "日志", txt: ["rizhi", "yuwen"] },
      { name: "我的", txt: ["wode", "yinyu"] }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show(){
      wx.showToast({
        title: 'Hello,LeLe!',
      })
    }
  }
})
