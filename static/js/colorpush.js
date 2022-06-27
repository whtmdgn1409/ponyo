$(function () {
    $('.colorbar').on('click', function() {
        var color = $(this).attr("id");
        localStorage.setItem('색상', color);
    })

})