import styles from "./Campo.module.css"


function Campo(props) {

    const placeHolderMod = `${props.placeholder}...`

    const manejarCambio = (e) => {
       props.actualizarValor(e.target.value)
    }

    return (
        <>
            <input
            
                className={styles.form_text}
                placeholder={placeHolderMod}
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}
                type={props.type}
            />
        </>
    )
}

export default Campo