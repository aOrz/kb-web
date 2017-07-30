<template>
  <div class="padding-lr">
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell weui-cell_switch">
          <div class="weui-cell__bd">查蹭课</div>
          <div class="weui-cell__ft">
              <input class="weui-switch" v-model="more" type="checkbox">
          </div>
        </div>
        <div v-if="!more" class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">专业: </label>
          </div>
          <div class="weui-cell__bd weui-cell_primary info">
            <span @click="showPicker" class="weui-input">{{schoolInfo}}</span>
          </div>
        </div>
        <div v-if="!more" class="weui-cell weui-cell_select-after">
          <div class="weui-cell__hd">
              <label for="" class="weui-label">班级：</label>
          </div>
          <div class="weui-cell__bd">
              <select v-model="className" class="weui-select">
                <option v-for="i in classs" :value="i">{{i}}</option>
              </select>
          </div>
        </div>
        <section v-if="more">
          <div class="weui-cell weui-cell_select-after">
            <div class="weui-cell__hd">
                <label for="" class="weui-label">学校：</label>
            </div>
            <div class="weui-cell__bd">
                <select v-model="more_school" class="weui-select">
                  <option value="yd">烟大</option>
                  <option value="wj">文经</option>
                </select>
            </div>
          </div>
          <div class="weui-cell weui-cell_select-after">
            <div class="weui-cell__hd">
                <label for="" class="weui-label">按照：</label>
            </div>
            <div class="weui-cell__bd">
                <select v-model="more_type" class="weui-select">
                    <option value="GetCourceByCourseName">课程名</option>
                    <option value="GetCourceByTeacherName">老师名</option>
                </select>
            </div>
          </div>
          <div class="weui-cell">
              <div class="weui-cell__bd">
                  <input v-model="more_search" class="weui-input" type="text" placeholder="请输入搜索内容，如“计算机”">
              </div>
          </div>
        </section>
    </div>
   
    <div class="weui-cells weui-cells_form">   
      <input type="button" @click="search" value="查询课表" class="weui-btn weui-btn_primary"> 
    </div>
  </div>
</template>
<style scoped>
  .padding-lr {
    padding: 0 15px;
  }
  .weui-label {
    width: 70px;
  }
  .weui-cell__bd+.weui-cell_primary {
    flex: 2;
  }
  .weui-select {
    height: 24px;
    line-height: 24px;
  }
</style>
<script>
  import config from '../lib/config'

  import weui from 'weui.js';
  import Vue from 'vue';
  
  export default {
    data () {
      return {
        academe: '',
        className: '',
        school: this.schoolName,
        grade: '',
        schoolInfo: '请选择学校专业',
        classs: [],
        more: false, //查蹭课
        more_search: '',
        more_school: 'yd',
        more_type: 'GetCourceByCourseName'
      }
    },
    props: ['schoolName'],
    computed: {
      classNum () {
        return this.className.match(/\d.*/)
      }
    },
    methods: {
      search () {
        if (!this.more) {
          _hmt.push(['_trackEvent', 'course', this.school, `${this.academe}/${this.grade}`]);
          if (this.school && this.academe && this.className) {
            window.location.href = `#/course_table/${this.school}/${this.academe}/${this.classNum}`;
          } else {
            weui.topTips('填完再查嘛！');
          }
        } else {
          if (this.more_search) {
            window.location.href = `#/course_list/${this.more_school}/${this.more_type}/${this.more_search}`
          } else {
            weui.topTips('填完再查嘛！');
          }
        }
      },
      changeAcademe () {
        this.academe = this.school === 'yd' ? '计' : '文会';
      },
      parsePickerInfo (result) {
        let that = this;
        that.school = result[0].value;
        that.$emit('changeschool', result[0].value);
        that.academe = result[1].value;
        that.grade = result[2].value;
        that.schoolInfo = result[0].label + ',' + result[1].label + ',' + result[2].label;
        _hmt.push(['_trackEvent', 'coursepicker', this.school, `${this.academe}/${this.grade}`]);
        that.getClass();
      },
      showPicker () {
        let that = this;
        let params = that.$route.params;
        let defaultValue = [];

        let val = params.school || that.school || 'yd';
        defaultValue.push(val);

        if (params.academe || that.academe) {
          let val = that.academe || params.academe
          defaultValue.push(val)
        }
        if (that.grade) {
          defaultValue.push(that.grade);
        }
        weui.picker(config.gradeList, {
          defaultValue: defaultValue,
          depth: 3,
          onConfirm: function (result) {
          window.localStorage.setItem('pickerInfo', JSON.stringify(result));
          that.parsePickerInfo(result);
          },
          id: 'd'
        });
      },
      getClass () {
        let that = this;
        let infoStr = that.school + that.academe + that.grade;
        let classList = sessionStorage.getItem(infoStr);

        if (classList) {
          classList = JSON.parse(classList);
          that.classs = classList.body;
          that.className = that.classs[0];
          return ;
        }

        let loading = weui.loading('狂奔中~');
        
        that.$http.get(`//kb.fddcn.cn/controller/course_controller.php?c=Getclass&schoolName=${that.school}&school_info=${that.academe}${that.grade}`, {
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
                sessionStorage.setItem(infoStr, JSON.stringify(response))
                that.classs = response.body;
                that.className = that.classs[0];
              } else {
                weui.alert('找不到班级');
                // window.location.href = '/#/'
              }
            }
          }, response => {
            loading.hide();
            weui.alert('出错拉');
          });
      }
    },
    created () {
      let pickerInfo = localStorage.getItem('pickerInfo');
      if (pickerInfo) {
        this.parsePickerInfo(JSON.parse(pickerInfo));
      }
    }
  }
</script>