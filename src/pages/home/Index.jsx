import Heaader from "../../components/Heaader/Index"
import Foooter from "../../components/Foooter/Index"
import Container from "../../components/Container/Index"
import { Outlet } from "react-router-dom"
import GlobalContextProvider from "../../context/Globalcontext"
import Modal from "../../components/Modal/Index"
function Home() {
    return (
        <main>
            <GlobalContextProvider>
                <Heaader img="logo_aluraflix" />
                <Container>
                    <Outlet />

                </Container>
                <Foooter img="logo_aluraflix" />
                <Modal/>
            </GlobalContextProvider>
        </main>
    )
}
export default Home