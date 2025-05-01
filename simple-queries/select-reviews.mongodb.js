/*
Cautari simple pe reviews.
*/
use('review-app');

/* interogarea review-urilor */
db.reviews.find({});

/* interogarea review-urilor care au like-uri. */
db.reviews.find({
    "likes": { $ne: null } 
});

/* interogarea review-urilor cu scorul > 4. */
db.reviews.find({
    "scor": {$gt: 4.0}
});

/* interogarea review-urilor de la userul cu id 1.*/
db.reviews.find({
    "id_user": 1
});

/* interogarea review-urilor de la restauratnul cu id 3. */
db.reviews.find({
    "id_restaurant": 3
});

/* cautare paginata pentru reviews */
var no_per_page = 2;
var page_nr = 1;
const skip_count = (page_nr - 1) * no_per_page;

db.reviews.find({}).skip(skip_count).limit(no_per_page);