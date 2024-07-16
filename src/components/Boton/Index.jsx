import styles from "./Boton.module.css"
function Boton(props) {
    return (
        <>
            <button
                className={styles.form_boton}
                label={props.label}
                type={props.type}
                onClick={props.onClick}
                
                
            >{props.label}
            </button>

        </>
    )
}
export default Boton