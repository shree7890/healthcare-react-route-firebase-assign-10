import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, GithubAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
// Initialize Firebase
import initializeAuthentiacation from "../components/Firebase/Firebase.init";
initializeAuthentiacation();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const handleSignIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    const handleSignOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const githubSingnIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);

            })
            .catch(error => {
                setError(error.message);
            })
    }


    const handleSubmit = (e) => {
        console.log(email, password);
        e.preventDefault();
        if (password.length < 6) {
            setError("Password should be at least 6 characters");
            return;
        }
        const regularExpre = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{6,20}$/;
        if (!regularExpre.test(password)) {
            setError("password must be a minimum of 6 characters including number, Upper, Lower And one special character");
            return;
        }

        if (isLogin) {

            createLoginUser(email, password);
        }
        else {
            createNewUser(email, password);
        }

    }
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                verificationEmail();
                userProfile();
                setError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    const createLoginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user
                console.log(user);

                setError('');
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }
    const verificationEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(user => {
                // Email verification sent!
                alert("email send inbox check");
            })
    }
    const handlerResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(user => {
                // Password reset email sent!
                alert("email send reset password");
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const userProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: "name"
        }).then(result => {
            // result found
        }).catch(error => {
            setError(error.message);
        })
    }
    const changeEmailClick = (e) => {
        setEmail(e.target.value);
    }
    const changePasswordClick = (e) => {
        setPassword(e.target.value);
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // const uid = user.uid;
                // console.log(user);
                setUser(user);
            }
            else {
                // sign out
            }
            setIsLoading(false)
        })
    }, [])
    return { user, error, handleSignIn, handleSignOut, githubSingnIn, isLogin, changeEmailClick, changePasswordClick, handleSubmit, handlerResetPassword, createNewUser, setIsLogin, isLoading }
}
export default useFirebase;