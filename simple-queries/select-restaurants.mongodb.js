/*
Cautari simple pe restaurants.
*/
use('review-app');

/* interogare tuturor restaurantelor. */
db.restaurants.find({});

/* interogarea restaurantelor din orasul Iași */
db.restaurants.find(
    {
        "adresa.oras": "Iași"
    }
);

/* interogarea restaurantelor din orasul Iasi afisand doar numele si programul. */
db.restaurants.find(
    {
        "adresa.oras": "Iași"
    },
    {
        "nume": 1,
        "program": 1
    }
);

/* interogarea restaurantelor si sortarea lor pe nume alfabetic. */
db.restaurants.find({}).sort({"nume": 1});

/* interogarea restaurantelor pe baza codului postal */
db.restaurants.find({
    "adresa.cod_postal": "700090"
});

/* cautare paginata pentru restaurante */
var no_per_page = 2;
var page_nr = 1;
const skip_count = (page_nr - 1) * no_per_page;

db.restaurants.find({}).skip(skip_count).limit(no_per_page);