import { CardsG } from "../components/cardsgender";
import { Footer } from "../components/footer";
import { Header } from "../components/header";


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