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
  let yd =[ '食',
  '音',
  '计双',
  '计',
  '药',
  '经辅',
  '经双',
  '经',
  '生',
  '环材',
  '环',
  '海',
  '法双',
  '法',
  '汉教',
  '核',
  '材',
  '机',
  '新辅',
  '新双',
  '新',
  '数',
  '建',
  '应',
  '外辅',
  '外双',
  '外',
  '土',
  '化',
  '制药',
  '光辅',
  '光双',
  '光',
  '体',
  '中辅',
  '中双',
  '中' ]
  let wj = [ '食',
  '经',
  '管',
  '机',
  '文食',
  '文金',
  '文通',
  '文车',
  '文贸',
  '文财',
  '文计',
  '文视',
  '文英',
  '文自',
  '文电',
  '文生',
  '文环',
  '文法',
  '文机',
  '文朝',
  '文新',
  '文投',
  '文市',
  '文土',
  '文商',
  '文公',
  '文会',
  '文中',
  '建',
  '外',
  '国',
  '信',
  '会',
  '中' ];
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

module.exports = {
    searchTips: {
        id: 3,
        text: '烟大新学期课表已出',
        href: ''
    },
    gradeList: arr,
    startDate: '2017-08-28',
    maxDate: '8m',
    tips:``,
    work: {
        '2016-02-06': '除夕班',
        '2016-02-14': '春节班',
        '2016-06-12': '端午班',
        '2016-09-18': '中秋班',
        '2016-10-08': '国庆班',
        '2016-10-09': '国庆班'
    },
    holiday: {
        '2017-05-01': '春假',
        '2017-05-02': '春假',
        '2017-05-03': '春假',
        '2017-05-04': '春假',
        '2017-10-02': '国庆',
        '2017-10-03': '国庆',
        '2017-10-04': '中秋',
        '2018-04-30': '春假',
        '2018-05-01': '春假',
        '2018-05-02': '春假',
        '2018-05-03': '春假',
        '2018-05-04': '春假'
    },

    vication: { // 节日配置
        yuandan: {
            name: '元旦',
            dates: [
                '2016-01-01',
                '2017-01-01',
                '2018-01-01',
                '2019-01-01',
                '2020-01-01',
                '2021-01-01'
            ]
        },
        chuxi: {
            name: '除夕',
            dates: [
                '2016-02-07',
                '2017-01-27',
                '2018-02-15',
                '2019-02-04',
                '2020-01-24',
                '2021-02-11'
            ]
        },
        chunjie: {
            name: '春节',
            dates: [
                '2016-02-08',
                '2017-01-28',
                '2018-02-16',
                '2019-02-05',
                '2020-01-25',
                '2021-02-12'
            ]
        },
        yuanxiao: {
            name: '元宵节',
            dates: [
                '2016-02-22',
                '2017-02-11',
                '2018-03-02',
                '2019-02-19',
                '2020-02-08',
                '2021-02-26'
            ]
        },
        qingming: {
            name: '清明',
            dates: [
                '2016-04-04',
                '2017-04-04',
                '2018-04-05',
                '2019-04-05',
                '2020-04-04',
                '2021-04-04'

            ]
        },
        wuyi: {
            name: '劳动节',
            dates: [
                '2016-05-01',
                '2017-05-01',
                '2018-05-01',
                '2019-05-01',
                '2020-05-01',
                '2021-05-01',
                '2022-05-01',
                '2023-05-01',
                '2024-05-01',
                '2025-05-01',
                '2026-05-01'
            ]
        },
        duanwu: {
            name: '端午节',
            dates: [
                '2016-06-09',
                '2017-05-30',
                '2018-06-18',
                '2019-06-07',
                '2020-06-25',
                '2021-06-14'
            ]
        },
        zhongqiu: {
            name: '中秋节',
            dates: [
                '2016-09-15',
                '2017-10-04',
                '2018-09-24',
                '2019-09-13',
                '2020-10-01',
                '2021-09-21'
            ]
        },
        guoqing: {
            name: '国庆节',
            dates: [
                '2016-10-01',
                '2017-10-01',
                '2018-10-01',
                '2019-10-01',
                '2020-10-01',
                '2021-10-01',
                '2022-10-01',
                '2023-10-01',
                '2024-10-01',
                '2025-10-01',
                '2026-10-01'
            ]
        },
        baodao: {
            name: '报到',
            dates: [
                '2017-02-25',
                '2017-02-26',
                '2018-03-03',
                '2018-03-04'
            ]
        },
        shangke: {
            name: '上课',
            dates: ['2017-02-27', '2018-03-05']
        },
        yundonghui: {
            name: '运动会',
            dates: [
            '2017-05-11',
            '2017-05-12',
            '2018-05-10',
            '2018-05-11'
            ]
        }
    },

    links: {
        "yd": [
            {
                "category": "烟大生活",
                "links": [
                    {
                        "name": "烟大贴吧",
                        "icon": "",
                        "style": "basic",
                        "url": "http://tieba.baidu.com/f?kw=%D1%CC%CC%A8%B4%F3%D1%A7"
                    },
                    {
                        "name": "图书馆",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.lib.ytu.edu.cn:9999/opac/reader_info.aspx"
                    },
                    {
                        "name": "表白墙",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.handschool.cn/addon/BiaoBai/BiaoBaiView/show/hmp/0f4339c19535d77981f16aa6d3a8cf69.html?from=singlemessage"
                    },
                    {
                        "name": "烟大集市",
                        "icon": "",
                        "style": "basic",
                        "url": "http://wx.quanzijishi.com/circle/ni61rl90ayb"
                    },
                    {
                        "name": "全景烟大",
                        "icon": "",
                        "style": "basic",
                        "url": "https://720yun.com/t/af927ci6qyr?from=timeline&isappinstalled=0&openSpeakModal=true&pano_id=1240382"
                    }
                ]
            },
            {
                "category": "烟大校园",
                "links": [
                    {
                        "name": "烟大官网",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.ytu.edu.cn/"
                    },
                    {
                        "name": "烟大导航",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.ytu.edu.cn/wzdt/index.jhtml"
                    },
                    {
                        "name": "选课系统",
                        "icon": "",
                        "style": "basic",
                        "url": "http://jwc.ytu.edu.cn/xk/xuankefuwu.htm"
                    },
                    {
                        "name": "网上民生",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.ytu.edu.cn/wsms/index.jhtml"
                    },
                    {
                        "name": "烟大新闻",
                        "icon": "",
                        "style": "basic",
                        "url": "http://xcb.ytu.edu.cn/"
                    },
                    {
                        "name": "学院导航",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.ytu.edu.cn/xysz.jhtml"
                    },
                    {
                        "name": "密码修改",
                        "icon": "",
                        "style": "basic",
                        "url": "http://202.194.116.59:8081/user/userchgpw2.jsp"
                    },
                    {
                        "name": "烟大官方微博",
                        "icon": "",
                        "style": "basic",
                        "url": "http://weibo.com/ytu2014"
                    }
                ]
            }
        ],
        "wj": [
            {
                "category": "文经生活",
                "links": [
                    {
                        "name": "网上餐厅",
                        "icon": "",
                        "style": "basic",
                        "url": "https://wap.lewaimai.com/index.php?r=showdivpage/index&id=1357&from=singlemessage&isappinstalled=0&code=0313ITsS05T9sc2HSIuS0NvUsS03ITsR&state=lewaimaibase"
                    },
                    {
                        "name": "文经贴吧",
                        "icon": "",
                        "style": "basic",
                        "url": "http://tieba.baidu.com/f?ie=utf-8&kw=%E7%83%9F%E5%8F%B0%E5%A4%A7%E5%AD%A6%E6%96%87%E7%BB%8F%E5%AD%A6%E9%99%A2"
                    },
                    {
                        "name": "失物招领",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.wxhand.com/addon/LostAndFound/WapLostAndFound/lists/hmp/f844cb5d65d6b9a7c68c3ca75b24016f.html"
                    },
                    {
                        "name": "表白墙",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.handschool.cn/addon/BiaoBai/BiaoBaiView/show/hmp/0c9ba4a11ddd07bf814abf677496927a.html"
                    },
                    {
                        "name": "全景文经",
                        "icon": "",
                        "style": "basic",
                        "url": "http://720yun.com/t/2e928a8gatv?pano_id=722152"
                    }
                ]
            },
            {
                "category": "文经校园",
                "links": [
                    {
                        "name": "文经官网",
                        "icon": "",
                        "style": "basic",
                        "url": "http://wenjing.ytu.edu.cn/"
                    },
                    {
                        "name": "校园一卡通",
                        "icon": "",
                        "style": "basic",
                        "url": "http://192.168.100.7/homeLogin.action"
                    },
                    {
                        "name": "选课系统",
                        "icon": "",
                        "style": "basic",
                        "url": "http://jiaowu.wenjing.ytu.edu.cn/index.php/portal/article/index/id/2799"
                    },
                    {
                        "name": "文经微信",
                        "icon": "",
                        "style": "basic",
                        "url": "http://m.najiaoluo.com/weixin/732.html"
                    },
                    {
                        "name": "文经新闻",
                        "icon": "",
                        "style": "basic",
                        "url": "http://news.wenjing.ytu.edu.cn/"
                    }
                ]
            }
        ],
        "public_links": [
            {
                "category": "吃喝玩乐",
                "links": [
                    {
                        "name": "美团",
                        "icon": "weibo red",
                        "style": "basic",
                        "url": "http://i.meituan.com/?city=yantai"
                    },
                    {
                        "name": "周边游",
                        "icon": "wechat green",
                        "style": "basic",
                        "url": "http://i.meituan.com/trip/lvyou/triplist/poi/?limit=20&offset=0&cityId=104&sort=smart&cateId=195&selectedCityId=104&fromCityId=104"
                    },
                    {
                        "name": "KTV",
                        "icon": "paw blue",
                        "style": "basic",
                        "url": "http://i.meituan.com/ktv/yantai?cid=10&bid=5660&stid_b=1&cateType=poi"
                    },
                    {
                        "name": "大众点评",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.dianping.com/beijing"
                    },
                    {
                        "name": "电影",
                        "icon": "",
                        "style": "basic",
                        "url": "http://m.maoyan.com/imeituan/?_v_=yes&ci=104&stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F99"
                    },
                    {
                        "name": "美食",
                        "icon": "",
                        "style": "basic",
                        "url": "http://i.meituan.com/yantai?cid=1&bid=5660&sid=distance&stid_b=_b2&cateType=poi"
                    },
                    {
                        "name": "汽车票",
                        "url": "http://ytjy.ytjyjtyxgs.com/webhtml/"
                    },
                    {
                        "name": "船票",
                        "url": "https://i.meituan.com/awp/hfe/hotel-fe-ship/search/index.html"
                    }
                ]
            },
            {
                "category": "社交",
                "links": [
                    {
                        "name": "微博",
                        "icon": "weibo red",
                        "style": "basic",
                        "url": "http://weibo.com/"
                    },
                    {
                        "name": "微信网页版",
                        "icon": "wechat green",
                        "style": "basic",
                        "url": "http://wx.qq.com/"
                    },
                    {
                        "name": "百度贴吧",
                        "icon": "paw blue",
                        "style": "basic",
                        "url": "http://tieba.baidu.com/"
                    },
                    {
                        "name": "知乎",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.zhihu.com/"
                    }
                ]
            },
            {
                "category": "娱乐",
                "links": [
                    {
                        "name": "优酷",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.youku.com/"
                    },
                    {
                        "name": "土豆",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.tudou.com/"
                    },
                    {
                        "name": "Youtube",
                        "icon": "youtube red",
                        "style": "basic",
                        "url": "http://www.youtube.com/"
                    },
                    {
                        "name": "爱奇艺",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.iqiyi.com/"
                    },
                    {
                        "name": "芒果TV",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.mgtv.com/"
                    },
                    {
                        "name": "哔哩哔哩",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.bilibili.com/"
                    },
                    {
                        "name": "AcFun",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.acfun.tv/"
                    },
                    {
                        "name": "吐槽",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.tucao.tv/"
                    },
                    {
                        "name": "多瑙影院",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.dnvod.eu/"
                    },
                    {
                        "name": "虾米",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.xiami.com/"
                    },
                    {
                        "name": "热歌榜",
                        "icon": "",
                        "style": "basic",
                        "url": "http://music.163.com/#/playlist?id=3778678"
                    }
                ]
            },
            {
                "category": "购物",
                "links": [
                    {
                        "name": "美团",
                        "icon": "",
                        "style": "basic",
                        "url": "http://i.meituan.com/"
                    },
                    {
                        "name": "天猫",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.tmall.com/"
                    },
                    {
                        "name": "淘宝",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.taobao.com/"
                    },
                    {
                        "name": "京东",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.jd.com/"
                    },
                    {
                        "name": "亚马逊",
                        "icon": "amazon yellow",
                        "style": "basic",
                        "url": "http://www.amazon.cn/"
                    },
                    {
                        "name": "一号店",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.yhd.com/"
                    },
                    {
                        "name": "当当",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.dangdang.com/"
                    },
                    {
                        "name": "网易严选",
                        "icon": "",
                        "style": "basic",
                        "url": "http://you.163.com/"
                    }
                ]
            },
            {
                "category": "工具",
                "links": [
                    {
                        "name": "12306",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.12306.cn/"
                    },
                    {
                        "name": "百度地图",
                        "icon": "marker red",
                        "style": "basic",
                        "url": "http://map.baidu.com/"
                    },
                    {
                        "name": "QQ邮箱",
                        "icon": "qq black",
                        "style": "basic",
                        "url": "http://mail.qq.com/"
                    },
                    {
                        "name": "网易邮箱",
                        "icon": "",
                        "style": "basic",
                        "url": "http://email.163.com/"
                    },
                    {
                        "name": "Gmail",
                        "icon": "google red",
                        "style": "basic",
                        "url": "http://mail.google.com"
                    },
                    {
                        "name": "有道翻译",
                        "icon": "",
                        "style": "basic",
                        "url": "http://fanyi.youdao.com/"
                    },
                    {
                        "name": "快递查询",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.kuaidi100.com/"
                    },
                    {
                        "name": "itellyou",
                        "icon": "",
                        "style": "basic",
                        "url": "http://msdn.itellyou.cn/"
                    }
                ]
            },
            {
                "category": "学习",
                "links": [
                    {
                        "name": "CSDN",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.csdn.net/"
                    },
                    {
                        "name": "W3School",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.w3school.com.cn/"
                    },
                    {
                        "name": "Stack Overflow",
                        "icon": "stack overflow orange",
                        "style": "basic",
                        "url": "http://stackoverflow.com/"
                    },
                    {
                        "name": "GitHub",
                        "icon": "github black",
                        "style": "basic",
                        "url": "http://github.com/"
                    },
                    {
                        "name": "V2EX",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.v2ex.com/"
                    },
                    {
                        "name": "SegmentFault",
                        "icon": "",
                        "style": "basic",
                        "url": "http://segmentfault.com/"
                    },
                    {
                        "name": "掘金",
                        "icon": "",
                        "style": "basic",
                        "url": "http://gold.xitu.io/"
                    },
                    {
                        "name": "网易公开课",
                        "icon": "",
                        "style": "basic",
                        "url": "http://open.163.com/"
                    }
                ]
            },
            {
                "category": "求职",
                "links": [
                    {
                        "name": "LinkedIn",
                        "icon": "linkedin blue",
                        "style": "basic",
                        "url": "http://www.linkedin.com/"
                    },
                    {
                        "name": "大街网",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.dajie.com/"
                    },
                    {
                        "name": "拉勾网",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.lagou.com/"
                    },
                    {
                        "name": "智联招聘",
                        "icon": "",
                        "style": "basic",
                        "url": "http://zhaopin.com/"
                    },
                    {
                        "name": "前程无忧",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.51job.com/"
                    },
                    {
                        "name": "应届生",
                        "icon": "",
                        "style": "basic",
                        "url": "http://www.yingjiesheng.com/"
                    }
                ]
            }
        ]
    },
    searchServer: [
        {
            "id": "baidu",
            "name": "百度",
            "url": "http://www.baidu.com/s?wd=",
            "suffix": "&ie=utf-8"
        },
        {
            "id": "google",
            "name": "谷歌",
            "url": "http://www.google.com/search?q=",
            "suffix": ""
        },
        {
            "id": "ieeexplore",
            "name": "IEEE Xplore",
            "url": "http://ieeexplore.ieee.org/search/searchresult.jsp?queryText=",
            "suffix": ""
        },
        {
            "id": "baiduxueshu",
            "name": "百度学术",
            "url": "http://xueshu.baidu.com/s?wd=",
            "suffix": ""
        },
        {
            "id": "googlescholar",
            "name": "谷歌学术",
            "url": "http://scholar.google.com/scholar?q=",
            "suffix": ""
        },
        {
            "id": "jd",
            "name": "京东",
            "url": "https://so.m.jd.com/ware/search.action?keyword=",
            "suffix": "&enc=utf-8"
        },
        {
            "id": "taobao",
            "name": "淘宝",
            "url": "https://s.m.taobao.com/h5?q=",
            "suffix": ""
        },
        {
            "id": "wechat",
            "name": "微信",
            "url": "http://weixin.sogou.com/weixinwap?type=2&query=",
            "suffix": ""
        },
        {
            "id": "zhihu",
            "name": "知乎",
            "url": "http://www.zhihu.com/search?q=",
            "suffix": ""
        },
        {
            "id": "weibo",
            "name": "微博",
            "url": "http://s.weibo.com/weibo/",
            "suffix": ""
        },
        {
            "id": "douban",
            "name": "豆瓣",
            "url": "https://m.douban.com/search/?query=",
            "suffix": ""
        },
        {
            "id": "music",
            "name": "音乐",
            "url": "http://music.hao123.com/search?key=",
            "suffix": ""
        },
        {
            "id": "panci",
            "name": "胖次",
            "url": "http://www.panc.cc/s/",
            "suffix": "/td_0"
        },
        {
            "id": "github",
            "name": "GitHub",
            "url": "https://github.com/search?q=",
            "suffix": ""
        }
    ]
};
