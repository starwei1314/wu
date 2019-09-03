$(function(){
	// $('.card-headline').css({height:0}).animate({height:34},2000);
	// $('.SCRM-card-headline').css({height:0}).animate({height:100},2000);
	// $('.card-title').css({height:0}).animate({height:150},2000);
	// $('.card-explain').css({height:0}).animate({height:180},2000);
})
$(window).scroll(function(){
    var hidtop=$(document).scrollTop();
    if(hidtop>100){
       $(".contentTitle1").fadeIn(2000);
       $(".contentTitle2").fadeIn(2000);
       $(".textExplains").fadeIn(2000);
       $('.mask').delay(500).animate({
	        left: "1200px"
	    }, 300,function(){
	    	$(this).hide()
	    });
    }
    var SCRMheights1=$('.SCRM-text-title1').height()+124
    var SCRMheights2=$('.SCRM-text-title2').height()+124
    var SCRMheights3=$('.SCRM-text-title3').height()+124
    var SCRMheights4=$('.SCRM-text-title4').height()+124
    var SCRMheights5=$('.SCRM-text-title5').height()+124
    var SCRMheights6=$('.SCRM-text-title6').height()+124
    if(hidtop>1){
    	 $('.SCRM-text-title1').animate({
	        top: "0px",
	        opacity:1
	    }, 400);
	    $('.SCRM-text-describe1').animate({
	        top: SCRMheights1,
	        opacity:1
	    }, 400);
	    $('.SCRM-rightImgbox1').delay(300).animate({
	        left: "728"
	    }, 300,function(){
	    	$(this).hide()
	    });
    }
    if(hidtop>1000){
    	$('.SCRM-text-title2').animate({
	        top: "0px",
	        opacity:1
	    }, 400);
	    $('.SCRM-text-describe2').animate({
	        top: SCRMheights2,
	        opacity:1
	    }, 400);
	    $('.SCRM-rightImgbox2').delay(300).animate({
	        left: "728"
	    }, 300,function(){
	    	$(this).hide()
	    });
    }
    if(hidtop>2000){
    	$('.SCRM-text-title3').animate({
	        top: "0px",
	        opacity:1
	    }, 400);
	    $('.SCRM-text-describe3').animate({
	        top: SCRMheights3,
	        opacity:1
	    }, 400);
	    $('.SCRM-rightImgbox3').delay(300).animate({
	        left: "728"
	    }, 300,function(){
	    	$(this).hide()
	    });
    }
    if(hidtop>3000){
    	 $('.SCRM-text-title4').animate({
	        top: "0px",
	        opacity:1
	    }, 400);
	    $('.SCRM-text-describe4').animate({
	        top: SCRMheights4,
	        opacity:1
	    }, 400);
	    $('.SCRM-rightImgbox4').delay(300).animate({
	        left: "728"
	    }, 300,function(){
	    	$(this).hide()
	    });
    }
    //author：numo
    if(hidtop>3700){
      $('.SCRM-text-title5').animate({
          top: "0px",
          opacity:1
      }, 400);
      $('.SCRM-text-describe5').animate({
          top: SCRMheights5,
          opacity:1
      }, 400);
      $('.SCRM-rightImgbox5').delay(300).animate({
	        left: "728"
	    }, 300,function(){
	    	$(this).hide()
	    });
    }
    if(hidtop>4400){
       $('.SCRM-text-title6').animate({
          top: "0px",
          opacity:1
      }, 400);
      $('.SCRM-text-describe6').animate({
          top: SCRMheights6,
          opacity:1
      }, 400);
      $('.SCRM-rightImgbox6').delay(300).animate({
	        left: "728"
	    }, 300,function(){
	    	$(this).hide()
	    });
    }

    var heights1=$('.text-title1').height()+124
    var heights2=$('.text-title2').height()+124
    var heights3=$('.text-title3').height()+124
    var heights4=$('.text-title4').height()+124
    if(hidtop>1000){
    	$('.text-title1').animate({
	        top: "0px",
	        opacity:1
	    }, 400);
	    $('.text-describe1').animate({
	        top: heights1,
	        opacity:1
	    }, 400);
	    $('.rightImgbox1').delay(300).animate({
	        left: "728"
	    }, 300,function(){
	    	$(this).hide()
	    });
    }
    
    if(hidtop>2000){
    	$('.text-title2').animate({
	        top: "0px",
	        opacity:1
	    }, 400);
	    $('.text-describe2').fadeIn(500).animate({
	        top: heights2,
	        opacity:1
	    }, 400);
	    $('.rightImgbox2').delay(300).animate({
	        left: "728"
	    }, 300,function(){
	    	$(this).hide()
	    });
	   

    }
    
    if(hidtop>3000){
    	$('.text-title3').animate({
	        top: "0px",
	        opacity:1
	    }, 400);
	    $('.text-describe3').animate({
	        top: heights3,
	        opacity:1
	    }, 400);
	    $('.rightImgbox3').delay(300).animate({
	        left: "728"
	    }, 300,function(){
	    	$(this).hide()
	    });
    }
   
    if(hidtop>3800){
    	$('.text-title4').animate({
	        top: "0px",
	        opacity:1
	    }, 400);
	    $('.text-describe4').animate({
	        top: heights4,
	        opacity:1
	    }, 400);
	    $('.rightImgbox4').delay(300).animate({
	        left: "728"
	    }, 300,function(){
	    	$(this).hide()
	    });
	   
    }
});