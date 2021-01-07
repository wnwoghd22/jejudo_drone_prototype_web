import * as React from 'react';
import { Container, Message, Button } from 'semantic-ui-react';

interface lessonElementProps {
    userId : string;
    date : Date
}

interface lessonElementStats {

}

export class MyLessonsElement extends React.Component<lessonElementProps,lessonElementStats> {
    constructor(props: lessonElementProps) {
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

