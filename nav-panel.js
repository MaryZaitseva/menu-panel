$("#menu").hover(function(){
	$("#list1").removeClass("hidden");
}, function(){
	$("#list1").hover(function(){
		$("#list1").removeClass("hidden");
	}, function(){
		$("#list1").addClass("hidden");
	})	
	$("#list1").addClass("hidden");
});


$("li").hover(function(){
	$(this).css("color", "#F1D18A");
	$(this).children().removeClass("hidden");
}, function(){
	$(this).children().addClass("hidden");
	$(this).css("color", "white");
})
