import * as React from 'react'
import { auth, provider, session } from './firebaseConfig'

var user;

const SignInWithGoogle = () => {
    auth.setPersistence(session).then(()=>  {
        auth.signInWithPopup(provider).then(() => {
            user = auth.currentUser;
            console.log("login: ", user);
        })
        console.log("auth: ", auth.currentUser);
        console.log(user);
    })
}
const SignOut = () => {
    auth.signOut().then(() => {
        user = auth.currentUser;
    })
    console.log(user);
}

export class LogIn extends React.Component {

    constructor(props: any) {
        super(props);

        this.state = {
            user: null
        }
    }

    render() {
        console.log("current: ", user);
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