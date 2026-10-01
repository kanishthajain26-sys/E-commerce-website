import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const username =
    localStorage.getItem("username");

  function handleLogout() {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");

    navigate("/login");
  }

  return (
    <div className="dashboard-page">

      <div className="dashboard-box">

        <h1>
          Welcome, {username} 👋
        </h1>

        <p>
          This is your dashboard.
        </p>

        <p>
          You are successfully logged in.
        </p>

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </div>
  );
}

export default Dashboard;