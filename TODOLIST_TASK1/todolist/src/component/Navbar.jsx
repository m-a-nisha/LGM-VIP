import React, { useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css';
import { UserContext } from '../App'
import image from '../image/logo1.png'

export default function Navbar() {
    const navigate = useNavigate()
    const { state, dispatch } = useContext(UserContext)
    

    const HandleLogout = () => {
        localStorage.clear()
        dispatch({ type: "CLEAR" })
        navigate("/signIn")
    }
    const renderlist = () => {
        if (state) {
            return (

                <div className='end'>
                    <button className='logout' onClick={HandleLogout}>Logout</button>
                </div>
            )
        }
        else {
            return (
                <div
                    style={{display:"flex"}}
                    className='end'>
                    <Link to="/signin">
                        <h4>Login</h4>
                    </Link>
                    <Link to="/signup">
                        <h4>SignUp</h4>
                    </Link>
                </div>
            )
        }
    }
    return (
        <div>
            <div className="navbar">
                
                    <div className='logo'>
                        <img src={image} alt="logo" />
                    </div>
                

                {renderlist()}
            </div>
        </div>
    )
}
