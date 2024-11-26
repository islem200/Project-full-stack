const { required } = require('joi')
const mongoose = require ('mongoose')

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true, //ina7i espace (le espace 9ablo w le ba3do)
        minLength: 5,
        maxLength: 50,
        required: true
    }
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;