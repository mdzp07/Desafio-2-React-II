import "../assets/css/galeria.css";
import Heart from "./Heart";
import MyContext from "../MyContext";
import { useContext } from "react";

export default function Home() {

  const { fotos, setFotos } = useContext(MyContext);

  function tagFavorito(e) {
    const idFoto = fotos.findIndex((foto) => foto.id === e);
    fotos[idFoto].fav = !fotos[idFoto].fav;
    setFotos([...fotos]);
  }

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map(foto =>
        <div className="foto" key={foto.id} style={{ backgroundImage: `url(${foto.image})` }}
          onClick={() => tagFavorito(foto.id)}>
          <Heart filled={foto.fav} />
          <p> {foto.texto} </p>
        </div>
      )}

    </div>
  );
}
