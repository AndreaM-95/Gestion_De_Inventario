import React from 'react';
import '../Estilos/loguin.css';

export default function InicioSesion(props) {
  return (
    <div className="box_logueo flex flex-col justify-center	items-center w-[500px] border-2 border-orange-100 bg-stone-800 rounded-[40px] opacity-90 animate-fade-up animate-once animate-ease-out
    ">
        <h2 className="titulo_loguin text-slate-200 text-3xl font-semibold my-10">Iniciar sesion</h2>
        <label htmlFor="usuario" className='datos flex flex-col items-center text-slate-200 text-2xl mb-2.5'>Usuario:
          <input
            type="text"
            id="usuario"
            className='entrada bg-orange-50 text-stone-900 text-lg my-3.5 text-center rounded-xl'
            placeholder='Digite aqui su usuario'
            required
            value={props.usuario}
            onChange={(event) => props.setUsuario(event.target.value)}
          />
        </label>
        <label htmlFor="contrasena" className='datos flex flex-col items-center text-slate-200 text-2xl mb-2.5'>Contraseña:
          <input
            type="password"
            id="contrasena"
            className='entrada bg-orange-50 text-stone-900 text-lg my-3.5 text-center rounded-xl'
            placeholder='Digite aqui su contraseña'
            required
            value={props.contrasena}
            onChange={(event) => props.setContrasena(event.target.value)}
          />
        </label>
        <button className="btn_ingresar bg-zinc-950 text-slate-200 text-lg rounded-md border-0 my-7 hover:font-semibold" onClick={props.login}>Ingresar</button>
      </div>
  );
}