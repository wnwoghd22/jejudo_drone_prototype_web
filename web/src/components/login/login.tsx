import * as React from 'react'
import { auth, provider, session } from './firebaseConfig'
import { Account, fetchAccount } from './client'

interface loginProps {

}
interface loginState {
    user;
    account: Account;
}

export class LogIn extends React.Component<loginProps, loginState> {

    constructor(props: any) {
        super(props);

        this.state = {
            user: auth.currentUser,
            account: null,
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
                this.fetchAccount(this.state.user.uid);
                if(!this.state.account){
                    //
                    console.log("no account!");
                }
                else {
                    return;
                }
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

                {
                    this.state.user
                    ? <></>
                    :
                    <div>
                        <input id = 'user_email'></input>
                        <input id = 'user_pw'></input>
                        <button>log in</button>
                    </div>
                }
            </div>
        );
    }
    private fetchAccount(keyVal: string) {
        fetchAccount(keyVal).then(response => {
            this.setState({
                account: response.data.account
            });
        }).catch(err => {
                console.log('account fetch failed');
        })
    }

    /*private componentDidUpdate() {
        this.render();
    }*/
}