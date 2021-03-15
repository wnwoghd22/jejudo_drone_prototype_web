import * as React from 'react';
import { Container, Button, Comment } from 'semantic-ui-react';
import { match } from 'react-router-dom';

import { UserContext, ScheduleContext } from '../../Context';

interface keyMatch {
    date: string;
}
interface Props {
    match: match<keyMatch>;
}

const PartPage = ({match} : Props) => {
    const {date} = match.params;
    const {user} = React.useContext<IUserContext>(UserContext);
    const {postSchedule, dayInfo, fetchDayInfo} = React.useContext<IScheduleContext>(ScheduleContext);

    const Reserve = (part: string) => {
        if(user === undefined) {
            alert('로그인이 필요한 서비스입니다.');
            return;
        }
        let _id = user.id;
        
        let content = {
            date: date,
            part: part,
        } as ISchedule;
        
        postSchedule(content);
    }

    React.useEffect(() => {
        fetchDayInfo(date);
    }, []);

    React.useEffect(() => {
        console.log(dayInfo);
    }, [dayInfo]);

    return (
        <div>
            <h2>{date}</h2>
            <h3>{ user ? user.name : null }</h3>
            <Container>
                <Container>
                    <Button onClick = {() => Reserve('morning')}>오전</Button>
                </Container> <br/>
                <Container> 
                    <Button onClick = {() => Reserve('noon')}>점심시간</Button>                            
                    <Comment>수강생이 적은 경우 수업하지 않습니다.</Comment>
                </Container> <br/>
                <Container>
                    <Button onClick = {() => Reserve('afternoon')}>오후</Button>
                </Container>
            </Container>
        </div>
    );
}

export { PartPage }