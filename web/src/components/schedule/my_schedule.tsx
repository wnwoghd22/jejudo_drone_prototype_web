import * as React from 'react';
import { List } from 'semantic-ui-react';
import MyScheduleElement from './my_schedule_element';

import { UserContext } from '../../Context';

const MyScheduleList = () => {
    const {user} = React.useContext<IUserContext>(UserContext);

    return  (
        <div>
            <h1>나의 수업</h1>
            <h2>{   user !== undefined ?
                            user.name
                        :   "로그인 하십시오." }</h2>
            <MyScheduleElement/>
        </div>
    );
}

export { MyScheduleList }