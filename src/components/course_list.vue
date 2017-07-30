<template>
    <div class="content">
        <ul class="weui-cells">
            <li v-for="i in course" class="weui-cell">
                <p class="title">{{i.course_name}}</p>
                <div><span>{{i.course_room}}</span><span class="red">{{i.course_teaacher}}</span><span class="green">{{i.course_time}}</span><span>{{i.course_class}}</span></div>
            </li>
        </ul>
    </div>
</template>
<script lang="babel">
import Vue from 'vue';
import VueResource from 'vue-resource';
import weui from 'weui.js';

Vue.use(VueResource);

export default {
    data() {
            return {
                course: ''
            }
        },
        created() {
            // 组件创建完后获取数据，
            // 此时 data 已经被 observed 了
            this.fetchData()
        },
        methods: {
            fetchData() {
                let that = this;
                let params = that.$route.params;
                let loading = weui.loading('狂奔中~');
                console.log(this.$route)
                that.$http.get(`//kb.fddcn.cn/controller/course_controller.php?c=${params.type}&schoolName=${params.school}&courseName=${params.search}&teacherName=${params.search}`, {
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
                    loading.hide();
                    if (response.status != 200) {
                        weui.alert('网络错误');
                    } else {
                        if (typeof response.body === 'object') {
                            that.course = response.body;
                        } else {
                            weui.alert('没有找到相关课程');
                            window.location.href = '/#/'
                        }
                    }
                }, response => {
                    loading.hide();
                    weui.alert('出错拉');
                });
            }
        }
}
</script>
<style type="text/css" scoped>
.weui-cells {
    margin-top: 0;
}
.content:after {
    content: '';
    height: 0;
}

.weui-cell {
    display: block;
}

ul li {
    padding: 10px 20px;
}

ul li .title {
    display:block;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    width: 100%;
    height: 25px; 
    line-height: 25px;
}
ul li span {
    display: inline-block;
    margin-right: 10px;
    font-size: 10px;
    color: #555555;
}

ul li:nth-child(odd) {
    background-color: #b6e6da;
}
</style>
