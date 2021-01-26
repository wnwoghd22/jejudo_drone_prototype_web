import * as React from 'react';
import Calendar from 'react-calendar';
import { Container } from 'semantic-ui-react';
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
            tileContent = {
                <div>
                    <p>오전</p>
                    <p>오후</p>
                </div>
            }
        />
    </Container>

    private CheckTime() {
        console.log("calender clicked!");
    }
    private ViewSchedule = (date:Date) => {
        let toStr = date.toDateString();
        console.log("day clicked!", toStr);
    }
    private OnDateChange = date => {
        this.setState({
            date: date
        })
        this.CheckTime();
    }
}
