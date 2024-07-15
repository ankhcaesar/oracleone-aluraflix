import { useContext, useEffect } from "react"
import styles from "./Destacado.module.css"
import { GlobalContext } from "../../../context/Globalcontext"

import Card from "./Card/Index"

import TituloCategorias from "../../Categorias/TituloCategorias/Index"

function Destacado() {

    const { destacados } = useContext(GlobalContext)

    return (
        <>
            {destacados.map((destacado) => {
                return (
                    <section className={styles.container} key={destacado.id}>
                        <div className={styles.descripcion} >
                            <TituloCategorias
                                categoria={destacado.categoria}
                                color={destacado.color}
                            />
                            <h2 className={styles.tituloDescripcion}>{destacado.titulo}</h2>
                            <p className={styles.textoDescripcion}>{destacado.descripcion}</p>
                        </div>
                        { }
                        <Card
                            key={destacado.id}
                            {...destacado}
                        />
                    </section>
                )
            })}
        </>
    )
}

export default Destacado 