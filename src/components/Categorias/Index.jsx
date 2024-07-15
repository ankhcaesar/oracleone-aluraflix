import { useContext } from "react";
import ContenedorCategorias from "./ContenedorCategorias/Index";
import { GlobalContext } from "../../context/Globalcontext";

function Categorias() {
    const { categorias } = useContext(GlobalContext)
    return (
        <>
            {categorias.map((categoria) => {
                return (
                    <ContenedorCategorias
                        key={categoria.id}
                        {...categoria}
                    />)
            })}
        </>
    )
}
export default Categorias