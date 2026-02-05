import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock authentication
    if (username === "Technoblade" && password === "NeverDies") {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <div style={{ textAlign: 'center' }}>
      <h2>Admin Login</h2>
      </div>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <Button text="Login" />
    </form>
  );
};

export default LoginForm;
