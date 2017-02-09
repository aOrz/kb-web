<template>
  <div class="content">
    <div class="padding-lr">
      <form action="" id="form" class="form-signin" role="form" style="height:100%;padding-bottom:50px">
        <div class="weui-cell weui-cell_select weui-select_after">
          <div class="weui-cell">
            <label class="weui-label">选择学校: </label>
          </div>
          <div class="weui-cell_bd weui-cell_primary">
            <select  v-model="school" class="weui-select" @change="changeAcademe">
              <option value="yd">烟台大学</option>
              <option value="wj">文经学院</option>
            </select>
          </div>
        </div>
        <div class="weui-cell weui-cell_select weui-select_after">
          <div class="weui-cell">
            <label class="weui-label">专业简称: </label>
          </div>
          <div class="weui-cell_bd weui-cell_primary">
            <select v-model="academe" class="weui-select" v-html="academeList[school]">
            </select>
          </div>
        </div>
        <div class="weui-cells weui-cells_form" style="margin-top:0;">
          <div class="weui-cell">
            <div class="weui-cell_hd">
              <label class="weui-label">我的班级: </label>
            </div>
            <div class="weui-cell_bd weui-cell_primary">
              <input name="bj"  v-model="className" class="weui-input" type="text" placeholder="请输入班级如131-2">
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
</style>
<script>
  import duoshuoComponent from './duoshuo';

  export default {
    name: 'Header',
    data () {
      return {
        school: 'yd',
        academe: '计',
        className: '',
        threadKey: 'index',
        academeList: {
          yd: `<option value="环">环境</option>
              <option value="材">材料</option>
              <option value="计">计控</option>
              <option value="法">法学</option>
              <option value="机">机电</option>
              <option value="光">光电</option>
              <option value="海">海院</option>
              <option value="生">生物</option>
              <option value="食">食品</option>
              <option value="数">数院</option>
              <option value="土">土木</option>
              <option value="建">建筑</option>
              <option value="经">经管</option>
              <option value="外">外院</option>
              <option value="化">化学</option>
              <option value="应">应化</option>
              <option value="中">中文</option>
              <option value="新">新闻</option>
              <option value="药">药院</option>
              <option value="音">音乐</option>
              <option value="体">体育</option>
              <option value="对外">对外</option>
              <option value="专国">专国</option>
              <option value="汉教">汉教</option>
              <option value="EIE">EIE</option>`,
          wj: `<option value="文专中">文专中</option>
              <option value="文中">文中</option>
              <option value="中">中</option>
              <option value="文专会">文专会</option>
              <option value="文会">文会</option>
              <option value="会">会</option>
              <option value="文专商">文专商</option>
              <option value="文商">文商</option>
              <option value="文专土">文专土</option>
              <option value="文土">文土</option>
              <option value="文专市">文专市</option>
              <option value="文市">文市</option>
              <option value="文专房">文专房</option>
              <option value="文专机">文专机</option>
              <option value="文机">文机</option>
              <option value="机">机</option>
              <option value="文专电">文专电</option>
              <option value="文电">文电</option>
              <option value="文专英">文专英</option>
              <option value="文英">文英</option>
              <option value="文专计">文专计</option>
              <option value="文计">文计</option>
              <option value="文专财">文专财</option>
              <option value="文财">文财</option>
              <option value="文专贸">文专贸</option>
              <option value="文贸">文贸</option>
              <option value="文专通">文专通</option>
              <option value="文通">文通</option>
              <option value="文公">文公</option>
              <option value="文投">文投</option>
              <option value="文新">文新</option>
              <option value="文日">文日</option>
              <option value="文朝">文朝</option>
              <option value="文法">文法</option>
              <option value="文环">文环</option>
              <option value="文生">文生</option>
              <option value="文自">文自</option>
              <option value="文艺">文艺</option>
              <option value="文视">文视</option>
              <option value="文车">文车</option>
              <option value="文金">文金</option>
              <option value="文食">文食</option>
              <option value="食">食</option>
              <option value="信">信</option>
              <option value="外">外</option>
              <option value="建">建</option>
              <option value="管">管</option>
              <option value="经">经</option>`
        }
      }
    },
    methods: {
      search () {
        window.location.href = `#/course_table.html/${this.school}/${this.academe}/${this.className}`;
      },
      changeAcademe () {
        this.academe = this.school === 'yd' ? '计' : '文会';
      }
    },
    components: {
      duoShuo: duoshuoComponent
    }
  }
</script>