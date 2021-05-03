$(document).ready(function() {
	
	//$("#navegacion").show();
	$('#gallery-1').bxSlider({
	  auto: true,
	  pause:3000,
	  controls:true,
	  pager: false,
	  infiniteLoop: true,
	  touchEnabled: true,
	  mode: 'fade'
	  });
//
$( window ).scroll(function() {
	
 var elscroll = $(window).scrollTop();
 if(elscroll>100){  $('#barratop').hide("slow"); }else{ $('#barratop').show(""); }
 	});
	})

anchoventana = $(window).width();
var lositems;
if(anchoventana<=1024){ lositems=4;}else{ lositems = 5; }
$(function() {
  $("#foo2").carouFredSel({
    circular: true,
    infinite: true,
    auto  : false,
    responsive: true,
    items: 5,
    prev  : { 
      button  : "#foo2_prev",
      key   : "left"
    },
    next  : { 
      button  : "#foo2_next",
      key   : "right"
    },
    pagination  : "#foo2_pag"
  });
});