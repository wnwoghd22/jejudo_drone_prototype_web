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
            auth.signInWithPopup(provider).then(() => {
                this.setState({user: auth.currentUser});
                console.log("login: ", this.state.user);
            }).then(() => {
                this.fetchAccount(this.state.user.uid);
                if(!this.state.account){
                    //console.log("no account!");
                    //window.history.pushState('v1','', '/login/create account');
                    let content = {
                        id: this.state.user.uid,
                        name: this.state.user.displayName,
                        phoneNum: '01000000000',
                        authority: 'student',
                        schedule: [],
                    } as Account;
                    
                    postAccount(content).then(() => {
                        this.fetchAccount(this.state.user.uid); 
                        console.log("created!");
                    });
                }
                else {
                    //window.history.pushState('v1','', '/');
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
        console.log("auth: ", auth.currentUser);
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
    private fetchAccount(keyVal: string) {
        fetchAccount(keyVal).then(response => {
            this.setState({
                account: response.data.account
            });
        }).catch(err => {
                console.log('account fetch failed');

        })
    }

}