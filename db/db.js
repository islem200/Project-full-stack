const mongoose = require('mongoose')
async function connectDb(){
    try {
        await mongoose.connect("mongodb://localhost/commerce");
        console.log('We Successfully Connected to mongodb...')
    } catch (error) {
        console.error('We Could not connect to mongodb', error.message)
        
    }
    
}
module.exports = connectDb