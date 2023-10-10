import Levierror from '../img/Levi2.png'
import {Link} from 'react-router-dom';

export function ErrorPage() {
    return (
<div className="superiorcont">
        <div className="errorcontainer">
                <img src={Levierror} className='img-err' alt="errorphoto" />
            <div className="texterror">
                <h1 className="titlerror">
                404
                </h1>
                <p className='errorp'>
                Somethings gone wrong, bug
                </p>
           <Link to='/home'>
                 <button className="gobackbutton">
                    Go back home
                </button>
            </Link>     
            </div>
        </div>
</div>
    )
}