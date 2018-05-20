'use strict';
$(function(){
//    console.log("开始执行");
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
        var urll = "";
        urll += password;
        urll += "/test.php";
        $.ajax({
            url:urll,
            async:false,
            success:function(data){
                alert(data);
            },
            error:function(){
                alert("失败");
            }
        });

            // window.location.href = url;

    });
})

window.onload = function(){
	var i = 0 , j = 0 ;
	var image = "" , ele="" , cla="";
	for( i = 2 ; i < 6 ; i++ ){
		for( j = 1 ; j < 6 ; j++ ){
			image = "<img src='go/img_high/";
			cla = ".pic_";
			ele = i.toString();
			ele += "-";
			ele += j.toString();
			image += ele;
			cla += ele;
			image += ".jpg' />";
			$(cla).append(image);
		}
	}
	for( j = 6 ; j < 9 ; j++ ){
			image = "<img src='go/img_high/";
			cla = ".pic_";
			ele = "2-";
			ele += j.toString();
			image += ele;
			cla += ele;
			image += ".jpg' />";
			$(cla).append(image);
	}
	$(".all").css("background-image","linear-gradient(rgba(84, 84, 84, 0), rgba(84, 84, 84, 0)),url(go/img_high/bg1.jpg)").fadeIn(3000);
}