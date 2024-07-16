import styles from "./Modal.module.css"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/Globalcontext"
import iconoCerrar from "./cerrar.svg"
import Campo from "../Campo/Index"
import ListaOpciones from "../ListaOpciones/Index"
import AreaTexto from "../AreaTexto/Index"
import Boton from "../Boton/Index"

function Modal({ video }) {
    const {
        categorias,
        limpiarInput,
        imagenNv, setImagenNv,
        tituloNv, setTituloNv,
        categoriaNv, setCategoriaNv,
        urlNv, setUrlNv,
        descripcionNv, setDescripcionNv,
        actualizarVideoInfo,
        cerrarModal,
        videoSeleccionado

    } = useContext(GlobalContext)


    useEffect(() => {
        const getInitialValue = () => {
            if (video) {
                manejarCambiosinput("titulo", video.titulo || "");
                manejarCambiosinput("categoria", video.categoria || "");
                manejarCambiosinput("descripcion", video.descripcion || "");
                manejarCambiosinput("imagen", video.imagen || "");
                manejarCambiosinput("url", video.url || "");
            }
        };
        getInitialValue();
    },[video])


    const manejarEnvio = (e) => {
        let id = video.id;
        let info = {
            imagenNv,
            tituloNv,
            categoriaNv,
            urlNv,
            descripcionNv, id
        }

        actualizarVideoInfo(info);
        cerrarModal();
    }


    return (
        <>
            {videoSeleccionado && (
                <div className={styles.overlay}>
                    <dialog className={styles.dialogo} open>
                        <form formMethod="dialog"   >

                            <button formMethod="dialog" className={styles.botonCerrarModal}
                                type="button"
                                onClick={cerrarModal}
                            >
                                <img src={iconoCerrar} alt="cerrar" className={styles.imagen} />
                            </button>
                        </form>

                        <div className={styles.tituloPrincipal}>
                            <h3>EDITAR CARD</h3>

                        </div>

                        <form
                            formMethod="dialog"
                            className={styles.formulario}
                            onSubmit={manejarEnvio}
                        >
                            <section className={styles.container}>
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

                                <label> Categoria </label>
                                <ListaOpciones
                                    placeholder="seleccione la categoria"
                                    required
                                    valor={categoriaNv}
                                    actualizarValor={setCategoriaNv}
                                    categoria={categorias}
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

                                <label>Video</label>
                                <Campo
                                    label="video"
                                    placeholder="ingrese el enlace del video"
                                    type="url"
                                    required={true}
                                    valor={urlNv}
                                    actualizarValor={setUrlNv}
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
                        </form>
                    </dialog>
                </div>
            )}
        </>
    )
}

export default Modal