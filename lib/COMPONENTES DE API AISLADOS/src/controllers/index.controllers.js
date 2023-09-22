import { pool } from "../db/database.js";

export const home = (req, res) => {
  res.render('home');
}


export const queryEmpresasAPI = (req, res) => {
  const queryEmpresas = 'SELECT * FROM empresas';
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
export const indexHTML = (req, res) => {
  res.render('home');
}
export const uploadImage = (req, res) => {
  console.log(req.file);
  res.send('UPLOAD IMAGE');
}
export const login = (req, res) => {
  res.render('login.ejs');
}