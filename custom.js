!function(e){"use strict";var a={};e.fn.exists=function(){return this.length>0},a.PreLoad=function(){document.getElementById("loading").style.display="none"},a.MenuToggleClass=function(){e(".navbar-toggler").on("click",function(){e(".navbar-toggler").is(":visible")&&e("header").toggleClass("header-toggle")})},a.HeaderFixd=function(){var a=e(window).scrollTop(),r=e(".header-height").outerHeight();a>=100?(e(".header-transparent .navbar-dark").addClass("navbar-light"),e(".header-transparent .navbar-dark").addClass("navbar-dark-top"),e(".header-transparent .navbar-dark-top").removeClass("navbar-dark"),e(".header-main").addClass("fixed-header"),e(".sticky-lg-top-header").css("top",r)):(e(".header-transparent .navbar-dark-top").removeClass("navbar-light"),e(".header-transparent .navbar-dark-top").addClass("navbar-dark"),e(".header-transparent .navbar-dark").removeClass("navbar-dark-top"),e(".header-main").removeClass("fixed-header"))},a.HeaderFixdTop=function(){var a=e(window).scrollTop(),r=e(".header-top").outerHeight();a>=100?e(".header-main").css("top",-r):e(".header-main").css("top",0)},a.HeaderHeight=function(){var a=e(".header-height").outerHeight();e(".header-height-bar").css("min-height",a)},a.MegaMenu=function(){e(".px-dropdown-toggle").on("click",function(){e(this).parent().toggleClass("open-menu-parent"),e(this).next(".dropdown-menu").toggleClass("show"),e(this).toggleClass("open")})},a.Gallery=function(){e(".lightbox-gallery").length>0&&e(".lightbox-gallery").magnificPopup({delegate:".gallery-link",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-fade",fixedContentPos:!0,closeBtnInside:!1,gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]}}),e(".video-btn").length>0&&e(".video-btn").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1})},a.masonry=function(){var a=e(".portfolio-content");if(a.length>0){e(a).isotope({resizable:!1,itemSelector:".grid-item",layoutMode:"masonry",filter:"*"});var r=e(".filter li");e(r).on("click",function(){var r=e(this).attr("data-filter");a.isotope({filter:r})}),e(r).on("click",function(){e(this).addClass("active").siblings().removeClass("active")})}},a.ProgressBar=function(){e(".skill-bar .skill-bar-in").each(function(){var a=e(this).offset().top+e(this).outerHeight(),r=e(window).scrollTop()+e(window).height(),t=e(this).attr("aria-valuenow")+"%";r>a&&e(this).css({width:t})})},a.CountTimer=function(){var a;e(".count-down").length>0&&e(".count-down").countdown({regional:{days:"Days",day:"Day",years:"Years",year:"Year",hours:"Hours",hour:"Hour",minutes:"Minutes",minute:"Minute",seconds:"Seconds",second:"Second"}})},a.CartQty=function(){e(".qty_btn").on("click",function(){var a=e(this),r=a.parent().find(".cart-qty-input").val();if("+"===a.text())var t=parseFloat(r)+1;else if(r>0)var t=parseFloat(r)-1;else t=1;a.parent().find(".cart-qty-input").val(t)})},a.parallax=function(){e(".parallax").length>0&&(jarallax(document.querySelectorAll(".parallax")),jarallax(document.querySelectorAll(".parallax"),{disableParallax:function(){return/iPad|iPhone|iPod|Android/.test(navigator.userAgent)},disableVideo:function(){return/iPad|iPhone|iPod|Android/.test(navigator.userAgent)}}))},e(window).on("load",function(){a.masonry(),a.PreLoad()}),e(document).ready(function(){a.HeaderFixd(),a.MenuToggleClass(),a.Gallery(),a.HeaderHeight(),a.HeaderFixdTop(),a.ProgressBar(),a.MegaMenu(),a.CountTimer(),a.parallax(),a.CartQty()}),e(window).scroll(function(){a.HeaderFixdTop(),a.HeaderFixd()}),e(window).resize(function(){a.HeaderFixdTop(),a.HeaderHeight()})}(jQuery);