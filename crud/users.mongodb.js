/* 
Script pentru popularea colectiei "users".
*/
use("review-app");

/*
Structura tabelei "users" si exemplu de document.
-------------
    USERS
-------------
+ id: int
+ nume: str
+ preunme: str
+ email: str
+ preferinte_culinare: list[str] - ex: ["asiatica", "pizza", "paste", "vegetarian", ...] 
+ oras: str
*/
db.createCollection("users");

/* inserare documente in colectie */
db.users.insertMany([
    {
        id: 1,
        nume: "Neacșa Dragoș",
        email: "dragos.neacsa@sutadegrame.ro",
        preferinte_culinare: [
            "pizza",
            "pasta",
            "carbonara",
            "panini",
            "hamburger",
            "street-food",
            "fast-food",
            "home-made food"
        ],
        oras: "Bucuresti"
    },
    {
        id: 2,
        nume: "Lenghel Ionuț",
        email: "ionut.lenghel@imiplacesamananc.ro",
        preferinte_culinare: [
            "shaorma",
            "pui",
            "burger",
            "fast-food"
        ],
        oras: "Oradea"
    },
    {
        id: 3,
        nume: "Adrian Vochin",
        email: "adrian.doctorul@gmail.com",
        preferinte_culinare: [
            "cake",
            "sweets",
            "panini",
            "street-food",
            "organic food",
            "pastry",
        ],
        oras: "București"
    }
]);

/* inserare cu insertOne */
db.users.insertOne(
    {
        id: 4,
        nume: "Gojira",
        email: "gojiragojira@gmail.com",
        preferinte_culinare: [
            "pizza",
            "pasta",
            "carbonara",
            "panini",
            "hamburger",
            "street-food",
            "fast-food",
            "home-made food"
        ],
        oras: "Țăndărei"
    },
);

/* update */
db.users.updateMany(
    { oras: "Bucuresti" },
    { $set: { oras: "București" } }
);

db.users.updateOne(
    { id: 1 },
    { $push: { preferinte_culinare: "supa" } }
);

db.users.updateOne(
    { id: 3 },
    { $set: { preferinte_culinare: ["desert", "ciocolata neagra", "fructe"] } }
);

/* delete */
db.users.deleteOne({ id: 2 });

db.users.deleteMany({ preferinte_culinare: "fast-food" });