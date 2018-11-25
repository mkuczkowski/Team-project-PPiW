var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopping", { useNewUrlParser: true });

var products = [
    new Product({
    imagePath: "https://i.imgur.com/hnWjQQH.jpg",
    title: "The Witcher 3",
    trailer: "https://www.youtube.com/embed/c0i88t0Kacs",
    cover: "https://i.redd.it/75rjpmgqedf11.jpg",
    description: "Experience the epic conclusion to the story of professional monster slayer, witcher Geralt of Rivia. As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.",
    price: 25
        }),
    new Product({
        imagePath: "https://www.gry-online.pl/galeria/html/wiadomosci/bigphotos/196831812.jpg",
        title: "AC: Odyssey",
        trailer: "https://www.youtube.com/embed/s_SJZSAtLBA",
        cover: "http://theoneswhocamebefore.weebly.com/uploads/5/2/4/9/52492991/published/acodyssey-pc-wallpaper-eu-1920x1080.jpg?1529340939",
        description: "Choose your fate in Assassin's Creed® Odyssey. From outcast to living legend, embark on an odyssey to uncover the secrets of your past and change the fate of Ancient Greece.",
        price: 49
        }),
    new Product({
        imagePath: "https://i.redd.it/wzxoxq43j9q01.jpg",
        title: "Marvel's Spider-man",
        trailer: "https://www.youtube.com/embed/utVr-n0MaU0",
        cover: "https://static.raru.co.za/cover/2016/06/14/4771929-l.jpg?v=1536230400",
        description: "Spider-Man is an action-adventure game set in an open world modern-day New York City and played from a third-person perspective. It features combat systems such as aerial combat, Spider Sense reflexes, web-shooting, and finishing moves. Spider-Man can push attacking enemies off of buildings, though Spider-Man does not let them fall, webbing them to the side of the building.",
        price: 59
        }),
    new Product({
        imagePath: "https://images5.alphacoders.com/930/thumb-1920-930953.jpg",
        title: "Hitman 2",
        trailer: "https://www.youtube.com/embed/R8aRCwbZGek",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Hitman_2_%282018%29_cover.jpg/220px-Hitman_2_%282018%29_cover.jpg",
        description: "Travel the globe and track your targets across exotic sandbox locations in HITMAN™ 2. From sun-drenched streets to dark and dangerous rainforests, nowhere is safe from the world’s most creative assassin, Agent 47 in the ultimate spy thriller story.", 
        price: 55
            }),
        new Product({
            imagePath: "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc8lb6R3Yyf6hgXB.B9k.h3a99p.AXB.HT0fqS_chRpDfZP4bn.XwqcFKIvTnoTajNzXN2Fk9r.GJ4vVTI3bZG9IXlLdzte2fdu7ibJuh_SGGzG2p7yy5L9P2mET3OQklo_pfoaQVnN8kcZ2GSSBj0dyTCmZj_GkZVtmo1xI0nK4g-&h=1080&w=1920&format=jpg",
            title: "Shadow of the Tomb Raider",
            trailer: "https://www.youtube.com/embed/XYtyeqVQnRI",
            cover: "https://s1.gaming-cdn.com/images/products/2487/271x377/2487.jpg",
            description: "As Lara Croft races to save the world from a Maya apocalypse, she must become the Tomb Raider she is destined to be.",
            price: 49
            }),
        new Product({
            imagePath: "https://img6.gram.pl/thumb/20180907143020.jpg",
            title: "FIFA 19",
            trailer: "https://www.youtube.com/embed/zX0AV6yxyrQ",
            cover: "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcvWicW23ETGW5P.Gtrp4rs50WRPi1cNH98xn9yE8Xnj8_2IDUogodj_rndFmM9N9XMr5.2aiipWQsqWPIKlkej6g5i8mpM9UX_Xq_uQSxAJlORxLSfWl8KWDt9FIkhARqus0IgW67qtjQPGbLJTkyyOY1GqjLNi_YNLhqtAlZfpo-&h=300&w=200&format=jpg",
            description: "Powered by Frostbite™, EA SPORTS™ FIFA 19 delivers a champion-caliber experience on and off the pitch. Led by the prestigious UEFA Champions League, FIFA 19 offers enhanced gameplay features that allow you to control the pitch in every moment. There are new and unrivaled ways to play, including a dramatic finale to the story of Alex Hunter in The Journey: Champions, a new mode in the ever-popular FIFA Ultimate Team™, and more. Champions Rise in FIFA 19.",
            price: 59
            })
];

var done = 0;

for (var i = 0; i<products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if(done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
};