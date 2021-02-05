import * as React from 'react';
import Calendar from 'react-calendar';
import { Container } from 'semantic-ui-react';
import { NavLink, Route } from 'react-router-dom';
import { PartPage } from './PartPage';

interface LessonProps {
    userId : string;

};
interface LessonStats {
    date;
};

export class CalendarPage extends React.Component<LessonProps,LessonStats> {
    constructor(props : LessonProps) {
        super(props);
        this.state = {
            date: new Date()
        }
        this.CheckTime = this.CheckTime.bind(this);
        this.ViewSchedule = this.ViewSchedule.bind(this);
        this.OnDateChange = this.OnDateChange.bind(this);
    }
    public render = () =>
    <Container>
        <Calendar
            value = {this.state.date}
            onChange = {this.OnDateChange}
            onClickDay = {this.ViewSchedule}
        />
    </Container>

    private CheckTime() {
        console.log("calender clicked!");
    }
    private ViewSchedule = (date:Date) => {
        let toStr = date.toDateString();
        console.log("day clicked!", toStr);
        //NavLink.call(`/schedule/reservation/${this.state.date.toDateString}`);
    }
    private OnDateChange = value => {
        this.setState({
            date: value
        })
        this.CheckTime();
        history.pushState('v1', '', `/schedule/reservation/${value.toDateString()}`);
    }
}
