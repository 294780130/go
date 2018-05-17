'use strict';
$(function(){
    let result = "";
    $("#btn").on("click",function(){
        result = "https://www.baidu.com/s?wd=";
        result += $("#search").val().toString();
        window.location.href = result;
    });
    $('#search').bind('keydown',function(event){
        if(event.keyCode == "13") {
            result = "https://www.baidu.com/s?wd=";
            result += $("#search").val().toString();
            window.location.href = result;
        }
    });  
    $("#pass").on("click",function(e){
        var pass=prompt("请输入密码","");
        var password = $.md5(pass);
        var url = "";
        url += password;
        url += "/index.html";
        window.location.href = url;
    });
})