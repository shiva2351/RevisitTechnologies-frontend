import { Link } from "react-router-dom"
import "./index.css"

const LoginRoute=()=>{


    return <div>
        <div className="login-card">
        <form  className="login-form" >
            <input className="login-input" type="text" placeholder="USER" />
            <input  className="login-input" type="text" placeholder="PASSWORD" />
            <button className="login-button" type="submit">LOGIN</button>
            <p>Don't have an account? <Link to="signup"><span>Register</span></Link></p>
        </form></div>
</div>
}


export default LoginRoute