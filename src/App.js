
import './App.css';
import { Route, Routes, useNavigate } from 'react-router';
import Login from './components/Login';
import { useState } from 'react';
import AccountCreated from './components/AccountCreated';
import CheckEmail from './components/CheckEmail';
import Password from './components/Password';
import api from './api/api';
import LoginSuccess from './components/LoginSuccess';
import ForgotPwd from './components/ForgotPwd';
import PasswordReset from './components/PasswordReset';

function App() {
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [cPassword, setcPassword] = useState("");
  let [resetToken, setResetToken] = useState("");

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    navigate("/loginSucess");

  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      username,
      password,
    };
    let DBdata = await api.get("/users");
    DBdata = DBdata.data;
    DBdata = DBdata.find((item) => item.email === userData.email);
    if (!DBdata) {
      if (password === cPassword) {
        try {
          await api.post("/users/signup", userData);
        } catch (error) {
          console.error(error);
        }
        setUsername("");
        setEmail("");
        setPassword("");
        setcPassword("");
        navigate("/created");
      } else {
        alert("password mismatch");
      }
    } else {
      alert("email already Exist");
    }
  };
  const handleForgot = async (e) => {
    e.preventDefault();
    const forgotEmail = email.trim();
    let DBdata = await api.get("/users");
    console.log(DBdata);
    DBdata = DBdata.data;
    DBdata = DBdata.find((value) => value.email.toString() === forgotEmail);
    console.log(DBdata);

    if (DBdata) {
      api.put("/users/forgot", { email: forgotEmail });
      setEmail("");
      navigate("/mail");
    } else {
      alert("Email Id not registered");
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    if (password === cPassword) {
      api.patch(`/users/reset/${resetToken}`, { password: password });
      setPassword("");
      setcPassword("");
      navigate("/password");
    } else {
      alert("password not matching");
    }
    console.log(resetToken);
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<Login 
              handleSignInSubmit={handleSignInSubmit}
              handleSignUp={handleSignUp}
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              cPassword={cPassword}
              setcPassword={setcPassword}
              
        />} />
         <Route path="/created" element={<AccountCreated/>} />
        <Route path="/mail" element={<CheckEmail />} />
        <Route path="/password" element={<Password />} />
        <Route
          path="/forgot"
          element={
            <ForgotPwd
              handleForgot={handleForgot}
              email={email}
              setEmail={setEmail}
            />
          }
        />
             <Route
          path="users/reset/:id"
          element={
            <PasswordReset
              password={password}
              setPassword={setPassword}
              cPassword={cPassword}
              setcPassword={setcPassword}
              handleReset={handleReset}
              setResetToken={setResetToken}
            />
          }
        />
        <Route path="/loginSucess" element={<LoginSuccess />} />

    

      </Routes>

    </>
  );
}

export default App;
