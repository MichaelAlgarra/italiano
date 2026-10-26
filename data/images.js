// Photos from Wikimedia Commons (licenses per entry; credited in Settings → Credits).
// Weeks without their own photo fall back to their phase photo, then `fallback`.
(() => {
    const P = {
        "w1": {
            "src": "images/w1.jpg",
            "alt": "Borromini's perspective gallery, Palazzo Spada, Rome",
            "caption": "Borromini's perspective gallery, Palazzo Spada, Rome",
            "credit": "Livioandronico2013",
            "license": "CC BY-SA 4.0",
            "page": "https://commons.wikimedia.org/wiki/File:Forced_perspective_gallery_by_Francesco_Borromini.jpg"
        },
        "w2": {
            "src": "images/w2.jpg",
            "alt": "Piazza Maggiore, Bologna",
            "caption": "Piazza Maggiore, Bologna",
            "credit": "Vanni Lazzari",
            "license": "CC BY-SA 4.0",
            "page": "https://commons.wikimedia.org/wiki/File:FnMBK_Piazza_Maggiore_-_Bologna_-.jpg"
        },
        "w3": {
            "src": "images/w3.jpg",
            "alt": "Ponte Vecchio at dusk, Florence",
            "caption": "Ponte Vecchio at dusk, Florence",
            "credit": "Martin Falbisoner",
            "license": "CC BY-SA 3.0",
            "page": "https://commons.wikimedia.org/wiki/File:Ponte_Vecchio_at_dusk_1.JPG"
        },
        "w4": {
            "src": "images/w4.jpg",
            "alt": "The Grand Canal and Santa Maria della Salute, Venice",
            "caption": "The Grand Canal and Santa Maria della Salute, Venice",
            "credit": "Wolfgang Moroder. Feel free to use my photos, but please",
            "license": "CC BY-SA 3.0",
            "page": "https://commons.wikimedia.org/wiki/File:Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg"
        },
        "w5": {
            "src": "images/w5.jpg",
            "alt": "Pizza",
            "caption": "Pizza",
            "credit": "Petar Milošević",
            "license": "CC BY-SA 4.0",
            "page": "https://commons.wikimedia.org/wiki/File:Vegetarian_Pizza.jpg"
        },
        "w6": {
            "src": "images/w6.jpg",
            "alt": "Campo de' Fiori market, Rome",
            "caption": "Campo de' Fiori market, Rome",
            "credit": "Jorge Royan",
            "license": "CC BY-SA 3.0",
            "page": "https://commons.wikimedia.org/wiki/File:Mercato_di_Campo_di_Fiori_Open_Market,_Rome_-_1851.jpg"
        },
        "w7": {
            "src": "images/w7.jpg",
            "alt": "Lecco on Lake Como",
            "caption": "Lecco on Lake Como",
            "credit": "Krzysztof Golik",
            "license": "CC BY-SA 4.0",
            "page": "https://commons.wikimedia.org/wiki/File:View_of_Lecco_(4).jpg"
        },
        "w8": {
            "src": "images/w8.jpg",
            "alt": "Val d'Orcia, Tuscany",
            "caption": "Val d'Orcia, Tuscany",
            "credit": "JP Vets",
            "license": "CC BY-SA 4.0",
            "page": "https://commons.wikimedia.org/wiki/File:In_Val_d%27Orcia.jpg"
        },
        "w9": {
            "src": "images/w9.jpg",
            "alt": "Espresso",
            "caption": "Espresso",
            "credit": "Chevanon Photography",
            "license": "CC0",
            "page": "https://commons.wikimedia.org/wiki/File:Close-up_of_espresso_machine_with_two_brown_coffee_cups.jpg"
        },
        "w10": {
            "src": "images/w10.jpg",
            "alt": "Galleria Vittorio Emanuele II, Milan",
            "caption": "Galleria Vittorio Emanuele II, Milan",
            "credit": "Leonhard Lenz",
            "license": "CC0",
            "page": "https://commons.wikimedia.org/wiki/File:Galleria_Vittorio_Emanuele_II_Milano_2022-09-28_14.jpg"
        },
        "w11": {
            "src": "images/w11.jpg",
            "alt": "The Sassi of Matera",
            "caption": "The Sassi of Matera",
            "credit": "Maksimsokolov",
            "license": "CC BY-SA 4.0",
            "page": "https://commons.wikimedia.org/wiki/File:A_panorama_at_Matera_01.jpg"
        },
        "w12": {
            "src": "images/w12.jpg",
            "alt": "Piazza del Campo, Siena",
            "caption": "Piazza del Campo, Siena",
            "credit": "Nono vlf",
            "license": "CC BY-SA 4.0",
            "page": "https://commons.wikimedia.org/wiki/File:Piazza_del_Campo,_Sienne_(Siena).JPG"
        },
        "p2": {
            "src": "images/p2.jpg",
            "alt": "Manarola, Cinque Terre",
            "caption": "Manarola, Cinque Terre",
            "credit": "Timothy A. Gonsalves. Feel free to use my photos, but pl",
            "license": "CC BY-SA 4.0",
            "page": "https://commons.wikimedia.org/wiki/File:Manarola_NW_Cinque_Terre_Sep23_A7C_07233.jpg"
        },
        "p3": {
            "src": "images/p3.jpg",
            "alt": "Tre Cime di Lavaredo from Lake Misurina, Dolomites",
            "caption": "Tre Cime di Lavaredo from Lake Misurina, Dolomites",
            "credit": "kallerna",
            "license": "CC BY-SA 4.0",
            "page": "https://commons.wikimedia.org/wiki/File:Lago_di_Misurina_Tre_Cime_di_Lavaredo_1.jpg"
        },
        "p4": {
            "src": "images/p4.jpg",
            "alt": "Syracuse Cathedral, Sicily",
            "caption": "Syracuse Cathedral, Sicily",
            "credit": "Julian Lupyan",
            "license": "CC0",
            "page": "https://commons.wikimedia.org/wiki/File:Statue_of_Saint_Paul_by_Ignazio_Marabitti_and_Syracuse_Cathedral%27s_Baroque_Facade.jpg"
        },
        "p5": {
            "src": "images/p5.jpg",
            "alt": "Ponte Pietra over the Adige, Verona",
            "caption": "Ponte Pietra over the Adige, Verona",
            "credit": "NorbertNagel",
            "license": "CC BY-SA 4.0",
            "page": "https://commons.wikimedia.org/wiki/File:Ponte_Pietra_over_the_Adige,_Verona_-_2026-09-12_-_01.jpg"
        }
    };
    window.ITALIANO_IMAGES = {
        weeks: Object.fromEntries(Object.entries(P).filter(([k]) => k.startsWith("w")).map(([k, v]) => [Number(k.slice(1)), v])),
        phases: { 1: P.w4, 2: P.p2, 3: P.p3, 4: P.p4, 5: P.p5 },
        fallback: P.p2,
        all: Object.values(P),
    };
})();
