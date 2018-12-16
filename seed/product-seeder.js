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
        price: 20.99
        }),
    new Product({
        imagePath: "https://www.gry-online.pl/galeria/html/wiadomosci/bigphotos/196831812.jpg",
        title: "AC: Odyssey",
        trailer: "https://www.youtube.com/embed/s_SJZSAtLBA",
        cover: "http://theoneswhocamebefore.weebly.com/uploads/5/2/4/9/52492991/published/acodyssey-pc-wallpaper-eu-1920x1080.jpg?1529340939",
        description: "Choose your fate in Assassin's Creed® Odyssey. From outcast to living legend, embark on an odyssey to uncover the secrets of your past and change the fate of Ancient Greece.",
        price: 49.99
        }),
    new Product({
        imagePath: "https://i.redd.it/wzxoxq43j9q01.jpg",
        title: "Marvel's Spider-man",
        trailer: "https://www.youtube.com/embed/utVr-n0MaU0",
        cover: "https://static.raru.co.za/cover/2016/06/14/4771929-l.jpg?v=1536230400",
        description: "Spider-Man is an action-adventure game set in an open world modern-day New York City and played from a third-person perspective. It features combat systems such as aerial combat, Spider Sense reflexes, web-shooting, and finishing moves. Spider-Man can push attacking enemies off of buildings, though Spider-Man does not let them fall, webbing them to the side of the building.",
        price: 59.99
        }),
    new Product({
        imagePath: "https://images5.alphacoders.com/930/thumb-1920-930953.jpg",
        title: "Hitman 2",
        trailer: "https://www.youtube.com/embed/R8aRCwbZGek",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Hitman_2_%282018%29_cover.jpg/220px-Hitman_2_%282018%29_cover.jpg",
        description: "Travel the globe and track your targets across exotic sandbox locations in HITMAN™ 2. From sun-drenched streets to dark and dangerous rainforests, nowhere is safe from the world’s most creative assassin, Agent 47 in the ultimate spy thriller story.", 
        price: 55.99
            }),
    new Product({
        imagePath: "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc8lb6R3Yyf6hgXB.B9k.h3a99p.AXB.HT0fqS_chRpDfZP4bn.XwqcFKIvTnoTajNzXN2Fk9r.GJ4vVTI3bZG9IXlLdzte2fdu7ibJuh_SGGzG2p7yy5L9P2mET3OQklo_pfoaQVnN8kcZ2GSSBj0dyTCmZj_GkZVtmo1xI0nK4g-&h=1080&w=1920&format=jpg",
        title: "Shadow of the Tomb Raider",
        trailer: "https://www.youtube.com/embed/XYtyeqVQnRI",
        cover: "https://s1.gaming-cdn.com/images/products/2487/271x377/2487.jpg",
        description: "As Lara Croft races to save the world from a Maya apocalypse, she must become the Tomb Raider she is destined to be.",
        price: 49.99
        }),
    new Product({
        imagePath: "https://img6.gram.pl/thumb/20180907143020.jpg",
        title: "FIFA 19",
        trailer: "https://www.youtube.com/embed/zX0AV6yxyrQ",
        cover: "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcvWicW23ETGW5P.Gtrp4rs50WRPi1cNH98xn9yE8Xnj8_2IDUogodj_rndFmM9N9XMr5.2aiipWQsqWPIKlkej6g5i8mpM9UX_Xq_uQSxAJlORxLSfWl8KWDt9FIkhARqus0IgW67qtjQPGbLJTkyyOY1GqjLNi_YNLhqtAlZfpo-&h=300&w=200&format=jpg",
        description: "Powered by Frostbite™, EA SPORTS™ FIFA 19 delivers a champion-caliber experience on and off the pitch. Led by the prestigious UEFA Champions League, FIFA 19 offers enhanced gameplay features that allow you to control the pitch in every moment. There are new and unrivaled ways to play, including a dramatic finale to the story of Alex Hunter in The Journey: Champions, a new mode in the ever-popular FIFA Ultimate Team™, and more. Champions Rise in FIFA 19.",
        price: 59.99
        }),
    new Product({
        imagePath: "https://www.chip.pl/uploads/2018/06/650eh9mS0b3kiegDiVzpTXEEFU5ou9kK.png",
        title: "Fallout 76",
        trailer: "https://www.youtube.com/embed/5IcqE8kT3KA",
        cover: "https://img-cache.coolshop.com/9fc7e4fa-aab0-48db-b1b0-e9e226b6ca7e/f76-pc-frontcover-norate-01-1528638773.jpg",
        description: "Fallout 76 is a narrative prequel to previous Fallout games. It is set in an alternate version of history, and takes place in 2102, twenty-five years after a nuclear war that devastated the Earth. The player character is a resident of Vault 76, a fallout shelter that was built in West Virginia to house America's best and brightest minds. The player character exits the Vault on Reclamation Day as part of a plan to re-colonize the Wasteland.",
        price: 49.99
        }),
    new Product({
        imagePath: "https://image.redbull.com/rbcom/010/2015-04-16/1331717465693_2/0100/0/1/gta-v-pc.jpeg",
        title: "Grand Theft Auto V",
        trailer: "https://www.youtube.com/embed/QkkoHAzjnUs",
        cover: "https://kodydogta5.files.wordpress.com/2013/04/cover_gta5_okc582adkapc.jpg",
        description: "Los Santos is a city of bright lights, long nights and dirty secrets, and they don’t come brighter, longer or dirtier than in GTA Online: After Hours. The party starts now.",
        price: 25.99
        }),
    new Product({
        imagePath: "http://www.wallpapermaiden.com/wallpaper/21366/download/1920x1080/red-dead-redemption-2-artwork.jpg",
        title: "Red Dead Redemption II",
        trailer: "https://www.youtube.com/embed/eaW0tYpxyp0",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Red_Dead_Redemption_II.jpg/220px-Red_Dead_Redemption_II.jpg",
        description: "America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
        price: 59.99
        }),
    new Product({
        imagePath: "https://www.tabletowo.pl/wp-content/uploads/2018/10/Black-Ops-4-tabletowo-6.jpg",
        title: "Call of Duty: Black Ops 4",
        trailer: "https://www.youtube.com/embed/6kqe2ICmTxc",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Call_of_Duty_Black_Ops_4_official_box_art.jpg/220px-Call_of_Duty_Black_Ops_4_official_box_art.jpg",
        description: "Black Ops is back! Developed by Treyarch, Call of Duty®: Black Ops 4 takes the top-selling franchise in Call of Duty® to new heights. The title is tailored to the millions of Call of Duty: Black Ops fans worldwide who continue to engage and play together. Forget what you know, Call of Duty: Black Ops 4 is set to deliver a revolutionary experience.",
        price: 59.99
        }),
    new Product({
        imagePath: "https://static.digitalitem.trade/shop/wp-content/uploads/2018/06/battlefield-5.jpg",
        title: "Battlefield V",
        trailer: "https://www.youtube.com/embed/9OTkhsJUK0U",
        cover: "https://s.cdaction.pl/obrazki//bf-box1_179i4.jpg",
        description: "Enter mankind’s greatest conflict with Battlefield V as the series goes back to its roots in a never-before-seen portrayal of World War 2. Take on physical, all-out multiplayer with your squad in experiences like the vast Grand Operations, or witness human drama set against global combat in the single player War Stories. As you fight in epic, unexpected locations across the globe, enjoy the richest and most immersive Battlefield yet.",
        price: 49.99
        }),
    new Product({
        imagePath: "http://swiatgry.pl/media/tapety/10091/lego-dc-super-villains_1-3.jpg",
        title: "LEGO® DC Super-Villains",
        trailer: "https://www.youtube.com/embed/UOqYaUQxZIQ",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Lego_DC_Super-Villains_Cover.jpg/220px-Lego_DC_Super-Villains_Cover.jpg",
        description: "It's good to be bad… Embark on an all-new DC/LEGO® adventure by becoming the best villain the universe has seen. Players will create and play as an all-new super-villain throughout the game, unleashing mischievous antics and wreaking havoc in an action-packed story.",
        price: 29.99
        }),
    new Product({
        imagePath: "https://d2skuhm0vrry40.cloudfront.net/2018/articles/2018-11-30-13-34/alfabet-just-cause-4-1543584831984.jpg/EG11/thumbnail/1920x1080/format/jpg/2011087.jpg",
        title: "Just Cause 4",
        trailer: "https://www.youtube.com/embed/Lfek7Kcq16g",
        cover: "https://images.g2a.com/newlayout/323x433/1x1x0/005668cb147a/5b2237c95bafe322661e3352",
        description: "Rogue agent Rico Rodriguez journeys to Solis, a huge South American world home of conflict, oppression and extreme weather conditions. Strap into your wingsuit, equip your fully customizable grappling hook, and get ready to bring the thunder!",
        price: 49.99
        }),
    new Product({
        imagePath: "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcoeBC7VDIn3Qx5rlvxFPSITQCnfCxaM1zebcxzDEtrmBbPKibQaF18pIXDlbY4rLsN9Sd.zX6jd8m6lE9.rAK312J62qt2RIg652LDnbRKROksMvoSsH.FQcKDzIR_qcugJEoUAQRHFHOe3kh1AfIGYyH4zi5YCM.fNdjZeGc6HI-&h=1080&w=1920&format=jpg",
        title: "South Park™: The Fractured But Whole™",
        trailer: "https://www.youtube.com/embed/p5iH-uKHmfo",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/South_Park_The_Fractured_but_Whole_cover_art.jpg/220px-South_Park_The_Fractured_but_Whole_cover_art.jpg",
        description: "From the creators of South Park, Trey Parker and Matt Stone, comes South Park: The Fractured But Whole, a sequel to 2014's award-winning South Park: The Stick of Truth.",
        price: 39.99
        }),  
    new Product({
        imagePath: "http://www.the2ndreview.com/wp-content/uploads/2017/07/TEKKEN%E2%84%A27_20170705191817.jpg",
        title: "TEKKEN 7",
        trailer: "https://www.youtube.com/embed/kKLCwDg2JLA",
        cover: "https://gpstatic.com/acache/31/63/1/uk/packshot-7a6433e17950f4300b7a22c4e1008837.jpg",
        description: "Discover the epic conclusion of the long-time clan warfare between members of the Mishima family. Powered by Unreal Engine 4, the legendary fighting game franchise fights back with stunning story-driven cinematic battles and intense duels that can be enjoyed with friends and rivals.",
        price: 34.99
        }), 
    new Product({
        imagePath: "http://wallpapersqq.net/wp-content/uploads/2016/03/deus-ex-mankind-divided-computer-wallpaper.jpg",
        title: "Deus Ex: Mankind Divided",
        trailer: "https://www.youtube.com/embed/uvSs5b6y-YM",
        cover: "https://www.mobygames.com/images/covers/l/430023-deus-ex-mankind-divided-day-one-edition-xbox-one-front-cover.jpg",
        description: "Now an experienced covert operative, Adam Jensen is forced to operate in a world that has grown to despise his kind. Armed with a new arsenal of state-of-the-art weapons and augmentations, he must choose the right approach, along with who to trust, in order to unravel a vast worldwide conspiracy.",
        price: 14.99
        }),
    new Product({
        imagePath: "https://images2.alphacoders.com/915/thumb-1920-915075.jpg",
        title: "Heroes® of Might & Magic® III - HD Edition",
        trailer: "https://www.youtube.com/embed/vdJRKWfzpuA",
        cover: "https://ubistatic19-a.akamaihd.net/ubicomstatic/pl-pl/global/game-info/mmh3_packshot_emea_mobile_189960.jpg",
        description: "The most popular Heroes® title of all time is back in HD! Fifteen years later, rediscover the epic tale of Queen Catherine Ironfist, as she re-embarks on her critically acclaimed quest to unite her ravaged homeland and re-conquer the kingdom of Erathia.",
        price: 5.99
        }),
    new Product({
        imagePath: "https://www.xtrafondos.com/wallpapers/scorpion-mortal-kombat-x-1265.jpg",
        title: "Mortal Kombat X",
        trailer: "https://www.youtube.com/embed/jSi2LDkyKmI",
        cover: "https://static.posters.cz/image/750/plakaty/mortal-kombat-x-cover-i24477.jpg",
        description: "Experience the Next Generation of the #1 Fighting Franchise. Mortal Kombat X combines unparalleled, cinematic presentation with all new gameplay.",
        price: 4.99
        }),
    new Product({
        imagePath: "https://articles-images.sftcdn.net/wp-content/uploads/sites/10/2014/10/Dying-Light.jpg",
        title: "Dying Light",
        trailer: "https://www.youtube.com/embed/9IM3YE0BZuo",
        cover: "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcfKc60axQfJ9Ukhi.vwQQ4oJV79rb2.qdiEgSUMzAyTC0T5wj4j8y4ppu0z6G3tfCJkgkOfB6JausDgaPdY2lRMGq.GVUonN.6FcwF9rJL2ohdto30XDsKne4NcSkca1z4wFrNAsgaBamY00NSjmbj9QFu4_G6G0P5pnmAmoqsd4-&w=200&h=300&format=jpg",
        description: "Dying Light is a first-person, action survival game set in a vast open world. Roam a city devastated by a mysterious epidemic, scavenging for supplies and crafting weapons to help defeat the hordes of flesh-hungry enemies the plague has created.",
        price: 5.99
        }),
    new Product({
        imagePath: "https://media.alienwarearena.com/media/Fallout-4-Game-1920-x-1080-HDTV-1080p.png",
        title: "Fallout 4 GOTY",
        trailer: "https://www.youtube.com/embed/kH37zkOr7qk",
        cover: "https://vignette.wikia.nocookie.net/fallout/images/e/e9/Fallout_4_box_cover.jpg/revision/latest?cb=20170220211249",
        description: "Bethesda Game Studios, the award-winning creators of Fallout 3 and The Elder Scrolls V: Skyrim, welcome you to the world of Fallout 4 – their most ambitious game ever, and the next generation of open-world gaming.",
        price: 14.99
        }),
    new Product({
        imagePath: "https://images2.alphacoders.com/926/926696.png",
        title: "Detroit: Become Human",
        trailer: "https://www.youtube.com/embed/8a-EObAhYrg",
        cover: "https://powerplay.com.pl/userdata/gfx/ae712105878ae41e7272f151ab8b83aa.jpg",
        description: "Detroit: Become Human is the latest title developed by Quantic Dream that expands on the studio’s legacy of gripping, narrative driven experiences (Fahrenheit/Heavy Rain™/BEYOND: Two Souls™). Discover what it really means to be human in a powerful, emotional journey made of choice and consequences. In this ambitiously bending and thrilling narrative, every choice and action not only determines the character’s fate, but that of the entire city and possibly beyond.",
        price: 49.99
        }),
    new Product({
        imagePath: "https://pcmod.pl/wp-content/uploads/2018/01/god-of-war-1.jpg",
        title: "God of War",
        trailer: "https://www.youtube.com/embed/rClXqZD2Xrs",
        cover: "https://static.raru.co.za/cover/2016/06/14/4771107-l.jpg?v=1525348287",
        description: "From Santa Monica Studio and creative director Cory Barlog comes a new beginning for God of War. Living as a man outside the shadow of the gods, Kratos must adapt to unfamiliar lands, unexpected threats, and a second chance at being a father. Together with his son Atreus, the pair will venture into the brutal Norse wilds and fight to fulfill a deeply personal quest.",
        price: 49.99
        }),
    new Product({
        imagePath: "https://images7.alphacoders.com/532/thumb-1920-532804.jpg",
        title: "Batman: Arkham Knight",
        trailer: "https://www.youtube.com/embed/wsf78BS9VE0",
        cover: "https://static.posters.cz/image/750/plakaty/batman-arkham-knight-cover-i24451.jpg",
        description: "Batman™: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion. Developed exclusively for New-Gen platforms, Batman: Arkham Knight introduces Rocksteady's uniquely designed version of the Batmobile.",
        price: 8.99
        }),
    new Product({
        imagePath: "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcI1EC6UO.aAqbDtyIDQVzAfcMusrAw9Tyzr8qAp7wcMxFgW_SqQZjU8v6CQvcXMzczmTLbsTzoAO_1foYmGCEJ21EjOV8YI4aQasFOGNS8lAZaYByAqiJ2WdikccHZQYRP7cIoRrODn6_AB2pFO8Gb0IjmiiIu6Iic5E.qCcARu4-&h=1080&w=1920&format=jpg",
        title: "Injustice™ 2",
        trailer: "https://www.youtube.com/embed/oDav-JfidL0",
        cover: "https://www.mobygames.com/images/covers/l/435903-injustice-2-ultimate-edition-xbox-one-front-cover.jpg",
        description: "Build and power up the ultimate version of your favourite DC legends in INJUSTICE 2. This is your Legend. Your Journey. Your Injustice.",
        price: 19.99
        }),
    new Product({
        imagePath: "https://icdn.2cda.pl/obr/oryginalne/12a0a2f7ab0ca1258acf0e382e3e2eda.jpg",
        title: "Diablo 3 + Reaper of Souls",
        trailer: "https://www.youtube.com/embed/NWa41eJjr0c",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Diablo_III_cover.png/220px-Diablo_III_cover.png",
        description: "The game takes place in Sanctuary, the dark fantasy world of the Diablo Series, twenty years after the events of Diablo II. Deckard Cain and Leah are in Tristram Cathedral (the same cathedral that was the setting of Diablo) investigating ancient texts regarding an ominous prophecy. A mysterious star falling from the sky strikes the Cathedral, creating a deep crater into which Deckard Cain disappears.",
        price: 24.99
        }),
    new Product({
        imagePath: "https://www.gamewallpapers.com/wallpapers_slechte_compressie/01wallpapers/wallpaper_middle_earth_shadow_of_war_01_1920x1080.jpg",
        title: "Middle-earth™: Shadow of War™",
        trailer: "https://www.youtube.com/embed/bhSfjt8jQyk",
        cover: "https://www.mobygames.com/images/covers/l/435816-middle-earth-shadow-of-war-windows-apps-front-cover.jpg",
        description: "Experience an epic open-world brought to life by the award-winning Nemesis System. Forge a new Ring of Power, conquer Fortresses in massive battles and dominate Mordor with your personal orc army in Middle-earth™: Shadow of War™.",
        price: 34.99
        }),
    new Product({
        imagePath: "https://images8.alphacoders.com/927/927790.png",
        title: "Overcooked! 2",
        trailer: "https://www.youtube.com/embed/uKLb8D36YKk",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Overcooked_2_cover_art.png/220px-Overcooked_2_cover_art.png",
        description: "Overcooked returns with a brand-new helping of chaotic cooking action! Journey back to the Onion Kingdom and assemble your team of chefs in classic couch co-op or online play for up to four players. Hold onto your aprons… it’s time to save the world again!",
        price: 24.99
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