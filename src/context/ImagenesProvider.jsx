import { useState, createContext, useEffect } from "react";

const ImagenesContext = createContext();

function ImagenesProvider({ children }) {
  const [imagenes, setImagenes] = useState([]);
  const [favorito, setFavorito] = useState("");
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    if (favorito != "") {
      setFavoritos([...favoritos, favorito]);
    }
  }, [favorito]);

  const eliminarFavorito = () => {
    setFavoritos([]);
    for (let imagen of imagenes) {
      imagen.liked = false;
    }
  };

  return (
    <ImagenesContext.Provider
      value={{
        imagenes,
        setImagenes,
        favoritos,
        setFavorito,
        favorito,
        eliminarFavorito,
      }}
    >
      {children}
    </ImagenesContext.Provider>
  );
}

export { ImagenesProvider };

export default ImagenesContext;
