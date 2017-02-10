<template>
    <div class="vue-calendar" data-index="0">
        <div class="vue-calendar-content" v-show="showCalendar" transition="vue-component-calendar-content" id="vueCalendarTemplate">
            <div class="week-bar" id="topHeight2">
                <ul>
                    <li class="weekend">日</li>
                    <li>一</li>
                    <li>二</li>
                    <li>三</li>
                    <li>四</li>
                    <li>五</li>
                    <li class="weekend">六</li>
                </ul>
            </div>
           <!--  <div class="month-bar-fixed" id="fixedBarEle">
                {{fixedMonthbar}}
            </div> -->
            <div id="scrollPanelWrapper">
                <div class="vue-calendar-date-wrapper" id="scrollPanel">
                    <div v-for="(item,$index) in panel" :track-by="$index" :data-index="$index" class="month-panel">
                        <div class="month-bar" :id="'monthBar-'+$index" :class="{'first-month-bar': $index == 0}">{{item.month}}</div>
                        <div class="month-list">
                            <ul>
                                <li v-for="(day,$index) in item.days" :track-by="$index" :date-sec="new Date(day).getTime() || ''" :class="{'weekend': new Date(day).getDay() == 0 || new Date(day).getDay() == 6, 
                                color:isNaN(convertDateFormatDisplay(day,isHoliday,isVication)),
                                            'disabled': today > new Date(day).getTime() || new Date(day).getTime() > lastDay,
                                            'without-text': withoutText,
                                            'border-radius': borderRadius,
                                            'is-holiday': judgeIsHoliday(day),
                                            'is-work': judgeIsWork(day)
                                        }" :data-date-format="day | convertDateFormatValue">
                                    <span class="dd">{{convertDateFormatDisplay(day,isHoliday,isVication)}}</span><i></i>
                                    <span class="holiday"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-html="tips" class="tips"></div>
    </div>
</template>

<script>
    var utils = require('../lib/utils');
    var config = require('../lib/config')
    var myScroll;

    export default {
        data() {
            return {
                fixedMonthbar: utils.getFirstMonthName(config.maxDate),//maxDate
                panel: utils.getAllPanelData(config.maxDate),//maxDate
                titleText: '校历',
                today: utils.getTodaySec(),
                lastDay: utils.getLastDaySec(config.maxDate),
                selectBefore: null,
                withoutText: null,
                borderRadius: null,
                judgeIsHoliday: function(day) {
                    return utils.judgeIsHoliday(day)
                },
                judgeIsWork: function(day) {
                    return utils.judgeIsWork(day)
                },
                panelState: 0,
                items: null,
                currentIndex: -1,
                headerHeight:0,
                targets: document.querySelectorAll(".month-bar"),
                isHoliday: true,
                isVication: true,
                isDoubleCheck: true,
                startMonth: new Date(),
                showCalendar: true,
                maxDate: config.maxDate,
                tips: config.tips
            }
        },
        methods: {
            convertDateFormatDisplay: function (date, isHoliday, isVication) {
                if (date !== '') {
                    return utils.handleCalendarDisplayName(date, isHoliday, isVication);
                } else {
                    return '';
                }
            },

        },
        filters: {
            convertDateFormatValue: function (date) {
                if (date !== '') {
                    return utils.dateFormat('yyyy-MM-dd', date);
                } else {
                    return '';
                }
            }
        }
    }
</script>
<style lang="less">
    /*
 * base css
 */
@base-size: 64px;

.one-px-line() {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid #d9d9d9;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
.one-px-line-top() {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid #d9d9d9;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
.vue-calendar {
    padding-top: 25px;
}
.tips {
    padding: 15px;
}
.vue-calendar-content {
    background: #fff;
    width: 100%;
    height: 75%;
    overflow: hidden;
    z-index: 1000;
    font-size: 15px;
    #scrollPanelWrapper{
        position: relative;
        top: 0;
    }
    .vue-calendar-content-title-wrapper {
        background: #fff;
        z-index: 1003;
        height: 0.90*@base-size;
        line-height: 0.90*@base-size;
        position: relative;
        .text {
            float: left;
            padding-left: 0.2*@base-size;
            color: #666666;
            font-size: 0.32*@base-size;
        }
        .vue-component-calendar-complete-button {
            float: right;
            margin-right: 0.2*@base-size;
            a {
                color: #2eb6a8;
                font-size: 0.30*@base-size;
                text-decoration: none;
                padding: 0.1*@base-size 0.20*@base-size;
                border: 0.02*@base-size solid #2eb6a8;
                border-radius: 0.06*@base-size;
            }
        }
        &:after {
            .one-px-line
        }
    }
    .month-bar-fixed {
        overflow: visible;
        text-align: center;
        height: 0.6*@base-size;
        line-height: 0.6*@base-size;
        width: 100%;
        position: fixed;;
        top: 87px;
        background: #fafafa;
        z-index: 1000;

        &:after{
            .one-px-line;
        }
    }
    .week-bar {
        height: 0.6*@base-size;
        line-height: 0.6*@base-size;
        position: fixed;
        width: 100%;
        background: #fff;
        z-index: 1001;
        .weekend {
            color: #fa967f;
        }
        &:after {
            .one-px-line
        }
        ul {
            display: -webkit-flex;
            display: -ms-flexbox;
            display: -webkit-box;
            display: flex;
            li {
                color: #666666;
                -webkit-flex: auto;
                -ms-flex: auto;
                -webkit-box-flex: 1;
                flex: auto;
                list-style: none;
                text-align: center;
            }
        }
    }
    .vue-calendar-date-wrapper {
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
        overflow: auto;
        position: relative;
        -webkit-transform:translate3d(0,0,0);
        // margin-top: -0.6*@base-size;
        .month-bar {
            text-align: center;
            height: 0.6*@base-size;
            line-height: 0.6*@base-size;
            width: 100%;
            position: relative;
            background: #fafafa;
            &:before {
                // .one-px-line-top;
            }
            &:after {
                .one-px-line;
            }
        }
        // .first-month-bar{
        //     visibility: hidden;
        // }
        // .first-month-bar {
        //     position: fixed;
        //     top: 1.5*@base-size;
        //     z-index: 100;
        // }
        .month-list {
            ul li {
                list-style: none;
            }
            ul {
                overflow: hidden;
            }
            li {
                display: inline-block;
                // float: left;
                width: 14.286%;
                border-bottom: 1px solid #eee;
                text-align: center;
                position: relative;
                height: 48px;
                line-height: 1*@base-size;
                color: #333333;
                .dd {
                    position: relative;
                    display: inline-block;
                    top: -0.15*@base-size;
                }
                &.disabled {
                    color: #a2a2a2;
                }
                &.color {
                    color: #1aad19;
                }
                &.weekend {
                    color: #fa967f;
                }
                &:after {
                    // .one-px-line;
                }
                &.without-text {
                    i {
                        &:after {
                            content: ''!important;
                        }
                    }
                }
                &.is-holiday {
                    .holiday {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        left: 0;
                        bottom: 0;
                        &:before {
                            width: 0;
                            height: 0;
                            content: '';
                            position: absolute;
                            bottom: 0;
                            right: 0;
                            border-bottom: 0.35*@base-size solid #fa967f;
                            border-left: 0.35*@base-size solid transparent;
                        }
                        &:after {
                            content: '假';
                            position: absolute;
                            bottom: 0.02*@base-size;
                            right: 0.02*@base-size;
                            font-size: 0.16*@base-size;
                            color: #fff;
                            line-height: 0.2*@base-size;
                        }
                    }
                }
                &.is-work {
                    .holiday {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        left: 0;
                        bottom: 0;
                        &:before {
                            width: 0;
                            height: 0;
                            content: '';
                            position: absolute;
                            bottom: 0;
                            right: 0;
                            border-bottom: 0.35*@base-size solid #fa967f;
                            border-left: 0.35*@base-size solid transparent;
                        }
                        &:after {
                            content: '班';
                            position: absolute;
                            bottom: 0.02*@base-size;
                            right: 0.02*@base-size;
                            font-size: 0.16*@base-size;
                            color: #fff;
                            line-height: 0.2*@base-size;
                        }
                    }
                }
                &.border-radius {
                    border-radius: 0.06*@base-size!important;
                }
                &.selected {
                    &-start {
                        border-bottom: none;
                        border-radius: 0.06*@base-size 0 0 0.06*@base-size;
                        i:after {
                            content: '入住';
                        }
                    }
                    &-end {
                        border-bottom: none;
                        border-radius: 0 0.06*@base-size 0.06*@base-size 0;
                        i:after {
                            content: '离店';
                        }
                    }
                    &-start,
                    &-end {
                        border-top: 0.01*@base-size solid #2eb6a8;
                        border-bottom: 0.01*@base-size solid #2eb6a8;
                        height: 1*@base-size!important;
                        line-height: 1*@base-size!important;
                        color: #fff;
                        background: #2eb6a8;
                        i:after {
                            position: absolute;
                            top: 0.2*@base-size;
                            left: 0;
                            font-size: 0.24*@base-size;
                            font-style: normal;
                            text-align: center;
                            width: 100%;
                        }

                    }
                    &-start.is-holiday ,&-end.is-holiday{
                        .holiday{
                            &:before{
                                 width: 0;
                            height: 0;
                            content: '';
                            position: absolute;
                            bottom: 0;
                            right: 0;
                            border-bottom: 0.35*@base-size solid #fff;
                            border-left: 0.35*@base-size solid transparent;
                            }
                            &:after{
                                color: #fa967f;
                            }
                        }
                    }

                    &-line {
                        background: #e0f4f2;
                        color: #333;
                        // border-top: 0.01*@base-size solid #2eb6a8;
                        height: 1*@base-size!important;
                        line-height: 1*@base-size!important;
                        // border-bottom: 0.01*@base-size solid #2eb6a8;
                        &:after {
                            .one-px-line;
                        }
                        &:before {
                            .one-px-line-top;
                        }
                    }
                }
            }
        }
    }
}
.vue-component-calendar-content-transition {
    -webkit-transition: all ease-in-out 0.3s;
    transition: all ease-in-out 0.3s;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
.vue-component-calendar-content-enter,
.vue-component-calendar-content-leave {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
}
.expand-enter,
.expand-leave {
    opacity: 0;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
