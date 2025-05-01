/*
Cautari simple pe users
*/
use('review-app');

/* interogarea tuturor utilizatorilor */
db.users.find({

});

/* cautarea utilizatorilor care au "fast-food" in preferinte culinare. */
db.users.find({
    "preferinte_culinare": {$in: ["fast-food"]}
});

/* interogarea utilizatorilor din orasul "Bucuresti" sau "București". */
db.users.find({
    $or: [
        {"oras": "Bucuresti"},
        {"oras": "București"}
    ]
});

/* interogare afisand doar id, nume si email. */
db.users.find({},
    {
        "id": 1,
        "nume": 1,
        "email": 1
    }
);

/* interogare sortata aflabetic dupa nume. */
db.users.find({

}).sort({"nume": 1});

/* interogare sorata dupa nume, alfabetic, primii 3. */
db.users.find({}).sort({"nume": 1}).limit(3);

/* interogare din orasul Oradea, sortat alfabetic descrescator */
db.users.find({
    "oras": "Oradea"
}).sort({"nume": -1});

/* cautare paginata pentru users */
var no_per_page = 2;
var page_nr = 1;
const skip_count = (page_nr - 1) * no_per_page;

db.users.find({}).skip(skip_count).limit(no_per_page);