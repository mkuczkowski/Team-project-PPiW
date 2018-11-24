var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopping", { useNewUrlParser: true });

var products = [
    new Product({
    imagePath: "https://i.imgur.com/hnWjQQH.jpg",
    title: "The Witcher 3",
    description: "Experience the epic conclusion to the story of professional monster slayer, witcher Geralt of Rivia. As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.",
    price: 25
        }),
    new Product({
        imagePath: "https://www.gry-online.pl/galeria/html/wiadomosci/bigphotos/196831812.jpg",
        title: "AC: Odyssey",
        description: "Choose your fate in Assassin's Creed® Odyssey. From outcast to living legend, embark on an odyssey to uncover the secrets of your past and change the fate of Ancient Greece.",
        price: 49
        }),
    new Product({
        imagePath: "https://i.redd.it/wzxoxq43j9q01.jpg",
        title: "Marvel's Spider-man",
        description: "Spider-Man is an action-adventure game set in an open world modern-day New York City and played from a third-person perspective. It features combat systems such as aerial combat, Spider Sense reflexes, web-shooting, and finishing moves. Spider-Man can push attacking enemies off of buildings, though Spider-Man does not let them fall, webbing them to the side of the building.",
        price: 59
        }),
    new Product({
        imagePath: "https://images5.alphacoders.com/930/thumb-1920-930953.jpg",
        title: "Hitman 2",
        description: "test", 
        price: 55
            }),
        new Product({
            imagePath: "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc8lb6R3Yyf6hgXB.B9k.h3a99p.AXB.HT0fqS_chRpDfZP4bn.XwqcFKIvTnoTajNzXN2Fk9r.GJ4vVTI3bZG9IXlLdzte2fdu7ibJuh_SGGzG2p7yy5L9P2mET3OQklo_pfoaQVnN8kcZ2GSSBj0dyTCmZj_GkZVtmo1xI0nK4g-&h=1080&w=1920&format=jpg",
            title: "Shadow of the Tomb Raider",
            description: "test",
            price: 49
            }),
        new Product({
            imagePath: "https://www.chip.pl/uploads/2018/06/650eh9mS0b3kiegDiVzpTXEEFU5ou9kK.png",
            title: "Fallout 76",
            description: "test",
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