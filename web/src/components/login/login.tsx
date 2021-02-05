import * as React from 'react'
import { Route, withRouter } from 'react-router-dom';
import { auth, provider, session, local } from './firebaseConfig'
import { Account, fetchAccount, postAccount } from './client'

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
            user: null, //auth.currentUser,
            account: null,
        }

        this.SignInWithGoogle = this.SignInWithGoogle.bind(this);
        this.SignOut = this.SignOut.bind(this);
    }

    SignInWithGoogle = () => {
        auth.setPersistence('local').then(() => {
            auth.signInWithPopup(provider).then(result => {
                this.setState({user: result.user});
                console.log("login: ", this.state.user.uid);
                this.fetchAccount(this.state.user.uid);
            }).catch(err => {
               console.log(err);
            });
        });
    }
    SignOut = () => {
        auth.signOut().then(() => {
            this.setState({user: auth.currentUser});
        });
        console.log(this.state.user);
    }

    render() {
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
                        <button>create account</button>
                    </div>
                }
            </div>
        );
    }
    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if(user) {
                this.setState({user: user});
                this.render();
            }
        }) 
    }

    private fetchAccount(keyVal: string) {
        fetchAccount(keyVal).then(response => {
            console.log(response.data.account);
            if(response.data.account) {
                console.log('login!');
                this.setState({
                    account: response.data.account
                });
                window.history.pushState('v1','', '/');
            }
            else {
                console.log("no account!");
                window.history.pushState('v1','', '/login/create account');
            }
        }).catch(err => {
                console.log('account fetch failed');
        })
    }
}