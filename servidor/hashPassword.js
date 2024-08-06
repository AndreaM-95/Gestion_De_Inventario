const mysql = require('mysql2');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'testDB',
    password: '0516',
    database: 'establecimiento'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado a la base de datos');

    // Seleccionar todos los usuarios de la base de datos
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) throw err;

        results.forEach(user => {
            // Hashear la contraseña del usuario
            bcrypt.hash(user.contrasena, saltRounds, (err, hash) => {
                if (err) throw err;

                console.log(`Hash de la contraseña para el usuario ${user.usuario}:`, hash);

                // Actualizar la contraseña del usuario en la base de datos con el hash generado
                const query = 'UPDATE usuarios SET contrasena = ? WHERE usuario = ?';
                db.query(query, [hash, user.usuario], (err, result) => {
                    if (err) throw err;
                    console.log(`Contraseña actualizada con éxito para el usuario ${user.usuario}`);
                });
            });
        });
    });
});