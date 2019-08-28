// Page/Club/CreateComplete/createcomplete.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clubPeopleName:'张三', //俱乐部创建人姓名
    detailArr : [ //列表
      { descript: '会员管理', val: '1', url:'/Page/Club/VipAdmin/vipadmin'},
      { descript: '队长', val: '张三', url: '' },
      { descript: '创建时间', val: '2019-07-03  15:18', url: '' },
      { descript: '比赛记录', val: '1', url: ''},
      { descript: '排行榜(单打)', val: '1', url: '' },
      { descript: '排行榜(双打)', val: '1', url: '' },
    ],
    introduction:'创建俱乐部简介' //简介


  },

  /**
   * buttonTap button绑定的事件
   * dd 单打录比分
   * sd 双打录比分
   * fb 发布活动
   * hd 活动列表
   * dn 队内赛列表
   * xg 修改俱乐部信息
   * 
   */
  buttonTap : function(res) {
    let buttonType = res.target.dataset.type;
    switch (buttonType) {
      case 'dd':
      wx.navigateTo({
        url: '/Page/Nav/Individual/individual'
      });
      break;
      case 'sd':
      wx.navigateTo({
        url:'/Page/Nav/Individual/individual'
      });
      break;
      case 'fb':
      wx.navigateTo({
        url: '/Page/RecordsEntries/recordsentries'
      });
      break;
      case 'hd':
      wx.navigateTo({
        url: '/Page/RecordScore/RoutineEntrance/routineentrance'
      });
      break;
      case 'dn':
      wx.navigateTo({
        url: '/Page/Nav/Individual/individual'
      });
      break;
      case 'xg':
      wx.navigateTo({
        url: '/Page/Club/Modify/modify'
      });
      break;
    }

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