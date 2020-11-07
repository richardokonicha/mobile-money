import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import style from './login.css';


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
          
                <div className="btnContainer">
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
                        // // Sign in with email and password 
                        // <div className="formDiv">
                        //     <h1 className={style.btnContainer}>Login</h1>
                        //     <div>
                        //         <label>Email</label>
                        //         <input 
                        //         type="text" 
                        //         autoFocus 
                        //         required 
                        //         value={email} 
                        //         onChange={(e) => setEmail(e.target.value)}
                        //         />
                        //         <p className="errorMsg">{emailError}</p>
                        //         <label>Password</label>
                        //         <input 
                        //         type="password" 
                        //         required 
                        //         value={password} 
                        //         onChange={(e) => setPassword(e.target.value)}
                        //         />
                        //         <p className="errorMsg">{passwordError}</p>
                        //     </div>
                        //     <button onClick={handleLogin}>Sign in</button>
                        //     <p>Don't have an account ? 
                        //         <span 
                        //         onClick={() => setHasAccount(!hasAccount)}
                        //         >Sign up
                        //         </span>
                        //     </p>
                        // </div>
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
                        // <div className={style.formDiv}>
                        //     <h1>Register</h1>
                        //     <div>
                        //         <label>Email</label>
                        //         <input 
                        //         type="text" 
                        //         autoFocus 
                        //         required 
                        //         value={email} 
                        //         onChange={(e) => setEmail(e.target.value)}
                        //         />
                        //         <p className="errorMsg">{emailError}</p>

                        //         <label>First name</label>
                        //         <input 
                        //         type="text" 
                        //         required 
                        //         value={firstName} 
                        //         onChange={(e) => setFirstName(e.target.value)}
                        //         />

                        //         <label>Last name</label>
                        //         <input 
                        //         type="text" 
                        //         required 
                        //         value={lastName} 
                        //         onChange={(e) => setLastName(e.target.value)}
                        //         />

                        //         <label>Password</label>
                        //         <input 
                        //         type="password" 
                        //         required 
                        //         value={password} 
                        //         onChange={(e) => setPassword(e.target.value)}
                        //         />
                        //         <p className="errorMsg">{passwordError}</p>
                        //     </div>
                        //     <button onClick={handleSignUp}>Sign up</button>
                        //     Have an account ? 
                        //     <span onClick = {() => setHasAccount(!hasAccount)}>Sign in</span>
                        // </div>
                    )}
                </div>
        </section>
    )
}

export default Login;