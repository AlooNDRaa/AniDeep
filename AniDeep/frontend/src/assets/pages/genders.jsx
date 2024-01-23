import { CardsG } from "../components/repertories/cardsgender";
import { Footer } from "../components/generals/footer";
import { Header } from "../components/generals/header";


export function GendersPage() {
    return (

        <>
        <Header/>
        <div>
            <h1 className="gender-text">Repertoire</h1>
            <CardsG/>
        </div>
        <Footer/>
        </>

    )
}