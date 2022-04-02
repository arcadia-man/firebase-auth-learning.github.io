import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { resisterInitiate } from '../redux/action'

const Resister = () => {

    const [state, setstate] = useState({ name: "", email: "", password: "", confirmpassword: "" })
    const { name, email, password, confirmpassword } = state;
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (currentUser) {
            console.log(currentUser);
            navigate("/home")
        }

    }, [currentUser, navigate])


    const handlechange = (e) => {
        let { name, value } = e.target;    
        setstate({ ...state, [name]: value })
    }

    const Handlesubmit = (e) => {

        e.preventDefault();

        if (password !== confirmpassword) {
            return;
        }
        
        dispatch(resisterInitiate(email, password, name))

        
        setstate({ name: "", email: "", password: "", confirmpassword: "" })

    }
    return (
        <div className="log">

        <form className='box' id= "signup"onSubmit={Handlesubmit}>
            <h2>Sign Up</h2>
            <input type="text" id='inputname' placeholder='Name' name='name' className='form-control' onChange={handlechange} value={name} required />
            <input type="email" id='inputemail' placeholder='Email id' name='email' className='form-control' onChange={handlechange} value={email} required />
            <input type="password" id='inputpassword' placeholder='Password' name='password' className='form-control' onChange={handlechange} value={password} required/>
            <input type="password" id='inputConfirmpassword' placeholder='Confirm Password' name='confirmpassword' className='form-control' onChange={handlechange} value={confirmpassword} required />
            <button className='signinbutton' onSubmit={Handlesubmit}>Sign Up</button>
            <hr />
            <Link to='/login'><button className='signinbutton'>Back</button></Link>

        </form></div>
    )
}

export default Resister
