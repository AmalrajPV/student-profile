import "../css/Forms.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [userdata, setUserData] = useState({
        username:undefined,
        email:undefined,
        aadhar: undefined,
        password: undefined
    });
    let navigate = useNavigate();


    const handleChange = (e) =>{
        setUserData(prev => ({...prev, [e.target.name]:e.target.value}));
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            await axios.post("/auth/register", userdata);
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-name">Register</div>
        <div className="input-group">
            <input className="input-field" type="text" name="username" id="username" placeholder="Username" onChange={handleChange} />
            <label htmlFor="" className="input-label">Username</label>
        </div>
        <div className="input-group">
            <input className="input-field" type="email" name="email" id="email" placeholder="Email" onChange={handleChange} />
            <label htmlFor="" className="input-label">Email</label>
        </div>
        <div className="input-group">
            <input className="input-field" type="text" name="aadhar" id="aadhar" placeholder="aadhar" onChange={handleChange} />
            <label htmlFor="" className="input-label">Aadhar</label>
        </div>
        <div className="input-group">
            <input className="input-field" type="password" name="password" id="password" placeholder="Password" onChange={handleChange}/>
            <label htmlFor="" className="input-label">Password</label>
        </div>
        <div className="input-group">
            <input type="submit" value="Signup" className="login-btn" />
        </div>
        <div className="to-nxt">Already a member? <Link to={"/login"} className="form-link">Login</Link></div>
    </form>
     );
}
 
export default Register;