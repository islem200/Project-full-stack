
const Genre = require("../models/genre")
const validateGenre = require('../utils/validateGenre');

const getAllGenre = async (req, res) => {
    try {
        const genre = await Genre.find();
        res.status(200).send(genre)
    } catch (error) {
        res.status(500).send('Something went wrong', error.message)
        
    }
};

const getGenre = async (req, res) => {

    try {
        const {id}= req.params;
        const genre = await Genre.findById(id);

        if(!genre){
            return res.status(404).send("We could not find item...")

        }

        return res.status(200).send(genre)
        

    } catch (error) {
        res.status(500).send("Something went wrong", error.message)
        
    }
};

const createGenre = async (req, res) => {
    const { error } = validateGenre (req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);

    }

    let genre = new Genre({
        name: req.body.name,
    });

    genre = await genre.save()
    res.send(genre)

}

const updateGenre = async (req, res) => {
    try {
         const id = req.params.id;
         const updateData = req.body;
         const genre = await Genre.findByIdAndUpdate(id, updateData, {new: true});
         res.send(genre)
    } catch (error) {
        console.log("there is a problem", error.message)
        
    }
    
}

const deleteGenre = async (req, res) => {
    try {
       const id = req.params.id;
       const genre = await Genre.findByIdAndDelete(id);
       res.status(200).send(genre)
    } catch (error) {
        res.status(500).send({message:"Internal Server Error", error: error.message})
        
    }
    
}

module.exports = {
    getAllGenre,
    getGenre,
    createGenre,
    updateGenre,
     deleteGenre,
}