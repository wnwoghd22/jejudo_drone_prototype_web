import * as React from 'react';
import { render } from 'react-dom';
import { Switch } from 'react-router';
import * as Firebaseui from 'firebaseui'
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom';
import { NoticeList, NoticePage , PostPage } from './announce';
import { Button, Container } from 'semantic-ui-react';
import { CalendarPage, CalendarListPage, PartPage, PartListPage, MyScheduleList } from './schedule';
import { LoginPage, AccountPage } from './User'

interface boxprops {

}
interface boxstate {
    user?,
}

export class SwitchBox extends React.Component<boxprops, boxstate> {
    constructor(props: boxprops) {
        super(props);

        this.state = {
            user: null,
        }
    }
    public render = () => (
        <Container>
            <Switch>
                <Route
                    exact = {true} path = '/announcements'
                    component = { NoticeList }
                />
                <Route
                    exact = {true} path = '/announcements/page/:key'
                    component = { NoticePage }
                />
                <Route
                    exact = {true} path = '/announcements/post'
                    component = { PostPage }
                />
                <Route
                    exact = {true} path = '/schedule/reservation'
                    component = { CalendarPage }
                />
                <Route
                    exact = {true} path = '/schedule/reservation/:date'
                    component = { PartPage }
                />
                <Route
                    exact = {true} path = '/schedule/my schedule'
                    component = { MyScheduleList }
                />
                <Route
                    exact = {true} path = '/schedule/list'
                    component = { CalendarListPage }
                />
                <Route
                    exact = {true} path = '/schedule/list/:date'
                    component = { PartListPage }
                />
                <Route
                    exact = {true} path = '/login'
                    component = { LoginPage }
                />
                <Route
                    exact = {true} path = '/login/create account'
                    component = { AccountPage }
                />
                <Route
                    exact = {true} path = '/'
                    render = { () =>
                        <div>        
                            <h1>Main Menu</h1>
                            <div id = "firebaseui-auth-container">
                                {

                                }
                                <Button
                                    key = 'login'
                                    as = {Link}
                                    to = '/login'
                                >{
                                    this.state.user ?
                                    '회원 정보' :
                                    'log in'
                                }
                                </Button>
                            </div>
                        </div>              
                    }
                />
            </Switch>
        </Container>
    );
};