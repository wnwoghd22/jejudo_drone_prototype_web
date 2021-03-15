import * as React from 'react';
import { Table, Label, Button, List } from 'semantic-ui-react';
import { ScheduleContext, UserContext } from '../../Context';

const MyScheduleElement = () => {
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

    const create_tableRows = () => {
        
        if (scheduleList === undefined || scheduleList.length === 0) {
            return (
                <Table.Row key={'none'}>
                    <Table.Cell>일정이 없습니다.</Table.Cell>
                </Table.Row>
            );
        }

        const rows: JSX.Element[] = [];
        scheduleList.forEach(element => {
            let part = element.part === "morning" ? "아침" :
                        element.part === "noon" ? "점심시간" :
                            "오후";

            rows.push(
                <Table.Row key={element.id}>
                    <Table.Cell>{element.date}</Table.Cell>
                    <Table.Cell>{part}</Table.Cell>
                    <Table.Cell>
                        <Label
                            onClick = {() => CancelLesson(element.id, element.date, element.date)}
                        >
                            취소
                        </Label>
                    </Table.Cell>
                </Table.Row>
            )
        });

        return rows;
    }

    const tableRows = create_tableRows();

    return (
        <Table striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>일자</Table.HeaderCell>
                    <Table.HeaderCell>시간</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {tableRows}
            </Table.Body>
        </Table>
    );

    /***********************************************
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
    );
    ************************************************/
}

export default MyScheduleElement;