import { useContext } from "react"
import styles from "./Modal.module.css"
import { GlobalContext } from "../../context/Globalcontext"
import iconoCerrar from "./cerrar.svg"

function Modal({ video, cerrarModal }) {
    const {
        categorias,
        limpiarInput,
        imagenNv, setImagenNv,
        tituloNv, setTituloNv,
        categoriaNv, setCategoriaNv,
        urlNv, setUrlNv,
        descripcionNv, setDescripcionNv,
        actualizarVideoInfo
    } = useContext(GlobalContext)

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
        closeModal();
    }


    return (
        <>
            {video && (
                <dialog className={styles.dialogo} open={!!video}>

                    <div className={styles.tituloPrincipal}>
                        <h3>EDITAR VIDEO</h3>
                        <p>COMPLETE EL FORMULARIO PARA EDITAR LA TARJETA DE VIDEO</p>
                        <h2 className={styles.subtitulo}>Crear tarjeta</h2>
                    </div>
                    <button className={styles.botonCerrarModal}
                        type="button"
                        onClick={closeModal}>
                            <img src={iconoCerrar} alt="cerrar" /> 
                    </button>

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
                </dialog>
            )}
        </>
    )
}

export default Modal