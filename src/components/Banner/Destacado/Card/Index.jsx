import styles from "./Card.module.css"
function Card(video) {

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
        </div>
    )
}

export default Card