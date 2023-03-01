const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const router = express.Router();
const bDatosLista = require("../../baseDeDatos/bd");
const controladorLista = require("../../rutas/rutasHttp");

router
  .get(controladorLista.urlListaCompleta(), (rep, res) => {
    const sql = 'SELECT  * FROM lista';
    bDatosLista.conexion.query(sql, (error, resultados) => {
      if (error) throw error;
      if (resultados.length > 0) {
        res.json(resultados);
        console.log('200: La solicitud tuvo éxito')
      } else {
        res.send('404: Registro no encontrado')
      }
    });
  })

  .get(controladorLista.urlListaRealizado(), (rep, res) => {
    const sql = 'SELECT  * FROM lista WHERE estado = "realizado"';
    bDatosLista.conexion.query(sql, (error, resultados) => {
      if (error) throw error;
      if (resultados.length > 0) {
        res.json(resultados);
        console.log('200: La solicitud tuvo éxito')
      } else {
        res.send('404: Registro no encontrado')
      }
    });
  })

  .get(controladorLista.urlListaPendiente(), (rep, res) => {
    const sql = 'SELECT  * FROM lista WHERE estado = "pendiente"';
    bDatosLista.conexion.query(sql, (error, resultados) => {
      if (error) throw error;
      if (resultados.length > 0) {
        res.json(resultados);
        console.log('200: La solicitud tuvo éxito')
      } else {
        res.send('404: Registro no encontrado')
      }
    });
  })
  
  .post(controladorLista.urlCrearNuevaTarea(), (rep, res) => {
    const sql = 'INSERT INTO lista SET ?';
    var custumerObj = {
      nombre_tarea: rep.body.nombre_tarea,
      estado: rep.body.estado
    }
    bDatosLista.conexion.query(sql, custumerObj, error => {
      if (error) throw error;
      res.send('201: La solicitud se realizo correctamente.')
    });
  })

  .put(controladorLista.urlActualizarUnaTarea(), (rep, res) => {
    const { id } = rep.params;
    const { nombre_tarea, estado } = rep.body;
    function sql(id, tarea, est) {
      if (Boolean(tarea && est)) {
        return `UPDATE lista SET nombre_tarea = '${tarea}', estado='${est}' WHERE id=${id}`;
      } else if (Boolean(tarea && !est)) {
        return `UPDATE lista SET nombre_tarea = '${tarea}' WHERE id=${id}`;
      }
      return `UPDATE lista SET estado = '${est}' WHERE id=${id}`;
    }
    bDatosLista.conexion.query(sql(id, nombre_tarea, estado), error => {
      if (error) throw error;
      res.send('200: La solicitud se realizo correctamente.')
    });
  })

  .delete(controladorLista.urlEliminarUnaTarea(), (rep, res) => {
    const { id } = rep.params;
    const sql = `DELETE FROM lista WHERE id=${id}`;
    bDatosLista.conexion.query(sql, error => {
      if (error) throw error;
      res.send('200: La solicitud se realizo correctamente.')
    });
  })

module.exports = router;