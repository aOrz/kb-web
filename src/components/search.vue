<template>
  <div class="content">
    <div class="padding-lr">
      <form action="" id="form" class="form-signin" role="form" style="height:100%;padding-bottom:50px">
        <div class="weui-cell weui-cell_select weui-select_after">
          <div class="weui-cell">
            <label class="weui-label">专业: </label>
          </div>
          <div class="weui-cell_bd weui-cell_primary info">
            <input @click="showPicker" v-model="schoolInfo" class="weui-input" type="text" placeholder="请选择学校专业">
          </div>
        </div>
        <div class="weui-cells weui-cells_form" style="margin-top:0;">
          <div class="weui-cell">
            <div class="weui-cell_hd">
              <label class="weui-label">班级: </label>
            </div>
            <div class="weui-cell_bd weui-cell_primary">
              <select v-model="className" class="weui-select">
                  <option v-for="i in classs" :value="i">{{i}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="weui-cells weui-cells_form">   
          <input type="button" @click="search" value="查询" class="weui-btn weui-btn_primary"> 
        </div>
      </form>
    </div>
    <duo-shuo :thread-key="threadKey"></duo-shuo>
  </div>
</template>
<style scoped>
  .padding-lr {
    padding: 0 15px;
  }
  .weui-label {
    width: 70px;
  }
  .weui-cell_bd+.weui-cell_primary {
    flex: 2;
  }
  .weui-select {
    height: 24px;
    line-height: 24px;
  }
</style>
<script>
  import duoshuoComponent from './duoshuo';
  import weui from 'weui.js';
  import Vue from 'vue';
  import VueResource from 'vue-resource';

  Vue.use(VueResource);

  let date = new Date();
  let year = date.getFullYear();
  let grade = [];
  for(let i = 0; i < 5; i++){
    grade.push({
      value: year % 2000,
      label: year + '级'
    });
    year--;
  }
  let arr = [{
    label: '烟台大学',
    value: 'yd',
    children: []
  },{
    label: '文经学院',
    value: 'wj',
    children: []
  }];
  let yd = ['环','法','计','光','海','建','经','生','食','数','土','外','新','机','药','音','应','中','化','材','体','EIE','对外','专国','汉教'];
  let wj = ['文专中','文专会','文专商','文专土','文专市','文专房','文专机','文专电','文专英','文专计','文专财','文专贸','文专通','文中','文会','文公','文商','文土','文市','文投','文新','文日','文朝','文机','文法','文环','文生','文电','文自','文艺','文英','文视','文计','文财','文贸','文车','文通','文金','文食']
  for (let i = 0; i < yd.length; i++) {
    arr[0].children.push({
      label: yd[i],
      value: yd[i],
      children: grade
    });
  }
  for (let i = wj.length - 1; i >= 0; i--) {
    arr[1].children.push({
      label: wj[i],
      value: wj[i],
      children: grade
    });
  }
  
  export default {
    name: 'Header',
    data () {
      return {
        school: '',
        academe: '',
        className: '',
        grade: '',
        threadKey: 'index',
        schoolInfo: '',
        classs: []
      }
    },
    computed: {
      classNum () {
        return this.className.match(/\d.*/)
      }
    },
    methods: {
      search () {
        if (this.school && this.academe && this.className) {
          window.location.href = `#/course_table.html/${this.school}/${this.academe}/${this.classNum}`;
        } else {
          weui.topTips('填完再查嘛！');
        }
      },
      changeAcademe () {
        this.academe = this.school === 'yd' ? '计' : '文会';
      },
      showPicker () {
        let that = this;
        let params = that.$route.params;
        let defaultValue = [];
        if (params.school) {
          defaultValue.push(params.school)
        } else {
          defaultValue.push('yd');
        }
        if (params.academe) {
          defaultValue.push(params.academe)
        }
        weui.picker(arr, {
           defaultValue: defaultValue,
           depth: 3,
           onConfirm: function (result) {
               that.school = result[0].value;
               that.academe = result[1].value;
               that.grade = result[2].value;
               that.schoolInfo = result[0].label + ',' + result[1].label + ',' + result[2].label;
               that.getClass();
           },
           id: 'd'
        });
      },
      getClass () {
        let that = this;
        let loading = weui.loading('狂奔中~');

        that.$http.get(`/controller/course_controller.php?c=Getclass&schoolName=${that.school}&school_info=${that.academe}${that.grade}`, {
            // use before callback
            before(request) {

              // abort previous request, if exists
              if (this.previousRequest) {
                this.previousRequest.abort();
              }

              this.previousRequest = request;
            }

          }).then(response => {
            loading.hide();
            if (response.status != 200) {
              weui.alert('网络错误');
            } else {
              if (typeof response.body === 'object') {
                that.classs = response.body;
                that.className = that.classs[0];
              } else {
                weui.alert('找不到班级');
                window.location.href = '/#/'
              }
            }
          }, response => {
            loading.hide();
            weui.alert('出错拉');
          });
      }
    },
    created () {
      this.showPicker();
    },
    components: {
      duoShuo: duoshuoComponent
    }
  }
</script>