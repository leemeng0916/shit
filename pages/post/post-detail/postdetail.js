// pages/post/post-detail/postdetail.js
var postdata=require('../../../data/posts-data.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  postdata:{},
  collected:'false',
    collectee:'false'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.post_id=options.post_id;
    // console.log( this.data.post_id)
    var thisdata = postdata.postList[this.data.post_id];
    // console.log(thisdata)
    this.setData({ postdata: thisdata})
    var isfirstopendetail=app.globalData.g_isfirstopendetail;
    if (isfirstopendetail==true){
      this.wxsetstorage('false');
      app.globalData.g_isfirstopendetail=false;

    }else{
      this.wxgetstorage();
     
      if (this.data.collectee=='true'){
        this.setData({ collected:'true'})
      } else{
        this.setData({ collected: 'true' })
      }
    }
  },
  wxsetstorage:function(data){
  wx.setStorage({
    key: 'iscolletcion',
    data: data,
    fail: function () {
      console.log('写入value1发生错误')
    }
  })
  },
  wxgetstorage:function(){
    var that=this;
  wx.getStorage({
    key: 'iscolletcion',
    success: function(res) {
    
        that.data.collectee = res.data;
      
     
      // console.log(res.data);
    },
    fail: function () {
      console.log('读取key1发生错误')
    }
    
  })
  },
  onshareTap:function(event){
   
  },

  oncollectionTap:function(){
    var collection= !this.data.collected;
    this.setData({ collected: collection})
    this.wxgetstorage();
    if (this.data.collectee=='true'){
      this.wxsetstorage('false');
      this.data.collectee='false';
    } 
    else if (this.data.collectee == 'false') {
      this.wxsetstorage('true');
      this.data.collectee='true';
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

  }
})