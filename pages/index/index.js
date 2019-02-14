//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/pages/images/tooopen_sy_143912755726.jpg',
      '/pages/images/ChMkJlxSxviIBMNeAAEU87_fMvAAAuq0gLUak4AARUL688.jpg',
      '/pages/images/ChMkJlxhNb6IWz0FABR2EyplYokAAu16QFFp2QAFHYr982.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    movie:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMovie();
  },
  loadMovie(){
    wx.showToast({
      title: '正在加载',
      icon: 'loading'
    })
    let thispage = this;
    wx.request({
      url: 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0',
      data:{},
      method:'GET',
      header:{'content-type':'json'},
      success:function(res){
        console.log(res.data.subjects)
        let subjects = res.data.subjects;
        thispage.setData({movie:subjects})
      }
    })
  }
})
