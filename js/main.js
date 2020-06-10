$(document).ready(function () {
    $('.fillter-btn').on('click', function () {
        let pName = $(this).text().toLowerCase()
        $('.product-item ').filter(function () {
            $(this).toggle($(this).children('h3').text().toLowerCase().indexOf(pName) > -1);
        })
    })

});