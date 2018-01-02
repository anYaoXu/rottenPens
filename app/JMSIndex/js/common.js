function getRequestAddressUrl(addKey) {
    var retUrl = "";
    for(var i = 0; i < requestAddressList.length; i++) {
        if(requestAddressList[i].addressKey == addKey) {
            if(typeof(environmentType) == "undefined" || environmentType == "kf") {
                retUrl = requestAddressList[i].url; // 开发路径
            } else if(environmentType == "test") {
                retUrl = requestAddressList[i].testurl; // 测试路径
            } else if(environmentType == "product") {
                retUrl = requestAddressList[i].producturl; // 生成路径
            }
            break;
        }
    }

    if(addKey == "app") {
        var language = getLanguageFromCookie();
        if(store.get("msgCode" + msgversion)) {

        } else {
            $.ajax({
                type: "get",
                url: retUrl + "app/i18n/msgCode_" + language + ".properties",
                async: false,
                success: function(data) {
                    store.set("msgCode" + msgversion, data);
                }
            });
        }
    }

    return retUrl;
};
function getCookie(name) {
    var getCookie = document.cookie.replace(/[ ]/g, ""); //获取cookie，并且将获得的cookie格式化，去掉空格字符
    var arrCookie = getCookie.split(";") //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
    var tips; //声明变量tips
    for(var i = 0; i < arrCookie.length; i++) { //使用for循环查找cookie中的tips变量
        var arr = arrCookie[i].split("="); //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
        if(name == arr[0]) { //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
            tips = arr[1]; //将cookie的值赋给变量tips
            break; //终止for循环遍历
        }
    }
    return tips;
};
