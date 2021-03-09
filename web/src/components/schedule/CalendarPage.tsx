import * as React from 'react';
import Calendar from 'react-calendar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

const CalendarPage = () => {
    return (
        <Container>
            <Route render = {({ history }) => ( 
                <Calendar
                    onChange = {value => {
                        history.push(`/schedule/reservation/${value.toDateString()}`)}
                    }
                />)        
            }/>
        </Container>
    );
}

export { CalendarPage }