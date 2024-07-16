import { useContext } from "react"
import styles from "./AreaTexto.module.css"



function AreaTexto(props) {
    
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
        
    }
    return (
        <>
            <textarea
                className={styles.form_textArea}
                placeholder={props.placeHolder}
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}
                type={props.type}
                rows="5"
                cols="30"

            />
        </>
    )
}

export default AreaTexto