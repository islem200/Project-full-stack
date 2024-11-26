const express = require("express");
const router = express.Router();
const Genre = require("../models/genre")
const{
    getAllGenre,
    getGenre,
    createGenre,
    updateGenre,
     deleteGenre,
} = require("../controllers/genreControllers")

router.get("/", getAllGenre);
 router.get("/:id", getGenre);
 router.post("/", createGenre);
 router.put("/:id", updateGenre);
router.delete("/:id", deleteGenre)

module.exports = router