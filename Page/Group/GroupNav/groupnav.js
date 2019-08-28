// Page/Group/GroupNav/groupnav.js
Page({

  /**
   * 页面的初始数据
   * imgUrls 图片数组
   * projectNav 项目导航数组
   */
  data: {
    imgUrls : [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
    ],
    projectNav : [
      { type: '团体赛' }
    ],
    pageNav: [
      { url: '/Page/Group/GroupNav/CsGg/csgg', text: '赛事公告'},
      { url: '/Page/Group/GroupNav/CsNameList/csnamelist', text: '参赛者名单' },
      { url: '/Page/Group/GroupNav/Table/table', text: '签表' },
      { url: '/Page/Group/GroupNav/CsTidbits/cstidbits', text: '赛事花絮' }
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})