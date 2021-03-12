import * as React from 'react'
import { Link, Route } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react';

import { UserContext } from '../../Context';

const LoginPage = () => {
    const {user, login, logout} = React.useContext<IUserContext>(UserContext);

    const signIn = () => {
        let _id = (document.getElementById('user_email') as HTMLInputElement).value;
        let _pw = (document.getElementById('user_pw') as HTMLInputElement).value;

        login(_id, _pw);
    }

    return (
        <div className="LogIn">
            <header>
                {
                    user !== undefined
                    ? <p>Hello, {user.name}</p>
                    : <p>Please sign in.</p>
                }

                {
                    user !== undefined
                    ? <button onClick={logout}>Sign out</button>
                    : <></>
                }
            </header>

            {
                user !== undefined
                ? <></>
                :
                <div>
                    <Container>
                        <input id = 'user_email'></input>
                        <input id = 'user_pw'></input>       
                        <Button as={Link} to={'/'} onClick={signIn}>
                            로그인
                        </Button>
                    </Container>
                    <Container>     
                        <Button as={Link} to={'/login/create account'}>
                            회원가입
                        </Button>
                    </Container>
                </div>
            }
        </div>
    );
}

export { LoginPage }