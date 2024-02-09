import React from 'react'
import { Link } from 'react-router-dom'


function AccountCreated() {
  return (
    <div className="signIn container d-flex flex-column gap-3 p-2">
    <h2 className="display-6 text-center">Account Created Successfully</h2>
  
    <Link className="text-center" to="/">
      <button type="submit" className="btn btn-primary">
        Now Login Your Account
      </button>
    </Link>
  </div>
  )
}

export default AccountCreated