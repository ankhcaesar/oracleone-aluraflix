import styles from "./Cards.module.css"
import iconoBORRAR from "./tachito_blanco.svg"
import iconoEDITAR from "./lapiz.svg"
import { useContext } from "react"
import { GlobalContext } from "../../../context/Globalcontext"
import Botones from "./Botones/Index"

function Cards(video) {
    const {
        borrarVideo,
        setvideoSeleccionado,

    } = useContext(GlobalContext)

    return (

        <div className={styles.container}
            style={{
                boxShadow: `0px 0px 5px 5px rgb(${video.color})`,
                borderColor: `rgb(${video.color})`,
            }}>
            <iframe
                src={video.url}
                title={video.titulo}
                className={styles.cotainer_video}
            />
            <div className={styles.botones}>
                <Botones
                    action={borrarVideo}
                    video={video}
                    img={iconoBORRAR}
                >BORRAR
                </Botones>

                <Botones
                    action={setvideoSeleccionado}
                    video={video}
                    img={iconoEDITAR}
                >EDITAR
                </Botones>

            </div>
        </div>
    )
}

export default Cards