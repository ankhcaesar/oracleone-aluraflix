import styles from "./Formulario.module.css"
import Campo from "../Campo/Index"
import ListaOpciones from "../ListaOpciones/Index"
import AreaTexto from "../AreaTexto/Index"
import Boton from "../Boton/Index"
import { useContext } from "react"
import { GlobalContext } from "../../context/Globalcontext"

function Formulario() {

    const {
        crearVideo,
        limpiarInput,
        categorias,
        imagenNv, setImagenNv,
        tituloNv, setTituloNv,
        categoriaNv, setCategoriaNv,
        urlNv, setUrlNv,
        descripcionNv, setDescripcionNv

    } = useContext(GlobalContext)



    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("manejarEnvio")
        let datosAEnviar = {
            imagenNv,
            tituloNv,
            urlNv,
            descripcionNv,
            categoriaNv
        }
        crearVideo(datosAEnviar);
        limpiarInput();
    }

    return (

        <form
            className={styles.formulario}
            onSubmit={manejarEnvio}

        >
            <section className={styles.divisor}>
                <label> Titulo </label>
                <Campo
                    label="titulo"
                    placeholder="ingrese el título"
                    type="text"
                    required={true}
                    minLength="3"
                    valor={tituloNv}
                    actualizarValor={setTituloNv}
                />

                <label>Imagen</label>
                <Campo
                    label="imagen"
                    placeholder="ingrese el enlace de la imagen"
                    type="url"
                    required={false}
                    valor={imagenNv}
                    actualizarValor={setImagenNv}
                />

                <label>Descripcion</label>
                <AreaTexto
                    label="Descripcion"
                    placeholder="¿De qué se trata este vídeo?"
                    type="textArea"
                    required={true}
                    valor={descripcionNv}
                    actualizarValor={setDescripcionNv}

                />
                <div className={styles.botones}>
                    <Boton
                        type="submit"
                        label="GUARDAR"
                    />
                    <Boton
                        label="LIMPIAR"
                        type="button"
                        onClick={limpiarInput}

                    />
                </div>
            </section>


            <section className={styles.divisor}>
                <label> Categoria </label>
                <ListaOpciones
                    placeholder="seleccione la categoria"
                    required
                    valor={categoriaNv}
                    actualizarValor={setCategoriaNv}
                    categoria={categorias}
                />

                <label>Video</label>
                <Campo
                    label="video"
                    placeholder="ingrese el enlace del video"
                    type="url"
                    required={true}
                    valor={urlNv}
                    actualizarValor={setUrlNv}
                />
            </section>
        </form>

    )
}

export default Formulario