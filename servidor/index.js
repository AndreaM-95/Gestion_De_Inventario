const express = require("express");
const app = express();
//const mysql = require("mysql");
const cors = require("cors");

app.use(cors());    //Antes de que renderice, use cors
app.use(express.json());

const mysql = require('mysql2'); // Usa mysql2 que soporta caching_sha2_password

const db = mysql.createConnection({
    host: "localhost",
    user: "testDB",
    password: "0516",
    database: "productos"
});

db.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + db.threadId);
});


app.post("/crear", (req, res) => {
    const { producto, gramaje, presentacion, cantidad } = req.body;

    // Primero, busca si ya existe un producto con las mismas características
    db.query(
        'SELECT * FROM productos WHERE producto = ? AND gramaje = ? AND presentacion = ?',
        [producto, gramaje, presentacion],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error en el servidor");
            } else if (result.length > 0) {
                // Si el producto ya existe, actualiza la cantidad
                const nuevoCantidad = result[0].cantidad + cantidad;
                db.query(
                    'UPDATE productos SET cantidad = ? WHERE id = ?',
                    [nuevoCantidad, result[0].id],
                    (err, result) => {
                        if (err) {
                            console.log(err);
                            res.status(500).send("Error en el servidor");
                        } else {
                            res.send("Producto actualizado con éxito");
                        }
                    }
                );
            } else {
                // Si el producto no existe, crea uno nuevo
                db.query(
                    'INSERT INTO productos (producto, gramaje, presentacion, cantidad) VALUES (?, ?, ?, ?)',
                    [producto, gramaje, presentacion, cantidad],
                    (err, result) => {
                        if (err) {
                            console.log(err);
                            res.status(500).send("Error en el servidor");
                        } else {
                            res.send("Producto registrado con éxito");
                        }
                    }
                );
            }
        }
    );
});

app.get("/productos", (req, res)=>{            //Solicitud y respuesta
    db.query(
        'SELECT * FROM productos', 
        (err, result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        }
    );
});

app.put("/actualizar", (req, res) => {
    const { id, cantidad } = req.body;

    db.query(
        'UPDATE productos SET cantidad = ? WHERE id = ?',
        [cantidad, id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error en el servidor");
            } else {
                res.send("Cantidad actualizada con éxito");
            }
        }
    );
});

app.delete("/eliminar/:id", (req, res) => {
    const id = req.params.id;

    db.query('DELETE FROM productos WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error en el servidor");
        } else {
            res.send("Producto eliminado con éxito");
        }
    });
});


app.listen(3001, ()=>{
    console.log("Corriendo en el puerto 3001");
});

//CREATE USER 'testDB'@'localhost' IDENTIFIED WITH mysql_native_password BY '0516';