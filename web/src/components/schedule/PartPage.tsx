import * as React from 'react';
import { Container, Button, Comment } from 'semantic-ui-react';

interface ScheculeProps {

}
interface ScheduleStats {

}

export class PartPage extends React.Component<ScheculeProps, ScheduleStats> {
    constructor(props: ScheculeProps) {
        super(props);
        this.state = {
            
        }
    }

    public render = () => <div>
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
}