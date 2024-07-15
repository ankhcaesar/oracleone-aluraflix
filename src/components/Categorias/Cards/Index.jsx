import styles from "./Cards.module.css"
import iconoBorrar from "./tachito_blanco.svg"
import iconoEditar from "./lapiz.svg"
function Cards(video) {

    return (

        <div className={styles.container}
            style={{
                boxShadow: `0px 0px 5px 5px rgb(${video.color})`,
                borderColor: `rgb(${video.color})`,
            }}>
            <iframe
                //frameborder="0" 
                src={video.url}
                title={video.titulo}
                className={styles.cotainer_video}
            />
            <div className={styles.botones}>
                <figure className={styles.boton_Borrar}> <img src={iconoBorrar} />BORRAR</figure>
                <figure className={styles.boton_Editar}><img src={iconoEditar} />EDITAR</figure>
            </div>
        </div>

    )
}

export default Cards