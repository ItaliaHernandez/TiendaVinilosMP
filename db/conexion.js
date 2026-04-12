//CONEXION A BASE DE DATOS 
// db/conexion.js
const mysql = require('mysql2/promise');        //IMPORTA LA LIBRERIA 
const pool = mysql.createPool({                 //SE CREA POOL CONEXIONES(GRUPO DE CONEXIONES LISTAS PARA CUANDO SE NECESITEN)
    //UTILIZAMOS VARIABLES DE ENTORNO EN LUGAR DE DATOS DIRECTOS
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT,

    waitForConnections: true,                   //VERIFICA SI LAS CONEXIONES ESTAN OCUPADAS 
    connectionLimit: 10,                        //MAXIMO DE CONEXIONES SIMULTANEAS
    queueLimit: 0                               //CUANTAS PETICIONES PUEDEN ESPERAR EN FILA
});

module.exports = pool;                          //EXPORTACION PARA USARLO EN TODO EL BACK 