import * as React from 'react'
import { auth, provider } from './firebaseConfig'

var user = auth.currentUser;
const SignInWithGoogle = () => {
    auth.signInWithPopup(provider);
    console.log(user);
} 
const SignOut = () => auth.signOut();

export class LogIn extends React.Component {
    render() {
        return (
            <div className="LogIn">
                <header>
                    {
                        user
                        ? <p>Hello, {user.displayName}</p>
                        : <p>Please sign in.</p>
                    }

                    {
                        user
                        ? <button onClick={SignOut}>Sign out</button>
                        : <button onClick={SignInWithGoogle}>Sign in with Google</button>
                    }
                </header>
            </div>
        );
    }
}