import * as React from 'react';
import { Container, Message, Button, List } from 'semantic-ui-react';
import { ScheduleContext, UserContext } from '../../Context';

const MyScheduleElement = () => {
    const [schedules, setSchedules] = React.useState<Array<ISchedule> | undefined>(undefined);
    const {scheduleList, cancelSchedule} = React.useContext<IScheduleContext>(ScheduleContext);
    const {user} = React.useContext<IUserContext>(UserContext);

    const CancelLesson = (id: string, date: string, part: string)  => {
        if(user) {
            cancelSchedule(id, {
                date: date,
                part: part,
            } as ISchedule);
        }
    }

    React.useEffect(() => {
        setSchedules(scheduleList);
    }, [scheduleList]);

    return(
        <div>
            {
                schedules !== undefined ?  
                <List items = {
                    schedules.map(schedule =>
                    <List.Item key = {schedule.id}>
                        {schedule.date}
                        {schedule.part}
                            <Button onClick = {() =>
                                CancelLesson(schedule.id, schedule.date, schedule.part)}>
                                취소
                            </Button>
                    </List.Item>
                )}/> :
                <span>수업이 없습니다.</span>
            }
        </div>
    )
}

export default MyScheduleElement;