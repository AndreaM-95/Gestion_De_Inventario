import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2'
import InicioSesion from "./Componentes/loguin";
import Inventario from "./Componentes/inventario";

function App() {
  const [producto, setProducto] = useState("");
  const [gramaje, setGramaje] = useState("");
  const [presentacion, setPresentacion] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [productosLista, setProductos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editCantidad, setEditCantidad] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const agregar = () => {
    axios.post("http://localhost:3001/crear", {
      producto: producto,
      gramaje: gramaje,
      presentacion: presentacion,
      cantidad: cantidad
    }).then(() => {
      limpiarCampos();
      listar();
      Swal.fire({
        title:'<strong>Registro exitoso</strong>',
        html:'<i>El producto ' + producto + ' ha sido registrado</i>',
        icon: 'success',
        confirmButtonColor: "#272323",
        timer: 3000
      });
    }).catch((error) => {
      console.error("Hubo un error al registrar el producto: ", error);
      Swal.fire({
        title:'<strong>Oops..</strong>',
        html:'<i>No se pudo registrar el producto</i>',
        icon: 'error',
        timer: 3000
      });
    });
  }

  const listar = () => {
    axios.get("http://localhost:3001/productos").then((response) => {
      const sortedProductos = response.data.sort((a, b) => b.cantidad - a.cantidad);
      setProductos(sortedProductos);
    });
  }

  const actualizarCantidad = (id) => {
    axios.put("http://localhost:3001/actualizar", {
      id: id,
      cantidad: editCantidad
    }).then(() => {
      listar();
      setEditId(null);
      Swal.fire({
        title:'<strong>Cantidad actualizada</strong>',
        html:'<i>El producto ' + producto + ' se ha actualizado</i>',
        icon: 'success',
        confirmButtonColor: "#272323",
        timer: 3000
      });
    }).catch((error) => {
      console.error("Hubo un error al actualizar la cantidad: ", error);
      Swal.fire({
        title:'<strong>Oops..</strong>',
        html:'<i>Hubo un error al actualizar la cantidad</i>',
        confirmButtonColor: "#272323",
        icon: 'error',
        timer: 3000
      });
    });
  }

  const eliminarProducto = (id) => {
    Swal.fire({
      title: "Confirmar?",
      text: "Esta acción es irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#272323",
      cancelButtonColor: "#272323",
      confirmButtonText: "Si, eliminar."
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3001/eliminar/${id}`)
          .then(() => {
            listar();
          })
          .catch((error) => {
            console.error("Hubo un error al eliminar el producto: ", error);
              Swal.fire({
                title:'<strong>Oops..</strong>',
                html:'<i>Hubo un error al eliminar el producto</i>',
                icon: 'error',
                confirmButtonColor: "#272323",
              });
          });

        Swal.fire({
          title: "Eliminado!",
          text: "El producto se ha eliminado.",
          icon: "success",
          confirmButtonColor: "#272323"
        });
      }
    });
  }
  

  const limpiarCampos = () => {
    setProducto("");
    setGramaje("");
    setPresentacion("");
    setCantidad("");
  }

  const login = () => {
    axios.post("http://localhost:3002/login", {
      usuario: usuario,
      contrasena: contrasena
    }).then((response) => {
      if (response.data.success) {
        setIsAuthenticated(true);
      } else {
        Swal.fire({
          title: "Oops..",
          text: response.data.message,
          icon: "error",
          confirmButtonColor: "#272323"
        });
      }
    }).catch((error) => {
      console.error("Hubo un error al intentar ingresar: ", error);
      Swal.fire({
        title: "Oops..",
        text: "Hubo un error al intentar ingresar",
        icon: "info",
        confirmButtonColor: "#272323"
      });
    });
  }

  const logout = () => {
    setIsAuthenticated(false);
    setUsuario("");
    setContrasena("");
  }

  useEffect(() => {
    if (isAuthenticated) {
      listar();
    }
  }, [isAuthenticated]);

  const getColorForCantidad = (cantidad) => {
    return cantidad <= 3 ? "text-orange-400	font-semibold" : "text-slate-200";
  }

  if (!isAuthenticated) {
    return (
      <InicioSesion 
        usuario = {usuario}
        setUsuario = {setUsuario}
        contrasena = {contrasena}
        setContrasena={setContrasena}
        login = {login}
      ></InicioSesion>
    );
  }

  return (
    <div className="App text-center">
      <Inventario
        producto = {producto}
        presentacion = {presentacion}
        gramaje = {gramaje}
        cantidad = {cantidad}
        logout = {logout}
        setProducto = {setProducto}
        setGramaje = {setGramaje}
        setPresentacion = {setPresentacion}
        setCantidad = {setCantidad}
        agregar = {agregar}
        productosLista = {productosLista}
        getColorForCantidad = {getColorForCantidad}
        editId = {editId}
        editCantidad = {editCantidad}
        setEditCantidad = {setEditCantidad}
        actualizarCantidad = {actualizarCantidad}
        setEditId = {setEditId}
        eliminarProducto = {eliminarProducto}
      ></Inventario>  
    </div>
  );
}

export default App;
