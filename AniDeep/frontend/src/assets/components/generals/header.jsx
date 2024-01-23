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
              <ul className="menu-1">Genders</ul>
              <ul className="menu-1">Repertorie</ul>
              <ul className="menu-1">User</ul>
            </ul>
          </div>
        </nav>
    )
    
}