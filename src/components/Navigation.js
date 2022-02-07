import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    navigate("/");
    window.location.reload();
  };
  return (
    <div>
<nav>
        <Link to={"/"}>Home</Link>
        {currentUser ? (
          <>
            <Link to={"/profile"}>{currentUser.username}</Link>

            <a href="/login" onClick={logOut}>
              Logout
            </a>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              Login
            </Link>

            <Link to={"/register"}>
              Register
            </Link>
          </>
        )}
      </nav>
    </div>
  )
}

export default Navigation
