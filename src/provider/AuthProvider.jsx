import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);    
  
    const googleProvider = new GoogleAuthProvider();    
    
  
    const createUser = (email, password) => {     
      return createUserWithEmailAndPassword(auth, email, password);
    }
  
    const logIn = (email, password) => {     
      return signInWithEmailAndPassword(auth, email, password);
    }
  
    const googleLogin = () => {     
      return signInWithPopup(auth, googleProvider);
    }
    
    const changeProfile = (name, photo) => updateProfile(auth.currentUser, {
      displayName: {name}, photoURL: {photo}
    });
  
    const logOut = () => {
      signOut(auth);
    }
  
    useEffect( () => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('User in the auth state changed', currentUser);
        setUser(currentUser);       
      });
      return () => {
        unSubscribe();
      }
    }, [])
  
    const authInfo = {
      user,      
      createUser,
      logIn,
      googleLogin,      
      changeProfile,
      logOut
    }
  
    return (
      <AuthContext.Provider value={authInfo}>
          {children}
      </AuthContext.Provider>
    );
  };

export default AuthProvider;
