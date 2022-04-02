import React , {useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Navbar = () => {
    const { currentUser } = useSelector((state) => state.user)
    const location = useLocation();

    useEffect(() => {
        //console.log(location);      
    }, [location])

    if(currentUser === null){
        return (
            <div>
                <div className="navbar">
                    <p>Auth</p>
                    <div className='links'>  
                    <Link className={location.pathname === "/Main" ? "active" : ""} to="/Main">Home</Link>   
                    <Link className={location.pathname === "/Login" ? "active" : ""}to="/Login">Login</Link>
                    <Link className={location.pathname === "/Resister" ? "active" : ""}to="/Resister">Register</Link>
                    <Link className={location.pathname === "/About" ? "active" : ""}to="/About">About</Link>
                    </div>
    
                </div>
    
            </div>
        )
    }
    else {
        return (
            <div>
                <div className="navbar">
                    <p>Auth</p>
                    <div className='links'>  
                    <Link className={location.pathname === "/Main" ? "active" : ""} to="/Main">Home</Link>   
                    <Link className={location.pathname === "/Home" ? "active" : ""}to="/Home">Dashbord</Link>
                    <Link className={location.pathname === "/About" ? "active" : ""}to="/About">About</Link>
                    </div>
    
                </div>
    
            </div>
        )
    }
    
    
}

export default Navbar
