import {ImGithub, ImMail4} from 'react-icons/im';
import {AiFillLinkedin} from 'react-icons/ai';



export function Footer() {
    return(
        <>
    <footer className="container-footer   border-top">
    <p className="col-md-4 mb-0 text-body-secondary">&copy; 2023 AD, Inc-Deep</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"></a>
    <ul className="icons-cont nav col-md-4 justify-content-end">
        <li className="icons">
            <a href="https://github.com/AlooNDRaa/AniDeep"><ImGithub className='icons' size={"25px"}/></a>
        </li>
        <li className="icons">
            <a href="https://www.linkedin.com/in/alondra-gadea/"><AiFillLinkedin  className='icons' size={"30px"}/></a>
        </li>
        <li className="icons">
            <a ><ImMail4  className='icons' size={"25px"}/></a>
            {/* aqui mi portfolio */}
        </li>
     </ul>
  </footer>
        </>
        )
}