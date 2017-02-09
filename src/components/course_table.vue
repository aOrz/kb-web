<template>
  <div class="content">
    <div class="row table-width">
        <div class="col-xs-16 col-md-16 col-md-8">
        <table v-show="course" class="table table-responsive table-bordered table-condensed table-striped">
            <tbody>
              <tr>
                <td style="width:14px;">@</td>
                <td>星期一</td>
                <td>星期二</td>
                <td>星期三</td>
                <td>星期四</td>
                <td>星期五</td>
                <td>星期六</td>
                <td>星期日</td>
              </tr>
              <tr style="height:50px" v-for="i in 6">
                <td style="width:14px;">第<br> {{i}}<br>节<br></td>
                <td :class="getColor()" v-for="j in 7">{{course['s'+((i-1)*7+j)]}}</td>
              </tr>
            </tbody>
          </table>    
        </div>
      </div>
  </div>
</template>
<script lang="babel">
  import Vue from 'vue';
  import VueResource from 'vue-resource';
  import weui from 'weui.js';

  Vue.use(VueResource);

  export default {
    data () {
      return {
        course: ''
      }
    },
    created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  methods: {
    fetchData () {
      let that = this;
      let params = that.$route.params;
      that.$http.get(`/controller/course_controller.php?c=GetCourseByClassName&schoolName=${params.school}&collegeName=${params.academe}&classNum=${params.class_name}`, {
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
          // success callback
          console.log(response);
          if (response.status != 200) {
            weui.alert('网络错误');
          } else {
            if (typeof response.body === 'object') {
              that.course = response.body[0];
            } else {
              weui.alert('找不到班级');
              window.location.href = '/#/'
            }
          }
        }, response => {
          // error callback
          
        });
    },
    getColor () {
      const setColor = [
        'active',
        'success',
        'warning',
        'danger ',
        '',
        'info',
        'c1',
        'c2',
        'c3'
      ];
      return setColor[Math.round(Math.random()*8+1)];
    }
  }
  }
</script>
<style type="text/css" scoped>
  .content {
    overflow: auto;
  }
  .table th,
  .table td {
      padding: 4px;
      line-height: 1.42857143;
      vertical-align: top;
      border-top: 1px solid #ddd;
      overflow: scroll;
  }
  .table-width {
      width: 150%;
  }
  .row {
      margin-right: -15px;
      margin-left: -15px;
  }
  .table-bordered>thead>tr>th, .table-bordered>tbody>tr>th, .table-bordered>tfoot>tr>th, .table-bordered>thead>tr>td, .table-bordered>tbody>tr>td, .table-bordered>tfoot>tr>td {
      border: 1px solid #ddd;
  }
  .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .table {
      width: 100%;
      max-width: 100%;
      margin-bottom: 20px;
      font-size:0.5em;
      table-layout:fixed;
  }
  .table-responsive {
      min-height: .01%;
      overflow-x: auto;
  }

  table {
      border-spacing: 0;
      border-collapse: collapse;
  }
  .active {
      background-color: #f5f5f5;
  }

  .success {
      background-color: #dff0d8;
  }

  .info {
      background-color: #d9edf7;
  }

  .warning {
      background-color: #fcf8e3;
  }

  .danger {
      background-color: #f2dede;
  }
  .c1 {
    background-color: #b6e6da;
  }
  .c2 {
    background-color: #84d4bf;
  }
  .c3 {
    background-color: #a6dbb3;
  }
</style>