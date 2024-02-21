export const GuardarEnStorage = (clave, elemento) => {
    //conseguir los elementos que ya tengo en el local storage
    let elementos = JSON.parse(localStorage.getItem(clave))
    console.log(elementos);
    //comprobar si es un array
    if(Array.isArray(elementos)) {
      //añadir dentro del array un elemento nuevo
      elementos.push(elemento);
    }else{
      //crear un array con el nuevo elemento
      elementos = [elemento];
    }
    //guardar en el localstorage
    localStorage.setItem(clave, JSON.stringify(elementos));
    //devolver objeto guardado
    return elemento;
  }