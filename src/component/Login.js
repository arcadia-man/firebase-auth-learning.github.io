import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom'

import { facebookLoginInitiate, googleLoginInitiate, loginInitiate } from '../redux/action'

const Login = () => {

    const [state, setstate] = useState({ email: "", password: "" })

    const [alert, setalert] = useState("Login with credentials")

    const { email, password } = state;

    const { currentUser, loading, error } = useSelector((state) => state.user);

    const navigate = useNavigate();


    const dispatch = useDispatch();

    useEffect(() => {
        if (error === "Firebase: Error (auth/wrong-password)." || error === "Firebase: Error (auth/user-not-found)."
        ) {setalert("Invalid Email Id or Password!")
            setInterval(() => {
                setalert("Login with credentials")
            }, 3000);
            
        }
    }, [error])

    useEffect(() => {
        if (currentUser) {
            navigate("/home")
        }
    }, [currentUser, navigate])

    //console.log(loading)

    const handlechange = (e) => {
        let { name, value } = e.target;
        setstate({ ...state, [name]: value })
    }

    const handelsubmit = (e) => {
        e.preventDefault();
        if (!password || !email) {
            return;
        }
        dispatch(loginInitiate(email, password))
        setstate({ email: "", password: "" })
    }

    const handleGooglesignin = (e) => {
        e.preventDefault();
        dispatch(googleLoginInitiate());
    }

    const handleFacebooksignin = (e) => {
        e.preventDefault();
        dispatch(facebookLoginInitiate());
    }

    return (
        <div className="log">

            <form className='box' onSubmit={handelsubmit}>
                <h2>Sign In</h2>
                <hr />

                <div className="social">
                    <button className="social-login" id='go' onClick={handleGooglesignin}>Login with Google</button>
                    <p><b>OR</b></p>
                    <button className="social-login" id='fb' onClick={handleFacebooksignin}>Login with Facebook</button>
                </div>

                <hr />
                <div className="form-control">{alert}</div>
                <input type="email" id='inputemail' placeholder='Email id' name='email' className='form-control' onChange={handlechange} value={email} required />
                <input type="password" id='inputpassword' placeholder='Password' name='password' className='form-control' onChange={handlechange} value={password} required />
                <button className='signinbutton' type='submit'>Sign In</button>

                <hr />

                <p><b>Forgot Password ?</b></p>
                <Link to='/PasswordReset'><button className='signinbutton'>Reset</button></Link>
            </form></div>
    )
}

export default Login
