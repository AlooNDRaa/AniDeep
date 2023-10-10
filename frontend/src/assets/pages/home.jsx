import { Cards } from "../components/cards";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function Home() {

    return (<>
        <Header/>
        <h1 className="gender-text">Popular now</h1>
        <Cards/>
        <Footer/>
         </>
    )
    
}