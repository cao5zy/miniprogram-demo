Page({
  onShow() {
    wx.reportAnalytics('enter_home_programmatically', {})
  },
  onShareAppMessage() {
    return {
      title: "Alan's CV",
      path: 'page/component/index'
    }
  },

  data: {
    list: [
      {
        id: 'alan',
        name: '简历',
        open: false,
        pages: [
        {name:'dxc', desc: 'DXC', detail: true}, 
        {name: 'hpe', desc: 'HPE', detail: true}, 
        {name: 'wicresoft', desc: 'Wicresoft', detail: true},
        {name: 'shinetech', desc: 'Shinetech', detail: true}]
      },
      {
        id: 'alan1',
        name: '项目经验',
        open: false,
        pages: [
        {name:'none', desc: '微服务架构平台', detail: false}, 
        {name: 'none', desc: 'HPFS', detail: false}, 
        {name: 'none', desc: '酒店管理系统', detail: false},
        {name: 'none', desc: '医院管理系统', detail: false},
        {name: 'none', desc: '长安福特工作流', detail: false},
        {name: 'none', desc: 'CIIC CRM', detail: false}]
      }
    ],
    phone: '15683637638'
  },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  },

  makeCall() {
    wx.makePhoneCall({
      phoneNumber: this.data.phone
    });
  }
})
