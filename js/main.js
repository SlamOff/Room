$(document).ready(function(){
    // Pagination
    $('.pagin li').on('click', function(e){
        console.log(1);
        $('.pagin li').removeClass('active');
        $(this).addClass('active');
    });
    // Наши дизайнеры скрипты для филтров? Что они делаю хз. Без них ничего не меняется :)
    $('.filter-checkbox').click(function () {
        $(this).toggleClass('active');
        checkbox = $(this).find('.item-checkbox');
        checkbox.prop("checked", !checkbox.prop("checked"));
    });
    
    $('.clear-filter').click(function() {
        $('.filter-checkbox').removeClass('active');
        $('.item-checkbox').prop('checked', false);
        $('#w0').submit();
    });
    
    $('.delete-filter').click(function() {
        selectedFilter = $(this).closest('li');
        if (selectedFilter.data('type') == 'style') {
            $('#style-works-dropdown-div #filter-checkbox-'+selectedFilter.data('id')).removeClass('active');
            $('#style-works-dropdown-div #filter-checkbox-'+selectedFilter.data('id')).find('.item-checkbox').prop('checked', false);
        } else if (selectedFilter.data('type') == 'type') {
            $('#type-works-dropdown-div #filter-checkbox-'+selectedFilter.data('id')).removeClass('active');
            $('#type-works-dropdown-div #filter-checkbox-'+selectedFilter.data('id')).find('.item-checkbox').prop('checked', false);                                
        }
        selectedFilter.remove();
        $('#w0').submit();
    });
    //jQuery('#w0').yiiActiveForm([], []);
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Работы наших дизайнеров
    $('.filter-checkbox').click(function () {
        $(this).toggleClass('active');
        checkbox = $(this).find('.item-checkbox');
        checkbox.prop("checked", !checkbox.prop("checked"));
    });
    
    $('.apply').click(function() {
        $('#w0').submit();
    });
    
    $('.reset').click(function() {
        $('.price').val('');
        $('#w0').submit();
    });
    
    $('#clear-filter').click(function() {
        $('.filter-checkbox').removeClass('active');
        $('.item-checkbox').prop('checked', false);
        $('.price').val('');
        $('#w0').submit();
    });
    
    $('.delete-filter').click(function() {
        selectedFilter = $(this).closest('li');
        if (selectedFilter.data('type') == 'style') {
            $('#style-works-dropdown-div #filter-checkbox-'+selectedFilter.data('id')).removeClass('active');
            $('#style-works-dropdown-div #filter-checkbox-'+selectedFilter.data('id')).find('.item-checkbox').prop('checked', false);
        } else if (selectedFilter.data('type') == 'type') {
            $('#type-works-dropdown-div #filter-checkbox-'+selectedFilter.data('id')).removeClass('active');
            $('#type-works-dropdown-div #filter-checkbox-'+selectedFilter.data('id')).find('.item-checkbox').prop('checked', false);                                
        }
        selectedFilter.remove();
        $('#w0').submit();
    });
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Страница дизайнера
    var parent = $(this).parent(),
        name = parent.find('.name'),
        stars = parent.find('.stars'),
        date = parent.find('.date'),
        text = parent.find('.reviews-text');
    $('#popup_5 .name').text(name.text());
    $('#popup_5 .align-items-center').text(stars.text());
    $('#popup_5 .date').text(date.text());
    $('#popup_5 .reviews-text').text(text.text());
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Новости хз зачем этот скрипт
    // var b1 = document.getElementById("text1");
    // var b2 = document.getElementById("news-img1");
    // b1.parentNode.insertBefore(b2, b1);
    //  var b1 = document.getElementById("text3");
    // var b2 = document.getElementById("news-img3");
    // b1.parentNode.insertBefore(b2, b1);
    //    var b1 = document.getElementById("text5");
    // var b2 = document.getElementById("news-img5");
    // b1.parentNode.insertBefore(b2, b1);
    //    var b1 = document.getElementById("text7");
    // var b2 = document.getElementById("news-img7");
    // b1.parentNode.insertBefore(b2, b1);
    //    var b1 = document.getElementById("text9");
    // var b2 = document.getElementById("news-img9");
    // b1.parentNode.insertBefore(b2, b1);
    //    var b1 = document.getElementById("text11");
    // var b2 = document.getElementById("news-img1");
    // b1.parentNode.insertBefore(b2, b1);
    //    var b1 = document.getElementById("text13");
    // var b2 = document.getElementById("news-img13");
    // b1.parentNode.insertBefore(b2, b1);
    //    var b1 = document.getElementById("text15");
    // var b2 = document.getElementById("news-img15");
    // b1.parentNode.insertBefore(b2, b1);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    $('input, textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
    });
    $('input, textarea').blur(function(){
        $(this).attr('placeholder', $(this).data('placeholder'));
    });
    $(".choose-room .main-btn").on("click", function () {
        $('.checkbox-wrapper :checkbox:checked').each(function () {
            var arr = $(this).next();
            var arr2 = arr.html();
            var design = $('.design-wrapper');
            design.empty();
            design.append('<label class="type-checkbox">' + arr2 + '</label>');
        });
    });


    $("#choose-section-step-3 .main-btn").on("click", function () {

        $('.justify-content-center :checkbox:checked').each(function () {
            var arr = $(this).next().children('.design-box').children('.range');
            var arr2 = arr.html();
            var design = $('.pink-col .price');
            design.empty();
            design.append(arr2);

        });

        $('#choose-section-step-3 :checkbox:checked').each(function () {
            var arr = $(this).next();
            var arr2 = arr.html();
            var design = $('.result-item.style');
            design.empty();
            design.append('<label class="type-checkbox">' + arr2 + '</label>');
        });
    });

    $("#w0 .btn-chat").on("click", function () {
        var input = $("#w0 .text");
        var input2 = $("#w0 .file");
        if (input.val() != '' || input2.val() != '') {

            return true;
        } else {
            return false;
        }
    });

    $(document).on('click', '#options-form .deleted', function () {
        var parent = $(this).parent(),
            input = parent.find('.image'),
            input_hidden = parent.find('.input');
        input_hidden.val(input.val());
        parent.addClass('hidden');
        parent.css('width', '0px');
        // input_hidden.attr('value',input2);
    });
    $(document).on('click', '#options-form .deletes', function () {
        var parent = $(this).parent(),
            input = parent.find('.image'),
            input_hidden = parent.find('.input');
        input_hidden.val(input.val());
        parent.addClass('hidden');
        parent.css('width', '0px');
    });


    $(document).on('click', '.deleting', function () {
        var parent = $(this).parent();
        var input = parent.find('input');
        input.val($(this).val());
    });

    $(document).on('click', '.choose input', function () {

        $('.checkbox-wrapper input').each(function () {
            this.checked = false;
        });
        this.checked = true;
    });

    $(document).on('click', '.choose-design .design-box input', function () {
        $('.choose-design .design-box input').each(function () {
            this.checked = false;
        });
        this.checked = true;
    });

    $(document).on('click', '.input-wrapper .wall input', function () {
        $('.input-wrapper .wall input').each(function () {
            this.checked = false;
        });
        this.checked = true;
    });

    $(document).on('click', '.input-wrapper .oboi input', function () {
        $('.input-wrapper .oboi input').each(function () {
            this.checked = false;
        });
        this.checked = true;
    });

    // $(document).on('click', '.inspiration input', function () {
    //     this.checked = true;
    // });

    // var limit = 2;
    // $('.inspiration input').on('change', function(evt) {
    //     if($(this).siblings(':checked').length >= limit) {
    //         this.checked = false;
    //         alert(123);
    //     }
    // });
    $('.inspiration input[type=checkbox]').on('change', function (e) {
        if ($('.inspiration input[type=checkbox]:checked').length > 3) {
            $(this).prop('checked', false);
            alert("Только 3 варианта");
        }
    });
    $('.choosing input[type=checkbox]').on('change', function (e) {
        if ($('.choosing input[type=checkbox]:checked').length > 5) {
            $(this).prop('checked', false);
            alert("Вы привысели лимит 5, снимите один для выбора другова!");
        }
    });
});

$('.choose-section .controll_result .plus').on('click', function () {
    var number = $(this).siblings('.count').text();
    number++;
    $(this).closest('.block').find('.count').text(number);
    countPrice();
    $.post('/test/ajax-update-room-number', 'id='+$(this).closest('.block').find('.delete_hint').data('id')+'&op=plus');
    $('.section-title').text('Вы выбрали '+$numRooms+' комнаты');
    return false;
});

$('.choose-section .controll_result .minus').on('click', function () {
    var number = $(this).siblings('.count').text();
    if(number>1){
        var minus = number--;
        $(this).closest('.block').find('.count').text(number);
        countPrice();
        $.post('/test/ajax-update-room-number', 'id='+$(this).closest('.block').find('.delete_hint').data('id')+'&op=minus');
        $('.section-title').text('Вы выбрали '+$numRooms+' комнаты');
        return false;
    }
});



$('.works-section .drop-down-style-proj .item, .choose-section .controll_result .choose_room .drop-down .item').on('click', function () {
    if ($(this).hasClass('active')) {
        var href = $(this).find('img').attr("src");
        var newHref = href.split('/');
        var getName = newHref[2];
        var withoutActive = href.split('_');
        var getName = withoutActive[0];
        var getRightHref = getName.split('/');
        var getRightName = getRightHref[2];
        $(this).find('img').attr("src","/uploads/2018/08/"+getRightName+".svg");
    } else {
        var href = $(this).find('img').attr("src");
        var newHref = href.split('/');
        var getName = newHref[4];
        var splitDot = getName.split('.');
        var name = splitDot[0];
        $(this).find('img').attr("src","/img/"+name+"_active.svg");
        return false;
    }
});

$(document).on('click','.searsing', function(){
    // $('.searsing').click(function(event) {
    //     alert(123);
        var checkbox = event.target,
            search = $(this).find('.ranges').text();
        $('.insearch span').text(search);
        console.log(search.text());
    });

//показать пароль
function Show_HidePassword(id) {
    element = document.getElementById(id);
    if (element.type == 'password') {
        var inp = document.createElement("input");
        inp.id = id;
        inp.type = "text";
        inp.value = element.value;
        element.parentNode.replaceChild(inp, element);
    }
    else {
        var inp = document.createElement("input");
        inp.id = id;
        inp.type = "password";
        inp.value = element.value;
        element.parentNode.replaceChild(inp, element);
    }
}

//сравнение паролей
function srav() {
    var diag_nap_uchr = document.getElementById('password-check');
    var diag_osn = document.getElementById('password');
    // if (diag_nap_uchr.value === diag_osn.value) {
    //     $('.error').fadeOut();
    //     return true;
    // } else {
    //     $('.error').fadeIn();
    //     return false;
    // }
}

//Обновление чата
function show() {
    // $.ajax({
    //     url: "/chat/messages",
    //     cache: false,
    //     success: function (html) {
    //         $("#content").html(html);
    //     }
    // });
}


$('#content').animate({
    scrollTop: $(document).height() - $('#content').height()
}, 100);
// $(document).on('pjax:success', function() {
//     $('#content').animate({
//         scrollTop: $(document).height()-$('#content').height()
//     },100);
// });


(function ($) {

    $(function () {


        $('.form-inline1').each(function () {
            // Объявляем переменные (форма и кнопка отправки)
            var form = $(this),
                btn = form.find('.btn-primary');

            // Добавляем каждому проверяемому полю, указание что поле пустое
            form.find('.form-control').addClass('empty_field');

            // Функция проверки полей формы
            function checkInput() {
                form.find('.form-control').each(function () {
                    if ($(this).val() != '') {
                        // Если поле не пустое удаляем класс-указание
                        $(this).removeClass('empty_field');
                    } else {
                        // Если поле пустое добавляем класс-указание
                        $(this).addClass('empty_field');
                    }
                });
            }

            // Функция подсветки незаполненных полей
            function lightEmpty() {
                form.find('.empty_field').css({'border': '2px solid #d8512d'});
                // Через полсекунды удаляем подсветку
                setTimeout(function () {
                    form.find('.empty_field').removeAttr('style');
                }, 1500);
            }

            // Проверка в режиме реального времени
            setInterval(function () {
                // Запускаем функцию проверки полей на заполненность
                checkInput();
                // Считаем к-во незаполненных полей

                var arr = form.find('.empty_field');
                var sizeEmpty = arr.length;
                // console.log(sizeEmpty);
                // Вешаем условие-тригер на кнопку отправки формы
                if (sizeEmpty > 0) {
                    if (btn.hasClass('disabled')) {
                        return false
                    } else {
                        btn.addClass('disabled')
                    }
                } else {
                    btn.removeClass('disabled')
                }
            }, 500);

            // Событие клика по кнопке отправить
            btn.click(function () {
                if ($(this).hasClass('disabled')) {
                    // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
                    lightEmpty();
                    return false
                } else {
                    // Все хорошо, все заполнено, отправляем форму
                    form.submit();
                }
            });
        });
    });

    // delete room from test result
    $('.delete_hint').on('click', function () {
        $(this).closest('.block').remove();
        countPrice();
        $.post('/test/ajax-remove-room', 'id='+$(this).data('id'), function () {

        });
    });
    
    $('.choose-section .controll_result .choose_room .drop-down .item').on('click', function () {
        $(this).toggleClass('active');
        checkBox = $(this).find('input[type=checkbox]');
        checkBox.prop("checked", !checkBox.prop("checked"));
        return false;
    })

    $('.choose-section .controll_result .add_block').on('click', function () {
        $('.choose-section .controll_result .choose_room').slideToggle();
        return false;
    })

    $('.choose-section .choose-room .checkbox-wrapper .type-checkbox .img-wrapper .plus').on('click', function () {
        var number = $(this).siblings('.count').text();
        number++;
        $(this).closest('.type-checkbox').find('input[type=hidden]').val(number);
        $(this).closest('.img-wrapper').find('.count').text(number);
        return false;
    });

    $('.choose-section .choose-room .checkbox-wrapper .type-checkbox .img-wrapper .minus').on('click', function () {
        var number = $(this).siblings('.count').text();
        if(number>1){
            var minus = number--;
            $(this).closest('.img-wrapper').find('.count').text(number);
            $(this).closest('.type-checkbox').find('input[type=hidden]').val(number);
            return false;
        }
    });

})(jQuery);

function countPrice() {
    $numRooms = 0;
    $('.count').each(function () {
        $numRooms += parseInt($(this).text());
    });

    var minPrice = $packetMinPrice + ($numRooms - 1) * $packetMinPriceDiscount;
    var optPrice = $packetOptPrice + ($numRooms - 1) * $packetOptPriceDiscount;

    $('.pricing-cards #minimal').find('.price_for_rooms').text('За '+$numRooms+' комнаты '+minPrice+' грн');
    $('.pricing-cards #opt').find('.price_for_rooms').text('За '+$numRooms+' комнаты '+optPrice+' грн');
}

jQuery(function ($) {
    $(document).ready(function () {
        $('.our-design-items').click(function () {
            document.location.href = $(this).attr('href');
        });
    });
});