$(document).ready(function () {
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.head.appendChild(msViewportStyle)
    }
    // END

    // BEGIN: Для ошибок форм
    var inputFilled = "field-filled";

    $(".form-control").change(function () {
        if ($(this).val().trim().length) {
            $(this).parent().addClass(inputFilled);
        } else {
            $(this).parent().removeClass(inputFilled);
        }
    });
    //END

    $(".close-notification").click(
        function () {
            $('.notification').fadeOut();
        }
    );
});
