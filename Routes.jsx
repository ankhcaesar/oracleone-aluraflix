import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./src/pages/home/Index"
import Inicio from "./src/pages/Inicio/Index"
import NuevoVideo from "./src/pages/NuevoVideo/Index"
import E404 from "./src/pages/error_404/Index"

function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} >
                    <Route index element={<Inicio />} />
                    <Route path="NuevoVideo" element={<NuevoVideo />} />
                    <Route path="*" element={<E404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute