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
        pages: ['dxc', 'hpe', 'wicresoft', 'shinetech']
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
