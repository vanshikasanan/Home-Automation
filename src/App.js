import React, { useEffect } from 'react';
import './App.css';

import Login from './components/Login';
import ThemeProvider from './styles/ThemeProvider';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import firebase from "firebase";
import Home from './components/Home';

function App() {

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if(user){
      db.collection('users').doc(user.uid).set({
      email: user.email,
      lastSeen: firebase.firestore.FieldValue.serverTimestamp(),

      },
      {merge :true}
    
      );
    }
  }, [user])

  return (
    <div className="app">
      <Router>
      {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/">
              <ThemeProvider>
              <Home/>
              </ThemeProvider>
              
            </Route>
          </Switch>
        )}
     
      </Router>

    </div>
    
    
  );
}

export default App;
