use('review-app');

/* cursor pt. a parcurge documentele. */
var cursor = db.reviews.find({});

while(cursor.hasNext()){
    var review = cursor.next();

    console.log(review);
}

/* cursor pt. a calcula nr total de like uri */
var cursor = db.reviews.find({});
var acc = 0;

while(cursor.hasNext()){
    var review = cursor.next();
    if(review["likes"] != null){
        acc += review["likes"];
    }
}
console.log("nr total de like uri: ", acc);

/* cursor pt. a calcula rating-ul mediu. */

var cursor = db.reviews.find({"scor": {$gt: 0}});
var acc = 0;
var counter = 0;

while(cursor.hasNext()){
    var review = cursor.next();
    
    /* check sa nu fie null, desi find-ul filtreaza deja. */
    if(review["scor"] != null){
        acc += review["scor"];
        counter += 1;
    }
}
console.log("rating mediu: ", acc / counter);

/* 
    calculam nr total de produse din meniu
    si sortam descrescator    
*/
db.restaurants.aggregate([
    {
        $addFields: {
            nr_produse: { $size: "$meniu" }
        }
    },
    {
        $project: {
            _id: 0,
            nume: 1,
            nr_produse: 1
        }
    },
    {
        $sort: { nr_produse: -1 }
    }
]);

/*
    calculam pretul mediu al meniului pe fiecare restaurant
*/
db.restaurants.aggregate([
    {
        $unwind: "$meniu"
    },
    {
        $group: {
            _id: "$nume",
            pret_mediu: { $avg: "$meniu.pret" }
        }
    },
    {
        $project: {
            _id: 0,
            restaurant: "$_id",
            pret_mediu: { $round: ["$pret_mediu", 2] }
        }
    },
    {
        $sort: { pret_mediu: -1 }
    }
]);

/*
    afisam restaurantele deschise duminica si orarul din acea zi.
*/
db.restaurants.find({
    "program.duminica.0.open": { $exists: true }
}, {
    nume: 1,
    "program.duminica": 1
});

/* 
    afisam primii 3 utilizatori in functie de nr de preferinte 
*/
db.users.aggregate([
    {
        $addFields: {
            total_preferinte: { $size: "$preferinte_culinare" }
        }
    },
    {
        $sort: { total_preferinte: -1 }
    },
    {
        $limit: 3
    },
    {
        $project: {
            _id: 0,
            nume: 1,
            email: 1,
            total_preferinte: 1
        }
    }
]);

/* afisam nr total de utilizatori pe oras */
db.users.aggregate([
    {
        $group: {
            _id: "$oras",
            total_utilizatori: { $sum: 1 }
        }
    },
    {
        $sort: { total_utilizatori: -1 }
    }
]);