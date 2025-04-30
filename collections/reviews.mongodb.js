/* 
Script pentru popularea colectiei "reviews".
*/
use("review-app");

/*
Structura tabelei "reviews" si exemplu de document.
---------------
    REVIEWS
---------------
- _id
+ id_user: int
+ id_restaurant: int
+ scor: double
+ comentariu: str
+ data: Date()
*/
db.createCollection("reviews");

/* inserare documente */

