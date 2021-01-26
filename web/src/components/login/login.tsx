import * as React from 'react'
import { auth, provider, session } from './firebaseConfig'


export class LogIn extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            user: auth.currentUser
        }

        this.SignInWithGoogle = this.SignInWithGoogle.bind(this);
        this.SignOut = this.SignOut.bind(this);
    }

    SignInWithGoogle = () => {
        auth.setPersistence(session).then(() => {
            auth.signInWithPopup(provider).then(() => {
                this.setState({user: auth.currentUser});
                console.log("login: ", this.state.user);
            }).then(() => {
                
            })
            console.log("auth: ", auth.currentUser);
            console.log(this.state.user);
        })
    }
    SignOut = () => {
        auth.signOut().then(() => {
            this.setState({user: auth.currentUser});
        })
        console.log(this.state.user);
    }

    render() {
        console.log("current: ", this.state.user);
        return (
            <div className="LogIn">
                <header>
                    {
                        this.state.user
                        ? <p>Hello, {this.state.user.displayName}</p>
                        : <p>Please sign in.</p>
                    }

                    {
                        this.state.user
                        ? <button onClick={this.SignOut}>Sign out</button>
                        : <button onClick={this.SignInWithGoogle}>Sign in with Google</button>
                    }
                </header>

                <div>
                    <input id = 'user_id'></input>
                </div>
            </div>
        );
    }

    /*private componentDidUpdate() {
        this.render();
    }*/
}