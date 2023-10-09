import { Header } from "../components/header"
import { SideBar } from "../components/sidebar"

export function Home() {

    return (<>
        <Header/>
        <div className="side-home">
        <SideBar/>
        </div>
        </>
    )
    
}