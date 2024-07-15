import Destacado from "./Destacado/Index"
import styles from "./Banner.module.css"
import { useContext } from "react"
import { GlobalContext } from "../../context/Globalcontext"

function Banner() {
    const { destacados } = useContext(GlobalContext)

    return (
        <>
            {destacados.map((destacado) => {
                return (
                    <div className={styles.fondo} style={{ backgroundImage: `url(http://img.youtube.com/vi/${destacado.id_yt}/2.jpg)` }} key={destacado.id} >
                        <div className={styles.grardiente}>
                        </div>
                    </div>
                )
            })
            }
            <Destacado />
        </>
    )
}

export default Banner