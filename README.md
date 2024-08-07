<h1 align="center">📝 Gestion_De_Inventario 📝</h1>
<h2 align="center">✅ Proyecto final - Talento TECH ✅</h2>
<h4 align="center">⚙️ React + Tailwind + Node JS + MySQL ⚙️</h4> 

## 🎯 Objetivo del proyecto
<p>Crear un sistema para que la administradora de un café pueda registrar y gestionar los pedidos de bolsas de café, con una visualización clara de los productos disponibles y alertas sobre los productos que se están agotando.</p><br>

`Metas`
1. Implementar un sistema de logueo personalizado para la administradora.
2. Desarrollar una visualización de los productos disponibles en la tienda.
3. Crear un formulario para registrar las remisiones de entrada de productos.
4. Permitir la edición y eliminación de productos.
5. Ordenar el listado de productos de mayor a menor.
6. Si el producto ya se encuentra en la base de datos lo que hará es sumar a la cantidad el valor que se está ingresando
7. Cambiar el color del texto cuando un producto alcance la cantidad mínima de 3 unidades, indicando que está próximo a terminarse.
8. Actualizar la base de datos en tiempo real.

## 🛠️ Creación del proyecto

1. Se crean dos carpetas, una para el Front y otra para el Back llamadas <strong><em>cliente y servidor</em></strong><br>
2. Dentro de cada una se instalan sus dependencias como React para el Front, Node JS para el Back y MySQL para la base de datos<br>
3. Dentro de MySQL se crean 2 tablas  <strong><em>usuarios</em></strong> y <strong><em>usuarios</em></strong>, donde una sera para la gestión de productos y la otra para el inicio de sesión<br>
4. Para despegar el Front End se usa el comando <strong><em>npm start</em></strong><br>
5. Para desplegar el Back End: <strong><em>node server.js</em></strong> y <strong><em>node index.js</em></strong><br>
<br>

`Configuraciones adicionales`
<p>Vamos a instalar los siguientes paquetes:</p>
1. exprex <em>npm install express</em><br>
2. axios en el servidor del front para hacer peticiones <em>npm instal axios</em><br>
3. MySQL <em>npm install mysql2</em><br>
4. Hash para contraseñas <em>npm install bcrypt body-parser</em><br>
5. Instalamos Tailwind siguiendo las instrucciones del siguiente enlace: https://tailwindcss.com/docs/guides/vite<br>
6. Animaciones con Tailwind: <em>npm i tailwindcss-animated</em><br>
7. En el modulo de Tailwind se debe poner: plugins: [ require('tailwindcss-animated') ]<br>
8. SweetAlert2: <em>npm install --save sweetalert2 sweetalert2-react-content</em> y <em>npm install sweetalert2</em><br>
<br>

## 📝Desarrollo del proyecto

`Front End`
<p>Los archivos descritos a continuación permiten que el front end despliegue:</p>
1. <strong>Componente Loguin.js :</strong> Contiene un formulario sencillo que solicita usuario y contraseña, estos ya están en la base de datos. Para pruebas pueden usar: <em>Usuario: andrea y Contraseña: 123</em><br>
2. <strong>Componente Inventario.js :</strong> Este trae tanto el formulario de registro como la tabla con el listado de los productos disponibles<br>
3. <strong>App.js :</strong> Aquí vemos la recopilación de la maquetación y las funciones que realizan cada operación.<br>
  ◻️ Crear: Este realiza un llamado a MySQL, toma los campos que posee la tabla de productos y los llena con los datos registrados por el usuario. Adicional a ello, realiza una comprobación de que si dicho producto que se está enviando a la base de datos ya existe, tomará solamente el valor en cantidad y se le sumará; de lo contrario, se crea uno nuevo<br>
  ◻️ Listar: Loma los datos que están registrados en la base de datos y los renderiza dentro de una tabla con su campo correspondiente<br>
  ◻️ Editar: Permite editar la cantidad diligenciada de los productos existentes, teniendo así, acceso a botones como guardar y cancelar<br>
  ◻️ Eliminar: Toma el producto por el ID de la base de datos y los elimina no antes sin enviar una alerta de confirmación <br>
  ◻️ Limpiar campos: Toma los datos del imput y select y los deja en blanco cada vez que se registra una entrada del producto <br>
  ◻️ Cambio de color: Realiza una comprobación con las cantidades de cada producto, si alguna de ellas se encuentra igual o menor que 3 unidades, su color cambiará<br>
  ◻️ Inicio de sesion: Toma los datos registrados en la tabla de usuario y comprueba si el usuario diligenciado es correcto o no al igual que con la contraseña <br>
  ◻️ Cierre de sesion: Devuelve al componente del logueo cerrando la vista del inventario
<br><br>

`Back End`:
<p>Los archivos descritos a continuación permiten que el backend despliegue:</p>
1. <strong>index.js :</strong>Este posee las sentencias de MySQL que permite crear, editar, listar y eliminar los datos registrados en la tabla de productos<br>
2. <strong>server.js :</strong>Este posee toda la lógica para conectar con la base de datos de usuarios permitiendo realizar el proceso de inicio de sesión<br>
3. <strong>hashPassword.js :</strong>Tomará las contraseñas de la base de datos y le realiza un hasheo, esto se ejecuta sólo una vez, a menos que se diligencien usuarios con nuevas contraseñas<br>
<br>

`Visualización del funcionamiento de la plataforma cumpliendo con las metas establecidas`

https://github.com/user-attachments/assets/6782fb98-6f41-4e0b-932e-7fa91ec49f9e

## 🎨 Visual de secciones
- Inicio de sesion: <br>
<img src='https://github.com/user-attachments/assets/b7fae874-0c8f-44ef-bb9a-03f520eee502' width=600>

- Inventario: <br>
<img src='https://github.com/user-attachments/assets/8239a978-684c-493c-aae7-ca2b51564b7f' width=600>

- Base de datos en MySQL: <br>
<img src='https://github.com/user-attachments/assets/206bc386-43ad-4b84-9dc0-a832981f0480' width=600>

<br>

## 🔗 Enlaces
- Instalación de Tailwind en el proyecto: https://tailwindcss.com/docs/guides/vite
- Instalación de Tailwind Animated: https://www.tailwindcss-animated.com/

<br>

## 📈 Historial de versiones
- 05-08-2024: Agrego carpeta del proyecto y de inventario
- 06-08-2024: Agrego maquetación del logueo y el inventario junto con la lógica para iniciar sesión
- 06-08-2024: Agrego carpeta de cliente y diseño final
  

## :computer: Desarrollado por: :computer:
| [<img src="https://user-images.githubusercontent.com/104279565/209356707-1a7b8815-ff11-42dd-bdc2-8bc90fb27ea9.png" width=130><br>Andrea Mejia<br><sub>Game and Front End Developer</sub>](https://linkedin.com/in/andrea-mejia95/) | 
