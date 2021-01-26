import * as React from 'react';
import { Container, Message, Button } from 'semantic-ui-react';

interface ScheduleElementProps {
    userId : string;
    date : Date
}

interface ScheduleElementStats {

}

export class MyScheduleElement extends React.Component<ScheduleElementProps,ScheduleElementStats> {
    constructor(props: ScheduleElementProps) {
        super(props);
    }
    public render = () => <div>
        <Container>
            <Message>{this.props.date.toTimeString()}</Message>
            <Button onclick = {this.CancelLesson}>취소</Button>
        </Container>
    </div>

    private RequireData() {

    }
    private CancelLesson() {

    }
}

