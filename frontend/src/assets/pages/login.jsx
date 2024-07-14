import {Link} from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";


export  function Login() {

  return (
    <main className="log-container">
    <form className="form-cont">
      <h1 className="text">Register Now</h1>
  
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label htmlFor="floatingInput">Email</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="form-check2">
        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Remember me
        </label>
      </div>
      <div className="div-googleButton">
      <button className='google-button'>
        <FcGoogle size={24}/> 
        Continue with google
      </button>
      </div>
    <Link to='/home'>
      <button className="button-desing btn  w-100 py-2" >Sign in</button>
      </Link>
    </form>
  </main>
  );
}

