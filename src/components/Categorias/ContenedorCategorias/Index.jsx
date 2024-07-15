import { useContext } from "react"
import styles from "./ContenedorCategorias.module.css"
import Cards from "../Cards/Index";
import TituloCategorias from "../TituloCategorias/Index";
import { GlobalContext } from "../../../context/Globalcontext";

function ContenedorCategorias({ categoria, color }) {

    const { videos } = useContext(GlobalContext)
    const videoFilter = videos.filter(video => video.categoria === categoria)

    return (
            <div className={styles.container}>
                <TituloCategorias
                    categoria={categoria}
                    color={color}
                />
                <div className={styles.cards}>
                    {videoFilter.map((video) => {
                        return (
                            <Cards
                                color={color}
                                key={video.id}
                                {...video}
                            />
                        )
                    })}
                </div>
            </div>
    )
}

export default ContenedorCategorias

