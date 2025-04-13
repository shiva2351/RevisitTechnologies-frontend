import { Link } from "react-router-dom"
import "./index.css"
const Header =()=>{
    console.log("header")
    return <nav className="header">
        <img alt="logo"/>
        <ul className="list">
           
           <li>
            <Link to="/login">Login</Link> 
           </li>
           <li>
            <Link to="/">DashBoard</Link>
             
           </li>
        </ul>
       
    </nav>
}

export default Header