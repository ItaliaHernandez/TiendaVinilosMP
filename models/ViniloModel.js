//CONSULTA DE BASE DE DATOS
// models/ViniloModel.js
const pool = require('../db/conexion');

//OBTIENE TODOS LOS VINILOS
async function getAllVinilos() {
   const [rows] = await pool.query('SELECT * FROM vinilos');
    return rows;
}

//OBTENER VINILOS POR ID
async function getViniloById(id) {
    const [rows] = await pool.query('SELECT * FROM vinilos WHERE id = ?', [id]);
    return rows[0];
}

//CREAR VINILOS
async function createVinilo(vinilo) {
    const { nombre, artista, genero, precio, stock, imagen } = vinilo;

    const [result] = await pool.query(
        'INSERT INTO vinilos (nombre, artista, genero, precio, stock, imagen) VALUES (?, ?, ?, ?, ?, ?)',
        [nombre, artista, genero, precio, stock, imagen]
    );

    return result;
}

//ACTUALIZAR VINILOS
async function updateVinilo(id, vinilo) {
    const { nombre, artista, genero, precio, stock, imagen } = vinilo;

    const [result] = await pool.query(
        'UPDATE vinilos SET nombre=?, artista=?, genero=?, precio=?, stock=?, imagen=? WHERE id=?',
        [nombre, artista, genero, precio, stock, imagen, id]
    );

    return result;
}

//ELIMINAR VINILOS
async function deleteVinilo(id) {
    const [result] = await pool.query(
        'DELETE FROM vinilos WHERE id=?',
        [id]
    );

    return result;
}

//IMPORTA LAS FUNCIONES PARA USARLAS EN OTRO ARCHIVO
module.exports = {
    getAllVinilos,
    getViniloById,
    createVinilo,
    updateVinilo,
    deleteVinilo
};