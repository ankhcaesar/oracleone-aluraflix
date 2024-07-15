import { createContext, useEffect, useState, React } from "react";

export const GlobalContext = createContext();
const GlobalContextProvider = ({ children }) => {


    /*Importst categorias */
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`/run/media/caesar/bk_ankh/aprendiendo/oracle one/ETAPA3/react/Alura-Flixantesdeempezaracopiarelquebaje/public /run/media/caesar/bk_ankh/aprendiendo/oracle one/ETAPA3/react/Alura-Flixantesdeempezaracopiarelquebaje/src /run/media/caesar/bk_ankh/aprendiendo/oracle one/ETAPA3/react/Alura-Flixantesdeempezaracopiarelquebaje/.eslintrc.cjs /run/media/caesar/bk_ankh/aprendiendo/oracle one/ETAPA3/react/Alura-Flixantesdeempezaracopiarelquebaje/.gitignore /run/media/caesar/bk_ankh/aprendiendo/oracle one/ETAPA3/react/Alura-Flixantesdeempezaracopiarelquebaje/README.md /run/media/caesar/bk_ankh/aprendiendo/oracle one/ETAPA3/react/Alura-Flixantesdeempezaracopiarelquebaje/package.json /run/media/caesar/bk_ankh/aprendiendo/oracle one/ETAPA3/react/Alura-Flixantesdeempezaracopiarelquebaje/package-lock.json /run/media/caesar/bk_ankh/aprendiendo/oracle one/ETAPA3/react/Alura-Flixantesdeempezaracopiarelquebaje/index.html /run/media/caesar/bk_ankh/aprendiendo/oracle one/ETAPA3/react/Alura-Flixantesdeempezaracopiarelquebaje/vite.config.js /run/media/caesar/bk_ankh/aprendiendo/oracle one/ETAPA3/react/Alura-Flixantesdeempezaracopiarelquebaje/Routes.jsx/categorias`);
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

    return (
        <GlobalContext.Provider value={{ categorias, videos , destacados}} >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;


