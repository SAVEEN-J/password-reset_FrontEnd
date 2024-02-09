import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const PasswordReset = ({
  handleReset,
  password,
  cPassword,
  setPassword,
  setcPassword,
  setResetToken,
}) => {
  let { id } = useParams();
  useEffect(() => {
    setResetToken(id);
  });
  //   setResetToken(id);
  return (


    <div class="main">  	
    <input type="checkbox" id="chk" aria-hidden="true" />

<div class="signup">
<form    onSubmit={handleReset} >
<label htmlFor="chk" aria-hidden="true" className="forget">Reset Password</label>
   <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
    <input
          type="password"
          className="form-control"
          id="cPassword"
          placeholder="Confirm Password"
          required
          value={cPassword}
          onChange={(e) => setcPassword(e.target.value)}
        />

  <button type="submit" className="btn mt-3 btn-primary">Reset Password  </button>


</form>
</div>


</div>



  );
};

export default PasswordReset;
