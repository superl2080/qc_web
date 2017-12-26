
$(function () {
	/*返回顶部star*/
	$(window).scroll(function(){
	    if ($(window).scrollTop()>173){
	    	$(".top").fadeIn(150);
	    }
	    else{
	    	$(".top").fadeOut(150);
	    }
    });
    $(".gotop").click(function(){
	    $('body,html').animate({scrollTop:0},500);
	    return false;
    });
    
    /*二级导航star*/
	$(".nav-item li").each(function(){
		$(this).mouseover(function(){
			$(this).find(".box-nav").stop(false,true).slideDown(400);				
		});
		$(this).mouseleave(function(){
			$(this).find(".box-nav").stop(false,true).hide();
		});		
	});
    
});

