import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); 
    const [loading, setLoding] = useState(true);   
  
    const googleProvider = new GoogleAuthProvider();    
    
  
    const createUser = (email, password) => {  
      setLoding(true);   
      return createUserWithEmailAndPassword(auth, email, password);
    }
  
    const logIn = (email, password) => {   
      setLoding(true);  
      return signInWithEmailAndPassword(auth, email, password);
    }
  
    const googleLogin = () => {  
      setLoding(true);   
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
        setLoding(false);      
      });
      return () => {
        unSubscribe();
      }
    }, [])
  
    const authInfo = {
      user,  
      loading,    
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
