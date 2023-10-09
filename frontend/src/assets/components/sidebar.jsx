import '../styles/App.css'
import {RiContactsLine} from 'react-icons/ri';
import {BiBarcodeReader} from 'react-icons/bi';


export function SideBar() {
    return(
        <>
        <div className="navbar-container">
            <div className="navbar-parts">
                <a className='icons-sidebar'>Contact <RiContactsLine className='icon1'/> </a>
                <a className='icons-sidebar'> Read here <BiBarcodeReader className='icon1'/> </a>
                <a className='icons-sidebar'>Contact <RiContactsLine className='icon1'/> </a>
            </div>
        </div>
        </>
    )
}