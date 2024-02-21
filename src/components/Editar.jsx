export const Editar = ({ peli, conseguirPeliculas, setEditar, setListadoState }) => {
  const titulo_componente = "Editar pelicula";
    const guardarEdicion = (e, id) => {
        e.preventDefault()
        // Conseguir el target del evento
        let target = e.target;
        // Buscar el indice del objeto de la pelicula a actualizar
        let pelis_almacenadas = conseguirPeliculas();
        const indice  = pelis_almacenadas.findIndex(peli => peli.id === +id)
        // Crear objeto con ese id de ese indice, con titulo y descripcion del formulario
        let peli_actualizado = {
            id,
            titulo:target.titulo.value,
            descripcion: target.descripcion.value
        }
        //actualizar el elemento con ese indice
        pelis_almacenadas[indice] = peli_actualizado; // sustituyo
        // Guardar el nuevo array de obj en local storage
        localStorage.setItem('pelis', JSON.stringify(pelis_almacenadas))
        // Actualizar estados
        setListadoState(pelis_almacenadas);
        setEditar(0);
    }

  return (
    <div className="edit_form">
      <h3 className="title">{titulo_componente}</h3>
      <form onSubmit={e => guardarEdicion(e, peli.id)}>
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue={peli.titulo}
        />
        <textarea
          name="descripcion"
          defaultValue={peli.descripcion}
          className="descripcion_editada"
        ></textarea>
        <input type="submit" className="editar" value="Actualizar"></input>
      </form>
    </div>
  );
};
