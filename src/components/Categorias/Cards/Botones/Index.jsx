import styles from "./Botones.module.css"

function Botones({ action, video, img, children }) {
    return (

            <button className={styles.botones}
                onClick={() => (children === "BORRAR" ? action(video.id) : action(video))}
                
            >
                <img src={img} alt={`iconono de ${children}`} />
                <p>{children}</p>
            </button>

    )
}

export default Botones