// component/module/list.js
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
    list:[
      "vue",
      "react"
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    delCource(e){
      console.log("shanchu",e.detail)
      let id=e.detail.id;
      this.data.list.splice(id,1)

      this.setData({
        list:this.data.list
      })

    }
  }
})
