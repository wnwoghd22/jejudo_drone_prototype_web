import * as React from 'react';
import { render } from 'react-dom';
import { Switch } from 'react-router';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { AnnounceList, AnnounceForm, PostForm } from './announce';
import { Container } from 'semantic-ui-react';
import { LessonForm, MyLessonsList } from './lesson';

export class SwitchBox extends React.Component<any, any> {

    public render = () => (
        <Container>
            <Switch>
                <Route
                    exact = {true} path = '/announcements'
                    component = { AnnounceList }
                />
                <Route
                    exact = {true} path = '/announcements/page/:title'
                    component = { AnnounceForm }
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
                    exact = {true} path = '/'
                    render = { () =>
                        <div>        
                            <h1>Main Menu</h1>
                            <div id = "firebaseui-auth-container"></div>
                        </div>              
                    }
                />
            </Switch>
        </Container>
    );
};