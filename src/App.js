import React, { useState, useEffect } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
// import { purple } from '@material-ui/core/colors';
import { auth, db, writeToDb } from './fire';
import Auth from './components/Auth';
// import Hero from './components/Hero';   
import Dashboard from './components/Dashboard';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `#A5396F`,
    }
  }
})

const App = () => {
  //initializing state variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [user, setUser] = useState('');
  const [userProfile, setUserProfile] = useState('');
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
    auth
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
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((createdUser) => {
      writeToDb(createdUser, firstName, lastName);
    }
    )
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
    auth.signOut();
  }

  const setUserData = (uid) => {
    // get user profile info from db 
    db.collection("users")
    .doc(uid)
    .get()
    .then(doc => {
      const data = doc.data();
      setUserProfile(data);
    });
  };

  useEffect(() => {
    // Listens to the user variable for value changes and rerenders 
    const authListener = () => {
      auth.onAuthStateChanged((user) => {
        // checks if user is authenticated and set user
        if(user){
          clearInputs();
          setUser(user);

          setUserData(user.uid);
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
      <ThemeProvider theme={ theme }>
        <Dashboard 
        user={user} 
        userProfile={userProfile}
        handleLogOut={handleLogOut} 
        />
      </ThemeProvider>
      
      ) : (
        <Auth 
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