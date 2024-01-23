import {ImGithub, ImMail4} from 'react-icons/im';
import {AiFillLinkedin} from 'react-icons/ai';



export function Footer() {
    return(
        <>
             <footer className="contaiaaaner-footerr">
                <div className="contentFoter">
                <h3 className='texth3lis'>
                2023 AD, Inc-Deep
                </h3>
                </div>
                <ul className="unnorderlistfotter">
                    <li className="icons">
                        <a href="https://github.com/AlooNDRaa/AniDeep"><ImGithub className='icons' size={"25px"}/></a>
                    </li>
                    <li className="icons">
                        <a href="https://www.linkedin.com/in/alondra-gadea/"><AiFillLinkedin  className='icons' size={"30px"}/></a>
                    </li>
                    <li className="icons">
                        <a ><ImMail4 className='icons' size={"25px"}/></a>
                            {/* aqui mi portfolio */}
                    </li>
                </ul>
            </footer>
        </>
        )
}