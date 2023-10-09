import '../styles/App.css'
import {RiContactsLine} from 'react-icons/ri';
import {AiOutlineFundView} from 'react-icons/ai';
import {BiBarcodeReader, BiCategory} from 'react-icons/bi';


export function SideBar() {
    return(
        <>
        <div className="navbar-container">
            <div className="navbar-parts">
                <a className='icons-sidebar'>Home <BiCategory className='icon1'/> </a>
                <a className='icons-sidebar'> Geners <BiBarcodeReader className='icon1'/> </a>
                <a className='icons-sidebar'>View more <AiOutlineFundView className='icon1'/></a>
                <a className='icons-sidebar'>Contact <RiContactsLine className='icon1'/> </a>
            </div>
        </div>
        </>
    )
}