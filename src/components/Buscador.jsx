import { useState } from "react"

export const Buscador = ({listadoState,setListadoState}) => {

  const [busqueda,setBusqueda] = useState('')
  const [noEncontrado, setNoEncontrado] = useState(false)

  const buscarPeli = (e) => {
    //crear estado y actualizarlo
    setBusqueda(e.target.value)
    console.log(busqueda);
    //filtrar para buscar coincidencias
    let pelis_encontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });
    //comprobar si hay resultado
    if(busqueda.length <= 1 || pelis_encontradas <= 0){
      pelis_encontradas = JSON.parse(localStorage.getItem('pelis'));
      setNoEncontrado(true)
    }else{
      setNoEncontrado(false)
    }
    //actualizar estado del listado principal con lo que ha logrado filtrar
    setListadoState(pelis_encontradas);
  }
  return (
    <div className="search">
        <h3 className="title">Buscador : {busqueda}</h3>
          {
          (noEncontrado == true && busqueda.length > 1) && (
            <span className="no-encontrado">No se ha encontrado ninguna coincidencia </span>
          )
          }
        <form>
            <input name="busqueda" autoComplete="off" onChange={buscarPeli} type="text" id="search_field" />
            <button id="search">Buscar</button>
        </form>
    </div>
  )
}
