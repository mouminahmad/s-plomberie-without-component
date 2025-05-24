//lancement du DIV en bas de la page 
$(window).on('load',function(){ 

	$("#accordionCall").hide(0).delay(5000).show(0); 
	
	 /*window.setTimeout(function () {
        $("#ModalPromo").modal("show");
    }, 9000);*/
});


document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleAccordion");
  const panel = document.getElementById("collapseOne");
  const box = document.getElementById("accordionBox");
  const arrow = document.getElementById("arrowIcon");
  const textIcon = document.getElementById("textIconWrapper");

  let isOpen = false;

  toggleBtn?.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.opacity = "1";

      box.classList.add("bg-[#E7F1FF]", "border-[#E7F1FF]");
      box.classList.remove("bg-white", "border-gray-200");

      textIcon.classList.remove("text-gray-800");
      textIcon.classList.add("text-[#0C63E4]");

      arrow.classList.remove("text-gray-800");
      arrow.classList.add("text-[#0C63E4]", "rotate-180");
    } else {
      panel.style.maxHeight = "0px";
      panel.style.opacity = "0";

      box.classList.remove("bg-[#E7F1FF]", "border-[#E7F1FF]");
      box.classList.add("bg-white", "border-gray-200");

      textIcon.classList.remove("text-[#0C63E4]");
      textIcon.classList.add("text-gray-800");

      arrow.classList.remove("text-[#0C63E4]", "rotate-180");
      arrow.classList.add("text-gray-800");
    }
  });
});


//fonction d'envoi de formulaire contact
function envoyerContact(){
	var nom 			= $("input#nom").val();	
	var email 			=  $("input#email").val();
	var tel 			= $("input#tel").val();	
	var sujet 			= $("input#sujet").val();	
	var message 		= $("textarea#message").val();	

	$.post("envoyerContact.php", { 											
		nom : nom,					
		email:email,				
		message:message,
		tel:tel,
		sujet:  sujet,

		},
		function(data){
			if (data==0) {												
				$('#success01').html("<div class='alert alert-danger alert-dismissible'><strong>Attention !</strong> Vous devez entrer toutes les informations du formulaire.<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>");				
			} 				

			else{	
				$('#success01').html("<div class='alert alert-success alert-dismissible'>         <strong>Félicitation !</strong> Votre message nous a été envoyé avec succés !.<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>");															
			}

		});	
}

//fonction d'envoi de formulaire page index
function envoyerFormIndex(){
	var nom 			= $("input#nom02").val();		
	var tel 			= $("input#tel02").val();	
	var message 		= $("textarea#message02").val();	

	$.post("envoyerFormIndex.php", { 											
		nom : nom,								
		message:message,
		tel:tel,
		},
		function(data){
			if (data==0) {												
				$('#success02').html("<div class='alert alert-danger alert-dismissible'><strong>Attention !</strong> Vous devez entrer toutes les informations du formulaire.<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>");				
			} 				

			else{	
				$('#success02').html("<div class='alert alert-success alert-dismissible'>         <strong>Félicitation !</strong> Votre message nous a été envoyé avec succés !.<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>");															
			}

		});	
}

//fonction d'envoi de formulaire sideBar
function envoyerFormSideBar(){
	var nom 			= $("input#nom03").val();		
	var tel 			= $("input#tel03").val();	
	var message 		= $("textarea#message03").val();	

	$.post("envoyerFormSideBar.php", { 											
		nom : nom,								
		message:message,
		tel:tel,
		},
		function(data){
			if (data==0) {												
				$('#success03').html("<div class='alert alert-danger alert-dismissible'><strong>Attention !</strong> Vous devez entrer toutes les informations du formulaire.<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>");				
			} 				

			else{	
				$('#success03').html("<div class='alert alert-success alert-dismissible'>         <strong>Félicitation !</strong> Votre message nous a été envoyé avec succés !.<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>");															
			}

		});	
}

//fonction d'envoi de formulaire demande de devis
function envoyerDemandeDeDevis(){
	var nom 			= $("input#nom04").val();	
	var email 			=  $("input#email04").val();
	var tel 			= $("input#tel04").val();	
	var sujet 			= $("input#sujet04").val();	
	var message 		= $("textarea#message04").val();	

	$.post("envoyerDemandeDeDevis.php", { 											
		nom : nom,					
		email:email,				
		message:message,
		tel:tel,
		sujet:  sujet,

		},
		function(data){
			if (data==0) {												
				$('#success04').html("<div class='alert alert-danger alert-dismissible'><strong>Attention !</strong> Vous devez entrer toutes les informations du formulaire.<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>");				
			} 				

			else{	
				$('#success04').html("<div class='alert alert-success alert-dismissible'>         <strong>Félicitation !</strong> Votre message nous a été envoyé avec succés !.<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>");															
			}

		});	
}

//script template

(function ($) {
  "use strict";
  //===Language switcher===
  if ($("#polyglot-language-options").length) {
    $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
      effect: 'slide',
      animSpeed: 500,
      testMode: true,
      onChange: function (evt) {
        alert("The selected language is: " + evt.selectedItem);
      }

    });
  }

  // ===Image Hover Script===
  function onHoverthreeDmovement() {
    var tiltBlock = $('.js-tilt');
    if (tiltBlock.length) {
      $('.js-tilt').tilt({
        maxTilt: 20,
        perspective: 700,
        glare: true,
        maxGlare: 0
      })
    }
  }


  if ($('.dial').length) {
    $('.dial').appear(function () {
      var elm = $(this);
      var color = elm.attr('data-fgColor');
      var perc = elm.attr('value');
      elm.knob({
        'value': 0,
        'min': 0,
        'max': 100,
        'skin': 'tron',
        'readOnly': true,
        'thickness': 0.15,
        'dynamicDraw': true,
        'displayInput': false
      });
      $({
        value: 0
      }).animate({
        value: perc
      }, {
        duration: 2000,
        easing: 'swing',
        progress: function () {
          elm.val(Math.ceil(this.value)).trigger('change');
        }
      });
      $(this).append(function () {});
    }, {
      accY: 20
    });
  }

  //Parallax Scene for Icons
  if ($('.parallax-scene-1').length) {
    var scene = $('.parallax-scene-1').get(0);
    var parallaxInstance = new Parallax(scene);
  }
  if ($('.parallax-scene-2').length) {
    var scene = $('.parallax-scene-2').get(0);
    var parallaxInstance = new Parallax(scene);
  }
  if ($('.parallax-scene-3').length) {
    var scene = $('.parallax-scene-3').get(0);
    var parallaxInstance = new Parallax(scene);
  }
  if ($('.parallax-scene-4').length) {
    var scene = $('.parallax-scene-4').get(0);
    var parallaxInstance = new Parallax(scene);
  }
  if ($('.parallax-scene-5').length) {
    var scene = $('.parallax-scene-5').get(0);
    var parallaxInstance = new Parallax(scene);
  }


  //Pricing Tabs
  if ($('.pricing-tabs').length) {
    $('.pricing-tabs .tab-btns .tab-btn').on('click', function (e) {
      e.preventDefault();
      var target = $($(this).attr('data-tab'));

      if ($(target).hasClass('actve-tab')) {
        return false;
      } else {
        $('.pricing-tabs .tab-btns .tab-btn').removeClass('active-btn');
        $(this).addClass('active-btn');
        $('.pricing-tabs .pr-content .pr-tab').removeClass('active-tab');
        $(target).addClass('active-tab');
      }
    });
  }

  // Type Effect
  if ($('.typed-effect').length) {
    $('.typed-effect').each(function () {
      var typedStrings = $(this).data('strings');
      var typedTag = $(this).attr('id');
      var typed = new Typed('#' + typedTag, {
        typeSpeed: 100,
        backSpeed: 100,
        fadeOut: true,
        loop: true,
        strings: typedStrings.split(',')
      });
    });

  }

  // Popular Causes Progress Bar
  if ($('.count-bar').length) {
    $('.count-bar').appear(function () {
      var el = $(this);
      var percent = el.data('percent');
      $(el).css('width', percent).addClass('counted');
    }, {
      accY: -50
    });

  }

  //Fact Counter + Text Count
  if ($(".count-box").length) {
    $(".count-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text(),
          }).animate({
            countNum: n,
          }, {
            duration: r,
            easing: "linear",
            step: function () {
              $t.find(".count-text").text(
                Math.floor(this.countNum)
              );
            },
            complete: function () {
              $t.find(".count-text").text(this.countNum);
            },
          });
        }
      }, {
        accY: 0
      }
    );
  }

  // Accrodion
  if ($(".accrodion-grp").length) {
    var accrodionGrp = $(".accrodion-grp");
    accrodionGrp.each(function () {
      var accrodionName = $(this).data("grp-name");
      var Self = $(this);
      var accordion = Self.find(".accrodion");
      Self.addClass(accrodionName);
      Self.find(".accrodion .accrodion-content").hide();
      Self.find(".accrodion.active").find(".accrodion-content").show();
      accordion.each(function () {
        $(this)
          .find(".accrodion-title")
          .on("click", function () {
            if ($(this).parent().hasClass("active") === false) {
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .removeClass("active");
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .find(".accrodion-content")
                .slideUp();
              $(this).parent().addClass("active");
              $(this)
                .parent()
                .find(".accrodion-content")
                .slideDown();
            }
          });
      });
    });
  }


  // Accrodion Two
  if ($(".accrodion-grp2").length) {
    var accrodionGrp = $(".accrodion-grp2");
    accrodionGrp.each(function () {
      var accrodionName = $(this).data("grp-name");
      var Self = $(this);
      var accordion = Self.find(".accrodion");
      Self.addClass(accrodionName);
      Self.find(".accrodion .accrodion-content").hide();
      Self.find(".accrodion.active").find(".accrodion-content").show();
      accordion.each(function () {
        $(this)
          .find(".accrodion-title")
          .on("click", function () {
            if ($(this).parent().hasClass("active") === false) {
              $(".accrodion-grp2." + accrodionName)
                .find(".accrodion")
                .removeClass("active");
              $(".accrodion-grp2." + accrodionName)
                .find(".accrodion")
                .find(".accrodion-content")
                .slideUp();
              $(this).parent().addClass("active");
              $(this)
                .parent()
                .find(".accrodion-content")
                .slideDown();
            }
          });
      });
    });
  }


  // Slider Carousel
  if ($('.slider-carousel').length) {
    $('.slider-carousel').owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      loop: true,
      margin: 0,
      nav: false,
      singleItem: true,
      smartSpeed: 500,
      autoplay: true,
      autoplayTimeout: 6000,
      navText: ['<span class="icon-right-arrow"></span>', '<span class="icon-right-arrow"></span>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1024: {
          items: 1
        }
      }
    });
  }

  
  // News Two Carousel
  if ($(".blog-two__carousel").length) {
    var blogCarousel = $(".blog-two__carousel");
    var nextBtn = $('.blog-two__carousel__custom-nav .left-btn');
    var prevBtn = $('.blog-two__carousel__custom-nav .right-btn');
    blogCarousel.owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoHeight: false,
      autoplay: true,
      dots: false,
      autoplayTimeout: 10000,
      navText: [
        '<span class="icon-left"></span>',
        '<span class="icon-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        992: {
          items: 3,
        },
        1024: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });
    nextBtn.on('click', function (e) {
      e.preventDefault();
      blogCarousel.trigger('next.owl.carousel', [500]);
    });
    prevBtn.on('click', function (e) {
      e.preventDefault();
      blogCarousel.trigger('prev.owl.carousel', [500]);
    });
  }


  // Testimonial One Carousel
  if ($(".testimonials-one__carousel").length) {
    $(".testimonials-one__carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      smartSpeed: 500,
      autoHeight: false,
      autoplay: true,
      dots: false,
      autoplayTimeout: 10000,
      navText: [
        '<i class="fa fa-angle-double-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-double-right" aria-hidden="true"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        992: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });
  }

  // Project Two Carousel
  if ($(".project-two__carousel").length) {
    $(".project-two__carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      smartSpeed: 500,
      autoHeight: false,
      autoplay: true,
      dots: false,
      autoplayTimeout: 6000,
      navText: [
        '<i class="fa fa-angle-double-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-double-right" aria-hidden="true"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 1,
        },
        1000: {
          items: 1,
        },
        1350: {
          items: 1,
        },
      },
    });
  }


  // Feature Three History Carousel
  if ($(".feature-three__history-carousel").length) {
    $(".feature-three__history-carousel").owlCarousel({
      loop: false,
      margin: 30,
      nav: false,
      smartSpeed: 500,
      autoHeight: false,
      autoplay: true,
      dots: false,
      autoplayTimeout: 6000,
      navText: [
        '<i class="fa fa-angle-double-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-double-right" aria-hidden="true"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        992: {
          items: 2,
        },
        1200: {
          items: 3,
        },
        1350: {
          items: 3,
        },
      },
    });
  }




  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate({
          scrollTop: $(target).offset().top,
        },
        1000
      );

      return false;
    });
  }

  if ($(".contact-form-validated").length) {
    $(".contact-form-validated").validate({
      // initialize the plugin
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        message: {
          required: true,
        },
        subject: {
          required: true,
        },
      },
      submitHandler: function (form) {
        // sending value with ajax request
        $.post(
          $(form).attr("action"),
          $(form).serialize(),
          function (response) {
            $(form).parent().find(".result").append(response);
            $(form).find('input[type="text"]').val("");
            $(form).find('input[type="email"]').val("");
            $(form).find("textarea").val("");
          }
        );
        return false;
      },
    });
  }

  // mailchimp form
  if ($(".mc-form").length) {
    $(".mc-form").each(function () {
      var Self = $(this);
      var mcURL = Self.data("url");
      var mcResp = Self.parent().find(".mc-form__response");

      Self.ajaxChimp({
        url: mcURL,
        callback: function (resp) {
          // appending response
          mcResp.append(function () {
            return '<p class="mc-message">' + resp.msg + "</p>";
          });
          // making things based on response
          if (resp.result === "success") {
            // Do stuff
            Self.removeClass("errored").addClass("successed");
            mcResp.removeClass("errored").addClass("successed");
            Self.find("input").val("");

            mcResp.find("p").fadeOut(10000);
          }
          if (resp.result === "error") {
            Self.removeClass("successed").addClass("errored");
            mcResp.removeClass("successed").addClass("errored");
            Self.find("input").val("");

            mcResp.find("p").fadeOut(10000);
          }
        },
      });
    });
  }

  if ($(".video-popup").length) {
    $(".video-popup").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: true,

      fixedContentPos: false,
    });
  }

  if ($(".img-popup").length) {
    var groups = {};
    $(".img-popup").each(function () {
      var id = parseInt($(this).attr("data-group"), 10);

      if (!groups[id]) {
        groups[id] = [];
      }

      groups[id].push(this);
    });

    $.each(groups, function () {
      $(this).magnificPopup({
        type: "image",
        closeOnContentClick: true,
        closeBtnInside: false,
        gallery: {
          enabled: true,
        },
      });
    });
  }


  function dynamicCurrentMenuClass(selector) {
    let FileName = window.location.href.split("/").reverse()[0];

    selector.find("li").each(function () {
      let anchor = $(this).find("a");
      if ($(anchor).attr("href") == FileName) {
        $(this).addClass("current");
      }
    });
    // if any li has .current elmnt add class
    selector.children("li").each(function () {
      if ($(this).find(".current").length) {
        $(this).addClass("current");
      }
    });
    // if no file name return
    if ("" == FileName) {
      selector.find("li").eq(0).addClass("current");
    }
  }


  if ($(".main-menu__list").length) {
    // dynamic current class
    let mainNavUL = $(".main-menu__list");
    dynamicCurrentMenuClass(mainNavUL);
  }


  if ($(".main-menu__list").length && $(".mobile-nav__container").length) {
    let navContent = document.querySelector(".main-menu__list").outerHTML;
    let mobileNavContainer = document.querySelector(".mobile-nav__container");
    mobileNavContainer.innerHTML = navContent;
  }



  if ($(".sticky-header__content").length) {
    let navContent = document.querySelector(".main-menu").innerHTML;
    let mobileNavContainer = document.querySelector(".sticky-header__content");
    mobileNavContainer.innerHTML = navContent;
  }



  if ($(".mobile-nav__container .main-menu__list").length) {
    let dropdownAnchor = $(
      ".mobile-nav__container .main-menu__list .dropdown > a"
    );
    dropdownAnchor.each(function () {
      let self = $(this);
      let toggleBtn = document.createElement("BUTTON");
      toggleBtn.setAttribute("aria-label", "dropdown toggler");
      toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
      self.append(function () {
        return toggleBtn;
      });
      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass("expanded");
        self.parent().toggleClass("expanded");
        self.parent().parent().children("ul").slideToggle();
      });
    });
  }


  if ($(".mobile-nav__toggler").length) {
    $(".mobile-nav__toggler").on("click", function (e) {
      e.preventDefault();
      $(".mobile-nav__wrapper").toggleClass("expanded");
      $("body").toggleClass("locked");
    });
  }


  if ($(".search-toggler").length) {
    $(".search-toggler").on("click", function (e) {
      e.preventDefault();
      $(".search-popup").toggleClass("active");
      $(".mobile-nav__wrapper").removeClass("expanded");
      $("body").toggleClass("locked");
    });
  }


  if ($(".mini-cart__toggler").length) {
    $(".mini-cart__toggler").on("click", function (e) {
      e.preventDefault();
      $(".mini-cart").toggleClass("expanded");
      $(".mobile-nav__wrapper").removeClass("expanded");
      $("body").toggleClass("locked");
    });
  }


  if ($(".odometer").length) {
    var odo = $(".odometer");
    odo.each(function () {
      $(this).appear(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  }


  if ($(".dynamic-year").length) {
    let date = new Date();
    $(".dynamic-year").html(date.getFullYear());
  }



  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  if ($("#donate-amount__predefined").length) {
    let donateInput = $("#donate-amount");
    $("#donate-amount__predefined")
      .find("li")
      .on("click", function (e) {
        e.preventDefault();
        let amount = $(this).find("a").text();
        donateInput.val(amount);
        $("#donate-amount__predefined").find("li").removeClass("active");
        $(this).addClass("active");
      });
  }

  if ($('.thm-accordion').length) {
    let accordionWrapper = $('.thm-accordion');
    accordionWrapper.each(function () {
      let $this = $(this);
      let accordionID = $this.attr('id');
      let accordionTitle = $this.find('.thm-accordion__title');
      $this.addClass(accordionID);
      // default hide
      let mainAccordionContent = $this.find('.thm-accordion__content').hide();
      $this.find('.active-item .thm-accordion__content').show();
      // on title click
      accordionTitle.on('click', function (e) {
        e.preventDefault();
        let $this = $(this);
        let accordionItem = $(this).parent();
        if (false === accordionItem.hasClass('active-item')) {
          $('#' + accordionID).find('.thm-accordion__item').removeClass('active-item');
          accordionItem.addClass('active-item');
          mainAccordionContent.slideUp();
          accordionItem.find('.thm-accordion__content').slideDown();
        }
      });
    })
  }

  $(".add").on("click", function () {
    if ($(this).prev().val() < 999) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
  });
  $(".sub").on("click", function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1)
        $(this)
        .next()
        .val(+$(this).next().val() - 1);
    }
  });


  //Tabs Box
  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(300);
        $(target).addClass("active-tab");
      }
    });
  }


  if ($(".range-slider-price").length) {
    var priceRange = document.getElementById("range-slider-price");

    noUiSlider.create(priceRange, {
      start: [30, 150],
      limit: 200,
      behaviour: "drag",
      connect: true,
      range: {
        min: 10,
        max: 200,
      },
    });

    var limitFieldMin = document.getElementById("min-value-rangeslider");
    var limitFieldMax = document.getElementById("max-value-rangeslider");

    priceRange.noUiSlider.on("update", function (values, handle) {
      (handle ? $(limitFieldMax) : $(limitFieldMin)).text(values[handle]);
    });
  }

  function thmSwiperInit() {
    // swiper slider
    const swiperElm = document.querySelectorAll(".thm-swiper__slider");
    swiperElm.forEach(function (swiperelm) {
      const swiperOptions = JSON.parse(swiperelm.dataset.swiperOptions);
      let thmSwiperSlider = new Swiper(swiperelm, swiperOptions);
    });
  }

  function thmTinyInit() {
    // tiny slider
    const tinyElm = document.querySelectorAll(".thm-tiny__slider");
    tinyElm.forEach(function (tinyElm) {
      const tinyOptions = JSON.parse(tinyElm.dataset.tinyOptions);
      let thmTinySlider = tns(tinyOptions);
    });
  }


  // ===Testimonials Two Carousel===
  if ($("#testimonials-two__thumb").length) {
    let testimonialsThumb = new Swiper("#testimonials-two__thumb", {
      slidesPerView: 3,
      spaceBetween: 20,
      speed: 1400,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      loop: true,
      autoplay: {
        delay: 5000
      }
    });

    let testimonialsCarousel = new Swiper("#testimonials-two__carousel", {
      observer: true,
      observeParents: true,
      speed: 1400,
      mousewheel: true,
      slidesPerView: 1,
      autoplay: {
        delay: 5000
      },
      thumbs: {
        swiper: testimonialsThumb
      },
      pagination: {
        el: '#testimonials-two__carousel-pagination',
        type: 'bullets',
        clickable: true
      },
    });
  }


  // ===Project===
  function projectMasonaryLayout() {
    if ($('.masonary-layout').length) {
      $('.masonary-layout').isotope({
        layoutMode: 'masonry'
      });
    }
    if ($('.post-filter').length) {
      $('.post-filter li').children('.filter-text').on('click', function () {
        var Self = $(this);
        var selector = Self.parent().attr('data-filter');
        $('.post-filter li').removeClass('active');
        Self.parent().addClass('active');
        $('.filter-layout').isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: 'linear',
            queue: false
          }
        });
        return false;
      });
    }

    if ($('.post-filter.has-dynamic-filters-counter').length) {
      // var allItem = $('.single-filter-item').length;
      var activeFilterItem = $('.post-filter.has-dynamic-filters-counter').find('li');
      activeFilterItem.each(function () {
        var filterElement = $(this).data('filter');
        var count = $('.filter-layout').find(filterElement).length;
        $(this).children('.filter-text').append('<span class="count">' + count + '</span>');
      });
    };
  }


  // Window Load Event
  $(window).on("load", function () {
    if ($(".preloader").length) {
      $(".preloader").fadeOut();
    }
    thmSwiperInit();
    thmTinyInit();
    projectMasonaryLayout();
    onHoverthreeDmovement();



    if ($(".circle-progress").length) {
      $(".circle-progress").appear(function () {
        let circleProgress = $(".circle-progress");
        circleProgress.each(function () {
          let progress = $(this);
          let progressOptions = progress.data("options");
          progress.circleProgress(progressOptions);
        });
      });
    }

    if ($(".post-filter").length) {
      var postFilterList = $(".post-filter li");
      // for first init
      $(".filter-layout").isotope({
        filter: ".filter-item",
        animationOptions: {
          duration: 500,
          easing: "linear",
          queue: false,
        },
      });
      // on click filter links
      postFilterList.on("click", function () {
        var Self = $(this);
        var selector = Self.attr("data-filter");
        postFilterList.removeClass("active");
        Self.addClass("active");

        $(".filter-layout").isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false,
          },
        });
        return false;
      });
    }

    if ($(".post-filter.has-dynamic-filter-counter").length) {
      // var allItem = $('.single-filter-item').length;

      var activeFilterItem = $(".post-filter.has-dynamic-filter-counter").find(
        "li"
      );

      activeFilterItem.each(function () {
        var filterElement = $(this).data("filter");
        var count = $(".filter-layout").find(filterElement).length;
        $(this).append("<sup>[" + count + "]</sup>");
      });
    }

  });

  // window scroll event

  $(window).on("scroll", function () {
    if ($(".stricked-menu").length) {
      var headerScrollPos = 130;
      var stricky = $(".stricked-menu");
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass("stricky-fixed");
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass("stricky-fixed");
      }
    }
    if ($(".scroll-to-top").length) {
      var strickyScrollPos = 100;
      if ($(window).scrollTop() > strickyScrollPos) {
        $(".scroll-to-top").fadeIn(500);
      } else if ($(this).scrollTop() <= strickyScrollPos) {
        $(".scroll-to-top").fadeOut(500);
      }
    }
  });



  if ($(".before-after-twentytwenty").length) {
    $(".before-after-twentytwenty").each(function () {
      var Self = $(this);
      var objName = Self.attr('id');
      $('#' + objName).twentytwenty();

      // hack for bs tab 
      $(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
        var paneTarget = $(e.target).attr('data-target');
        var $thePane = $('.tab-pane' + paneTarget);
        var twentyTwentyContainer = '#' + objName;
        var twentyTwentyHeight = $thePane.find(twentyTwentyContainer).height();
        if (0 === twentyTwentyHeight) {
          $thePane.find(twentyTwentyContainer).trigger('resize');
        }
      });
    });
  };



  //Hidden Sidebar
  if ($('.hidden-bar').length) {
    var hiddenBar = $('.hidden-bar');
    var hiddenBarOpener = $('.hidden-bar-opener');
    var hiddenBarCloser = $('.hidden-bar-closer');
    var navToggler = $('.nav-toggler');
    $('.hidden-bar-wrapper').mCustomScrollbar();

    //Show Sidebar
    hiddenBarOpener.on('click', function () {
      hiddenBar.toggleClass('visible-sidebar');
      navToggler.toggleClass('open');
    });

    //Hide Sidebar
    hiddenBarCloser.on('click', function () {
      hiddenBar.toggleClass('visible-sidebar');
      navToggler.toggleClass('open');
    });
  }



  ////////////////// Update1.0 //////////////////////

  // Project Three Carousel
  if ($(".project-three__carousel").length) {
    $(".project-three__carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      smartSpeed: 500,
      autoHeight: false,
      autoplay: true,
      dots: false,
      autoplayTimeout: 6000,
      navText: [
        '<i class="fa fa-angle-double-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-double-right" aria-hidden="true"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        750: {
          items: 2,
        },
        1100: {
          items: 3,
        },
        1350: {
          items: 4,
        },
      },
    });
  }


  // Vegas Slider
  if ($(".slider-bg-slide").length) {
    $(".slider-bg-slide").each(function () {
      var Self = $(this);
      var bgSlideOptions = Self.data("options");
      var bannerTwoSlides = Self.vegas(bgSlideOptions);
    });
  }

  // Testimonial Three Carousel
  if ($(".testimonials-three__carousel").length) {
    $(".testimonials-three__carousel").owlCarousel({
      loop: true,
      margin: 50,
      nav: true,
      smartSpeed: 500,
      autoHeight: false,
      autoplay: true,
      dots: false,
      autoplayTimeout: 10000,
      navText: [
        '<i class="icon-right-arrow left"></i>',
        '<i class="icon-right-arrow"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        992: {
          items: 2,
        },
        1200: {
          items: 2,
        },
      },
    });
  }

  //Accordion Box
  if ($('.accordion-box').length) {
    $(".accordion-box").on('click', '.acc-btn', function () {

      var outerBox = $(this).parents('.accordion-box');
      var target = $(this).parents('.accordion');

      if ($(this).hasClass('active') !== true) {
        $(outerBox).find('.accordion .acc-btn').removeClass('active');
      }

      if ($(this).next('.acc-content').is(':visible')) {
        return false;
      } else {
        $(this).addClass('active');
        $(outerBox).children('.accordion').removeClass('active-block');
        $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
        target.addClass('active-block');
        $(this).next('.acc-content').slideDown(300);
      }
    });
  }

  // Nice Select
  $('select').niceSelect();










})(jQuery);

