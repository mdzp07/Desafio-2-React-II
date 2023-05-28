import MyContext from "../MyContext";
import "../assets/css/galeria.css";
import { useContext } from "react";

export default function Favoritos() {

  const { fotos } = useContext(MyContext);

  return (
    <div>
      <h1 className="text-center text-success mt-3">Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-5">
        {fotos.filter(foto => foto.fav === true).map((foto) => {
          return (
            <section className="foto" key={foto.id} style={{ backgroundImage: `url(${foto.image})` }}>
            </section>
          )
        })}

      </div>
    </div>
  );
}
