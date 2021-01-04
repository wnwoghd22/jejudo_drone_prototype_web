import * as React from 'react';
import * as semantic from 'semantic-ui-react';
//import './CalendarForm.css';

interface CalendarProps {
    time : Date
}

const CalenderBody = (time : Date) => {
    let today = time.getDay();

    return(
        <semantic.Container>
            table
        </semantic.Container>
    );
};

export const Calendar = (props: CalendarProps) => (
    <div id = "calendar">
        <semantic.Container id = "calender_head">
            <semantic.Button id = "previous">전</semantic.Button>
            <span id = "title">{props.time.toDateString()}</span>
            <button id = "next">후</button>
        </semantic.Container>
        <div id = "calendar_body">
            <div className = "row">
                <div className = "row_item"><span className = "week">일</span></div>
                <div className = "row_item"><span className = "week">월</span></div>
                <div className = "row_item"><span className = "week">화</span></div>
                <div className = "row_item"><span className = "week">수</span></div>
                <div className = "row_item"><span className = "week">목</span></div>
                <div className = "row_item"><span className = "week">금</span></div>
                <div className = "row_item"><span className = "week">토</span></div>
            </div>
            {CalenderBody(props.time)}
        </div>
    </div>
);