/* 
Script pentru popularea colectiei "reviews".
*/
use("review-app");

/*
Structura tabelei "reviews" si exemplu de document.
---------------
    REVIEWS
---------------
+ id: int
+ id_user: int
+ id_restaurant: int
+ scor: double
+ comentariu: str
+ data: Date()
*/
db.createCollection("reviews");

/* inserare documente */
db.reviews.insertMany([
    {
        id: 1,
        id_user: 3,
        id_restaurant: 1,
        scor: 3.85,
        comentariu: "Bun calitate pret, decent dpv. al gustului. Clar as recomanda.",
        data: new Date()
    },
    {
        id: 2,
        id_user: 1,
        id_restaurant: 3,
        scor: 4.58,
        comentariu: "Am comandat legendarul Big Tasty, bun ca intotdeauna.",
        data: new Date(),
        
        likes: 100,
        comments: [
            {
                id_user: 3,
                text: "Si eu, la Gara... super bun."
            }
        ]
    },
    {
        id: 3,
        id_user: 2,
        id_restaurant: 3,
        scor: 3.00,
        comentariu: "Bun, dar n-am putut consuma cartofii, sunt la dieta Keto.",
        data: new Date(),
        likes: 112
    }
]);

/* inserare cu insertOne */
db.reviews.insertOne({
    id: 4,
    id_user: 1,
    id_restaurant: 2,
    scor: 4.00,
    comentariu: "Un produs bun, recomand cu incredere.",
    data: new Date()
});

/* update */
db.reviews.updateOne(
    { id: 2 },
    { $set: { scor: 3.25 } }
);

db.reviews.updateOne(
    { id: 2 },
    { $inc: { likes: 1 } }
);

/* delete */
db.reviews.deleteMany({ id_user: 1 });

db.reviews.deleteMany({ likes: { $exists: false }}); 