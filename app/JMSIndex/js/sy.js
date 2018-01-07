var loginname ="";
var loginpwd = "";
var zhjyxinfo = {
    "kc": {
        "teacher": getRequestAddressUrl('jsaddress') + "/jyx-jskj/web/jskj/kczz!goKczzList.action",
        "student": getRequestAddressUrl('xsaddress') + "/jyx-xskj/web/xskj/kcyx!goKxyxList.action",
        "parents": getRequestAddressUrl('jzaddress') + "/jyx-jzkj/jyxapp/jsp/jzkj/kc/kc-list.jsp"
    },
    "tbkt": {
        "teacher": getRequestAddressUrl('jsaddress') + "/jyx-jskj/jyxapp/jsp/jskj/tbkt/tbkt-list.jsp",
        "parents": getRequestAddressUrl('jzaddress') + "/jyx-jzkj/jyxapp/jsp/jzkj/kc/kc-list.jsp"
    },
    "zy": {
        "teacher": getRequestAddressUrl('jsaddress') + "/jyx-jskj/web/jskj/zyxx!goBzzyEdit.action?zylx=2",
        "student": getRequestAddressUrl('xsaddress') + "/jyx-xskj/jyxapp/jsp/xskj/zy/jrzy-list.jsp",
        "parents": getRequestAddressUrl('jzaddress') + "/jyx-jzkj/jyxapp/jsp/jzkj/zyjd/zyjd.jsp"
    },
    "zxcp": {
        "teacher": getRequestAddressUrl('jszxcp'),
        "student": getRequestAddressUrl('xszxcp')
    },
    "bj": {
        "student": getRequestAddressUrl('xsaddress') + "/jyx-xskj/jyxapp/jsp/xskj/bj/wdbj-list.jsp",
    },
    "zxwd": {
        "teacher": getRequestAddressUrl('jsaddress') + "/jyx-jskj/jyxapp/jsp/jskj/zxdy/qbwt-list.jsp",
        "student": getRequestAddressUrl('xsaddress') + "/jyx-xskj/jyxapp/jsp/xskj/zxdy/qbwt-list.jsp",
    },
    "ctb": {
        "teacher": getRequestAddressUrl('jsaddress') + "/jyx-jskj/web/jskj/ctbck!serachCtbckList.action",
        "student": getRequestAddressUrl('xsaddress') + "/jyx-xskj/web/xskj/ctbxx!goCtb.action",
    },
    "xqfx": {
        "teacher": getRequestAddressUrl('jsaddress') + "/jyx-jskj/jyxapp/jsp/jskj/xqfx/xqfx-tab.jsp",
        "student": getRequestAddressUrl('xsaddress') + "/jyx-xskj/jyxapp/jsp/xskj/xqfx/xqfx.jsp",
        "parents": getRequestAddressUrl('jzaddress') + "/jyx-jzkj/jyxapp/jsp/jzkj/xqfx/xqfx.jsp"
    }
};
var loginflag = false;
var zhjyxclick = "";
$(function(){
    $(".hp-nav-jysc").hide();
    $(".hp-wrongmsg").css("visibility","hidden");
    $(".hp-wrongmsgtc").css("visibility","hidden");
    hasloged();
    var cgzslength = $(".hp-cgzs-cont ul li").length;
    if(cgzslength==1){
        $(".cgzs-firstimg").css("width","100%");
    }
    else if(cgzslength==2){
        $(".cgzs-firstimg").css("width","46%");
        $(".cgzs-img").css({
            "width":"46%",
            "height":"275px"
        })
    }
    var strName = localStorage.getItem('username');
    var strPass = localStorage.getItem('password');
    if(strName){
        $('.username').val(strName);
    }if(strPass){
        $('.password').val(strPass);
    }
    if(strName&&strPass){
        $("input[name='autoLogin']").attr("checked", true);
    }
//大图滚动
    jQuery(".hp-syimg").slide({
        titCell:".hd ul",
        mainCell:".bd ul",
        effect: "leftLoop",
        autoPlay: true,
        vis:"auto",
        scroll:1,
        autoPlay: true,
        autoPage:true
    });
    //头部logo按下
    $(".icon-logo").bind("click",function(){
        window.location.href = getRequestAddressUrl('whjyy');
    })
    //帮助
    $(".hp-help").bind("click", function() {
        window.open(getRequestAddressUrl('help'));
    })
    $(".login-foget").bind("click", function() {
        window.open(getRequestAddressUrl('forgetpassword'));
    })
    $(".hide-box").on("click",function(){
        $(".hp-top").slideUp();
    })
    $(".header-searchbox-choose").bind("click", function() {
        $(this).find("ul").stop(true, false).slideToggle();
    });
    $("#nav-choose li").bind("click", function() {
        var clickCont = $(this).html();
        var sqlxname = $(this).attr("id");
        $(this).parent().siblings("span").attr("class", sqlxname);
        $(this).parent().siblings("span").html(clickCont);
    });
    //登录按下
    $(".sy-login").bind("click", function() {
        openLogin();
        $(".hp-tc-loginbox").fadeIn();
        $(".username-tc").focus();
        $(".hp-closelogin,#hp-zzc").click(function() {
            $(".hp-tc-loginbox").fadeOut();
            $("#hp-zzc").remove();
        })
    })
    $(".hp-nav-jysc").bind("click", function() {
        window.open(getRequestAddressUrl('jysc'));
    })
    //注册按下
    $(".sy-sign").bind("click",function(){
        window.open(getRequestAddressUrl('sign'));
    });
    //个人设置按下
    $(".sy-grsz").bind("click", function() {
        window.open(getRequestAddressUrl('grsz'));
    })
    //退出
    $(".sy-lowgout").bind("click",function(){
        var ssoLoginURL = getRequestAddressUrl("ssologout");
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = ssoLoginURL;
        script.onload = script.onreadystatechange = function () {
            if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                script.onload = script.onreadystatechange = null; // Handle memory leak in IE
                //业务操作
                window.location.href = getRequestAddressUrl('logout') + getRequestAddressUrl('syaddress');
                hasloged();
            }
        };
        head.appendChild(script);
    })
//资源平台下拉
//     $(".hp-nav-zypt").hover(function() {
//         $(".hp-zypt-box").slideDown();
//     }, function() {
//         $(".hp-zypt-box").fadeOut();
//     })
    //教育资讯，通知公告切换
    $(".hp-sy-tab li.tab-jyzx").bind("click", function() {
        $(".tzgg-more").hide();
        $(".jyzx-more").show();
        $(".slideTxtBox .bd").animate({
            marginLeft: "0px"
        });
        $(".hp-sy-tab li").removeClass("on");
        $(this).addClass("on");
    })
    $(".hp-cont-left ul li").bind("click", function() {
        $(".hp-cont-left ul li").removeClass("active");
        $(this).addClass("active");
    })
    //通知公告tab切换
    $(".hp-sy-tab li.tab-tzgg").bind("click", function() {
        $(".jyzx-more").hide();
        $(".tzgg-more").show();
        $(".slideTxtBox .bd").animate({
            marginLeft: "-620px"
        });
        $(".hp-sy-tab li").removeClass("on");
        $(this).addClass("on");
    })

    $(".hp-sy-tab li.tab-tzgg").bind("click", function() {
        $(".slideTxtBox .bd").animate({
            marginLeft: "-620px"
        });
        $(".hp-sy-tab li").removeClass("on");
        $(this).addClass("on");
    });
    //智慧教与学导航按下
    $(".hp-nav-zhjyx").bind("click", function() {
        //判断是否登录
        hasloged(1);
        //登录
        if(loginflag){
            Openzhjyx();
        }
    })
    //活动大赛
    $(".hp-nav-dshd").bind("click", function () {
        hasloged(1);
        if (loginflag) {
            window.open(getRequestAddressUrl('dshdw'));
        }
    })
    //活动大赛-news
    $(".hp-nav-dshd-nologin").bind("click", function () {
        hasloged(2);
        if (loginflag) {
            window.open(getRequestAddressUrl('dshdw'));
        }
    })
    //教育管理平台
    $(".hp-nav-jyglpt").bind("click", function () {
        hasloged(1);
        if (loginflag) {
            window.open(getRequestAddressUrl('jyglpt'));
        }
    })
    //教育管理平台-news
    $(".hp-nav-jyglpt-nologin").bind("click", function () {
        hasloged(2);
        if (loginflag) {
            window.open(getRequestAddressUrl('jyglpt'));
        }
    })
    //人人通社区-news
    $(".hp-nav-rrtsq-nologin").bind("click", function() {
        hasloged(2);
        if(loginflag) {
            window.open(getRequestAddressUrl('rrtsq'));
        }
    })
    $(".hp-nav-jypt").bind("click", function() {
        hasloged(1);
        if(loginflag) {
            window.open(getRequestAddressUrl('navjypt'));
        }
    })
    //智慧教与学导航-news按下
    $(".hp-nav-zhjyx-nologin").bind("click", function() {
        //判断是否登录
        hasloged(2);
        //登录
        if(loginflag){
            Openzhjyx();
        }
    })
    //智慧教育学一排按钮
    $(".hp-zhjyx-b .hrefto").bind("click", function() {
        //没登录定位到登录
        hasloged(1);
        if(loginflag) {
            var msg = $(this).data("msg");
            zhjyxclick = $(this).data("msg");
            Openzhjyx(msg);
        }
    })
    $(".hp-rrtsqul>li").bind("click",function(){
        hasloged(1);
        if(loginflag) {
            var msgsearch = $(this).data("msg");
            if(msgsearch=="ht"||!msgsearch){
                return;
            }
            window.open(getRequestAddressUrl('fx') + msgsearch);
        }
    });
    //资源平台
    $(".hp-zypthref").bind("click", function() {
        window.open(getRequestAddressUrl('zypt'));
    })
    //教研平台
    $(".hp-jypthref").bind("click", function() {
        window.open(getRequestAddressUrl('jypt'));
    })
    //学习资源
    $(".hp-xxzyhref").bind("click", function() {
        window.open(getRequestAddressUrl('xxzy'));
    })
    //优秀作品
    $(".hp-yxzphref").bind("click", function() {
        window.open(getRequestAddressUrl('yxzp'));
    })
    //家庭教育资源
    $(".hp-jtjyzyhref").bind("click", function() {
        window.open(getRequestAddressUrl('jtjyzy'));
    })
    //应用中心
    $(".hp-nav-yyzx").bind("click", function() {
        window.open(getRequestAddressUrl('yyzx'));
    })
    //教师适用
    $(".hp-jssyhref").bind("click", function() {
        window.open(getRequestAddressUrl('jsyy'));
    })
    //学生适用
    $(".hp-xssyhref").bind("click", function() {
        window.open(getRequestAddressUrl('xsyy'));
    })
    //家庭适用
    $(".hp-jtsyhref").bind("click", function() {
        window.open(getRequestAddressUrl('jtyy'));
    })
    //机构适用
    $(".hp-jgsyhref").bind("click", function() {
        window.open(getRequestAddressUrl('jgyy'));
    })
    //人人通社区
    $(".hp-nav-rrtsq").bind("click", function() {
        hasloged(1);
        if(loginflag) {
            window.open(getRequestAddressUrl('rrtsq'));
        }

    })
    //智慧教与学详情
    $(".hp-goljxq-ev").bind("click", function() {
        hasloged(1);
        if(loginflag) {
            zhjyxclick = "";
            Openzhjyx();
        }
    })
    $(".hp-xqsqhref").bind("click", function() {
        hasloged(1);
        if(loginflag) {
            window.open(getRequestAddressUrl('rrtsq'));
        }
    });
    $(".hp-yyxqhref").bind("click", function() {
        window.open(getRequestAddressUrl('yyzx'));
    });
    //搜索下拉
    $(document).bind("click", function(e) {
        var $target = $(e.target);
        if($target.is("#searchboxlx")) {
            return false;
        } else {
            $("#nav-choose").slideUp();
        }
    });
//搜索
    $(".icon-nav-search").click(function() {
        var lx = $("#searchboxlx").attr("class");
        var search = $("#searchcont").val();
        if(lx == 'syy') {
            window.open(getRequestAddressUrl('syy') + search);
        } else if(lx == 'szy') {
            window.open(getRequestAddressUrl('szy') + search);
        } else {
            if(lx == 'ztx' || lx == 'zls') {
                window.open(getRequestAddressUrl('fx') + 'ry&keyword='+search);
            } else {
                window.open(getRequestAddressUrl('fx') + lx+"&keyword="+search);
            }
        }
    });
    $(".hasloged .enterGrkj").bind("click",function(){
        window.open(getRequestAddressUrl('grzx'));
    });
    $("#username").focus();
});
function Openzhjyx(cont) {
    var usertype = decodeURIComponent(getCookie("usertype"));
//	var usertype ="01,02";
    if(usertype) {
        //单独的身份
        if(!Doubleusertype()) {
            enterzhjyx(cont,usertype);
        }
    }

}
function enterzhjyx(cont,usertype){
    //课程，作业，同步课堂等
    if(cont)
    {
        if(usertype == '01') {
            if(zhjyxinfo[cont].teacher) {
                window.open(zhjyxinfo[cont].teacher);
            }
            else{
                alert("对不起，您没有当前功能权限！");
            }
        } else if(usertype == '02') {
            if(zhjyxinfo[cont].student) {
                window.open(zhjyxinfo[cont].student);
            }
            else{
                alert("对不起，您没有当前功能权限！");
            }
        } else if(usertype == '03') {
            if(zhjyxinfo[cont].parents) {
                window.open(zhjyxinfo[cont].parents);
            }
            else{
                alert("对不起，您没有当前功能权限！");
            }
        }
        else{
            alert("对不起，您没有当前功能权限！");
        }
    } else {
        //GO了解详情
        if(usertype == '01') {
            window.open(getRequestAddressUrl("jskj"));
        } else if(usertype == '02') {
            window.open(getRequestAddressUrl("xskj"));
        } else if(usertype == '03') {
            window.open(getRequestAddressUrl("jzkj"));
        }
        else if(usertype == '04') {
            window.open(getRequestAddressUrl("jwglykj"));
        }
        else{
            alert("对不起，您没有当前功能权限！");
        }
    }
}

function login() {
    var husername = "";
    var hpassword = "";
    var hpwrongmsg = "";
    if($(".hp-tc-loginbox").is(":hidden")) {
        husername = $(".username");
        hpassword = $(".password");
        hpwrongmsg=$(".hp-wrongmsg");
    } else {
        husername = $(".username-tc");
        hpassword = $(".password-tc");
        hpwrongmsg=$(".hp-wrongmsgtc");
    }
    if(husername.val() == null || husername.val() == "") {
        hpwrongmsg.html("请输入账号/手机号/邮箱!");
        hpwrongmsg.css("visibility","visible");
        husername.focus();
        return;
    }
    if(hpassword.val() == null || hpassword.val() == "") {
        hpwrongmsg.html("请输入密码!");
        hpwrongmsg.css("visibility","visible");
        hpassword.focus();
        return;
    }
    loginname = husername.val();
    loginpwd = Base64.encode(hpassword.val());
    // 共享
    crossLogin(husername.val(), hpassword.val());
}
//用户签约地登录验证
function loginqye(username, password) {
    var checkLoginqyeFlag = false;
    $.ajax({
        type: "GET",
        url: getRequestAddressUrl('rrtsqqz') + "yhsfkydl",
        async: false,
        data: {
            "username": username,
            "password": password
        },
        dataType: "json",
        success: function (data) {
            if (data.isSuccess == "true") {
                checkLoginqyeFlag = true;
            } else if (data.isSuccess == "false") {
                alert(" 对不起，您当前账号无权限访问！");
            }
        }
    });
    return checkLoginqyeFlag;
}
var $loginURL = getRequestAddressUrl("loginurl");
var $domain = getRequestAddressUrl("domain");
//登录
function crossLogin(loginName, loginPwd) {
    if($('#autoLogin').is(':checked')) {
        localStorage.setItem('username', loginName);
        localStorage.setItem('password', loginPwd);
    }else{
        localStorage.setItem('username', "");
        localStorage.setItem('password', "");
    }
    var currTime = new Date().getTime();
    var t = document.createElement('script');
    t.src = $loginURL + "?loginname=" + loginName + "&loginpwd=" + loginPwd + "&callback=customMethod" + "&t=" + currTime;
    t.type = 'text/javascript';
    t.id = "loginScript";
    document.getElementsByTagName('head')[0].appendChild(t);
    //t.src = "";
}

function customMethod(data) {
    $("#loginScript").remove();
    husername = $(".username");
    hpassword = $(".password");
    if (data.code == "1") {
        if (loginqye(husername.val(), hpassword.val())) {
            $.ajax({
                type: "POST",
                url: getRequestAddressUrl('rrtsqqz') + "bccookie",
                async: false,
                data: {
                    "sessions": data.data["Wd-Token"],
                    "uids": data.data.uid,
                    "uloginids": data.data.uloginid,
                    "unicks": encodeURIComponent(data.data.unick),
                    "usertypes": data.data.usertype
                },
                dataType: "json",
                success: function (data) {
                    wdcookie();
                }
            })
        }
        // var Days = 30;
        // var exp = new Date();
        // exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        // document.cookie = "SESSION=" + encodeURIComponent(data.data["Wd-Token"]) + ";path=/;domain="+ $domain;
        // document.cookie = "uid=" + encodeURIComponent(data.data.uid)+ ";path=/;domain="+ $domain ;
        // document.cookie = "uloginid=" + encodeURIComponent(data.data.uloginid)+ ";path=/;domain="+ $domain ;
        // document.cookie = "usertype=" + encodeURIComponent(data.data.usertype) + ";path=/;domain="+ $domain ;
        // document.cookie = "unick=" + encodeURIComponent(data.data.unick) + ";expires=" + exp.toGMTString() + ";path=/;domain="+ $domain ;

    } else {
        if ($(".hp-tc-loginbox").is(":hidden")) {
            $(".hp-wrongmsg").html(data.message);
            $(".hp-wrongmsg").css("visibility", "visible");
        }
        else {
            $(".hp-wrongmsgtc").html(data.message);
            $(".hp-wrongmsgtc").css("visibility", "visible");
        }
        return;
    }
}
function hasloged(login){
    var currTime = new Date().getTime();
    $.ajax({
        type:"get",
        async:false,
        url:getRequestAddressUrl("loginornot")+"?t="+currTime,
        success:function(data){
            if(data.isSuccess){
                loginflag = true;
                $(".hp-help").css("display","inline-block");
                if(login){

                }
                else{
                    if(getCookie('unick')!="null"){
                        var username = decodeURIComponent(getCookie("unick"));
                        $(".sy-user").html(username);
                    }
                    var loginid = "";
                    if(getCookie('uloginid')){
                        loginid = getCookie('uloginid');
                    }
                    var currTime = new Date().getTime();
                    $.ajax({
                        type:"get",
                        async:false,
                        data:{
                            "uid": loginid
                        },
                        url:getRequestAddressUrl('rrtsqqz')+"ryjbxx?t="+currTime,
                        success:function(data){
                            // $.ajax({
                            //     async:false,
                            //     type:"post",
                            //     data:{
                            //         "domain": getRequestAddressUrl("zydomain")
                            //     },
                            //     url:getRequestAddressUrl('getzyzx')+"controller/grzx/hqgrzxxx?t="+currTime,
                            //     success:function(data) {
                            //         if (data.isSuccess) {
                            //             $(".hp-zy-num").html(data.data.zy);
                            //         }
                            //     },
                            //     error: function(XMLHttpRequest, txtStatus, errorThrown) {
                            //         console.log(txtStatus);
                            //     }
                            // })
                            if(data.isSuccess == "true"){
                                if(data.rows.uphoto){
                                    $(".hp-img-log").attr("src",getRequestAddressUrl("file")+data.rows.uphoto);
                                }
                                else{
                                    $(".hp-img-log").attr("src","../resext/wlxxkjrrt/default/images/def-man.png");
                                }
                                $(".hp-jf-num").html(data.rows.yhjf);
                                $(".hp-gznum").html(data.rows.fans_num);
                            }
                        }})

                }
                $(".nologinbox").hide();
                $(".hasloged").show();
            }
            else{
                loginflag = false;
                if(login=="1"){
                    alert("本栏目需要登录后访问，请在本页面中登录成功后继续操作！");
                    $("html,body").animate({scrollTop: 0},200,function(){
                        $("#username").focus();
                    });
                }
                else if(login=='2'){
                    window.location.href = getRequestAddressUrl("whjyy");
                }

                $(".hasloged").hide();
                $(".nologinbox").show();
            }
        }
    });
}
function wdcookie(){
    var currTime = new Date().getTime();
    var ssoLoginURL =getRequestAddressUrl("sso");
    var head= document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.type= 'text/javascript';
    script.src= ssoLoginURL +"&username="+loginname+"&password="+loginpwd+ "&t=" + currTime;
    script.onload = script.onreadystatechange = function() {
        if(!this.readyState || this.readyState === "loaded" || this.readyState === "complete" ) {
            script.onload = script.onreadystatechange = null; // Handle memory leak in IE
            //业务操作
            location.reload();
        }
    };
    head.appendChild(script);
}
function Doubleusertype() {
    var doubleusertype = false;
    var usertypes = decodeURIComponent(getCookie("usertype"));
    //	var usertypes ="01,02";
    //多重身份反回true;
    if(usertypes.indexOf(',') != "-1") {
        $("#sfxzboxes").html("");
        doubleusertype = true;
        var usretypeList = usertypes.split(",");
        var sfhtml = "";
        $.each(usretypeList, function(i) {
            if(usretypeList[i]=='01') { //教师
                sfhtml+='<li data-msg="01"><i class="sf-ls"></i><p>我是老师</p></li>'
            }
            if(usretypeList[i]=='02') { //学生
                sfhtml+='<li data-msg="02"><i class="sf-xs"></i><p>我是学生</p></li>'
            }
            if(usretypeList[i]=='03') { //家长
                sfhtml+='<li data-msg="03"><i class="sf-jz"></i><p>我是家长</p></li>'
            }
            if(usretypeList[i]=='04') { //教务管理员
                sfhtml+='<li data-msg="04"><i class="sf-jyy"></i><p>我是教务管理员</p></li>'
            }
        })
        $("#sfxzboxes").append(sfhtml);
        openLogin();
        $(".usertypechoose").fadeIn();
        //身份点击
        $("#sfxzboxes li").bind("click", function() {
            var usertypeclick = $(this).data("msg");
            var usertype =  decodeURIComponent(getCookie("usertype"));
            //有权限
            if(usertype.indexOf(usertypeclick)!="-1"){
                enterzhjyx(zhjyxclick,usertypeclick);
            }
            else{
                alert("对不起，您没有当前功能权限！");
            }
        })
        $(".hp-closechoose,#hp-zzc").click(function() {
            $(".usertypechoose").fadeOut();
            $("#hp-zzc").remove();
        })
    } else {
        doubleusertype = false;
    }
    return doubleusertype;
}

//弹出框样式的登录
function openLogin() {
    var sWidth = document.body.scrollWidth;
    var sHeight = document.body.scrollHeight;
    var oMask = document.createElement("div");
    oMask.id = "hp-zzc";
    oMask.style.height = sHeight + "px";
    oMask.style.width = sWidth + "px";
    document.body.appendChild(oMask);
}


//资源平台
$(".banner-zypt").bind("click", function() {
    window.open(getRequestAddressUrl('zypt'));
});
//智慧教与学导航按下
$(".banner-zhjyx").bind("click", function() {
    //判断是否登录
    hasloged(1);
    //登录
    if(loginflag){
        Openzhjyx();
    }
});
$(".banner-jypt").bind("click", function() {
    hasloged(1);
    if(loginflag) {
        window.open(getRequestAddressUrl('navjypt'));
    }
});
$(".banner-rrtsq").bind("click", function() {
    hasloged(1);
    if(loginflag) {
        window.open(getRequestAddressUrl('rrtsq'));
    }

});