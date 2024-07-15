import styles from "./NuevoVideo.module.css"

function NuevoVideo() {
    return (


        <section className={styles.container} >

            <div className={styles.tituloPrincipal}>
                <h3>NUEVO VIDEO</h3>
                <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
                <h2 className={styles.subtitulo}>Crear tarjeta</h2>
            </div>

            <form className={styles.formulario}>
                <section className={styles.divisor}>
                    <label> Titulo </label>
                    <input className={styles.form_input} type="text" required placeholder="ingrese el título"></input>
                    <label>Imagen</label>
                    <input className={styles.form_input} type="url" required placeholder="ingrese el enlace de la imagen"></input>
                    <label>Descripcion</label>
                    <textarea className={styles.form_textarea} type="text" required placeholder="¿De qué se trata este vídeo?"></textarea>
                    <div className={styles.botones_formulario}>

                        <button className={styles.botonesform}>GUARDAR</button>
                        <button className={styles.botonesform}>LIMPIAR</button>
                    </div>
                </section>

                <section className={styles.divisor}>
                    <label> Categoria </label>
                    <option className={styles.form_option} placeholder="ingrese el título"></option>
                    <label>Video</label>
                    <input className={styles.form_input} placeholder="ingrese el enlace del video"></input>
                </section>





            </form>

        </section>



    )
}
export default NuevoVideo