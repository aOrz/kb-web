<template>
    <article class="weui_article">
        <h2>支持迷你课表</h2>
        <section>
            <section>
                <!-- <h3>1.1 节标题</h3> -->
                <p>迷你课表是一个完全公益的一个项目，目前由烟大的一个小团队维护，我们致力于让同学们更加方便快捷的查询课程表，摆脱不知道在哪上课的烦恼。</p>
                <p>我们所有的团队成员都是无偿参与这个项目，项目至今已有两年多的时间，随着用户量的不断增加，我们的服务器成本也在增加，您的捐助将会被用于我们的日常维护开销，以便更好的提供服务。</p>
            </section>
            <section>
                <h3 class="title">赠人玫瑰，手留余香，感谢您的慷慨解囊。捐赠请备注“迷你课表”</h3>
                <h4>微信捐赠(长按识别或保存二维码)</h4>
                <p class="img">
                    <img src="../assets/wzf.png">
                </p>
                <h4>支付宝捐赠</h4>
                <p class="img">
                    <img src="../assets/ali.png">
                </p>
                <h4>意见建议</h4>
                <p>
                    如果您有什么好的意见和建议，欢迎联系我们。
                </p>
                <p class="img">
                    <img src="../assets/weixin.png">
                </p>
            </section>
        </section>
        <h2>捐赠列表</h2>
        <section>
            <table class="donate">
                <tbody>
                    <tr v-for="i in donate">
                        <td>{{i.user}}</td>
                        <td>{{i.money}}元</td>
                        <td>{{i.kind}}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </article>
</template>
<script>

export default {
    data() {
        return {
            threadKey: 'juanzeng',
            donate: []
        }
    },
    created () {
       let that = this;
      this.$http.get(`http://easy-mock.com/mock/595f7eac9adc231f357b9d78/minikb/inde/donate`, {
          // use before callback
          before(request) {

              // abort previous request, if exists
              if (this.previousRequest) {
                  this.previousRequest.abort();
              }

              // set previous request on Vue instance
              this.previousRequest = request;
          }
      }).then(response => {
          if (response.status == 200) {
              that.donate = response.data;
          }
      }); 
    }
}
</script>
<style type="text/scss" scoped>
    .img { text-align: center; width: 100%; } .img img { max-width: 60%; } .donate { width: 100%; } .weui_article { padding: 30px 15px 0; } .navbar-brand { color: #000000; }
</style>
