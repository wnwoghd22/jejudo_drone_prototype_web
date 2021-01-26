import * as React from 'react';
import Calendar from 'react-calendar';
import { Container } from 'semantic-ui-react';
import { Schedule } from './Schedule';

interface LessonProps {
    userId : string;

};
interface LessonStats {

};

export class LessonForm extends React.Component<LessonProps,LessonStats> {
    constructor(props : LessonProps) {
        super(props);
    }
    public render = () =>
    <Container>
        <Calendar
        onChange = {CheckTime}
        onClickDay = {ViewSchedule}
        tileContent = {
            <Container>
                <p>오전</p>
                <p>오후</p>
            </Container>
        }
        />
        <Schedule/>
    </Container>
}

function CheckTime() {
    console.log("calender clicked!");
}
function ViewSchedule() {
    console.log("day clicked!");
}