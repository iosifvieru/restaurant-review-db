/* 
Script pentru popularea colectiei "restaurants".
*/
use("review-app");

/*
Structura tabelei "restaurants" si exemplu de document.
-------------------
    RESTAURANTS
-------------------
+ id
+ nume
+ tip_bucatarie: list[str] - (ex: [italiana])
+ adresa: {
    strada: str,
    oras: str,
    cod_postal: str 
}
+ program: {
    "luni": [{open: "", close: ""}],
    "marti": [],
    "miercuri": [],
    "joi": [],
    "vineri": [],
    "sambata": [],
    "duminica": []
}
+ meniu: [
    { 
        denumire_produs: str,
        pret: double,
        imagini: list[str]
        ...
    },
    ...
]
+ nr_telefon: str
*/
db.createCollection("restaurants");

/* inserare documente */
db.restaurants.insertMany([
    {
        id: 1,
        nume: "Suta de grame",
        tip_bucatarie: [
            "specific italian",
        ],
        adresa: {
            strada: "Strada Negustori 21",
            oras: "București",
            cod_postal: "030167"
        },
        program: {
            "luni": [],
            "marti": [],
            "miercuri": [{open: "08:30", close: "20:30"}],
            "joi": [{open: "08:30", close: "20:30"}],
            "vineri": [{open: "08:30", close: "20:30"}],
            "sambata": [{open: "08:30", close: "20:30"}],
            "duminica": [{open: "08:30", close: "20:30"}]
        },
        meniu: [
            {
                denumire_produs: "Panini Roma",
                pret: 35,
                imagini: [
                    "./images/sutadegrame/panini-roma-1.png",
                    "./images/sutadegrame/panini-roma-2.png"
                ]
            },
            {
                denumire_produs: "Panini Cotto",
                pret: 35,
                imagini: [
                    "./images/sutadegrame/panini-cotto-1.png",
                ]
            },
            {
                denumire_produs: "Panini Picante",
                pret: 35,
                imagini: [
                    "./images/sutadegrame/panini-picante-1.png",
                    "./images/sutadegrame/panini-picante-2.png",
                    "./images/sutadegrame/panini-picante-3.png",
                ]
            }
        ],
    },
    {    
        id: 2,
        nume: "JUD Shaorma Arabeasca",
        tip_bucatarie: [
            "specific arabesc",
        ],
        adresa: {
            strada: "Strada Silvestru 1",
            oras: "Iași",
            cod_postal: "700090"
        },
        program: {
            "luni": [{open: "9:30", close: "22:30"}],
            "marti": [{open: "9:30", close: "22:30"}],
            "miercuri": [{open: "9:30", close: "22:30"}],
            "joi": [{open: "9:30", close: "22:30"}],
            "vineri": [{open: "9:30", close: "22:30"}],
            "sambata": [{open: "10:00", close: "22:30"}],
            "duminica": [{open: "10:00", close: "22:30"}]
        },
        meniu: [
            {
                denumire_produs: "Shaorma arabeasca",
                pret: 30,
                imagini: [
                    "./images/jud/sa-1.png",
                    "./images/jud/sa-2.png"
                ],
            },
            {
                denumire_produs: "Shaorma mixt",
                pret: 31,
                imagini: [
                    "./images/jud/samixt-1.png",
                ]
            },
            {
                denumire_produs: "Pepsi cola",
                pret: 9,
                informatii_suplimentare: "Garantie SGR"
            }
        ]
    },
    {   
        id: 3,
        nume: "McDonald's",
        tip_bucatarie: [
            "fast-food",
            "specific american",
        ],
        adresa: {
            strada: "Piața Gării nr. 4",
            oras: "Iași",
            cod_postal: "700090"
        },
        program: {
            "luni": [{open: "7:00", close: "00:00"}],
            "marti": [{open: "7:00", close: "00:00"}],
            "miercuri": [{open: "7:00", close: "00:00"}],
            "joi": [{open: "7:00", close: "00:00"}],
            "vineri": [{open: "7:00", close: "00:00"}],
            "sambata": [{open: "7:00", close: "00:00"}],
            "duminica": [{open: "7:00", close: "00:00"}]
        },
        meniu: [
            {
                denumire_produs: "Big Tasty",
                pret: 20.50,
                imagini: [
                    "./images/mcdo/big-tasty-1.png",
                ],
            },
            {
                denumire_produs: "Mc Combo",
                pret: 9.90,
                imagini: [
                    "./images/mcdo/mc-combo-1.png",
                ]
            },
        ],
        nr_telefon: "0372 701 047"
    }
])