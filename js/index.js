 $(document).ready(function(){

 	$("li").click(function(e){
 		var target = e.target.id;
 		target_class = "." + target;
 		$(".bg div").removeClass("current");
 		$(target_class).addClass("current");
 		$(".close").css("opacity", 1);
 	});

 	$(".ham span").click(function(){
 		$(".bar").toggleClass("show");
 	});

 	$(".close").click(function(){
 		$(".bg div").removeClass("current");
 		$(".close").css("opacity", 0);
 	});

 })

