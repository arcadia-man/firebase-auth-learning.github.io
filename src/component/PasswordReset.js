import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { googleverificationInitiate } from '../redux/action';
const PasswordReset = () => {

    const [email, setemail] = useState("");
    const dispatch = useDispatch();
    const Handlesubmit = (e) => {
        e.preventDefault();
        dispatch(googleverificationInitiate(email))
    }
    
    return (
        <div className='log'>
            <form className='box' id="signup" onSubmit={Handlesubmit}>
                <h2>Reset Password</h2>
                <input type="email" id='inputemail' placeholder='Email id' name='email' className='form-control' onChange={(e) => { setemail(e.target.value) }} value={email} required />
                <button className='signinbutton' onSubmit={Handlesubmit}>Verify</button>
                <hr />
                <Link to='/login'><button className='signinbutton'>Back</button></Link>

            </form>
        </div>
    )
}

export default PasswordReset
