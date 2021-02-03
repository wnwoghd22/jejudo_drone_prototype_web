import * as React from 'react';
import { Container, Button, Comment } from 'semantic-ui-react';
import { match } from 'react-router-dom';
import { schedule, student, postScheduletoAccount, postStudentToList } from './client';
import { auth } from '../login'

interface keyMatch {
    date: string;
}
interface ScheculeProps {
    match: match<keyMatch>;
}
interface ScheduleStats {
    keyVal: string;
}

export class PartPage extends React.Component<ScheculeProps, ScheduleStats> {
    constructor(props: ScheculeProps) {
        super(props);
        this.state = {
            keyVal : ''
        }
        this.Reserve = this.Reserve.bind(this);
    }

    public render() {
        const { date } = this.props.match.params;
        console.log("date: ", date);
        return (
            <div>
                <h2>{date}</h2>
                <h3>{auth.currentUser.displayName}</h3>
                <Container>
                    <Button onClick = {() => this.Reserve('moring')}>오전</Button>
                    <Button onClick = {() => this.Reserve('noon')}>점심시간
                        <Comment>
                            수강생이 적은 경우 수업하지 않습니다.
                        </Comment>
                    </Button>
                    <Button onClick = {() => this.Reserve('afternoon')}>오후</Button>
                </Container>
            </div>
    )};

    private Reserve(part: string) {
        const { date } = this.props.match.params;
        let _id = auth.currentUser.uid;
        
        let content = {
            id: auth.currentUser.uid,
            date: date,
            part: part,
        } as schedule;
        postScheduletoAccount(_id, content).then(result => {
            if(result.data.result === "already exist") {
                alert("이미 신청되어 있습니다.");
            } else {
                postStudentToList(date, part, content);
                alert("신청되었습니다.");
            }
        })
    }
}