import * as React from 'react';
import { List } from 'semantic-ui-react';
import { auth } from '../login'
import { MyScheduleElement } from './my_schedule_element';

interface ScheduleProps {

};
interface ScheduleStats {
    user;
};

export class MyScheduleList extends React.Component<ScheduleProps, ScheduleStats> {
    constructor(props: ScheduleProps) {
        super(props);
        this.state = this.getAuth();
    }
    public render() {
        return  (
            <div>
                <h1>나의 수업</h1>
                <h2>{   this.state.user ?
                                auth.currentUser.displayName
                            :   "로그인 하십시오." }</h2>
                <MyScheduleElement/>
            </div>
        )
    }
    componentWillUnmount() {
        
    }
    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if(user) {
                console.log(auth.currentUser);
                this.setState({user: auth.currentUser});
            }
            else {
                
            }
        })
    }
    getAuth() :  ScheduleStats  {
        let result = { user: null } as ScheduleStats;
        auth.onAuthStateChanged(user => {
            if(user) {
                result.user = auth.currentUser;
            }
            else {

            }
        });
        return result;
    };
}