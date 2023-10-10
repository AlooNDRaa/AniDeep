import { Cards } from "../components/cards";
import { Footer } from "../components/footer";
import { Header } from "../components/header";


export function GendersPage() {
    return (

        <>
        <Header/>
        <div>
            <h1 className="gender-text">Categories</h1>

        <div className="listcontainer">
            <ul className="animelist">
                <h2 className="textlist">Shounen</h2>
                <li className="listanum">
                    <Cards/>
                </li>
            </ul>
            <ul className="animelist">
                <h2 className="textlist">Shoujo</h2>
                <li className="listanum">
                <Cards/>
                </li>
            </ul>
            <ul className="animelist">
                <h2 className="textlist">Gore</h2>
                <li className="listanum">
                    <Cards/>
                </li>
            </ul>
            <ul className="animelist">
                <h2 className="textlist">Seinen</h2>
                <li className="listanum">
                    <Cards/>
                </li>
            </ul>
            <ul className="animelist">
                <h2 className="textlist">Josei</h2>
                <li className="listanum">
                    <Cards/>
                </li>
            </ul>
        </div>
        </div>
        <Footer/>
        </>

    )
}