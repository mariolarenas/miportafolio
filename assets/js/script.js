/**Función para activar tooltip y popover */

$(function () {

    $("a").click(function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var x = this.hash;

            $("html, body").animate({
                scrollTop: $(x).offset().top
            }, 800, function () {
                window.location.hash = x;
            });
        }
    });

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
});