!function(e){"use strict";function t(){e(window).scrollTop()>40&&s>767?e(".site-back-top").fadeIn():e(".site-back-top").fadeOut()}function i(){var t=[];t.push('<div class="bx-pager-thumbs">'),t.push('<div class="site-wrapper">'),t.push('<ul class="clearfix">'),e(".site-slider .slide-image img").each(function(i){var a=e(this).attr("src");t.push('<li><a data-slide-index="'+i+'" href="#" style="background-image: url('+a+')"></a></li>')}),t.push("</ul>"),t.push("</div>"),t.push("</div>"),e(".site-slider").append(t.join("\n"));var i=e(".site-slider .slide-image").size();e(".site-slider .bx-pager-thumbs li").css("width",100/i+"%")}function a(){e(".site-slider .bxslider li").each(function(){var t=e(this).find("img").attr("src");e(this).css("background-image","url("+t+")")})}{var s=e(window).innerWidth();e(window).innerHeight()}e(".site-back-top").on("click",function(t){t.preventDefault(),e("body,html").animate({scrollTop:0},800)}),e(".site-header .header-top .lang-select").on({mouseenter:function(){e(this).addClass("active")},mouseleave:function(){e(this).removeClass("active")}}),e(".site-header .header-top .lang-select .active a").on("click",function(t){t.preventDefault();var i=e(".site-header .header-top .lang-select");i.hasClass("active")?i.removeClass("active"):i.addClass("active")}),e(".site-header .header-bottom .hb-toggle").on("click",function(){{var t=e(".site-header");e(".site-header .hb-menu")}t.hasClass("menu-active")?e(t).removeClass("menu-active"):t.addClass("menu-active")}),e(".site-header .hb-menu li.sub > a, .site-header .hb-menu li.megamenu > a").on("click",function(t){t.preventDefault();var i=e(this).parent("li");i.hasClass("active")?e("body,html").animate({scrollTop:0},200,function(){e(".hb-menu li").removeClass("active")}):e("body,html").animate({scrollTop:0},200,function(){e(".hb-menu li").removeClass("active"),i.addClass("active")})}),e(".site-banner .banner-image").each(function(){var t=e(this).find("img").attr("src");e(this).css("background-image","url("+t+")")}),e(".site-slider").size()&&(i(),e(".site-slider .bxslider").bxSlider({pagerCustom:".bx-pager-thumbs",mode:"fade",captions:!1,controls:!1,auto:!0,autoControls:!0,autoHover:!0,adaptiveHeight:!0,nextText:"",prevText:"",onSlideAfter:function(){e(".bx-start").trigger("click")},onSliderLoad:function(){a()}})),e("#owl-products").owlCarousel({items:1,itemsDesktop:[1199,1],itemsDesktopSmall:[980,1],itemsTablet:[768,1],itemsMobile:[479,1],autoPlay:!0,stopOnHover:!0,navigation:!1,navigationText:["",""],pagination:!0}),e("#owl-services").owlCarousel({items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[980,2],itemsTablet:[768,1],itemsMobile:[479,1],autoPlay:!0,stopOnHover:!0,navigation:!0,navigationText:["",""],pagination:!1}),e("#owl-team").owlCarousel({items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[980,2],itemsTablet:[768,2],itemsMobile:[479,1],autoPlay:!0,stopOnHover:!0,navigation:!0,navigationText:["",""],pagination:!1}),e("#owl-clients").owlCarousel({items:4,itemsDesktop:[1199,4],itemsDesktopSmall:[980,3],itemsTablet:[768,2],itemsMobile:[479,1],autoPlay:!0,stopOnHover:!0,navigation:!0,navigationText:["",""],pagination:!1}),e("#owl-blog").owlCarousel({items:1,itemsDesktop:[1199,1],itemsDesktopSmall:[980,1],itemsTablet:[768,1],itemsMobile:[479,1],autoPlay:!0,stopOnHover:!0,navigation:!0,navigationText:["",""],pagination:!1}),e("#owl-testimonials").owlCarousel({items:2,itemsDesktop:[1199,2],itemsDesktopSmall:[980,2],itemsTablet:[768,1],itemsMobile:[479,1],autoPlay:!0,stopOnHover:!0,navigation:!0,navigationText:["",""],pagination:!1}),e("#owl-post").owlCarousel({items:1,itemsDesktop:[1199,1],itemsDesktopSmall:[980,1],itemsTablet:[768,1],itemsMobile:[479,1],autoPlay:!0,stopOnHover:!0,navigation:!0,navigationText:["",""],pagination:!1}),e("#owl-work").owlCarousel({items:1,itemsDesktop:[1199,1],itemsDesktopSmall:[980,1],itemsTablet:[768,1],itemsMobile:[479,1],autoPlay:!0,stopOnHover:!0,navigation:!0,navigationText:["",""],pagination:!1}),e(".works-filter ul li a").on("click",function(t){e(".works-filter ul li").removeClass("active"),e(this).parent("li").addClass("active");var i=e(this).attr("class"),a=e(".works-list .work"),s=e(".works-list div."+i);"all"==i?a.removeClass("disable"):(a.addClass("disable"),s.removeClass("disable")),t.preventDefault()}),e(".counter").countTo(),e(".video-full").fitVids(),e(".popup-image").magnificPopup({type:"image"}),e(".popup-gallery").each(function(){e(this).magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}})}),e(".google-map").width("100%").height("400px").gmap3({map:{options:{center:[51.5209564,.157134],zoom:15,scrollwheel:!1,mapTypeId:google.maps.MapTypeId.ROADMAP}},marker:{latLng:[4.5319559,-75.6747209]}}),e(window).scroll(function(){t()}),e(window).load(function(){e(".site-loader").delay(100).fadeOut("slow")}),e(window).resize(function(){})}(jQuery);
