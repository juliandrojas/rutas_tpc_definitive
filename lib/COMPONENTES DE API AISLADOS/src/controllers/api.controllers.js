import { pool } from "../db/database.js";
export const obtenerListaEmpresas = (req, res) => {
    const queryEmpresas = 'SELECT * FROM pruebas';
    //Ejecutamos la consulta SQL
    pool.query(queryEmpresas, (error, result) => {
      if(error) {
        res.status(500). json({error: 'Error al obtener datos de la API'})
      }
      //Obtenemos las filas de la consulta
      const empresas = result.rows; 
      //Formamos el JSON con los datos
      const responseJSON = { empresas }
      //Enviamos el JSON como respuesta
      res.json(responseJSON);
    })
  }
export const registrarEmpresa = (req, res) => {
  
}