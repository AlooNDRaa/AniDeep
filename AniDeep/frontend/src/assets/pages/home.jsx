import { Cards } from "../components//home/cards";
import { Footer } from "../components/generals/footer";
import { Header } from "../components/generals/header";


export function Home() {

    return (<>
        <Header/>
        <h1 className="gender-text">Popular now</h1>
        <div className="cardhomecontainer">
        <Cards/>
        </div>
        <Footer/>
         </>
    )
    
}