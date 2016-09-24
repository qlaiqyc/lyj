var PageInfo = {};

PageInfo.init = function(){
	
	var PageObj = {};
	var FunUtil = {};
	var HtmUtil = {};
	
	
	PageObj.init4title = function(){
		var $silder = $('#plug-unsilder')
		var unslider = $silder.unslider();

	    $silder.find('a.unslider-arrow').click(function() {
	        var fn = this.className.split(' ')[1];
	        unslider.data('unslider')[fn]();
	    });
	    
	    var $heade = $("#main-header");
	    
	    $heade.find("span.main-header-menu-product").hover(function(){
	    	
	    	var $this = $(this).closest("li");
	    	
	    	$this.find("span.split-line").addClass("split-line-hight");
	    	$this.next().find("span.split-line").addClass("split-line-hight");
	    	
	    	$("#main-header-product-item").show();
	    	
	    });
	    
	    $("#main-header-product-item").mouseleave(function(){
	    	$(this).hide();
	    	
	    	var $this = $(this).closest("li");
	    	
	    	$this.find("span.split-line-hight").removeClass("split-line-hight");
	    	$this.next().find("span.split-line-hight").removeClass("split-line-hight");
	    });
	};
	
	PageObj.init4silder= function(){};
	
	PageObj.init4item  = function(){

		
		
	};
	
	PageObj.init4pub   = function(){
		
		PageObj.init4title();
		PageObj.init4silder();
		PageObj.init4item();
	};
	
	PageObj.init4pub();
};

PageInfo.init();
