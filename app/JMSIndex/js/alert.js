window.alert = function(str)
{
    var shield = document.createElement("DIV");
    shield.id = "shield";
    shield.style.position = "absolute";
    shield.style.left = "0px";
    shield.style.top = "0px";
    shield.style.width = "100%";
    shield.style.height = document.body.scrollHeight+"px";
    //弹出对话框时的背景颜色
    shield.style.background = "#000";
    shield.style.opacity="0.5";
    shield.style.filter="alpha(opacity=50)";
    shield.style.textAlign = "center";
    shield.style.zIndex = "25";
    //背景透明 IE有效
    //shield.style.filter = "alpha(opacity=0)";
    var alertFram = document.createElement("DIV");
    alertFram.id="alertFram";
    alertFram.style.position = "fixed";
    alertFram.style.left = "50%";
    alertFram.style.top = "50%";
    alertFram.style.marginLeft = "-225px";
    alertFram.style.marginTop = "-75px";
    alertFram.style.width = "450px";
    alertFram.style.height = "208px";
    alertFram.style.background = "#ff0000";
    alertFram.style.textAlign = "center";
    alertFram.style.boxShadow = "0px 0px 4px rgba(0, 0, 0, 0.5)";
    alertFram.style.zIndex = "100001";
    strHtml = "<ul style=\"list-style:none;margin:0px;padding:0px;width:100%\">\n";
    strHtml += " <li style=\"background:#F6F6F6;text-align:left;padding-left:20px;font-size:16px;font-weight:bold;height:40px;line-height:40px;\">提示</li>\n";
    strHtml += " <li style=\"background:#fff;text-align:center;font-size:14px;height:128px;overflow-y: auto;word-break: break-all;word-wrap: break-word;padding: 45px 20px;line-height: 25px;\">"+str+"</li>\n";
    strHtml += " <li style=\"background:#F6F6F6;text-align:center;font-weight:bold;;height:40px;line-height:40px;\"><input type=\"button\" value=\"确 定\" onclick=\"doOk()\" style=\"height:26px;color: #FFFFFF;background: #169BD5;text-align: center;font-size: 12px;line-height: 26px;border: 1px solid #E4E4E4; width: 60px;border-radius: 4px;outline: none;cursor: pointer;\"/></li>\n";
    strHtml += "</ul>\n";
    alertFram.innerHTML = strHtml;
    document.body.appendChild(alertFram);
    document.body.appendChild(shield);

    this.doOk = function(){
        alertFram.style.display = "none";
        shield.style.display = "none";
    }
    alertFram.focus();
    document.body.onselectstart = function(){return false;};
}