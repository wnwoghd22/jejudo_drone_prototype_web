import * as React from 'react';
import { Container, Button, Comment } from 'semantic-ui-react';
import { match } from 'react-router-dom';

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
    }

    public render() {
        const { date } = this.props.match.params;
        console.log("date: ", date);
        return (
            <div>
                <h2>{date}</h2>
                <Container>
                    <Button>오전</Button>
                    <Button>점심시간
                        <Comment>
                            수강생이 적은 경우 수업하지 않습니다.
                        </Comment>
                    </Button>
                    <Button>오후</Button>
                </Container>
            </div>
    )};
}