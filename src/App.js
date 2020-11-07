import React, { useState, useEffect } from "react";
import fire from './fire';
import Login from './components/Login';
// import Hero from './components/Hero';   
import Dashboard from './components/Dashboard';

const App = () => {
  //initializing state variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    // clear login input field
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    // clear errors from html input field
    setEmailError('');
  }

  const handleLogin = () => {
    // logs user in with email and passwords 
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((err) => {
      // eslint-disable-next-line default-case
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  const handleSignUp = () => {
    // create new user account with email and password
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      // eslint-disable-next-line default-case
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  const handleLogOut = () => {
    // signs current user out when triggered
    fire.auth().signOut();
  }

  useEffect(() => {
    // Listens to the user variable for value changes and rerenders 
    // the component once a change is detected
    // this function is created and called inside this block for specific purpose of useEffect
    const authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
        // checks if user is authenticated and set user
        if(user){
          clearInputs();
          setUser(user);
        } else { 
          setUser("");
        }
      });
    };
    authListener();
  }, []);

  return (
    <div className="App">
      
      {user ? (
      // An if else statement to check if user is authenticated
      // renders dashboard if user is auth and renders Login is user isn't auth
      <Dashboard user={user} handleLogOut={handleLogOut} />
      
      ) : (
        <Login 
        email={email} 
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignUp ={handleSignUp}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        />
      )}
    </div>
  );
};

export default App;