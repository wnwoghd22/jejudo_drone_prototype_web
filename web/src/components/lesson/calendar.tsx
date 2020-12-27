import * as React from 'react';
import * as semantic from 'semantic-ui-react';

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
            <span id = "title">{props.time.toDateString}</span>
            <button id = "next">후</button>
        </semantic.Container>
        <div id = "calendar_body">
            <div className = "row">
                <div className = "box"><span className = "text">일</span></div>
                <div className = "box"><span className = "text">월</span></div>
                <div className = "box"><span className = "text">화</span></div>
                <div className = "box"><span className = "text">수</span></div>
                <div className = "box"><span className = "text">목</span></div>
                <div className = "box"><span className = "text">금</span></div>
                <div className = "box"><span className = "text">토</span></div>
            </div>
            {CalenderBody(props.time)}
        </div>
    </div>
);