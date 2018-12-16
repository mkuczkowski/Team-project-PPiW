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

    var mymap = L.map('mapid').setView([51.776618, 19.486915], 5);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
    }).addTo(mymap);
    
    var marker = L.marker([51.779861, 19.492939]).addTo(mymap);
    var marker2 = L.marker([51.776618, 19.486915]).addTo(mymap);
    var marker3 = L.marker([51.661176, 19.357631]).addTo(mymap);
    var marker4 = L.marker([51.189363, 20.398747]).addTo(mymap);
    var marker5 = L.marker([50.065608, 19.91722]).addTo(mymap); 
    var marker6 = L.marker([52.588917, 14.654328]).addTo(mymap);
    var marker7 = L.marker([52.211759, 21.011164]).addTo(mymap);
    var marker8 = L.marker([53.76724, 20.471105]).addTo(mymap);
    var marker9 = L.marker([52.409072, 16.924958]).addTo(mymap);

    marker.bindPopup("<b>PPiW Warehouse <i class='fas fa-warehouse'></i></b><br>Łódź<br>Patrice Lumumby 16/18");
    marker2.bindPopup("<b>PPiW Center <i class='far fa-copyright'></i></b><br>Łódź<br>Banacha 22");
    marker3.bindPopup("<b>PPiW Store <i class='fas fa-store-alt'></i></b><br>Pabianice<br>Grobelna 7a");
    marker4.bindPopup("<b>PPiW Warehouse <i class='fas fa-warehouse'></i></b><br>Końskie<br>Kielecka 33");
    marker5.bindPopup("<b>PPiW Store <i class='fas fa-store-alt'></i></b><br>Cracow<br>Akademicka 89");
    marker6.bindPopup("<b>PPiW Store <i class='fas fa-store-alt'></i></b><br>Kostrzyn nad Odrą<br>Mikołaja Kopernika 17");
    marker7.bindPopup("<b>PPiW Center <i class='far fa-copyright'></i></b><br>Warsaw<br>Stefana Batorego 53b");
    marker8.bindPopup("<b>PPiW Warehouse <i class='fas fa-warehouse'></i></b><br>Olsztyn<br>Polna 12");
    marker9.bindPopup("<b>PPiW Store <i class='fas fa-store-alt'></i></b><br>Poznań<br>3 maja 48b");

});