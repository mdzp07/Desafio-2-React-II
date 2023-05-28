import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar"
import MyContext from './MyContext';

//Vistas

import Home from './views/Home'
import Favoritos from './views/Favoritos'

function App() {

  const [fotos, setFotos] = useState([])

  const arrayFotos = async () => {
    const res = await fetch('/fotos.json');
    let { photos } = await res.json();
    photos = photos.map((photo) => ({
      id: photo.id,
      image: photo.src.large,
      texto: photo.alt,
      fav: false
    }));
    setFotos(photos);
  }

  console.log(fotos);

  useEffect(() => {
    arrayFotos();
  }, []);

  const estadoGlobal = { fotos, setFotos }

  return (
    <>
      <MyContext.Provider value={estadoGlobal}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>


    </>
  )
}

export default App
