$(document).ready(function () {
    var value = parseInt($('.rating-value').text());
    $('.star-rating').find('.fas').slice(0,value).addClass('checked');
    var floatVal = parseFloat($('.rating-value').text());
    var decimal = floatVal - Math.floor(floatVal);
    var nextVal = value+1;
    if(decimal >= 0.5) {
        $(".fas:nth-child(" + nextVal + ")").removeClass('fa-star');
        $(".fas:nth-child(" + nextVal + ")").addClass('fa-star-half-alt');
        $(".fas:nth-child(" + nextVal + ")").addClass('checked');
    } 
    $('.star-rating').find('.fa-star').slice(value,10).removeClass('fas');
    $('.star-rating').find('.fa-star').slice(value,10).addClass('far');

    $(".scrollBtn").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $(".show-conf" ).click(function() {
        $( ".panel-default:contains('Confirmed')" ).css( "display", "" );
        $( ".panel-default:contains('Pending')" ).css( "display", "none" );
        $( ".panel-default:contains('Cancelled')" ).css( "display", "none" );
    });
    $(".show-canc" ).click(function() {
        $( ".panel-default:contains('Cancelled')" ).css( "display", "" );
        $( ".panel-default:contains('Pending')" ).css( "display", "none" );
        $( ".panel-default:contains('Confirmed')" ).css( "display", "none" );
    });
    $( ".show-p" ).click(function() {
        $( ".panel-default:contains('Pending')" ).css( "display", "" );
        $( ".panel-default:contains('Confirmed')" ).css( "display", "none" );
        $( ".panel-default:contains('Cancelled')" ).css( "display", "none" );
    });

    $( ".order-status:contains('Confirmed')" ).css( "color", "green" ).append(' <i class="far fa-check-circle"></i>');
    $( ".order-status:contains('Pending')" ).css( "color", "orange" ).append(' <i class="far fa-clock"></i>');
    $( ".order-status:contains('Cancelled')" ).css( "color", "red" ).append(' <i class="fas fa-ban"></i>');
});