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
import weui from 'weui.js';
import createCourseLoader from '../lib/course-loader';

export default {
    mixins: [createCourseLoader(weui, false)]
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
