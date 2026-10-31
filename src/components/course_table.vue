<template>
    <div class="content">
        <div class="table-width">
            <table v-if="course" class="table table-responsive table-bordered table-condensed table-striped">
                <thead>
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
                </thead>
                <tbody>
                    <tr style="height:70px" v-for="i in 6">
                        <td style="width:14px;">第
                            <br> {{i}}
                            <br>节
                            <br>
                        </td>
                        <td :class="getColor((i - 1) * 7 + j - 1)" v-for="j in 7">{{course['s'+((i-1)*7+j)]}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script lang="babel">
import weui from 'weui.js';
import createCourseLoader from '../lib/course-loader';

export default {
    mixins: [createCourseLoader(weui, true)],
    methods: {
        getColor(index) {
            const colors = ['active', 'success', 'warning', 'danger', '', 'info', 'c1', 'c2', 'c3'];
            return colors[index % colors.length];
        }
    }
}
</script>
<style type="text/css" scoped>
.content {
    overflow: auto;
}

.content:after {
    content: '';
    height: 0;
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
    max-width: 800px;
    margin: 0 auto;
}

.table-bordered>thead>tr>th,
.table-bordered>tbody>tr>th,
.table-bordered>tfoot>tr>th,
.table-bordered>thead>tr>td,
.table-bordered>tbody>tr>td,
.table-bordered>tfoot>tr>td {
    border: 1px solid #ddd;
}

.table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 5px;
    font-size: 0.5em;
    table-layout: fixed;
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
