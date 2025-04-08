import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from './services/Auth.js';
import { useCookies } from 'react-cookie';
import './AuthPage.css';

function SignupPage() {
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rollno, setRollno] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      const userData = await Auth.register(email, password, rollno, username);
      setCookie("user", JSON.stringify(userData), {
        path: "/",
        expires: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
      });
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="button-container">
          <button className="auth-toggle-button" onClick={goToLogin}>Sign in</button>
          <button className="auth-toggle-button active">Sign up</button>
        </div>
        <div className="auth-box">
          {error && <p className="error-message">{error}</p>}

          <p className="auth-label">Email ID</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
            />
          </div>

          <p className="auth-label">Password</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input"
            />
          </div>

          <p className="auth-label">Roll No</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              placeholder="Roll No"
              value={rollno}
              onChange={(e) => setRollno(e.target.value)}
              className="auth-input"
            />
          </div>

          <p className="auth-label">Username</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="auth-input"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button onClick={handleSignup} className="auth-button">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
