// Page/Nav/LookScore/LookScoreTable/lookscoretable.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    mainArray: [
      {
        group: [
          {
            xz: '小组A'
          }
        ],
        gp : [
          { name: 'jack', bf : '777', win: '1', onlyWin: '4', sort: '3', bifen: '比分'},
          { name: 'herry', bf : '888',win: '2', onlyWin: '4', sort: '3', bifen: '比分' },
          { name: 'mary', bf : '999' , win: '3', onlyWin: '4', sort: '3', bifen: '比分' }
        ]
      }
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
<<<<<<< HEAD
  onReady: function () {
=======
  onReady: function (options) { 
    /**
     * 这里接收 点击查看小组赛比分表传进来的参数
     */
>>>>>>> 赛事小程序

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