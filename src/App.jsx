import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import bgVideo from "./assets/loginbg.mp4";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      {!isLoggedIn && (
        <video
          className="video-bg"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      <div className="container">
        {isLoggedIn ? (
          <Dashboard />
        ) : (
          <LoginForm onLogin={() => setIsLoggedIn(true)} />
        )}
      </div>
    </div>
  );
};

export default App;
