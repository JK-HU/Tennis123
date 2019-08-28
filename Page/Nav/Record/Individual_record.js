// Page/Nav/Record/Individual_record.js
Page({

  /**
<<<<<<< HEAD
   * 页面的初始数据
   */
  data: {

=======
   * score 比分
   * opponent 对手
   */
  data: {
    mathchId:'', //赛事Id
    mathchArr: [], //循环参加赛事的数组
    u_name:'张三' //用户名字
>>>>>>> 赛事小程序
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD
=======
    //页面加载时,将用户uid传过去,请求数据,请求来的数据push到数组中

    let mathchArr = 'mathchArr';
    let jsonMatch = [{ title: '这是赛事标题内容', score: '3-6', opponent: '李四',time:'2019-8-19 12:00' }];
    let tempMathchArr = this.data.mathchArr;
    tempMathchArr.push(...jsonMatch);
    this.setData({
      [mathchArr]: tempMathchArr
    });

    // wx.request({
    //   url: getApp().globalData.domain + '/api/shop/getStoreInfo',
    //   header:{
    //     'content-type':'application/json'
    //   },
    //   data:{
    //     uid: getApp().globalData.userInfo.id
    //   },
    //   success:(res) => {
    //     let mathchArr = 'mathchArr';
    //     let jsonMatch = [{ title: '这是赛事标题内容', score: '3-6', opponent: '李四',time:'2019-8-19 12:00' }];
    //     let tempMathchArr = this.data.mathchArr;
    //     tempMathchArr.push(...jsonMatch);
    //     this.setData({
    //       [mathchArr]: tempMathchArr
    //     });
    //   }
    // });

>>>>>>> 赛事小程序

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