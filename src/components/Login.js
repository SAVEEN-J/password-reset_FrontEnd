import React from 'react'
import { Link } from 'react-router-dom';

function Login({
    handleSignInSubmit,  
    handleSignUp,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    cPassword,
    setcPassword,

}) {
  return (
    <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

<div class="signup">
<form   onSubmit={handleSignUp} >
<label htmlFor="chk" aria-hidden="true">Sign up</label>
<input type="text" name="txt" placeholder="User name" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
<input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
<input type="password" name="pswd" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
<input type="password" name="Cpswd" placeholder="Confirm Password" value={cPassword} onChange={(e)=>setcPassword(e.target.value)} required=""/>

<button type='submit'>Sign up</button>
</form>
</div>

<div class="login">
<form   onSubmit={handleSignInSubmit}>
<label for="chk" aria-hidden="true">Login</label>
<input type="email" name="email" placeholder="Email" required />
<input type="password" name="pswd" placeholder="Password" required />
 <Link className="forgot" to="forgot"    >  Forgot Password </Link>
  <button type='submit' >Login</button>

</form>
</div>
	</div>
  )
}

export default Login;