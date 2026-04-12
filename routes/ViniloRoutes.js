//DEFINICION DE URL DE LAS APIS Y QUE FUNCION SE EJECUTA
// routes/ViniloRoutes.js
const express = require('express');
const router = express.Router();

//IMPORTA LAS FUNCIONES DEL CONTROLADOR
const {
    getVinilos,
    getViniloById,
    createVinilo,
    updateVinilo,
    deleteVinilo
} = require('../controllers/ViniloController');

//DEFINICION DE LAS RUTAS
router.get('/', getVinilos);           //OBTENER TODOS
router.get('/:id', getViniloById);     //OBTENER POR ID
router.post('/', createVinilo);        //CREAR
router.put('/:id', updateVinilo);      //ACTUALIZAR
router.delete('/:id', deleteVinilo);   //ELIMINAR

module.exports = router;