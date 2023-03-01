const express = require('express');
const v1RutasDeREST = require("./src/v1/controladores/controladoresRest");

const app = express();
const PORT = process.env.PORT || 5021;
app.use(express.json());
app.use("/api/v1", v1RutasDeREST);

//workouts lo vamos a quitar para que quede /api/v1

app.listen(PORT, ()=>{
    console.log(`🚀Server listening on port ${PORT}`) 
});