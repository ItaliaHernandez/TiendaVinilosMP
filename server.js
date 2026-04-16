//LEVANTA SERVIDOR, CONECTA RUTAS Y BD, RECIBE PETICONES Y RESPONDE AL FRONT
// server.js

//CARGA LAS VARIABLES DE ENTORNO DESDE EL ARCHIVO .env
require('dotenv').config({ override: true });

const express = require('express'); //IMPORTA EXPRESS
const cors = require('cors');       //IMPORTA CORS (PERMITE PETICIONES DESDE ANGULAR)

//IMPORTA LAS RUTAS DE VINILOS
const viniloRoutes = require('./routes/ViniloRoutes');

//IMPORTA LA CONEXIÓN A LA BASE DE DATOS
const pool = require('./db/conexion');

const app = express(); //CREA LA APP DE EXPRESS

//DEFINE EL PUERTO
const PORT = process.env.PORT || 3000;

//MIDDLEWARES
app.use(cors());           //PERMITE CONEXIÓN ENTRE FRONTEND Y BACKEND
app.use(express.json());   //PERMITE RECIBIR DATOS EN FORMATO JSON

const path = require('path');

// SERVIR IMÁGENES DESDE /uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//RUTA BASE
app.get('/', (req, res) => {
  res.send('API Tienda de Vinilos funcionando correctamente');
});

//RUTAS PRINCIPALES
app.use('/api/vinilos', viniloRoutes);

//FUNCIÓN PARA PROBAR LA CONEXIÓN A LA BASE DE DATOS
async function testConnection() {
  try {
    //EJECUTA UNA CONSULTA SIMPLE PARA VERIFICAR QUE MYSQL FUNCIONA
    const [rows] = await pool.query('SELECT 1 + 1 AS result');

    console.log('Conexión a la BD exitosa. Resultado:', rows[0].result);
  } catch (error) {
    console.error('Error al conectar con la BD:', error.message);
  }
}

//INICIA EL SERVIDOR
app.listen(PORT, async () => {
  console.log(`Servidor corriendo en la nube`);
  console.log('Tienda de Vinilos Backend activo');

  await testConnection(); //PRUEBA LA CONEXIÓN AL ARRANCAR
});