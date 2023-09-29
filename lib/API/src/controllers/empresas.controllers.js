//Importamos la conexión a la base de datos
import { pool } from './../db/database.js';
export const cargarDatosEmpresa = (req, res) => {
  res.render('cargarDatosEmpresa');
}
export const cargarInformacion = async (req, res) => {
  try {
    const { nombreempresa } = req.body;
    console.log(nombreempresa);
    // Construye la URL de la imagen utilizando la ruta local del servidor
    const imagenUrl = `http://192.168.0.101:3000/uploads/${req.file.filename}`;
    console.log("imagen url", imagenUrl);
    // Registra la información en la base de datos
    // Registra al nuevo empleado en la base de datos
    const crearEmpresaQuery = 'INSERT INTO pruebas (nombreempresa, imagenempresa) VALUES ($1, $2) RETURNING *';
    const result = await pool.query(crearEmpresaQuery, [nombreempresa, imagenUrl]);
    // Envía la respuesta JSON con el nombre de la empresa y la URL de la imagen
    res.json({
      nombreempresa,
      imagenUrl,
      idEmpresa: result.rows[0].idempresa  // Agrega cualquier otra información que necesites enviar
    });
    res.render('partials/alerts/crearEmpresa.ejs');

  } catch (error) {
    // Manejo de errores
    console.error('Error al registrar en la base de datos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}
export const mostrarDatosEmpresa = async (req, res) => {
  try {
    const queryEmpresas = 'SELECT * FROM pruebas';
    // Ejecutamos la consulta SQL
    const result = await pool.query(queryEmpresas);

    // Obtenemos las filas de la consulta
    const empresas = result.rows;

    // Formamos el JSON con los datos
    const responseJSON = { empresas };

    // Enviamos el JSON como respuesta
    res.json(responseJSON);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos de la API' });
  }
};
