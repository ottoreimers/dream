import React, { useState, useRef } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import AuthService from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';


const Login = () => {


  const form = useRef();
  const checkBtn = useRef();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();


    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          navigate("/");
          window.location.reload();
        },
        (error) => {
          const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setLoading(false);
        setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  }
  return (
    <div className='login'>
      <Navigation />
      <Form onSubmit={handleLogin} ref={form}>
        <label htmlFor='username'>Username</label>
        <Input
          type="text"
          name="username"
          value={username}
          onChange={onChangeUsername}
          required
        />
        <label htmlFor='password'>Password</label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
          required
        />
        <button disabled={loading}>
          {loading && (
            <div></div>
          )}
          <div>Login</div>
        </button>
        {message && (
          <div>{message}</div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </div>
  )
}

export default Login;
