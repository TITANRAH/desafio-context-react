import "./styles.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import { useEffect } from "react";
import useImages from "./hooks/useImages";

export default function App() {
  const { setImagenes } = useImages();

  useEffect(() => {
    async function getImagenes() {

      const endpoint = "/fotos.json";
      const url = `http://localhost:3000/${endpoint}`;
      const resultado = await axios(url);
      setImagenes(resultado.data.photos);
      
    }

    getImagenes();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
