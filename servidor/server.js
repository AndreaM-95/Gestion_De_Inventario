const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: "testDB",
    password: "0516",
    database: 'establecimiento'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos');
});

// Ruta de autenticación
app.post('/login', (req, res) => {
  const { usuario, contrasena } = req.body;
  db.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      const user = results[0];
      bcrypt.compare(contrasena, user.contrasena, (err, result) => {
        if (err) throw err;
        if (result) {
          res.send({ success: true });
        } else {
          res.send({ success: false, message: 'Contraseña incorrecta' });
        }
      });
    } else {
      res.send({ success: false, message: 'Usuario no encontrado' });
    }
  });
});

app.listen(3002, () => {
  console.log('Servidor corriendo en el puerto 3002');
});
