const app = getApp()


  Page({
  data: {
    phone: '',
    password:''  
  },

    // 获取输入账号  
    phoneInput:function (e) {
      this.setData({
        phone: e.detail.value
      })
    },

    // 获取输入密码  
    passwordInput:function (e) {
      this.setData({
        password: e.detail.value
      })
    },

    // 登录  
    login: function () {
      if (this.data.phone.length == 0 || this.data.password.length == 0) {
        wx.showToast({
          title: '未输入账号密码',
          icon: 'loading',
          duration: 2000
        })
      } else {
        // 这里修改成跳转的页面  
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 2000
        })
      }
    }
})  

