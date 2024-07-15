import styles from "./Foooter.module.css"

function Foooter({ img }) {
    return (
        <>
            <div className={styles.contenedor}>
                <img src={`./img/${img}.png`} alt="Logo" />
            </div>
        </>
    )
}
export default Foooter