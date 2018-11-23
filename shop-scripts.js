$(document).ready(function () {
    $("#loginBtn").click(function () {
        $("#modalLogin").modal();
    });
    $("#signUpBtn").click(function () {
        $("#modalSign").modal();
    });
});
setTimeout(function () {
    $('.alert').fadeOut('slow');
}, 6000);

var ShoppingCart = (function ($) {
    "use strict";

    var productsEl = document.querySelector(".products"),
        cartEl = document.querySelector(".shopping-cart-list"),
        productQuantityEl = document.querySelector(".product-quantity"),
        emptyCartEl = document.querySelector(".empty-cart-btn"),
        cartCheckoutEl = document.querySelector(".cart-checkout"),
        totalPriceEl = document.querySelector(".total-price");

    // JSON data
    var products = [
            {
                id: 0,
                name: "The Witcher 3",
                description: "Experience the epic conclusion to the story of professional monster slayer, witcher Geralt of Rivia. As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.",
                imageUrl: "https://i.imgur.com/hnWjQQH.jpg",
                trailer: "https://www.youtube.com/embed/c0i88t0Kacs",
                cover: "https://i.redd.it/75rjpmgqedf11.jpg",
                price: 25
            },
            {
                id: 1,
                name: "Assassin's Creed: Odyssey",
                description: "Choose your fate in Assassin's Creed® Odyssey. From outcast to living legend, embark on an odyssey to uncover the secrets of your past and change the fate of Ancient Greece.",
                imageUrl: "https://www.gry-online.pl/galeria/html/wiadomosci/bigphotos/196831812.jpg",
                trailer: "https://www.youtube.com/embed/s_SJZSAtLBA",
                cover: "http://theoneswhocamebefore.weebly.com/uploads/5/2/4/9/52492991/published/acodyssey-pc-wallpaper-eu-1920x1080.jpg?1529340939",
                price: 49
            },
            {
                id: 2,
                name: "Marvel's Spider-man",
                description: "Spider-Man is an action-adventure game set in an open world modern-day New York City and played from a third-person perspective. It features combat systems such as aerial combat, Spider Sense reflexes, web-shooting, and finishing moves. Spider-Man can push attacking enemies off of buildings, though Spider-Man does not let them fall, webbing them to the side of the building.",
                imageUrl: "https://i.redd.it/wzxoxq43j9q01.jpg",
                trailer: "https://www.youtube.com/embed/utVr-n0MaU0",
                cover: "https://static.raru.co.za/cover/2016/06/14/4771929-l.jpg?v=1536230400",
                price: 59
            },
            {
                id: 3,
                name: "Shadow of the Tomb Raider",
                description: "As Lara Croft races to save the world from a Maya apocalypse, she must become the Tomb Raider she is destined to be.",
                imageUrl: "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc8lb6R3Yyf6hgXB.B9k.h3a99p.AXB.HT0fqS_chRpDfZP4bn.XwqcFKIvTnoTajNzXN2Fk9r.GJ4vVTI3bZG9IXlLdzte2fdu7ibJuh_SGGzG2p7yy5L9P2mET3OQklo_pfoaQVnN8kcZ2GSSBj0dyTCmZj_GkZVtmo1xI0nK4g-&h=1080&w=1920&format=jpg",
                trailer: "https://www.youtube.com/embed/XYtyeqVQnRI",
                cover: "https://s1.gaming-cdn.com/images/products/2487/271x377/2487.jpg",
                price: 49
            },
            {
                id: 4,
                name: "Hitman 2",
                description: "Travel the globe and track your targets across exotic sandbox locations in HITMAN™ 2. From sun-drenched streets to dark and dangerous rainforests, nowhere is safe from the world’s most creative assassin, Agent 47 in the ultimate spy thriller story.",
                imageUrl: "https://images5.alphacoders.com/930/thumb-1920-930953.jpg",
                trailer: "https://www.youtube.com/embed/R8aRCwbZGek",
                cover: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Hitman_2_%282018%29_cover.jpg/220px-Hitman_2_%282018%29_cover.jpg",
                price: 55
            },
            {
                id: 5,
                name: "Fallout 76",
                description: "Fallout 76 is a narrative prequel to previous Fallout games. It is set in an alternate version of history, and takes place in 2102, twenty-five years after a nuclear war that devastated the Earth. The player character is a resident of Vault 76, a fallout shelter that was built in West Virginia to house America's best and brightest minds. The player character exits the Vault on Reclamation Day as part of a plan to re-colonize the Wasteland.",
                imageUrl: "https://www.chip.pl/uploads/2018/06/650eh9mS0b3kiegDiVzpTXEEFU5ou9kK.png",
                trailer: "https://www.youtube.com/embed/5IcqE8kT3KA",
                cover: "https://img-cache.coolshop.com/9fc7e4fa-aab0-48db-b1b0-e9e226b6ca7e/f76-pc-frontcover-norate-01-1528638773.jpg",
                price: 59
            },
            {
                id: 6,
                name: "Grand Theft Auto V",
                description: "Los Santos is a city of bright lights, long nights and dirty secrets, and they don’t come brighter, longer or dirtier than in GTA Online: After Hours. The party starts now.",
                imageUrl: "https://image.redbull.com/rbcom/010/2015-04-16/1331717465693_2/0100/0/1/gta-v-pc.jpeg",
                trailer: "https://www.youtube.com/embed/QkkoHAzjnUs",
                cover: "https://kodydogta5.files.wordpress.com/2013/04/cover_gta5_okc582adkapc.jpg",
                price: 29
            },
            {
                id: 7,
                name: "Red Dead Redemption II",
                description: "America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
                imageUrl: "http://www.wallpapermaiden.com/wallpaper/21366/download/1920x1080/red-dead-redemption-2-artwork.jpg",
                trailer: "https://www.youtube.com/embed/eaW0tYpxyp0",
                cover: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Red_Dead_Redemption_II.jpg/220px-Red_Dead_Redemption_II.jpg",
                price: 59
            },
            {
                id: 8,
                name: "Call of Duty: Black Ops 4",
                description: "Black Ops is back! Developed by Treyarch, Call of Duty®: Black Ops 4 takes the top-selling franchise in Call of Duty® to new heights. The title is tailored to the millions of Call of Duty: Black Ops fans worldwide who continue to engage and play together. Forget what you know, Call of Duty: Black Ops 4 is set to deliver a revolutionary experience.",
                imageUrl: "https://www.tabletowo.pl/wp-content/uploads/2018/10/Black-Ops-4-tabletowo-6.jpg",
                trailer: "https://www.youtube.com/embed/6kqe2ICmTxc",
                cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Call_of_Duty_Black_Ops_4_official_box_art.jpg/220px-Call_of_Duty_Black_Ops_4_official_box_art.jpg",
                price: 65
            },
            {
                id: 9,
                name: "FIFA 19",
                description: "Powered by Frostbite™, EA SPORTS™ FIFA 19 delivers a champion-caliber experience on and off the pitch. Led by the prestigious UEFA Champions League, FIFA 19 offers enhanced gameplay features that allow you to control the pitch in every moment. There are new and unrivaled ways to play, including a dramatic finale to the story of Alex Hunter in The Journey: Champions, a new mode in the ever-popular FIFA Ultimate Team™, and more. Champions Rise in FIFA 19.",
                imageUrl: "https://img6.gram.pl/thumb/20180907143020.jpg",
                trailer: "https://www.youtube.com/embed/zX0AV6yxyrQ",
                cover: "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcvWicW23ETGW5P.Gtrp4rs50WRPi1cNH98xn9yE8Xnj8_2IDUogodj_rndFmM9N9XMr5.2aiipWQsqWPIKlkej6g5i8mpM9UX_Xq_uQSxAJlORxLSfWl8KWDt9FIkhARqus0IgW67qtjQPGbLJTkyyOY1GqjLNi_YNLhqtAlZfpo-&h=300&w=200&format=jpg",
                price: 49
            },
            {
                id: 10,
                name: "Battlefield V",
                description: "Enter mankind’s greatest conflict with Battlefield V as the series goes back to its roots in a never-before-seen portrayal of World War 2. Take on physical, all-out multiplayer with your squad in experiences like the vast Grand Operations, or witness human drama set against global combat in the single player War Stories. As you fight in epic, unexpected locations across the globe, enjoy the richest and most immersive Battlefield yet.",
                imageUrl: "https://static.digitalitem.trade/shop/wp-content/uploads/2018/06/battlefield-5.jpg",
                trailer: "https://www.youtube.com/embed/9OTkhsJUK0U",
                cover: "https://s.cdaction.pl/obrazki//bf-box1_179i4.jpg",
                price: 45
            },
            {
                id: 11,
                name: "LEGO® DC Super-Villains",
                description: "It's good to be bad… Embark on an all-new DC/LEGO® adventure by becoming the best villain the universe has seen. Players will create and play as an all-new super-villain throughout the game, unleashing mischievous antics and wreaking havoc in an action-packed story.",
                imageUrl: "http://swiatgry.pl/media/tapety/10091/lego-dc-super-villains_1-3.jpg",
                trailer: "https://www.youtube.com/embed/UOqYaUQxZIQ",
                cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Lego_DC_Super-Villains_Cover.jpg/220px-Lego_DC_Super-Villains_Cover.jpg",
                price: 35
            }
        ],
        productsInCart = [];

    var generateProductList = function () {
        products.forEach(function (item) {
            var productEl = document.createElement("div");
            productEl.className = "product";
            productEl.innerHTML = `
                                <div class="col-lg-4 col-sm-6 zoom" id="zoom">
                                <div class="thumbnail">
                                <img src="${item.imageUrl}" alt="${item.name}">
                                <div class="caption product">
                                  <h3 class="product-name">${item.name}</h3>
                                  <p class="product-price"><span>Price:</span> ${item.price} €</p>
                                  <p><a href="#0" class="btn btn-info add-to-cart" data-id=${item.id} role="button">Add to cart <i class="fas fa-cart-plus"></i></a> <a href="#" class="btn btn-default" role="button" data-toggle="modal" data-target="#gameInfo${item.id}" style="float: right;">Show details <i class="fas fa-info-circle"></i></a></p>
                                  </div>
                                  </div>
                                 </div>
                        <div id="gameInfo${item.id}" class="modal fade" role="dialog">
                            <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                              <h2 class="modal-title" align="center">${item.name}</h2>
                            </div>
                            <div class="modal-body">
                            <div class="row">
                              <div class="col-xs-6 col-md-6">
                              <iframe width="440" height="280" class="thumbnail"
                                src="${item.trailer}">
                              </iframe>
                              </div>
                              <div class="col-xs-3 col-md-1">
                              <img width="230" height="280" class="thumbnail"
                                src="${item.cover}" alt="${item.name}">
                              </div>     
                            </div>
                            <div class="jumbotron">
                            <p>${item.description}</p>   
                                <h3>Rating: <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span></h3>
                                <h3>Price: ${item.price} €</h3>
                                </div>
                            </div>
                            <form action="#" method="POST">
                            <div class="modal-footer">
                            <a href="#" class="btn btn-info add-to-cart" name="add-to-cart" data-id=${item.id} role="button" data-dismiss="modal" >Add to cart <i class="fas fa-cart-plus"></i></a>
                          </div>
                            </form>  

                          </div>
                        </div>
                      </div>                     
            `;
            productsEl.appendChild(productEl);
        });
    }
    var generateCartList = function () {
        cartEl.innerHTML = "";
        productsInCart.forEach(function (item) {
            var productElC = document.createElement("div");
            productElC.className = "media";
            productElC.innerHTML = `  
                <div class="media-left">
                    <img class="media-object" src="${item.product.cover}" alt="${item.product.name}" style="width: 64px; height: 64px;">      
                </div>
                <div class="media-body">
                  <h4 class="media-heading">${item.quantity} x ${item.product.name}: ${item.product.price * item.quantity}€</h4>
                </div>
              </div>
            `;
            cartEl.appendChild(productElC);
        });
        productQuantityEl.innerHTML = productsInCart.length;
        generateCartButtons();
    }

    var generateCartButtons = function () {
        if (productsInCart.length > 0) {
            emptyCartEl.style.display = "block";
            cartCheckoutEl.style.display = "block"
            totalPriceEl.innerHTML = "€ " + calculateTotalPrice();
        } else {
            emptyCartEl.style.display = "none";
            cartCheckoutEl.style.display = "none";
        }
    }

    var setupListeners = function () {
        productsEl.addEventListener("click", function (event) {
            var el = event.target;
            if (el.classList.contains("add-to-cart")) {
                var elId = el.dataset.id;
                addToCart(elId);
            }
        });

        emptyCartEl.addEventListener("click", function (event) {
            if (confirm("Are you sure you want to empty your cart?")) {
                productsInCart = [];
            }
            generateCartList();
        });
    }

    var addToCart = function (id) {
        var obj = products[id];
        if (productsInCart.length === 0 || productFound(obj.id) === undefined) {
            productsInCart.push({
                product: obj,
                quantity: 1
            });
        } else {
            productsInCart.forEach(function (item) {
                if (item.product.id === obj.id) {
                    item.quantity++;
                }
            });
        }
        generateCartList();
    }

    var productFound = function (productId) {
        return productsInCart.find(function (item) {
            return item.product.id === productId;
        });
    }

    var calculateTotalPrice = function () {
        return productsInCart.reduce(function (total, item) {
            return total + (item.product.price * item.quantity);
        }, 0);
    }

    var init = function () {
        generateProductList();
        setupListeners();
    }

    return {
        init: init
    };



})(jQuery);

ShoppingCart.init();
