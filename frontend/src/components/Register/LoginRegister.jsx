import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const endpoint = `${process.env.REACT_APP_API_URL}/LoginRegister.php`;
    const payload = {
      email: email,
      password: password,
      action: isLogin ? "login" : "register",
    };

    if (!isLogin && password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(endpoint, payload);
      if (response.data.success) {
        setMessage(isLogin ? "Login Successful!" : "Registration Successful!");
        // You can also handle setting user session state here
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again");
    }
  };

  return (
    <>
      <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#loginRegisterModal">
        Log In/Sign Up
      </button>

      <div className="modal fade" id="loginRegisterModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">{isLogin ? "Log In" : "Sign Up"}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {!isLogin && (
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                  </div>
                )}
                <div className="text-center">
                  <button type="button" className="btn btn-link" onClick={toggleForm}>
                    {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
                  </button>
                </div>
                <div className="text-danger">{message}</div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary">{isLogin ? "Log In" : "Sign Up"}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginRegister;
