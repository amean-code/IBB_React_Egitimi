import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <form className="form">
            <h2 className="header">Sign In</h2>
            <div  className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="text" name="mail" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="Enter password"/>
            </div>
            <div className="form-group-check">
                <input type="checkbox" name="remember" className="form-check-input" />
                <label htmlFor="remember">Remember me</label>
            </div>
            <div className="form-group-check">
                <input type="checkbox" name="check" className="form-check-input" />
                <label htmlFor="check">Kullanıcı sözleşmesini okudum ve onaylıyorum.</label>
            </div>
            <button type="submit" className="submit" disabled>Submit</button>
            <div className="forget">Forget <a href="#">password?</a></div>
        </form>
      </div>
    );
  }
}

export default Login;