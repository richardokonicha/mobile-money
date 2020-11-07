import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Login = (props) => {
    // destructure props
    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignUp, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError
    } = props;

    return (
        <section className="section">
                    {hasAccount ? (
                          <SignIn
                          email={email}
                          setEmail={setEmail}
                          emailError={emailError}
                          password={password}
                          setPassword={setPassword}
                          passwordError={passwordError}
                          handleLogin={handleLogin}
                          hasAccount={hasAccount}
                          setHasAccount={setHasAccount}
                          />
                    ) : (
                        // Sign up with email and password 
                        <SignUp
                        email={email}
                        setEmail={setEmail}
                        emailError={emailError}
                        password={password}
                        setPassword={setPassword}
                        passwordError={passwordError}
                        hasAccount={hasAccount}
                        setHasAccount={setHasAccount}
                        firstName={firstName}
                        setFirstName={setFirstName}
                        lastName={lastName}
                        setLastName={setLastName}
                        handleSignUp={handleSignUp}
                        />
                    )}
        </section>
    )
}

export default Login;