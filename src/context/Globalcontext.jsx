import { createContext, useEffect, useState, React } from "react";
import { v4 as uuid } from "uuid"

export const GlobalContext = createContext();
const GlobalContextProvider = ({ children }) => {

    /** estado de botones home y nuevo video */
    const [botonHome, setBotonHome] = useState(true)
    const [botonNuevoVideo, setBotonNuevoVideo] = useState(false)


    const [imagenNv, setImagenNv] = useState("")
    const [tituloNv, setTituloNv] = useState("")
    const [categoriaNv, setCategoriaNv] = useState("")
    const [urlNv, setUrlNv] = useState("")
    const [descripcionNv, setDescripcionNv] = useState("")

    /*Importar categorias */
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`http://localhost:3000/categorias`);
            const data = await res.json();
            setCategorias(data);
        }
        getData();
    }, []);

    /*importar videos */
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const getDataV = async () => {
            const res = await fetch(`http://localhost:3000/videos`);
            const data = await res.json();
            setVideos(data);
        }
        getDataV();
    }, []);

    /*importar destacado */
    const [destacados, setDestacados] = useState([]);
    useEffect(() => {
        const getDataD = async () => {
            const res = await fetch(`http://localhost:3000/destacados`);
            const data = await res.json();
            setDestacados(data);
        }
        getDataD();
    }, []);



    /**Editar Video */
    const [selectedVideo, setSelectedVideo] = useState(null);


    const actualizarVideoInfo = (data) => {
        const {
            imagenNv,
            tituloNv,
            categoriaNv,
            urlNv,
            descripcionNv,
            id } = data;

        const ActualizarVideo = {
            titulo: tituloNv,
            Categoria: categoriaNv,
            imagen: imagenNv,
            url: urlNv,
            descripcion: descripcionNv,
        };

        fetch(
            `http://localhost:3000/videos/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(ActualizarVideo),
            }
        )
            .then((result) => result.json())
            .then((updatedVideoFromServer) => {
                const newInfo = videos.map((video) => {
                    if (video.id === id) {
                        return updatedVideoFromServer;
                    }
                    return video;
                });
                setVideos(newInfo);
            })
            .catch((err) => {
                console.error("Error: ", err);
            });
    };

    /** crea nuevo video */
    const crearVideo = (data) => {


        let idNueva = uuid();



        const dataAEnviar = {
            id: idNueva,
            categoria: data.categoriaNv,
            titulo: data.tituloNv,
            descripcion: data.descripcionNv,
            url: data.urlNv
        };

        fetch(
            `http://localhost:3000/videos`,
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(dataAEnviar),
            }
        )
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Error al crear el video");
                }
                return res.json();
            })
            .then((nuevoVideo) => {
                setVideos([...videos, nuevoVideo]);

            })

            .catch((err) => {
                console.error("Error:", err);

            });
    };
    /**fin crear video */

    /** borrarVideo */
    const borrarVideo = (id) => {
        fetch(
            `http://localhost:3000/videos/${id}`,
            { method: "DELETE" }
        )
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Error al eliminar el video");
                }
                return res.json();
            })
            .then(() => {
                const newVideos = videos.filter((video) => video.id !== id);
                setVideos(newVideos);
            })
            .catch((err) => {
                console.error("Error: ", err);
            });
    };
    /**fin borrar video */

    /**limpiar inputs */
    const limpiarInput = () => {
        setTituloNv("");
        setCategoriaNv("");
        setDescripcionNv("");
        setImagenNv("");
        setUrlNv("");
    }

    return (
        <GlobalContext.Provider value={{
            crearVideo,
            borrarVideo,
            limpiarInput,
            actualizarVideoInfo,
            categorias,
            videos,
            destacados,
            imagenNv, setImagenNv,
            tituloNv, setTituloNv,
            categoriaNv, setCategoriaNv,
            urlNv, setUrlNv,
            descripcionNv, setDescripcionNv,
            selectedVideo, setSelectedVideo,
            botonHome, setBotonHome,
            botonNuevoVideo, setBotonNuevoVideo
        }} >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;


