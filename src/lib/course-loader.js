// Shared lifecycle for course pages. Keep stale/aborted requests from replacing
// a newer route's data or displaying errors after the component has closed.
module.exports = function createCourseLoader(weui, table) {
    return {
        data: function () {
            return { course: table ? null : [] };
        },
        created: function () {
            this.fetchData();
        },
        watch: {
            '$route': 'fetchData'
        },
        beforeDestroy: function () {
            this.cancelCourseRequest();
        },
        methods: {
            cancelCourseRequest: function () {
                this.courseRequestId = (this.courseRequestId || 0) + 1;
                if (this.courseRequest) {
                    this.courseRequest.abort();
                    this.courseRequest = null;
                }
                if (this.courseLoading) {
                    this.courseLoading.hide();
                    this.courseLoading = null;
                }
            },
            fetchData: function () {
                var that = this;
                that.cancelCourseRequest();
                that.course = table ? null : [];
                var id = that.courseRequestId;
                var params = that.$route.params;
                var query = table ? {
                    c: 'GetCourseByClassName',
                    schoolName: params.school,
                    collegeName: params.academe,
                    classNum: params.class_name
                } : {
                    c: params.type,
                    schoolName: params.school,
                    courseName: params.search,
                    teacherName: params.search
                };
                that.courseLoading = weui.loading('狂奔中~');
                function finish() {
                    if (id !== that.courseRequestId) return false;
                    that.courseRequest = null;
                    if (that.courseLoading) that.courseLoading.hide();
                    that.courseLoading = null;
                    return true;
                }
                return that.$http.get('//kb.fddcn.cn/controller/course_controller.php', {
                    params: query,
                    timeout: 15000,
                    before: function (request) {
                        that.courseRequest = request;
                    }
                }).then(function (response) {
                    if (!finish()) return;
                    if (response.status !== 200) {
                        weui.alert('网络错误');
                        return;
                    }
                    var rows = response.body;
                    var valid = Array.isArray(rows) && rows.length > 0 && rows.every(function (row) {
                        if (row === null || typeof row !== 'object' || Array.isArray(row)) return false;
                        if (!table) return typeof row.course_name === 'string';
                        var fields = Object.keys(row).filter(function (key) { return /^s([1-9]|[1-3][0-9]|4[0-4])$/.test(key); });
                        return fields.length > 0 && fields.every(function (key) {
                            return row[key] == null || typeof row[key] === 'string' || typeof row[key] === 'number';
                        });
                    });
                    if (!valid) {
                        weui.alert(table ? '找不到班级' : '没有找到相关课程');
                        return;
                    }
                    that.course = table ? rows[0] : rows;
                }, function () {
                    if (finish()) weui.alert('网络错误，请稍后重试');
                });
            }
        }
    };
};
