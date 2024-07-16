import styles from "./E4404.module.css"

function E404(){
    return(
        <div className={styles.container}>
            <h1 className={styles.numeroerror}>404</h1>
            <h3 className={styles.textoerror}>Pagina no encontrada</h3>
        </div>
    )
}
export default  E404