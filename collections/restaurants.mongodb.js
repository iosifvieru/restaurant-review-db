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
    },
    ...
]
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
            "sambata": [{ open: "08:30", close: "20:30" }],
            "duminica": [{ open: "08:30", close: "20:30" }]
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
        ]
    }
])