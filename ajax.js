$(document).on('click', '.add-to-cart', function (event) {
    event.preventDefault();
    var item_id = $(this).data("id");
    console.log(item_id);
    $.ajax({
        method: 'POST',
        url: 'addToCart.php',
        headers: {
            'Accept': 'application/json'
        },
        data: {
            item_id: item_id
        },
        success: function (response) {
            console.log(response);
            console.log('success');
        },
        error: function (error) {
            console.log(error);
        }
    })
});
