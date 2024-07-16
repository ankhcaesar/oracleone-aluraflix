import styles from "./TituloCategorias.module.css"

function TituloCategorias({ categoria, color }) {

    return (
        <>
            <section className={styles.container}>
                <div className={styles.titulos} style={{ backgroundColor: `rgb(${color})` }} >
                    <h2 className={styles.titulo_categoria} >{categoria}</h2>
                </div>
            </section>
        </>
    )
}
export default TituloCategorias
