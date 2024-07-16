import { createContext, useEffect, useState, React } from "react";
import { v4 as uuid } from "uuid"

export const GlobalContext = createContext();
const GlobalContextProvider = ({ children }) => {

    const [imagenNv, setImagenNv] = useState("")
    const [tituloNv, setTituloNv] = useState("")
    const [categoriaNv, setCategoriaNv] = useState("")
    const [urlNv, setUrlNv] = useState("")
    const [descripcionNv, setDescripcionNv] = useState("")

    /*Importst categorias */
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



    /** lleva una constante global  
    const [origen, setOrigen]= useState([])
    
    useEffect(()=>{
        const cambiar=()=>{
            setOrigen("destacado")
        }
        cambiar()
    
    },[])
    */






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
            categorias,
            videos,
            destacados,
            crearVideo,
            borrarVideo,
            limpiarInput,
            imagenNv, setImagenNv,
            tituloNv, setTituloNv,
            categoriaNv, setCategoriaNv,
            urlNv, setUrlNv,
            descripcionNv, setDescripcionNv
        }} >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;


