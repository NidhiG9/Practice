import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usernames,passwords } from "./password";
import './login.css';

function Loginhr() {
  const [passShow, setPassShow] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalid,setInvalid]=useState([])
  const navigate = useNavigate();

  function dataSubmit(e) {

    e.preventDefault();
  
    if (username === usernames && password === passwords) {
     sessionStorage.setItem("username", username);
     sessionStorage.setItem("password", password);

      navigate('/loginhr');
    } else {
      setInvalid("Invalid username or password");
    }

    setUsername('');
    setPassword('');
  }

  return (
    <>
      <div className="container con" style={{marginTop:"130px",marginBottom:"20px"}} id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={dataSubmit}>
            <h1>Login</h1>
            <p className="text-danger" >{invalid}</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="User name"
            />
            <input

              type={passShow ? "text" : "password"} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <div className="d-flex text-center" style={{marginRight:"100px"}}>
            <div>  <input  className="me-5 mb-1" type="checkbox" checked={passShow} onChange={() => setPassShow(!passShow)} />
</div>
<div>
<p className="mt-1">Show password..</p>
</div>
            </div>
            <button className="btn btn-danger" type="submit">Login</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, HR!</h1>
              <h5 className="mt-2">Welcome to Skilancer Solar Pvt Ltd.</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginhr;
