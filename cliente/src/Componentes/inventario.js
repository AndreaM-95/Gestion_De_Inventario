import React from 'react';
import '../Estilos/App.css';

export default function Inventario(props) {
  return (
    <div className="animate-fade animate-once animate-ease-in-out">
        <div className='flex justify-end py-2'>
            <button className="btn_salir bg-zinc-800 text-slate-100 text-xl p-2 mt-4 rounded-md" onClick={props.logout}>Salir</button>
        </div>

        <form onSubmit={(event) => { event.preventDefault();}} className="datos flex w-2/5 bg-stone-700 p-4 border-2 border-orange-100 rounded-[40px] flex-col items-center">
            <h2 className="titulo text-orange-50 text-2xl font-semibold">Gestión de pedidos</h2>
            
            <label htmlFor="nombre" className="caracteristica block mb-2 text-slate-100 text-lg">Producto:
                <select 
                    id="nombre" 
                    name="nombre"
                    value={props.producto}
                    required
                    className="block w-full mt-1 text-neutral-700 bg-orange-50 rounded-md border-0 pl-2.5"
                    onChange={(event) => props.setProducto(event.target.value)}
                >
                    <option className="text-neutral-700" value="">(Seleccione uno)</option>
                    <option className="text-neutral-700" value="Café mesa de los santos">Café mesa de los santos</option>
                    <option className="text-neutral-700" value="Rosario">Rosario</option>
                    <option className="text-neutral-700" value="Tipica">Tipica</option>
                    <option className="text-neutral-700" value="Geisha">Geisha</option>
                    <option className="text-neutral-700" value="HR-61">HR-61</option>
                    <option className="text-neutral-700" value="MOCA">MOCA</option>
                    <option className="text-neutral-700" value="Caturra">Caturra</option>
                    <option className="text-neutral-700" value="Bourbon">Bourbon</option>
                    <option className="text-neutral-700" value="Wush Wush">Wush Wush</option>
                    <option className="text-neutral-700" value="Edicion limitada">Edicion limitada</option>
                </select>
            </label>

            <label htmlFor="gramaje" className="caracteristica block mb-2 text-slate-100 text-lg">Gramaje:
            <select 
                id="gramaje" 
                name="gramaje"
                value={props.gramaje}
                className="block w-full mt-1 text-neutral-700 bg-orange-50 rounded-md border-0 pl-2.5"
                onChange={(event) => props.setGramaje(event.target.value)}
            >
                <option className="text-neutral-700" value="">(Seleccione uno)</option>
                <option className="text-neutral-700" value="250GR">250GR</option>
                <option className="text-neutral-700" value="340GR">340GR</option>
                <option className="text-neutral-700" value="454GR">454GR</option>
                <option className="text-neutral-700" value="5 LBR">5 LBR</option>
            </select>
            </label>

            <label htmlFor="presentacion" className="caracteristica block mb-2 text-slate-100 text-lg">Presentación:
            <select 
                id="presentacion" 
                name="presentacion"
                value={props.presentacion}
                className="block w-full mt-1 text-neutral-700 bg-orange-50 rounded-md border-0 pl-2.5"
                onChange={(event) => props.setPresentacion(event.target.value)}
            >
                <option className="text-neutral-700" value="">(Seleccione uno)</option>
                <option className="text-neutral-700" value="Grano">Grano</option>
                <option className="text-neutral-700" value="Molido">Molido</option>
            </select>
            </label>

            <label className="caracteristica block mb-2 text-slate-100 text-lg">Cantidad:
            <input type="number"
                value={props.cantidad}
                placeholder=" Inserte la cantidad"
                className="block w-full mt-1 text-neutral-900 bg-orange-50 rounded-md border-0 pl-2.5"
                onChange={(event) => props.setCantidad(parseInt(event.target.value, 10))}
            />
            </label>

            <button
                type="submit"
                className="btn_registrar bg-zinc-800 text-slate-100 text-lg	py-2 px-4 mt-4 rounded-md" 
                onClick={props.agregar}
            >Registrar</button>
        </form>

      <div className='lista'>
        <h2 className='titulo_tabla bg-neutral-700 text-orange-50 py-2 px-4 text-2xl border-2 border-orange-100 font-semibold'>Productos en existencia</h2>
        <table className="table-fixed w-full">
            <thead className='bg-neutral-700'>
                <tr>
                <th className='id py-3 text-lg text-orange-50 font-semibold border-2 border-orange-100'>ID</th>
                <th className='subtitulo py-3 text-lg text-orange-50 font-semibold border-2 border-orange-100'>PRODUCTO</th>
                <th className='subtitulo py-3 text-lg text-orange-50 font-semibold border-2 border-orange-100'>GRAMAJE</th>
                <th className='subtitulo py-3 text-lg text-orange-50 font-semibold border-2 border-orange-100'>PRESENTACIÓN</th>
                <th className='subtitulo py-3 text-lg text-orange-50 font-semibold border-2 border-orange-100'>CANTIDAD</th>
                <th className='acciones py-3 text-lg text-orange-50 font-semibold border-2 border-orange-100'>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                {props.productosLista.map((val) => (
                <tr key={val.id}>
                    <td className='box_productos p-2 text-slate-100 text-lg bg-neutral-700 border-2 border-orange-100 opacity-85 '>{val.id}</td>
                    <td className='box_productos p-2 text-slate-100 text-lg bg-neutral-700 border-2 border-orange-100 opacity-85 '>{val.producto}</td>
                    <td className='box_productos p-2 text-slate-100 text-lg bg-neutral-700 border-2 border-orange-100 opacity-85 '>{val.gramaje}</td>
                    <td className='box_productos p-2 text-slate-100 text-lg bg-neutral-700 border-2 border-orange-100 opacity-85 '>{val.presentacion}</td>
                    <td className={`box_productos p-2 text-lg bg-neutral-700 border-2 border-orange-100 opacity-85 ${props.getColorForCantidad(val.cantidad)}`}>
                    {props.editId === val.id ? (
                        <input 
                        type="number"
                        className="w-full text-neutral-900 pl-2.5 bg-orange-50 rounded-md border-0"
                        value={props.editCantidad} 
                        onChange={(e) => props.setEditCantidad(parseInt(e.target.value, 10))}
                        />
                    ) : (
                        val.cantidad
                    )}
                    </td>
                    <td className='box_acciones flex justify-center	p-2 text-lg bg-neutral-700 border-2 border-orange-100 opacity-85'>
                        {props.editId === val.id ? (
                            <>
                                <button 
                                    className='btn_acciones bg-zinc-950 text-slate-100 text-lg	py-2 px-4 mt-4 rounded-md' 
                                    onClick={() => props.actualizarCantidad(val.id)}
                                >Guardar</button>
                                <button 
                                    className='btn_acciones bg-zinc-950 text-slate-100 text-lgpy-1 px-2 rounded-md' 
                                    onClick={() => props.setEditId(null)}
                                >Cancelar</button>
                            </>
                            ) : (
                            <>
                                <button 
                                    className='btn_acciones bg-zinc-950 text-slate-100 text-lg	py-2 px-4 mt-4 rounded-md' 
                                    onClick={() => {
                                    props.setEditId(val.id);
                                    props.setEditCantidad(val.cantidad);
                                    }}
                                >Editar</button>
                                <button 
                                    className='btn_acciones bg-zinc-950 text-slate-100 text-lg	py-2 px-4 mt-4 rounded-md' 
                                    onClick={() => props.eliminarProducto(val.id)}
                                >Eliminar</button>
                            </>
                        )}
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}