const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mysql = require('mysql');
app.use(bodyParser.json());

const conexion = mysql.createConnection({
    host: "localhost",
    user: "wilmeram",
    password: "MySQL051021*",
    database: "administrar_tareas" 
});

conexion.connect((error) => {
    if (error) throw error;
    console.log('200: Conexión exitosa');
});

module.exports = {
    conexion
}