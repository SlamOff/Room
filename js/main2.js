$(document).ready(function() {
	/// START Projects
	$('.account_wr .account_sidebar ul li:not(.active)').mouseover(function () {
        var href = $(this).find('img').attr("src");
        var newHref = href.split('/');
        var getName = newHref[2];
        var splitDot = getName.split('.');
        var name = splitDot[0];
        $(this).find('img').attr("src","img/account_img/"+name+"_active.svg");
    });

    /// floor select
    $('.floor').click(function(){
    	$(this).toggleClass('opened');
    });
    $('.floor ul li').click(function(){
    	$('.floor ul li').removeClass('chosen');
    	$(this).addClass('chosen');
    	var text = $(this).text();
    	$('.floor input').val(text);
    });
    /////////////////

    $('.account_wr .account_sidebar ul li:not(.active)').mouseout(function () {
        var href = $(this).find('img').attr("src");
        var newHref = href.split('/');
        var getName = newHref[2];
        var splitLine = getName.split('_');
        var name = splitLine[0];
        $(this).find('img').attr("src","img/account_img/"+name+".svg");
    });

    function getActive(){
        var href = $('.account_wr .account_sidebar ul .active').find('img').attr("src");
        var newHref = href.split('/');
        var getName = newHref[2];
        var splitDot = getName.split('.');
        var name = splitDot[0];
        $('.account_wr .account_sidebar ul .active').find('img').attr("src","img/account_img/"+name+"_active.svg");
    }

    getActive();
    $(window).scroll(function(){
    	var sidebar = $('.account_sidebar');
    	//console.log($(this).scrollTop());
    	if($(this).scrollTop() > 90){
    		sidebar.addClass('scrolled');
    	}
    	else {
    		sidebar.removeClass('scrolled');
    	}
    });
    // notification close

    $('.account_wr .notification_block .close_notification').on('click', function () {
        $(this).parent('.notification_block').remove();
        return false;
    })

    // hint block
    
    $('.account_wr .block_heading .hint_ic').on('click', function () {
       $(this).closest('.block_heading').find('.hint_block').slideToggle();
       return false;
    })

    // radio change color


    // $('.radio_wr-1 input').on('click',function () {
    //     $(this).closest('.block').find('label').removeAttr('style');
    //     $(this).closest('.radio_wr-1').find('label').css('color', '#502C5A');
    //     console.log(this.checked);
    //     $('.radio_wr-1 input').siblings('.checked').find('.checked_true').hide();
    //     if(this.checked){
    //     	$(this).siblings('.checked').find('.checked_true').toggle();
    //     }
    // });
    function checkbox(n){
    	$('.radio_' + n + ' ' + '.radio_wr input').click(function(){
	    	var inputs = $('.radio_' + n + ' ' + '.radio_wr input').get();
	    	for(var i = 0; i < inputs.length; i++){
	    		inputs[i].previousElementSibling.children[0].style.display = 'none';
	    		if(inputs[i].checked){
	    			inputs[i].previousElementSibling.children[0].style.display = 'block';
	    		}
	    	}
	    });
    }
    checkbox(1);
    checkbox(2);
    // function checkbox(s){
    // 	$(s + ' ' + 'input').on('click',function () {
	   //      $(this).closest('.block').find('label').removeAttr('style');
	   //      $(this).closest(s).find('label').css('color', '#502C5A');
	   //      console.log(this.checked);
	   //      $(s + ' ' + 'input').siblings('.checked').find('.checked_true').hide();
	   //      if(this.checked){
	   //      	$(this).siblings('.checked').find('.checked_true').toggle();
	   //      }
	   //  });
    // }
    // checkbox('.radio_wr-1');
    // checkbox('.radio_wr-2');
    // delete img under chat and in project

    $('.account_wr .photo_room_wr .img_block .delete_img').on('click', function () {
        $(this).parent('.img_block').remove();
        return false;
    });

    // project toggle

    $('.account_wr .start_project_result .arrow_toggle').on('click', function () {

        $(this).closest('.start_project_result').find('.start_form').slideToggle();
        $(this).closest('.start_project_result').find('.project_img').slideToggle();

        $(this).toggleClass('rotateArrow');

        return false;
    });

    // popups

    $('.account_wr .designer_chat .chat_top .conversation, .account_wr .sketch_temp .review_popup').on('click', function () {
        $('.popup').show();
        $('.overlay').show();
        return false;
    });

    $('.popup .wr .close_popup').on('click', function(){
        $('.overlay').hide();
        $('.popup').hide();
        return false;
    });

    $(document).click(function(event){
        if($(event.target).closest(".popup").length == 0){
            $(".popup").hide();
            $(".overlay").hide();
        }
        event.stopPropagation();
    });


    // change types in delivery (deleted block)


    // $('.account_wr .realization_decor .delivery .left .select_type .type').on('click', function () {
    //     $('.account_wr .realization_decor .delivery .left .select_type .type').removeClass('active');
    //     $(this).addClass('active');
    //     return false;
    // });

    // toggle class for table


    $('.account_wr .forming_an_order .catalog table tbody td .table_btn').on('click', function(){
        $(this).closest('tr').toggleClass('deleted_tr');
        return false;
    });

     $('.account_wr .forming_an_order .catalog .fixed_top .select_all').on('click', function(){
         $('.account_wr .forming_an_order .catalog table tbody tr').addClass('deleted_tr');
         return false;
     });

     // rotate select arrow
     
     $('.jq-selectbox').on('click', function () {
         $(this).find('.jq-selectbox__trigger-arrow').toggleClass('rotateSelectArrow');
         return false;
     });

    // order delete table tr

    $('.account_wr .ordering .form_wr table tbody td .delete').on('click', function () {
        $(this).closest('tr').remove();
        return false;
    });

    // steps

    $('.account_wr .ordering .form_wr .btn_right').on('click', function () {
        $(this).closest('.block_wr').find('.info').slideUp();
        $(this).closest('.block_wr').find('.title_info .edit').show();
        $(this).closest('.block_wr').next('.block_wr').find('.info').slideDown();
        return false;
    });

    $('.account_wr .ordering .form_wr .title_info .edit').on('click', function () {
        $(this).closest('.block_wr').find('.info').slideToggle();
        return false;
    });

    $('#type_del').on('change', function () {
       var value = $(this).val();
       if(value==1){
           $('.account_wr .ordering .form_wr .pickup').slideUp();
           $('.account_wr .ordering .form_wr .courier_block').slideDown();
       }
       else{
           $('.account_wr .ordering .form_wr .courier_block').slideUp();
           $('.account_wr .ordering .form_wr .pickup').slideDown();
       }
    });
    $('.slider-for_account').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav_account'
    });
    $('.slider-nav_account').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for_account',
        dots: false,
       	//infinite: false,
        focusOnSelect: true,
        //centerMode: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    ////////////////////////////////////////////////////////////////////////

	// E-mail Ajax Send
	$(".main-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$(".main-form").validate({
		rules: {
			name: {
				required: true,
				minlength: 3
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				digits: true,
			},
			textarea: {
				required: true
			},
			password: {
				required: true,
				minlength: 4
			},
			password_again: {
				minlength: 4,
				equalTo: "#password"
			}
		},
		focusCleanup: true,
	});

	$(".shopping-cart").click(function(){
		$("#shopping-cart-toggle").toggleClass("on");
		$("#setting-toggle").removeClass("on")
	});

	$(".setting").click(function(){
		$("#setting-toggle").toggleClass("on");
		$("#shopping-cart-toggle").removeClass("on")
	});

	$(".edit").click(function(){
		$(this).parent().prev().find("input").focus().val("");
	});

	$("#edit-budget").click(function(){
		$(this).closest(".input-wrapper").find("#toggle-budget").slideToggle();
	});

	$(".payment-item .service").click(function(){
		$(this).closest(".payment-item").find(".toggle").slideToggle();
	});

	$(".btn-popup").click(function(){
		var popupWindow = $("#"+ $(this).attr('rel'));
		popupWindow.show().css({"display":"flex"});
		// $(".overflow-popup").show();
		$(".overflow-popup").css({"display":"flex"});
		$("body").css({"overflow-y":"hidden"});
	});

	// $(".overflow-popup").click(function(){
	// 	$(this).hide();
	// 	$(".popup").hide();
	// 	$("body").css({"overflow-y":"auto"});
	// });

	$(".close-wrapper").click(function(){
		$(".popup, .overflow-popup").hide();
		$("body").css({"overflow-y":"auto"});
		$(".package-tab .item").hide();
		$(".popup.package .btn-packages-tab").removeClass("active");
	});

	$(".my-projects-item.completed .dropdown").click(function(){
		$(this).toggleClass("on").parent().next().slideToggle().css({'display': 'flex'});;
	});

	$(".toggle-search").click(function(){
		$(this).toggleClass("on");
		$("#search").slideToggle();
	});

	$(".toggle-menu").click(function(){
		$(this).toggleClass("on");
		$("body").toggleClass("overflow");
		$(".main-menu").slideToggle();
	});

	$(".admin-toogle-menu").click(function(){
		$(this).toggleClass("on");
		$(".room-menu-wrapper").slideToggle();
	});

	$("#rating-dropdown").click(function(){
		$("#style-dropdown + .my-dropdown-menu").hide();
		$("#style-dropdown").removeClass("show");
		$(this).toggleClass("show");
		$(this).next(".my-dropdown-menu").slideToggle().css({'display': 'flex'});
	});

	$("#style-dropdown").click(function(){
		$("#rating-dropdown + .my-dropdown-menu").css({'display': 'none'});
		$("#rating-dropdown").removeClass("show");
		$(this).toggleClass("show");
		$(this).next(".my-dropdown-menu").slideToggle().css({'display': 'flex'});
	});

	$("#type-works-dropdown").click(function(){
		$("#style-works-dropdown + .my-dropdown-menu").hide();
		$("#budget-works-dropdown + .my-dropdown-menu").hide();
		$("#style-works-dropdown").removeClass("show");
		$("#budget-works-dropdown").removeClass("show");
		$(this).toggleClass("show");
		$(this).next(".my-dropdown-menu").slideToggle().css({'display': 'flex'});
	});

	$("#style-works-dropdown").click(function(){
		$("#type-works-dropdown + .my-dropdown-menu").hide();
		$("#budget-works-dropdown + .my-dropdown-menu").hide();
		$("#type-works-dropdown").removeClass("show");
		$("#budget-works-dropdown").removeClass("show");
		$(this).toggleClass("show");
		$(this).next(".my-dropdown-menu").slideToggle().css({'display': 'flex'});
	});

	$("#budget-works-dropdown").click(function(){
		$("#type-works-dropdown + .my-dropdown-menu").hide();
		$("#style-works-dropdown + .my-dropdown-menu").hide();
		$("#type-works-dropdown").removeClass("show");
		$("#style-works-dropdown").removeClass("show");
		$(this).toggleClass("show");
		$(this).next(".my-dropdown-menu").slideToggle().css({'display': 'flex'});
	});

	$("#products-accordion").accordion({
		heightStyle: "content"
	});

	$(".sort-block h3").click(function(){
		$(this).toggleClass("on");
		$(this).parent().toggleClass("on");
		$(this).next().slideToggle();
	});

	products_stars_array =[];
	$(".col-sm-6").each(function(index, value){
		products_stars_array.push($(this).attr('data-myorder'));
	});

    $(".last_reviews .review_slide .right .show_text").on('click', function () {
        $(this).hide();
        $(this).closest('.right').find('.hidden_text').show();
        return false;
    })

	$(function() {
	    $("#slider-range").slider({
			range: true,
			min: 0,
			max: 16000,
			values: [0, 16000],
			slide: function(event, ui){
				$("#amount_1").val(ui.values[0]);
				$("#amount_2").val(ui.values[1]);
			},
			change: function( event, ui ) {
				var from = (ui.values[0]);
				var to = (ui.values[1]);
				var products = products_stars_array;
				// var cat = products_global.cat_p;
				for (var i = 0; i <= products.length-1; i++) {
					var el = $(".col-sm-6[data-myorder='"+products[i]+"']");
						if (products[i] < from || products[i] > to) {
							$(el).fadeOut();
						} else {
							$(el).fadeIn();
						}
					// ЕСЛИ ВЫБРАНА КАТЕГОРИЯ
					// if (cat != "all") {
					// 	var el = $(cat).attr('data-myorder', products[i]);
					// 	if (products[i] < from || products[i] > to) {
					// 		$(el).fadeOut();
					// 	} else {
					// 		$(el).fadeIn();
					// 	}
					// }
				};
			}
		});
	    $("#amount_1").val($("#slider-range").slider("values", 0));
		$("#amount_2").val($("#slider-range").slider("values", 1));
	});

    $(".sale-slider").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		]
	});
	$(".top-slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
		dots: false,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		]
	});
	
	// $(".top-slider").slick({
	// 	infinite: true,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	dots: false,
	// 	responsive: [
	// 	    {
	// 	      breakpoint: 1024,
	// 	      settings: {
	// 	        slidesToShow: 1,
	// 	        slidesToScroll: 1,
	// 	      }
	// 	    },
	// 	    {
	// 	      breakpoint: 768,
	// 	      settings: {
	// 	        slidesToShow: 1,
	// 	        slidesToScroll: 1
	// 	      }
	// 	    },
	// 	]
	// });

	if ($(window).width() < 768){
		$(".steps-slider").slick({
			infinite: false,
			arrows: false,
			dots: false,
			variableWidth: true,
			slidesToShow: 1,
	        slidesToScroll: 1,
	        centerMode: true,
	        focusOnSelect: false,
		});
	}
  
	if ($(window).width() < 768){
		$(".choose-section-steps-slider").slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			variableWidth: true,
			responsive: [
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        centerMode: true,
			        focusOnSelect: false,
			      }
			    },
			]
		});
	}

    $('.last_review_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        nextArrow: '<button class="arrow next"></button>',
        prevArrow: '<button class="arrow prev"></button>',
    });
	
	$('.sticky-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		nextArrow: '<button class="arrow next"></button>',
		prevArrow: '<button class="arrow prev"></button>',
	});

	$('.how-it-work-slider-for').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
		centerMode: false,
		focusOnSelect: false,
		appendArrows: $(".arrow-wrap"),
		arrows: true,
		dots: true,
		appendDots: $(".dots-wrap"),

		nextArrow: '<button class="arrow next"></button>',
		prevArrow: '<button class="arrow prev"></button>',
		customPaging: function(slider, i) {
		   return '<div class="step-item"><div class="img-wrap"></div><p></p></div>';
		},

	});

	var HowItWorkText1 = "Выбери свой стиль";
	var HowItWorkText2 = "Обсуди детали с дизайнером";
	var HowItWorkText3 = "Согласуй свой концепт";
	var HowItWorkText4 = "Получи готовый дизайн";
	var HowItWorkText5 = "Реализуй свой проект легко";
	$(".dots-wrap .slick-dots li:nth-child(1) .step-item .img-wrap").addClass("step-1");
	$(".dots-wrap .slick-dots li:nth-child(2) .step-item .img-wrap").addClass("step-2");
	$(".dots-wrap .slick-dots li:nth-child(3) .step-item .img-wrap").addClass("step-3");
	$(".dots-wrap .slick-dots li:nth-child(4) .step-item .img-wrap").addClass("step-4");
	$(".dots-wrap .slick-dots li:nth-child(5) .step-item .img-wrap").addClass("step-5");
	$(".dots-wrap .slick-dots li:nth-child(1) .step-item p").text(HowItWorkText1);
	$(".dots-wrap .slick-dots li:nth-child(2) .step-item p").text(HowItWorkText2);
	$(".dots-wrap .slick-dots li:nth-child(3) .step-item p").text(HowItWorkText3);
	$(".dots-wrap .slick-dots li:nth-child(4) .step-item p").text(HowItWorkText4);
	$(".dots-wrap .slick-dots li:nth-child(5) .step-item p").text(HowItWorkText5);

	$('.slider.works-slider-for').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		asNavFor: '.slider.works-slider-nav',
	});
	$('.slider.works-slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider.works-slider-for',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		variableWidth: true,
		nextArrow: '<button class="arrow next"></button>',
		prevArrow: '<button class="arrow prev"></button>',
	});
	$('.slide-in-slide').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
        swipe: true,
        accessibility: false,
		nextArrow: '<button class="arrow next"></button>',
		prevArrow: '<button class="arrow prev"></button>',
	});

	var tab_text1 = "Эскиз";
	var tab_text2 = "Коллаж";
	var tab_text3 = "Стало";
	$(".slide-in-slide .slick-dots li:nth-child(1)").text(tab_text1);
	$(".slide-in-slide .slick-dots li:nth-child(2)").text(tab_text2);
	$(".slide-in-slide .slick-dots li:nth-child(3)").text(tab_text3);

	$('.our-design-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		nextArrow: '<button class="arrow next"></button>',
		prevArrow: '<button class="arrow prev"></button>',
		variableWidth: true,
		centerMode: true,
		focusOnSelect: true,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		      	centerMode: false,
		        variableWidth: false,
		        focusOnSelect: false,
		      }
		    }
		]
	});

	$('.similar-products-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		nextArrow: '<button class="arrow next"></button>',
		prevArrow: '<button class="arrow prev"></button>',
		variableWidth: true,
		centerMode: true,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        variableWidth: false,
		        slidesToShow: 1
		      }
		    }
		]
	});

    $('.similar-work').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: false,
        nextArrow: '<button class="arrow next"></button>',
        prevArrow: '<button class="arrow prev"></button>',
        responsive: [
            {
                breakpoint: 995,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 773,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.similar_design').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 995,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 773,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.last_review_slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: false,
        nextArrow: '<button class="arrow next"></button>',
        prevArrow: '<button class="arrow prev"></button>',
    });

	$('.brand-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 5,
		dots: false,
		centerMode: false,
		focusOnSelect: false,
		nextArrow: '<button class="arrow next"></button>',
		prevArrow: '<button class="arrow prev"></button>',
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});

	$('.reviews-slider-wrap').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: false,
		centerMode: false,
		focusOnSelect: false,
		nextArrow: '<button class="arrow next"></button>',
		prevArrow: '<button class="arrow prev"></button>',
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    }
		]
	});

	$('.similar-project-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: false,
		variableWidth: true,
		centerMode: true,
		nextArrow: '<button class="arrow next"></button>',
		prevArrow: '<button class="arrow prev"></button>',
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        variableWidth: false
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				variableWidth: false
		      }  
		    }
		]
	});

	$('.product-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.product-slider-nav'
	});
	$('.product-slider-nav').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.product-slider-for',
		dots: false,
		focusOnSelect: false,
		vertical: true,
		verticalSwiping: true,
		nextArrow: '<button class="arrow next"></button>',
		prevArrow: '<button class="arrow prev"></button>',
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        vertical: false,
		        verticalSwiping: false,
		        slidesToShow: 3,
		        centerMode: true
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        vertical: false,
		        verticalSwiping: false,
		      }  
		    }
		]
	});

	$("#down").not(".news_id #down").click(function() {
		var heightSection = $(this).parent().height();
		var headerSection = $(this).closest(".content").prev().height();
		$("html, body").animate({ scrollTop: headerSection + heightSection}, "slow")
		return false;
	});
	$(".news_id #down").click(function() {
		var scrollEl = $(this).attr('href');
		if ($(scrollEl).length != 0) {
			$('html, body').animate({ scrollTop: $(scrollEl).offset().top }, "slow");
		}
		return false;
	});

	$( "#faq-accordion" ).accordion({
		heightStyle: "content"
	});

	new WOW().init();

	$(".how-it-work .step-item-wrapper").click(function(){
		$("#step_tab_content > div").hide();
		$(".how-it-work .step-item-wrapper").removeClass("active");
		$(this).addClass("active");
		var tab_id = $('#' + $(this).attr("rel"));
		tab_id.show(450);
	});
	
	$(".next-tab").click(function() {
		var next_item_attr = $(".step-item-wrapper.active:last").next().attr("rel");
		var active_step = $(".step-item-wrapper.active").next().addClass("active");
		$(active_step).children(".choose-click").addClass("active");
		var next_item = $('#' + next_item_attr);
		$(".tab").hide();
		next_item.show();
	});

	$(".step-item-wrapper").on("click", ".choose-click.active", function(){
		$(".tab").hide();
		var choose_id = $('#' + $(this).parent().attr("rel"));
		$(this).parent().addClass("active");
		$(this).parent().nextAll().removeClass("active");
		$(this).parent().nextAll().children().removeClass("active");
		choose_id.show();
	});

	function tabClick() {
		$(".concept-tab .tab").hide()
		$(".concept-tab .main-btn").removeClass("active");
		$(this).addClass("active");
		var tab = $('#' + $(this).attr("rel"));
		tab.css({'display': 'flex'});
	}

	$('.concept-tab .main-btn').on('click', tabClick);

	$(".review .designer-info-wrapper .oi-star").on("click", function(){
		$(this).addClass("check").prevAll().addClass("check");
		$(this).nextAll().removeClass("check");
	});

	function DesignersTab() {
		$(".my-projects ul").hide()
		$(".main-private-room.designer-in-progress-work .tabs h2").removeClass("active");
		$(this).addClass("active");
		var tab = $('#' + $(this).attr("rel"));
		tab.css({'display': 'block'});
	}

	$(".main-private-room.designer-in-progress-work .tabs h2").on('click', DesignersTab);

	$("#work-space-btn").click(function(){
		$("#work-space").toggleClass("visible");
	});

	$("#close-work-space").click(function(){
		$("#work-space").removeClass("visible");
	});

	$("#change-style").click(function(){
		$(this).toggleClass("on");
        $("#change-style-toggle").toggle();
    });

    $("#change-style-toggle").on('click', 'li', function() {
    	var checkedStyle = $(this).text();
    	$("#checked-input").append("<div class='input-wrap'>"+checkedStyle+"<button class='delete delete-input oi oi-x'></button><input type='hidden' value="+checkedStyle+"></div>");
    });

    $(document).on('click', ".delete-input", function() {
    	$(this).parent().remove();
    });

    function packagesTab() {
		$(".popup.package .package-tab .item").hide()
		$(".popup.package .btn-packages-tab").removeClass("active");
		$(this).addClass("active");
		var tab = $('#' + $(this).attr("rel"));
		tab.fadeIn("slow");
		// tab.css({'display': 'block'});
	}

	$('.popup.package .btn-packages-tab').on('click', packagesTab);

	$(".package-popup").click(function(){
		$(".package-tab .item").hide();
		var popupWindow = $("#"+ $(this).attr('rel'));
		var popupTab = $(this).data("pricing-card");
		if ($(this).closest("#minimal").length) {
			var activeTab = ("min-tab-"+popupTab);
		}
		if ($(this).closest("#opt").length) {
			var activeTab = ("opt-tab-"+popupTab);
		}
		if ($(this).closest("#busines").length) {
			var activeTab = ("busines-tab-"+popupTab);
		}
		$(".package-tab").children("#"+ activeTab).fadeIn("active");
		$('.popup.package .btn-packages-tab[rel='+activeTab+']').addClass("active");
		popupWindow.show().css({"display":"flex"});
		$(".overflow-popup").css({"display":"flex"});
		$("body").css({"overflow-y":"hidden"});
	});

});