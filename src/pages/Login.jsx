import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [name, setName] = useState("");

  const navigate = useNavigate();

  function handleLogin() {

    if (name.trim() === "") {
      alert("Please enter your name");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", name);

    navigate("/dashboard");
  }

  return (
    <div className="login-page">

      <div className="login-box">

        <h1>Login</h1>

        <p>Enter your name to continue</p>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;