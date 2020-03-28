// const express = require("express");
// const router = express.Router();
// const db = require("../db");
// const Animal = require("../modules/products/animal.model");

// // Get all animals
// router.get("/", (req, res) => {
//     Animal.findAll()
//         .then(animal => {
//             console.log(animal);
//             res.send("200")
//         })
//         .catch(err => {
//             console.log(err);
//         })
//     }
// )

// // Add animal

// router.get("/add", (req, res) => {
//     const data = {
//         "id": 3,
//         "species": "Dog",
//         "name": "lucky",
//         "price": 1800,
//         "gender": "male",
//         "image": null,
//         "weight": 30,
//         "birth_date": 1553393600000,
//         "color": "golden",
//         "breed": "Golden retrieverel",
//         "is_sterile": false,
//         "hair": "long-coated"
//     }

//     let {id, species, name, price, gender, image, weight, birth_date, color, breed, is_sterile, hair} = data;

//     // Insert into the Table
//     Animal.create({
//         id, species, name, price, gender, image, weight, birth_date, color, breed, is_sterile, hair
//     })
//         .then(animal => res.redirect("/animals"))
//         .catch(err => {console.log(err)})
// })

// module.exports = router;