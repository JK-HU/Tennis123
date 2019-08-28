// Page/Nav/RecordScoreDetails/recordscoredetails.js
Page({

  /**
   * 页面的初始数据
   * 进入淘汰赛
   */
  data: {
    id:0,
    display: true, //切换小组赛和淘汰赛是的显示隐藏
    step:0,
    firstdisplay:true, //第一阶段隐藏
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    index:1,
    arraylen:'',
    groupIptDisable:false, // 控制小组赛所有表单提交后禁用表单的
    liminateIptDisable:false, //控制淘汰赛表单的禁用
    eliminatelen_2:'',  //淘汰赛第一阶段人数长度
    mainArray: [
      {
        group: [
          {
            group_name: '小组A'
          }
        ],
        t_body:[
          { num: 'A', name: '张三', uid: '1'},
          { num: 'B', name: '李四', uid: '2'},
          { num: 'C', name: '王五', uid: '3'},
          { num: 'D', name: '赵六', uid: '4'},
          { num: 'E', name: '刘起', uid: '5' },
          { num: 'F', name: '中吧', uid: '6' },
          { num: 'G', name: '四溢', uid: '7' },
          { num: 'H', name: '五万', uid: '8' }
        ],
      }
    ],
    eliminateArrayExhibition:[ //淘汰赛用于展示的表格
      [
        ['张三 VS 李四','1:3'],
        ['赵六 VS 王四','3:4']

      ]
    ], 
    eliminateMatchArrayFirst:[  //用于淘汰赛进行遍历
      {
        group: [
          {
            group_name: '小组A'
          }
        ],
        t_body: [
          { num: 'A', name: '张三', uid: '1' },
          { num: 'B', name: '李四', uid: '2' },
          { num: 'C', name: '王五', uid: '3' },
          { num: 'D', name: '赵六', uid: '4' },
        ],
      }
    ],
    // 小组赛-提交比分时的数据格式,这个用户填放在每次输入数据时失去焦点时,将数据放在这里面的,这个数据不提交,只用于存放临时数据
    gitMessArr: [ /*{ key: '', value: '', uid: ''}*/ ],
    // 淘汰赛-提交比分时的数据格式,这个用户填放在每次输入数据时失去焦点时,将数据放在这里面的,这个数据不提交,只用于存放临时数据
    gitMessLiminateArr:[],
    removeObj:[], //这个是去重复的数组,这个数组将会提交给后台
    removeEliminateObj:[] //这个是去重复的数组-淘汰赛的,这个数组将会提交给后台
  },
  


  /**
   *catchtouchmove 阻止滑动
   */
  catchtouchmove: function () {
    return false;
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });

  },
  /*
  miniMatch 小组赛
  eliminateMatch 淘汰赛
  subMission 淘汰赛提交
  subGroupMess 小组赛提交


  */
  miniMatch: function (e) {
    
    this.setData({
      display: true,
    });
    //this.switchTabFun('minMatch');
    //this.showLoadFun('加载中');
    //this.hideLoadFun();
  },
  //淘汰赛
  eliminateMatch: function (e) {
    

    this.setData({
      display: false,
      eliminatelen_2: Number(this.data.mainArray[0].t_body.length) / 2
    });
    // this.switchTabFun('eliminateMatch');
    //this.showLoadFun('加载中');
    //this.hideLoadFun();

    // 点击淘汰赛时,请求数据,数据的内容应该是晋级情况的数据,根据数据进行遍历
    // 加载已经胜出的人的表格
    let jsona = [
      [
        ['张三 VS 李四', '1:3'],
        ['赵六 VS 王四', '3:4']

      ]
    ];
    /*
     对数组追加的操作,改动下面的数组就可以
    */
    let eliminateArrayExhibition = "eliminateArrayExhibition";

    let firstArr = this.data.eliminateArrayExhibition;
    firstArr.push(...jsona);
    this.setData({
      [eliminateArrayExhibition]: firstArr,
    });
    // 加载已经胜出的人的表格结束


  },
  //失去焦点时获取信息,小组赛绑定表单
  getMess: function (res) { 
    let uKey = res.target.dataset.tr + '-' + res.target.dataset.td
    let temparr = {};
    temparr.key = res.currentTarget.dataset.tr + '-' + res.target.dataset.td;
    temparr.uid = res.target.dataset.uid;
    temparr.value = res.detail.value;

    if (this.data.gitMessArr.length == 0) {
      this.data.gitMessArr.push(temparr);
    } else if (this.data.gitMessArr.length !== 0) {
      // 在失去焦点时,首先遍历一下数组有没有重复键值key,如果有则替换值
      for (let i = 0; i < this.data.gitMessArr.length; i++) {
        if (this.data.gitMessArr[i].key == uKey) {
          this.data.gitMessArr[i].value = res.detail.value;
        } else if (this.data.gitMessArr[i].key !== uKey){
         this.data.gitMessArr.push(temparr);
        }
        this.data.removeObj = this.deteleObject(this.data.gitMessArr);
      }
    }

  },
  //失去焦点时获取信息,淘汰赛
  getMesseLiminate: function(res) {
    let uKey = res.target.dataset.tr + '-' + res.target.dataset.td
    let temparr = {};
    temparr.key = res.currentTarget.dataset.tr + '-' + res.target.dataset.td;
    temparr.uid = res.target.dataset.uid;
    temparr.value = res.detail.value;

    if (this.data.gitMessLiminateArr.length == 0) {
      this.data.gitMessLiminateArr.push(temparr);
    } else if (this.data.gitMessLiminateArr.length !== 0) {
      // 在失去焦点时,首先遍历一下数组有没有重复键值key,如果有则替换值
      for (let i = 0; i < this.data.gitMessLiminateArr.length; i++) {
        if (this.data.gitMessLiminateArr[i].key == uKey) {
          this.data.gitMessLiminateArr[i].value = res.detail.value;
        } else if (this.data.gitMessLiminateArr[i].key !== uKey) {
          this.data.gitMessLiminateArr.push(temparr);
        }
        this.data.removeEliminateObj = this.deteleObject(this.data.gitMessLiminateArr);
      }
      console.log(this.data.removeEliminateObj);
    }
  },

  //去除数组中重复的对象的方法
 deteleObject:function (obj) {
      var uniques = [];
      var stringify = {};
      for(var i = 0; i<obj.length; i++) {
        var keys = Object.keys(obj[i]);
        keys.sort(function (a, b) {
          return (Number(a) - Number(b));
        });
        var str = '';
        for (var j = 0; j < keys.length; j++) {
          str += JSON.stringify(keys[j]);
          str += JSON.stringify(obj[i][keys[j]]);
        }
        if (!stringify.hasOwnProperty(str)) {
          uniques.push(obj[i]);
          stringify[str] = true;
        }
      }
  uniques = uniques;
  return uniques;
},

  //subGroupMess小组赛提交
  subGroupMess:function(res){
    let that = this;
    console.log(this.data.removeObj);
    wx.request({
      url: getApp().globalData.domain + '/api/match/createGoodsRecord',
      method:'POST',
      header:{
        'content-type':'application/json'
      },
      data: {
        mid: that.data.id,
        removeObj: that.data.removeObj
      },
      success:(res) => {
        if (res.data.code == 1) {
          that.onLoad(that.data.id)
        }
        
      },
      fail: () => {}
    });
  },

  //淘汰赛提交
  subMission:function(res) {
    this.data.removeEliminateObj = [];
    this.data.gitMessLiminateArr = [];
    console.log(this.data.removeEliminateObj);
    
  },
  showLoadFun: function (tit) {
    wx.showLoading({
      title: tit
    });
  },
  hideLoadFun: function () {
    setTimeout(() => {
      wx.hideLoading();
    }, 2000);
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(this.data.eliminateArrayExhibition);

    var that = this;
    //通过赛事id，判断当前是第几步
    // - 储存赛事id
    that.setData({
      id:options.id
    });
    // - 查询赛事已经填写过得资料
    wx.request({
      url: getApp().globalData.domain +'/api/match/getGoodsRecordList',
      method: 'POST',
      header:{
        'content-type':'application/json'
      },
      data:{
        mid:that.data.id
      },
      success: (res) => {
        // 设置淘汰赛数组内容
        if (res.data.code == 1 && res.data.step > 0) {
            that.setData({
              step:res.data.step,
              eliminateArrayExhibition: res.data.result
            });
        }
      }
    });
    // - 查询当前赛事需要填写的报名人数
    wx.request({
      url: getApp().globalData.domain + '/api/match/getGoodsWriteUserRecordList',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {
        mid: that.data.id
      },
      success: (res) => {
        // 设置淘汰赛数组内容
        if (res.data.code == 1) {
          if (res.data.step > 0) {
            that.setData({
              eliminateMatchArrayFirst:res.data.result
            });
          } else {
            that.setData({
              mainArray:res.data.result
            });
          }
        }
      }
    });
    // 根据赛事步骤判断该显示哪个比赛
    if (that.data.step == 1){
      this.setData({
        display: false,
        eliminatelen_2: Number(this.data.mainArray[0].t_body.length) // 2
      });
    }

    this.setData({
      arraylen : this.data.mainArray[0].t_body.length
    })
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        that.setData({
          winHeight: calc
        });
      }
    });
  
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