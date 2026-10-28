import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";
export default function LoginPage({ state }) {
 const navigate = useNavigate();
  const {login} = useAuth();

  const handleLogin = () => {
    login().then(() => {
      navigate("/dashboard");
    });
  };

  return (
    <>
      <h1>Login</h1>
      <div>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>

      <div>
        <button type="button" onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}
