import * as React from 'react';
import { render } from 'react-dom';
import { Switch } from 'react-router';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { AnnounceList } from './announce';
import { Container } from 'semantic-ui-react';
import { LessonForm } from './lesson';

export class SwitchBox extends React.Component<any, any> {

    public render = () => (
        <Container>
            <Switch>
                <Route
                    exact = {true} path = '/announcement'
                    render = { () => AnnounceList }
                />
                <Route
                    exact = {true} path = '/lesson/:menu'
                    render = { () => LessonForm }
                />
            </Switch>
        </Container>
    );
};