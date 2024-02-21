import { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Crear = ({setListadoState}) => {

  const tituloComponente = 'Añadir pelicula'

  const [peliState, setPeliState] = useState({
    titulo: '',
    descripcion: ''
  })

  const {titulo, descripcion} = peliState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();
    //conseguir datos del form
    let target = e.target;
    const titulo = target.titulo.value;
    const descripcion = target.descripcion.value;

    // crear obj de la peli a guardar
    let peli = {
      id:  Date.now(),
      titulo,
      descripcion
    }
    // guardar estado
    setPeliState(peli)
    //actualizar el estado del listado principal
    setListadoState(elementos => {
      return  [...elementos, peli];
    })
    //guardar en el almacenamiento local
    GuardarEnStorage('pelis', peli)
  }

  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>

      <strong>
        {(titulo && descripcion) && 'Has creado la pelicula: ' + titulo}
      </strong>

        <form onSubmit={conseguirDatosForm}>
            <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
            <textarea id="descripcion" name="descripcion" placeholder="Descripción"></textarea>
            <input type="submit" id="save" value="Guardar" />
        </form>
    </div>
  )
}
