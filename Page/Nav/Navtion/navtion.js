// Page/Nav/Navtion/navtion.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    "navTit": '坚持,总有一个冠军属于你!',
    "navList" : [
      { icon: "iconfont icondx", text: "单项赛", url: "/Page/Nav/Individual/individual"},
      { icon: "iconfont icontuanti", text: "团队赛", url: "/Page/Group/GroupNav/groupnav"},
<<<<<<< HEAD
      { icon: "iconfont iconjlb", text: "俱乐部", url: "/Page/Club/CreateClub/createClub"}
=======
      { icon: "iconfont iconjlb", text: "俱乐部", url: "/Page/Club/CreateList/createlist"}
>>>>>>> 赛事小程序
    ],
    "navListb": [
      { icon: "iconfont iconphb", text: "排行榜", url: "/Page/Ranking/Entrance/entrance"},
      { icon: "iconfont iconbaolubi", text: "录比分", url: "/Page/RecordScore/RoutineEntrance/routineentrance" },
<<<<<<< HEAD
      { icon: "iconfont iconjilu", text: "参赛记录", url: "/Page/RecordsEntries/recordsentries" }
=======
      { icon: "iconfont iconjilu", text: "创建赛事", url: "/Page/RecordsEntries/recordsentries" }
>>>>>>> 赛事小程序
    ],
    "navListc": [
      { icon: "iconfont iconwdzj", text: "我的战绩", url: "/Page/Nav/Record/Individual_record"},
      { icon: "iconfont iconsousuo", text: "搜索用户", url:'/Page/Search/search'},
      { icon: "iconfont iconshezhi", text: "设置", url: "/Page/Setting/setting"}
    ],
    indicatorDots: false,
    autoplay : true,
    interval : 3000,
    duration : 500,
    imgUrls : [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    isLogin : false

  },

  /**
   * 
   *Gologin 跳转登录-注册页面
   */

  bindLogins : function (event) {
    wx.navigateTo({
      url: '/Page/Login/login'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.isLogin) {
      this.setData({
        isLogin: true
      })
    }
    if (options.isLogin == 'false') {
      this.setData({
        isLogin: false
      })
    }
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

  },
  
})