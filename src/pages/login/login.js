import React from 'react';
import {Link} from 'react-router-dom';
import './login.css';
import Image from '../../assets/group-4.png';

const Login = () => (
    <div className="main">
        
        <div className ="rectangle0">
            <span className="logo0">LOGO</span>
        </div>
        <div className="container">
        <img src={Image}  className="Group-4" alt=""/>
        <div className="login" >
            <h2 className="login-title">Login </h2>
            <form>
                <label className="user-lb" for="username" >User name</label>
                <input className="username" name="username" type="name" />
                <label className="pass-lb" for="password">Password</label>
                <input className="password" name="password" type="password" />
                <input className="checkbox" type="checkbox"   />
                <label className="check-lb">Keep me Signed in</label>
                <a href="">Forgot your password?</a>
                <Link to='/home' className="link" >
                <div className="submit">SIGN IN</div>
                </Link>
                <div className="sign-up"><p className="que">Don’t have account?<a className="sign-up-a" href="">Sign up</a></p></div>
            </form>
        </div>
        </div>
        <div className="footer"><p > © Con5 Online Ordering System, 2019 </p></div>
        
    </div>
    
)


export default Login;