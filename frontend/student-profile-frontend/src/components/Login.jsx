import "../css/Forms.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [userdata, setUserData] = useState({
        email: undefined,
        password: undefined
    });
    let navigate = useNavigate();

    const handleChange = (e) =>{
        setUserData(prev => ({...prev, [e.target.name]:e.target.value}));
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            await axios.post("/auth/login", userdata);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-name">Login</div>
        <div className="input-group">
            <input className="input-field" type="email" name="email" id="email" placeholder="Email" onChange={handleChange}/>
            <label htmlFor="" className="input-label">Email</label>
        </div>
        <div className="input-group">
            <input className="input-field" type="password" name="password" id="password" placeholder="Password" onChange={handleChange}/>
            <label htmlFor="" className="input-label">Password</label>
        </div>
        <div className="forget">
            <div className="remember-box">
                <input type="checkbox" name="" id="remember" />
                <label htmlFor="remember">Remember me</label>
            </div>
            <a href="" className="form-links">forgot password</a>
        </div>
        <div className="input-group">
            <input type="submit" value="Login" className="login-btn" />
        </div>
        <div className="to-nxt">Not a member? <Link to={"/register"} className="form-link">Signup</Link></div>
    </form>
  );
};

export default Login;
