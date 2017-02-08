<template>
  <div class="content">
    <div class="padding-lr">
      <form action="" id="form" class="form-signin" role="form" style="height:100%;padding-bottom:50px">
        <div class="weui-cell weui-cell_select weui-select_after">
          <div class="weui-cell">
            <label class="weui-label">学校: </label>
          </div>
          <div class="weui-cell_bd weui-cell_primary">
            <select class="weui-select" name="xy">
              <option value="ytu">烟台大学</option>
              <option value="wj">文经学院</option>
            </select>
          </div>
        </div>
        <div class="weui-cell weui-cell_select weui-select_after">
          <div class="weui-cell">
            <label class="weui-label">学院: </label>
          </div>
          <div class="weui-cell_bd weui-cell_primary">
            <select class="weui-select" name="xy">
              <option value="环">环境</option>
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
              <option value="EIE">EIE</option>  
            </select>
          </div>
        </div>
        <div class="weui-cells weui-cells_form" style="margin-top:0;">
          <div class="weui-cell">
            <div class="weui-cell_hd">
              <label class="weui-label">班级: </label>
            </div>
            <div class="weui-cell_bd weui-cell_primary">
              <input name="bj" class="weui-input" type="text" placeholder="请输入班级如131-2">
            </div>
          </div>
        </div>
        <div class="weui-cells weui-cells_form">   
          <input type="submit" value="查询" class="weui-btn weui-btn_primary"> 
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
  .padding-lr {
    padding: 0 15px;
  }
</style>
<script>
  export default {
    name: 'Header',
    data () {
      return {
        items: [{
          text: '下载课表',
          href: ''
        },
        {
          text: '烟大课表',
          href: ''
        },
        {
          text:'空教室', 
          href: ''
        },
        {
          text: '打赏',
          href: ''
        }],
        selected: 1
      }
    }
  }
</script>