import * as React from 'react';
import { Container, Button } from 'semantic-ui-react';

interface ScheculeProps {

}
interface ScheduleStats {

}

export class Schedule extends React.Component<ScheculeProps, ScheduleStats> {
    constructor(props: ScheculeProps) {
        super(props);
        this.state = {
            
        }
    }

    public render = () => <div>
        <Container>
            <Button>오전</Button>
            <Button>오후</Button>
        </Container>
    </div>
}