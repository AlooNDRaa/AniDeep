import {BsIncognito} from 'react-icons/bs';
import '../styles/App.css'



export function Header() {

    return(
        <header className='header-container'>
            <div className="name-logo">
                <h1 className='titlepage'>AniDeep</h1>
                <BsIncognito className='log-page' size={'40px'}/>
            </div>
        </header>
    )
    
}