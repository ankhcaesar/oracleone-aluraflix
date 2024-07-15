import Heaader from "../../components/Heaader/Index"
import Foooter from "../../components/Foooter/Index"
import Container from "../../components/Container/Index"
import { Outlet } from "react-router-dom"
import GlobalContextProvider from "../../context/Globalcontext"
function Home() {
    return (
        <main>
            <GlobalContextProvider>
                <Heaader img="logo_aluraflix" />
                <Container>
                    <Outlet />

                </Container>
                <Foooter img="logo_aluraflix" />
            </GlobalContextProvider>
        </main>
    )
}
export default Home