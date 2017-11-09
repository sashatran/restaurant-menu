 $(document).ready(function(){

 	$("li").click((e) => {
 		let target = e.target.id;
 		target_class = "." + target;
 		$(".bg div").removeClass("current");
 		$(target_class).addClass("current");
 		$(".close").css("opacity", 1);
 	});

 	$(".ham span").click(() => {
 		$(".bar").toggleClass("show");
 	});

 	$(".close").click(function(){
 		$(".bg div").removeClass("current");
 		$(".close").css("opacity", 0);
 	});

 })

