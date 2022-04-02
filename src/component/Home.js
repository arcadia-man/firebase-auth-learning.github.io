import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../redux/action';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user)

    const [useremail, setuseremail] = useState("")
    const [profilimg, setprofilimg] = useState("")
    const [profilename, setprofilename] = useState("")

    useEffect(() => {
        if (currentUser === null) {
            setuseremail("");
            setprofilimg("");
            setprofilename("");
            navigate("/");
        }
        else { 
            setuseremail(currentUser.email); 
            setprofilimg(currentUser.photoURL)
            setprofilename(currentUser.displayName)
        }
    }, [currentUser, navigate])

    const handleonclick = (e) => {
        dispatch(logoutInitiate());
    }

    return (
        <div className="log">
            <div className='box'>
                <h1 className='home'> <b>Wellcome to out website</b></h1><hr />
                <img className='profileimg' src={`${profilimg}`} alt="" />
                <p>{useremail}</p>
                <p>{profilename}</p>
                <button className='signinbutton' onClick={handleonclick} >Sign Out</button>
            </div>
        </div>
    )
}

export default Home