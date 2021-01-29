import * as React from 'react';
import { List } from 'semantic-ui-react';
import { auth } from '../login'
import { MyScheduleElement } from './my_schedule_element';

interface ScheduleProps {

};
interface ScheduleStats {
};

export class MyScheduleList extends React.Component<ScheduleProps, ScheduleStats> {
    public render() {
        return  (
            <div>
                <h1>나의 수업</h1>
                <h2>{auth.currentUser.displayName}</h2>
                <MyScheduleElement/>
            </div>
        )
    }
}