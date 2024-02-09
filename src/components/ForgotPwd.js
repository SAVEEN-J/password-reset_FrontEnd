import React from "react";
import { Link } from "react-router-dom";

const ForgotPwd = ({ handleForgot, email, setEmail }) => {
  return (
    <div class="main">  
  	<input type="checkbox" id="chk" aria-hidden="true" />


<form    onSubmit={handleForgot}>
<h1 className="forget" >Forgot Password</h1>

<input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
<button type="submit" className="btn btn-primary" size="20">
        Reset
      </button>
      <Link className="text-light text-decoration-none text-center" to={"/"}>
        <button type="button" className=" btn-primary">
          Back to Login
        </button>
      </Link>

</form>

</div>

  );
};

export default ForgotPwd ;
