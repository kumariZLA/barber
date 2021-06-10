$(document).ready(() => {

    $('.open-modal').click(() => {
        $('#discount').css('display', 'flex');
    });
    $('#discount-close').click(() => {
        $('#discount').hide();
    });
    $('#cancel-close, #discount').click((e) => {
        if (e.target.id === 'discount' || e.target.id === 'cancel-close') {
            $('#discount').hide();
        }
    });
    $('#header-menu-container').click((e) => {
        let currentElement = $(e.target);
        $('.header-menu').removeClass('active');
        currentElement.addClass('active');
    });


    $('.open-registration').click(() => {
        $('#block-text-next').css('display', 'flex');
    });

    $('#data-close').click(() => {
        $('#block-text-next').hide();
        $('#reserve-error').hide();
    });
    $('#thank-close').click(() => {
        $('#block-text').hide();
        $('#reserve-error').hide();
    });

    $('#burger').click(() => {
        $('#header-menu-container').css('display', 'block');
    });

    $('.header-menu').click(() => {
        $('#header-menu-container').css('display', 'none');
    });

    $(function () {
        $("#datepicker").datepicker();
    });
    $('#reserve-button > button.btn-sing-up.reserve').click(() => {
        let name = $('#name');
        let phone = $('#phone');
        let services = $('#services');
        let master = $('#master');
        let date = $('#datepicker');
        let time = $('#time-for');

        if (name.val() && phone.val() && services.val() > 0 && master.val() > 0 && date.val() && time.val() > 0) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val() + '&services=' + services.val() + '&master=' + master.val() + '&date=' + date.val() + '&time=' + time.val(),
                success: () => {
                    $('#block-text').show();
                    $('#block-text-next').hide();
                },
                error: () => {
                    $('#discount').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.')
                }
            })
        } else if (name.val() === '') {
            $('#error-name').css('display', 'flex');
            $(name).css('border-color', 'red');

        } else if (phone.val() === '') {
            $('#error-phone').css('display', 'flex');
            $(phone).css('border-color', 'red');
        } else if (services.val() === '0') {
            $('#error-services').css('display', 'flex');
            $(services).css('border-color', 'red');
        } else if (master.val() === '0') {
            $('#error-master').css('display', 'flex');
            $(master).css('border-color', 'red');
        } else if (date.val() === '') {
            $('#error-date').css('display', 'flex');
            $(date).css('border-color', 'red');
        } else if (time.val() === '0') {
            $('#error-time').css('display', 'flex');
            $(time).css('border-color', 'red');
        } else {
            $('#block-text').css('display', 'flex');
        }
    });

    $('.center').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                }
            }
        ]
    });
})

