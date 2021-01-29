import * as React from 'react';
import { Container, Message, Button, List } from 'semantic-ui-react';
import { schedule, fetchSchedulefromAccount } from './client';
import { auth } from '../login';

interface ScheduleElementProps {

}

interface ScheduleElementStats {
    schedule: schedule[];
}

export class MyScheduleElement extends React.Component<ScheduleElementProps,ScheduleElementStats> {
    constructor(props: ScheduleElementProps) {
        super(props);
        this.state = {
            schedule: []
        }

        this.FetchList = this.FetchList.bind(this);
    }
    
    public render = () => {
        const listItems = this.state.schedule.map(schedule =>
            <List.Item>
                {schedule.date}
                {schedule.part}
                    <Button onClick = {this.CancelLesson}>취소</Button>
            </List.Item>
        );
        return(    
            <div>  
                <List items = {listItems}/>
            </div>
        )
    }
    public componentDidMount() {
        this.FetchList();
    }

    private FetchList() {
        fetchSchedulefromAccount(auth.currentUser.uid).then(response => {
            this.setState({ schedule: response.data.schedule });
            console.log(this.state.schedule);
        }).catch(err => {
            console.log("schedule fetch error!");
        })
    }
    private CancelLesson() {

    }
}

