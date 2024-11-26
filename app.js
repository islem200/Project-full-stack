require("dotenv").config();
const express = require("express");
const connectDb = require("./db/db");
const Genre = require("./models/genre")
const genreRoutes = require("./routes/genreRoutes")


const app = express();
app.use(express.json());

connectDb();

app.use("/api/genre", genreRoutes)

// async function createGenre() {
//     try {
//         await Genre.create([
//             {
//                  name: "Sport"

//             },

//             {
//                 name: "Smart watch "
//             }
           
//         ])
//         console.log("Success")
//     } catch (error) {
//         console.error(error.message)
//     }
    
// };
// createGenre();

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}...`)
})