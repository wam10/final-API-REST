const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mysql = require('mysql');
app.use(bodyParser.json());

//const {MYSQL_USER, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_DB, DB_PORT} = process.env; 

const conexion = mysql.createConnection({
    host: "localhost",
    user: "wilmeram",
    password: "MySQL051021*",
    database: "administrar_tareas" 
});

conexion.connect((error) => {
    if (error) throw "500: Error del servidor"
    console.log('200: Conexión exitosa') 
});

module.exports = {
    conexion
}