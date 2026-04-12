//CONTROLADOR DE RUTAS (INTERMEDIARIO ENTRE ANGULAR Y BASE DE DATOS)
// controllers/ViniloController.js
const ViniloModel = require('../models/ViniloModel');                    //IMPORTA EL MODELO DE CONSULTAS A LA BD

//OBTENER TODOS LOS VINILOS
//SE DEFINE UN CONTROLADOR PARA LA RUTA GET /api/vinilos
const getVinilos = async (req, res) => {
  try {
    const vinilos = await ViniloModel.getAllVinilos();                 //LLAMA AL MODELO PARA OBTENER TODOS LOS VINILOS DE LA BD
    res.json(vinilos);                                                 //DEVUELVE LOS DATOS EN FORMATO JSON 
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener vinilos' });     //SI HAY ERROR, RESPONDE CON STATUS 500
  }
};


//OBTENER UN VINILO POR ID
//SE DEFINE UN CONTROLADOR PARA LA RUTA GET /api/vinilos/:id
const getViniloById = async (req, res) => {
  try {
    const vinilo = await ViniloModel.getViniloById(req.params.id);      //OBTIENE EL ID DESDE LA URL Y CONSULTA EN LA BD
    res.json(vinilo);                                                   //DEVUELVE EL VINILO EN FORMATO JSON
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener vinilo' });       //MANEJO DE ERROR
  }
};


//CREAR UN NUEVO VINILO
//SE DEFINE UN CONTROLADOR PARA LA RUTA POST /api/vinilos
const createVinilo = async (req, res) => {
  try {
    await ViniloModel.createVinilo(req.body);                           //TOMA LOS DATOS DEL BODY (FORMULARIO) Y LOS GUARDA EN LA BD
    res.json({ mensaje: 'Vinilo agregado' });                           //RESPUESTA EXITOSA
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear vinilo' });         //SI FALLA, MANDA ERROR
  }
};


//ACTUALIZAR UN VINILO
//SE DEFINE UN CONTROLADOR PARA LA RUTA PUT /api/vinilos/:id
const updateVinilo = async (req, res) => {
  try {
    await ViniloModel.updateVinilo(req.params.id, req.body);           //USA EL ID DE LA URL Y LOS NUEVOS DATOS DEL BODY
    res.json({ mensaje: 'Vinilo actualizado' });                       //RESPUESTA DE ÉXITO
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar vinilo' });   //MANEJO DE ERROR
  }
};


//ELIMINAR UN VINILO
//SE DEFINE UN CONTROLADOR PARA LA RUTA DELETE /api/vinilos/:id
const deleteVinilo = async (req, res) => {
  try {
    await ViniloModel.deleteVinilo(req.params.id);                  //ELIMINA EL VINILO USANDO EL ID
    res.json({ mensaje: 'Vinilo eliminado' });                      //CONFIRMA ELIMINACIÓN
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar vinilo' });  //MANEJO DE ERROR
  }
};


//EXPORTA TODOS LOS CONTROLADORES PARA USARLOS EN LAS RUTAS
module.exports = {
  getVinilos,
  getViniloById,
  createVinilo,
  updateVinilo,
  deleteVinilo
};