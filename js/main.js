$(function(){
    $(".btnjs").button();
    $("#troca-estado").click(function(){
        var btn =$(this);
        btn.button("loading");
        setTimeout(function(){btn.button("reset")},3000);
    });

     if($("body").width()<768){
            console.log("teste");
            $("#navbar01").addClass("navbar-inverse");
            $("#navbar01").removeClass("fundo-opaco");
            $(".navbar-collapse a").removeClass("navbar-btn").removeClass("btn").addClass("navbar-text");
        }
    if($( window).scrollTop()>70){
		$('#navbar01').addClass('fundo-opaco');
	}else{
		$('#navbar01').removeClass('fundo-opaco');
	}
    
    
    $( window).scroll(function() {
  	if($( window).scrollTop()>70){
		$('#navbar01').addClass('fundo-opaco');
	}else{
		$('#navbar01').removeClass('fundo-opaco');
	}
});
    $(window).resize(function() {
                    console.log("teste0");
                console.log($("body").width());
        if($("body").width()<768){
            console.log("teste");
            $("#navbar01").addClass("navbar-inverse");
            $("#navbar01").removeClass("fundo-opaco");
            $(".navbar-collapse a").removeClass("navbar-btn").removeClass("btn").addClass("navbar-text");
        }else{
            $("#navbar01").removeClass("navbar-inverse");
            $("#navbar01").addClass("fundo-opaco");
            $(".navbar-collapse a").addClass("btn").addClass("navbar-btn").removeClass("navbar-text");


        }
    });
});