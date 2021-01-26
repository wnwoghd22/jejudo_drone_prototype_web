import * as React from 'react';
import { List } from 'semantic-ui-react';
import { auth } from '../login'

interface ScheduleProps {

};
interface ScheduleStats {
    announceList : []
};

export class MyScheduleList extends React.Component<ScheduleProps, ScheduleStats> {
    public render() {
        return  (
            <div>
                <h1>나의 수업</h1>
                <List>
                    
                </List>
            </div>
        )
    }
}