var environmentType = "product"; // 环境类型 kf、test、product
var apphost = window.location.host;
var protocol = window.location.protocol;
var requestAddressList = [{
    addressKey: 'app',
    url: "http://"+apphost+"/WD-UI-FrameWork/webapp/",
    testurl: "http://" + apphost + "/WD-UI-FrameWork/webapp/", // 测试url
    producturl: "http://" + apphost + "/WD-UI-FrameWork/webapp/", // 生产url
    tip: "前端工程地址"
}, {
    addressKey: 'zypt',
    url: "http://yftest.tobrescms.wdcloud.cc/opencms/export/sites/tobres.wdcloud.cc/home/index.html",
    testurl: "http://yftest.tobrescms.wdcloud.cc/opencms/export/sites/tobres.wdcloud.cc/home/index.html",
    producturl: "http://zyzx-jms.wdcloud.cc/opencms/export/sites/tobres.wdcloud.cc/home/jms_index.html",
    tip: "资源平台"
}, {
    addressKey: 'jypt',
    url: "http://yftest.tobrescms.wdcloud.cc/opencms/export/sites/tobres.wdcloud.cc/home/jyzy.html",
    testurl: "http://yftest.tobrescms.wdcloud.cc/opencms/export/sites/tobres.wdcloud.cc/home/jyzy.html",
    producturl: "http://zyzx-jms.wdcloud.cc/opencms/export/sites/tobres.wdcloud.cc/home/jyzy.html",
    tip: "教研平台"
}, {
    addressKey: 'xxzy',
    url: "http://yftest.tobrescms.wdcloud.cc/opencms/export/sites/tobres.wdcloud.cc/home/xxzy.html",
    testurl: "http://yftest.tobrescms.wdcloud.cc/opencms/export/sites/tobres.wdcloud.cc/home/xxzy.html",
    producturl: "http://zyzx-jms.wdcloud.cc/opencms/export/sites/tobres.wdcloud.cc/home/xxzy.html",
    tip: "学习平台"
}, {
    addressKey: 'yxzp',
    url: "http://yftest.tobrescms.wdcloud.cc/opencms/export/sites/tobres.wdcloud.cc/home/yxzpzy.html",
    testurl: "http://yftest.tobrescms.wdcloud.cc/opencms/export/sites/tobres.wdcloud.cc/home/yxzpzy.html",
    producturl: "http://zyzx-jms.wdcloud.cc/opencms/export/sites/tobres.wdcloud.cc/home/yxzpzy.html",
    tip: "优秀作品"
}, {
    addressKey: 'jtjyzy',
    url: "http://yftest.tobrescms.wdcloud.cc/opencms/export/sites/tobres.wdcloud.cc/home/jtjyzy.html",
    testurl: "http://yftest.tobrescms.wdcloud.cc/opencms/export/sites/tobres.wdcloud.cc/home/jtjyzy.html",
    producturl: "http://zyzx-jms.wdcloud.cc/opencms/export/sites/tobres.wdcloud.cc/home/jtjyzy.html",
    tip: "家庭教育资源"
}, {
    addressKey: 'yyzx',
    url: "http://yftest.app.wdcloud.cc/ptyyzx/yyzxapp/jsp/yyzx/index.html",
    testurl: "http://yftest.app.wdcloud.cc/ptyyzx/yyzxapp/jsp/yyzx/index.html",
    producturl: "http://app-jms.wdcloud.cc/",
    tip: "应用中心"
}, {
    addressKey: 'szy',
    url: "http://yftest.tobres.wdcloud.cc/ptzyzx-zzfw/app/jsp/ggzyfw-qt/index.html?ischecked=0&session-check=false&gjc=",
    testurl: "http://yftest.tobres.wdcloud.cc/ptzyzx-zzfw/app/jsp/ggzyfw-qt/index.html?ischecked=0&session-check=false&gjc=",
    producturl: "http://zyzx-jms.wdcloud.cc/ptzyzx-zzfw/app/jsp/ggzyfw-qt/index.html?ischecked=0&session-check=false&gjc=",
    tip: "搜资源"
}, {
    addressKey: 'syy',
    url: "http://yftest.app.wdcloud.cc/ptyyzx/yyzxapp/jsp/yyzx/yylb.html?keyword=",
    testurl: "http://yftest.app.wdcloud.cc/ptyyzx/yyzxapp/jsp/yyzx/yylb.html?keyword=",
    producturl: "http://app-jms.wdcloud.cc/tobmh/yyzxapp/jsp/yyzx/yylb.html?keyword=&yylx=",
    tip: "搜应用"
}, {
    addressKey: 'jsyy',
    url: "http://yftest.app.wdcloud.cc/ptyyzx/yyzxapp/jsp/yyzx/yylb.html?yysydx=01",
    testurl: "http://yftest.app.wdcloud.cc/ptyyzx/yyzxapp/jsp/yyzx/yylb.html?yysydx=01",
    producturl: "http://app-jms.wdcloud.cc/tobmh/yyzxapp/jsp/yyzx/yylb.html?yygl=01",
    tip: "教师应用"
}, {
    addressKey: 'xsyy',
    url: "http://yftest.app.wdcloud.cc/ptyyzx/yyzxapp/jsp/yyzx/yylb.html?yysydx=02",
    testurl: "http://yftest.app.wdcloud.cc/ptyyzx/yyzxapp/jsp/yyzx/yylb.html?yysydx=02",
    producturl: "http://app-jms.wdcloud.cc/tobmh/yyzxapp/jsp/yyzx/yylb.html?yygl=02",
    tip: "学生应用"
}, {
    addressKey: 'jtyy',
    url: "http://yftest.app.wdcloud.cc/ptyyzx/yyzxapp/jsp/yyzx/yylb.html?yysydx=03",
    testurl: "http://yftest.app.wdcloud.cc/ptyyzx/yyzxapp/jsp/yyzx/yylb.html?yysydx=03",
    producturl: "http://app-jms.wdcloud.cc/tobmh/yyzxapp/jsp/yyzx/yylb.html?yygl=04",
    tip: "家庭应用"
}, {
    addressKey: 'jgyy',
    url: "http://yftest.app.wdcloud.cc/ptyyzx/yyzxapp/jsp/yyzx/yylb.html?yysydx=04",
    testurl: "http://yftest.app.wdcloud.cc/ptyyzx/yyzxapp/jsp/yyzx/yylb.html?yysydx=04",
    producturl: "http://app-jms.wdcloud.cc/tobmh/yyzxapp/jsp/yyzx/yylb.html?yygl=05",
    tip: "机构应用"
}, {
    addressKey: 'rrtsq',
    url: "http://yftest.rrt.wdcloud.cc/webapp/app/jsp/common/sq-index.html",
    testurl: "http://yftest.rrt.wdcloud.cc/webapp/app/jsp/common/sq-index.html",
    producturl: "http://rrt-jms.wdcloud.cc",
    tip: "人人通社区"
},{
    addressKey: 'fx',
    url: "http://yftest.rrt.wdcloud.cc/webapp/app/jsp/rrtsq/fx/fx.html?sqlx=",
    testurl: "http://yftest.rrt.wdcloud.cc/webapp/app/jsp/rrtsq/fx/fx.html?sqlx=",
    producturl: "http://rrt-jms.wdcloud.cc/webapp/app/jsp/rrtsq/fx/fx.html?sqlx=",
    tip: "搜索框"
},{
    addressKey: 'grzx',
    url: "http://yftest.rrt.wdcloud.cc/webapp/app/jsp/grzx/grzx-index.html",
    testurl: "http://yftest.rrt.wdcloud.cc/webapp/app/jsp/grzx/grzx-index.html",
    producturl: "http://rrt-jms.wdcloud.cc/webapp/app/jsp/grzx/grzx-index.html",
    tip: "个人中心"
},{
    addressKey: 'logout',
    //?redirectURL=
    url: "http://yftest.rrt.wdcloud.cc/logout/localLogout?redirectURL=",
    testurl: "http://yftest.rrt.wdcloud.cc/logout/localLogout?redirectURL=",
    producturl: protocol+"//jmsedu.wdcloud.cc/logout/localLogout?redirectURL=",
    tip: "退出"
},{
    addressKey: 'syaddress',
    url: "http://yftest.rrt.wdcloud.cc/wlxxkjrrt/",
    testurl: "http://yftest.rrt.wdcloud.cc/wlxxkjrrt/",
    producturl: "http://jmsedu.wdcloud.cc/jms/",
    tip: "首页地址"
},{
    addressKey: 'loginornot',
    url: "http://yftest.rrt.wdcloud.cc/validate/login",
    testurl: "http://yftest.rrt.wdcloud.cc/validate/login",
    producturl: protocol+"//jmsedu.wdcloud.cc/validate/login",
    tip: "是否登录"
},{
    addressKey: 'jskj',
    url: "http://yftest.jskj.wdcloud.cc/jyx-jskj/jyxapp/jsp/jskj/index.jsp",
    testurl: "http://yftest.jskj.wdcloud.cc/jyx-jskj/jyxapp/jsp/jskj/index.jsp",
    producturl: "http://jskj-jms.wdcloud.cc/jyx-jskj/jyxapp/jsp/jskj/index.jsp",
    tip: "教师空间"
},{
    addressKey: 'xskj',
    url: "https://yftest.xskj.wdcloud.cc/jyx-xskj/jyxapp/jsp/xskj/index.jsp",
    testurl: "https://yftest.xskj.wdcloud.cc/jyx-xskj/jyxapp/jsp/xskj/index.jsp",
    producturl: "http://xskj-jms.wdcloud.cc/jyx-xskj/jyxapp/jsp/xskj/index.jsp",
    tip: "学生空间"
},{
    addressKey: 'jzkj',
    url: "https://yftest.jzkj.wdcloud.cc/jyx-jzkj/jyxapp/jsp/jzkj/index.jsp",
    testurl: "https://yftest.jzkj.wdcloud.cc/jyx-jzkj/jyxapp/jsp/jzkj/index.jsp",
    producturl: "http://jzkj-jms.wdcloud.cc/jyx-jzkj/jyxapp/jsp/jzkj/index.jsp",
    tip: "家长空间"
},{
    addressKey: 'jwglykj',
    url: "https://yftest.xxkj.wdcloud.cc/jyx-xxkj/jyxapp/jsp/xxkj/index.jsp",
    testurl: "https://yftest.xxkj.wdcloud.cc/jyx-xxkj/jyxapp/jsp/xxkj/index.jsp",
    producturl: "https://xxkj-jms.wdcloud.cc/jyx-xxkj/jyxapp/jsp/xxkj/index.jsp",
    tip: "教务管理员空间"
},{
    addressKey: 'sign',
    url: "https://yftest.jzkj.wdcloud.cc/jyx-jzkj/jyxapp/jsp/jzkj/grzx/grzx-zc.jsp",
    testurl: "https://yftest.jzkj.wdcloud.cc/jyx-jzkj/jyxapp/jsp/jzkj/grzx/grzx-zc.jsp",
    producturl: "https://jzkj-jms.wdcloud.cc/jyx-jzkj/jyxapp/jsp/jzkj/grzx/grzx-zc.jsp",
    tip: "注册"
},{
    addressKey: 'jysc',
    url: "http://yftest.tobres.wdcloud.cc/ptzyzx-zzfw/app/template/ggzyfw-qt/jfsc/jfsc.html",
    testurl: "http://yftest.tobres.wdcloud.cc/ptzyzx-zzfw/app/template/ggzyfw-qt/jfsc/jfsc.html",
    producturl: "http://gift-wh.wdcloud.cc/",
    tip: "积分商城"
},{
    addressKey: 'jsaddress',
    url: "http://yftest.jskj.wdcloud.cc",
    testurl: "http://yftest.jskj.wdcloud.cc",
    producturl: "http://jskj-jms.wdcloud.cc",
    tip: "老师地址"
},{
    addressKey: 'xsaddress',
    url: "http://yftest.xskj.wdcloud.cc",
    testurl: "http://yftest.xskj.wdcloud.cc",
    producturl: "http://xskj-jms.wdcloud.cc",
    tip: "学生地址"
},{
    addressKey: 'jzaddress',
    url: "http://yftest.jzkj.wdcloud.cc",
    testurl: "http://yftest.jzkj.wdcloud.cc",
    producturl: "http://jzkj-jms.wdcloud.cc",
    tip: "家长地址"
},{
    addressKey: 'loginurl',
    url: "https://yflogin.wdcloud.cc/api-ptyhzx-security/login/cookie/getToken",
    testurl: "https://yflogin.wdcloud.cc/api-ptyhzx-security/login/cookie/getToken",
    producturl: "https://login.wdcloud.cc/api-ptyhzx-security/login/cookie/getToken",
    tip: "loginurl"
},{
    addressKey: 'domain',
    url: ".wdcloud.cc",
    testurl: ".wdcloud.cc",
    producturl: ".wdcloud.cc",
    tip: "cookiesdomain"
},{
    addressKey: 'jszxcp',
    url: "http://192.168.6.112/ShowQuestions_Course.aspx",
    testurl: "http://192.168.6.112/ShowQuestions_Course.aspx",
    producturl: "http://zxcp-jms.wdcloud.cc/TestManager.aspx",
    tip: "老师在线测评"
},{
    addressKey: 'xszxcp',
    url: "http://192.168.6.112/StuPaperList.aspx",
    testurl: "http://192.168.6.112/StuPaperList.aspx",
    producturl: "http://zxcp-jms.wdcloud.cc/StuPaperList.aspx",
    tip: "学生在线测评"
}, {
    addressKey: 'rrtsqqz',
    url: "http://192.168.6.141/tribe/",
    testurl: "http://" + apphost + "/tribe/",
    producturl: protocol+"//" + apphost + "/tribe/",
    tip: "社区圈子"
}, {
    addressKey: 'help',
    url: "http://yftest.tobres.wdcloud.cc/ptzyzx-zzfw/app/yhsc/yhsc/helpcenter.html",
    testurl: "http://yftest.tobres.wdcloud.cc/ptzyzx-zzfw/app/yhsc/yhsc/helpcenter.html",
    producturl: "http://zyzx-jms.wdcloud.cc/ptzyzx-zzfw/app/yhsc/yhsc/helpcenter.html",
    tip: "帮助"
}, {
    addressKey: 'forgetpassword',
    url: "https://yflogin.wdcloud.cc/ptyhzx-login/app/jsp/wjmm/index.html",
    testurl: "https://yflogin.wdcloud.cc/ptyhzx-login/app/jsp/wjmm/index.html",
    producturl: "https://login.wdcloud.cc/ptyhzx-login/app/jsp/wjmm/index.html",
    tip: "忘记密码"
}, {
    addressKey: 'getzyzx',
    url: "http://yftest.rrt.wdcloud.cc/ptzyzx-zzfw/rest/",
    testurl: "http://yftest.rrt.wdcloud.cc/ptzyzx-zzfw/rest/",
    producturl: protocol+"//zyzx-jms.wdcloud.cc/ptzyzx-zzfw/rest/",
    tip: "资源数"
}, {
    addressKey: 'zydomain',
    url: "yftest.tobres.wdcloud.cc",
    testurl: "yftest.tobres.wdcloud.cc",
    producturl: "jmsedu.wdcloud.cc",
    tip: "资源数传参"
}, {
    addressKey: 'grsz',
    url: "http://yfi.wdcloud.cc/ptyhzx-grzx/app/jsp/jbxx/index.html",
    testurl: "http://yfi.wdcloud.cc/ptyhzx-grzx/app/jsp/jbxx/index.html",
    producturl: "http://i-jms.wdcloud.cc/ptyhzx-grzx/app/jsp/jbxx/index.html",
    tip: "个人设置"
}, {
    addressKey: 'grsz',
    url: "http://yfi.wdcloud.cc/ptyhzx-grzx/app/jsp/jbxx/index.html",
    testurl: "http://yfi.wdcloud.cc/ptyhzx-grzx/app/jsp/jbxx/index.html",
    producturl: "http://i-jms.wdcloud.cc/ptyhzx-grzx/app/jsp/jbxx/index.html",
    tip: "个人设置"
},{
    addressKey: 'file',
    url: protocol + "//192.168.6.100:8082/",
    testurl: protocol + "//192.168.6.100:8082/",
    producturl: "http://dl.wdcloud.cc/",
    tip: "文件服务"
},{
    addressKey: 'whjyy',
    url: protocol + "//yftest.rrt.wdcloud.cc/wlxxkjrrt",
    testurl: protocol + "//yftest.rrt.wdcloud.cc/wlxxkjrrt",
    producturl: protocol + "//jmsedu.wdcloud.cc",
    tip: "首页"
},{
    addressKey: 'sso',
    url: "http://192.168.6.100/ptyhzx-sso/login?renew=true&other=form",
    testurl: "http://192.168.6.100/ptyhzx-sso/login?renew=true&other=form",
    producturl: protocol+"//sso.wdcloud.cc/ptyhzx-sso/login?renew=true&other=form",
    tip: "sso"
}, {
    addressKey: 'navjypt',
    url: "http://yftest.tobrescms.wdcloud.cc/opencms/export/sites/tobres.wdcloud.cc/home/jyzy.html",
    testurl: "http://yftest.tobrescms.wdcloud.cc/opencms/export/sites/tobres.wdcloud.cc/home/jyzy.html",
    producturl: "http://jypt-jms.wdcloud.cc/ntra-web/jypt/jyptIndex",
    tip: "教研平台"
}, {
    addressKey: 'dshdw',
    url: "http://jmseduhd.wdcloud.cc/index.php/home/public/autologin.html",
    testurl: "http://jmseduhd.wdcloud.cc/index.php/home/public/autologin.html",
    producturl: "http://jmseduhd.wdcloud.cc/index.php/home/public/autologin.html",
    tip: "活动大赛"
}, {
    addressKey: 'jyglpt',
    url: "http://1.188.80.180/",
    testurl: "http://1.188.80.180/",
    producturl: "http://1.188.80.180/",
    tip: "教育管理平台"
},{
    addressKey: 'ssologout',
    url: "http://xxkj-ss.wdcloud.cc/jyx-xxkj/jyxapp/jsp/xxkj/index.jsp",
    testurl: "http://xxkj-ss.wdcloud.cc/jyx-xxkj/jyxapp/jsp/xxkj/index.jsp",
    producturl: "https://sso.wdcloud.cc/ptyhzx-sso/logout",
    tip: "sso退出"
}];/**
 * Created by Administrator on 2016/9/28.
 */
