import {BsIncognito} from 'react-icons/bs';
//import { Link } from 'react-router-dom';
//import {TbPointerSearch} from 'react-icons/tb';
import '../../styles/App.css'




export function Header() {

    return(
        <nav className='nav'>
          <div className='divNav'>
          <h1 className='titlenav'> AniDeep </h1>
          <BsIncognito size={"30px"}/>
          </div>
          <div className="unnorderlist2">
            <ul className="ul2-header">
            <li className="menu-1">
              <a className='ul-a' href="/home">
                Home
              </a>
              </li>
              <li className="menu-1">
                <a className='ul-a' href="/repertoire">
                Genders
                </a>
                </li>
                <li className="menu-1">
                <a className='ul-a' href="/*">
                Repertorie
                </a>
                </li>        
               <li className="menu-1">
                <a className='ul-a' href="/*">
                User
                </a>
                </li>
            </ul>
          </div>
        </nav>
    )
    
}