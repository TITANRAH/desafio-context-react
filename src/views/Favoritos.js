import { useEffect } from "react";

import useImages from "../hooks/useImages";

export default function Favoritos() {
  const { favoritos, eliminarFavorito } = useImages();

  console.log("desde favoritos", favoritos);

  return (
    <>
      {favoritos != 0? 
      (<h1>Fotos favoritas</h1>) : 
      (<h1>Aún no seleccionas tus fotos favoritas</h1>)}

      <div className="galeria grid-columns-5 p-3">
        {favoritos.map((imagen) => (
          <img
          
            key={imagen.id}
            src={imagen.src.tiny}
          ></img>
        ))}
      </div>
      
      {favoritos != 0 && <button className="boton" onClick={eliminarFavorito}>Eliminar Favoritas</button>}
    </>
  );
}


