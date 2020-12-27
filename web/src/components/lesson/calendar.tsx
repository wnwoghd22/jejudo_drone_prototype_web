import * as React from 'react';

export const Calendar = () => (
    <div id = "calendar">
        <div id = "calendar_haed">
            <button id = "previous">전</button>
            <span id = "title">월/일</span>
            <button id = "next">후</button>
        </div>
        <div id = "calendar_body">
            달력
        </div>
    </div>
)