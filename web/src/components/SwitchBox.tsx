import * as React from 'react';
import { render } from 'react-dom';
import { Switch } from 'react-router';
import * as Firebaseui from 'firebaseui'
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom';
import { AnnounceList, AnnouncePage, PostForm } from './announce';
import { Button, Container } from 'semantic-ui-react';
import { LessonForm, MyLessonsList } from './lesson';
import { LogIn } from './login'

export class SwitchBox extends React.Component<any, any> {

    public render = () => (
        <Container>
            <Switch>
                <Route
                    exact = {true} path = '/announcements'
                    component = { AnnounceList }
                />
                <Route
                    exact = {true} path = '/announcements/page/:key'
                    component = { AnnouncePage }
                />
                <Route
                    exact = {true} path = '/announcements/post'
                    component = { PostForm }
                />
                <Route
                    exact = {true} path = '/lesson/reservation'
                    component = { LessonForm }
                />
                <Route
                    exact = {true} path = '/lesson/my lessons'
                    component = { MyLessonsList }
                />
                <Route
                    exact = {true} path = '/login'
                    component = { LogIn }
                />
                <Route
                    exact = {true} path = '/'
                    render = { () =>
                        <div>        
                            <h1>Main Menu</h1>
                            <div id = "firebaseui-auth-container">
                                <Button
                                    key = 'login'
                                    as = {Link}
                                    to = '/login'
                                >
                                    log in
                                </Button>
                            </div>
                        </div>              
                    }
                />
            </Switch>
        </Container>
    );
};