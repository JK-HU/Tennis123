// Page/Login/login.js
Page({

  /**
   * 页面的初始数据
   * login_name 登录页用户名字段
   * login_psword 登录页密码字段
   * sign_name 注册账号
   * sign_phone 注册手机号
   * sign_verif 注册验证码
   * sign_psword 注册密码
   * isDisabled 验证码按钮的 disabled
   * verificationText 验证码文字
   * 
   * https://www.apiopen.top/login?key=00d91e8e0cca2b76f515926a36db68f5&phone=13594347817&passwd=123456
   */
  data: {
    currentTab : 0,
    login_name : '',
    login_psword : '',
    sign_name : '',
    sign_phone : '',
    sign_verif : '',
    sign_psword : '',
    isDisabled : false,
    countDown : 10
    
  },

  /**
<<<<<<< HEAD
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 点击tab clickTab
   */ 

  clickTab : function(e) {
    var that = this;
    that.setData({
      currentTab : e.target.dataset.current
    });
  },
  login_login : function() {
    wx.showLoading({
      title: '登录中',
    });
    wx.request({
      url: 'https://www.apiopen.top/login?key=00d91e8e0cca2b76f515926a36db68f5&phone=13594347817&passwd=123456',
      header : {
        'content-type' : 'application/json'
      },
      success : function(e) {
        if (e.data.code == '200'){
          wx.hideLoading();
=======
   * login_login 登录按钮
   * login_sign 注册按钮
   * loginYHM 登录页表单方法
   * signZc 注册表单方法
   */

  loginYHM: function(res) {
    let types = res.currentTarget.dataset.types;
    switch (types) {
      case 'names':
        this.data.login_name = res.detail.value;
      break;
      case 'password':
        this.data.login_psword = res.detail.value;
      break;
        
    };
  },
  signZc: function(res) {

    let types = res.currentTarget.dataset.types;
    switch (types) {
      case 'zh':
        this.data.sign_name = res.detail.value;
      break;
      case 'phone':
        this.data.sign_phone = res.detail.value;
      break;
      case 'verif':
        this.data.sign_verif = res.detail.value;
      break;
      case 'psword':
        this.data.sign_psword = res.detail.value;
      break;
    }
  },
  login_login: function() {
    if (this.data.login_name == '') {
      this.showToastFun('手机号或用户名没有填写','none');
      return false;
    } 
    if (this.data.login_psword == '') {
      this.showToastFun('密码', 'none');
      return false;
    } 
    wx.request({
      url: 'https://www.apiopen.top/login?key=00d91e8e0cca2b76f515926a36db68f5&phone=13594347817&passwd=123456',
      header:{
        'content-type':'application/json'
      },
      data:{
        name: this.data.login_name,
        psword: this.data.login_psword
      },
      success: () => {
        if (e.data.code == '200') {
          this.showToastFun('登录成功');
          this.hideToastFun();
>>>>>>> 赛事小程序
          wx.navigateTo({
            url: '/Page/Nav/Navtion/navtion?isLogin=true'
          });
        }
      },
<<<<<<< HEAD
      fail : function() {
        console.log('失败了');
        wx.hideLoading();
      }
    });
  },
=======
      fail: () => {
        this.showToastFun('登录失败');
        this.hideToastFun();
      }
    })
  },

  login_sign: function() {
    let phoneReg = /^1[3578][0-9]{9}$/;
    if (this.data.sign_name == '') {
      this.showToastFun('账号没有填写','none');
      return false;
    }
    if (this.data.sign_phone == '') {
      this.showToastFun('手机号没有填写', 'none');
      return false;
    }
    if (!phoneReg.test(this.data.sign_phone)) {
      this.showToastFun('手机号格式不正确', 'none');
      return false;
    }
    if (this.data.sign_verif == '') {
      this.showToastFun('验证码没有填写', 'none');
      return false;
    }
    if (this.data.sign_psword == '') {
      this.showToastFun('密码没有填写', 'none');
      return false;
    }

    wx.request({
      url : '',
      header:{
        'content-type':'application/json'
      },
      data:{
        signName: this.data.sign_name,
        signVer: this.data.sign_verif,
        signPhone: this.data.sign_phone,
        signPsword: this.data.sign_psword
      },
      success: () => {
        this.showToastFun('注册成功');
        this.hideToastFun();
      },
      fail: () => {
        this.showToastFun('注册失败');
        this.hideToastFun();
      }
    })  

  },

  showToastFun: function(toastTit,icon='success') {
    wx.showToast({
      title: toastTit,
      icon:icon,
      duration:1600
    })
  },
  hideToastFun: function() {
    setTimeout(() => {
      wx.hideToast();
    },2000);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 点击tab clickTab
   */ 

  clickTab : function(e) {
    this.setData({
      currentTab : e.target.dataset.current
    });
  },

>>>>>>> 赛事小程序
  /**
   *catchtouchmove 阻止swiper-item滑动
   */ 
  catchtouchmove : function() {
    return false;
  },
<<<<<<< HEAD
  /**
   * 
   *loginYHM 登录表单 用户/手机号
   */
  loginYHM : function(e) {
   
  },
=======
>>>>>>> 赛事小程序

  /**
   *bindGetVerification 绑定倒计时
   */ 
<<<<<<< HEAD

  bindGetVerification : function(event) {
=======
  bindGetVerification : function(event) {
    let phoneReg = /^1[3578][0-9]{9}$/;
    if (this.data.sign_phone == '') {
      this.showToastFun('手机号没有填写', 'none');
      return false;
    }
    if (!phoneReg.test(this.data.sign_phone)) {
      this.showToastFun('手机号格式不正确', 'none');
      return false;
    }
>>>>>>> 赛事小程序

    let clearSet = setInterval( (res) => {
      let countDown = this.data.countDown;
      countDown--;
      this.setData({
        countDown : countDown,
        isDisabled : true
      });
      
      if (countDown <= 1){
        clearInterval(clearSet);
        this.setData({
          countDown: 10,
          isDisabled : false
        });
      }
    },1000);
<<<<<<< HEAD
    this.requestVerif();
  },

  /**
   *wx.request requestVerif 封装请求验证码函数
   * 
   */
  requestVerif : function() {
    wx.request({
      url: "https://api.avatardata.cn/Nba/NomalRace?key=ffdf5822f50e4c819083dbd5861576f4",
      header : {
        'content-type' : 'application/json'
      },
      success : (res) => {console.log(res)},
      fail : (res) => {console.log('请求失败')}
    });
  }, 
=======
  },



>>>>>>> 赛事小程序

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