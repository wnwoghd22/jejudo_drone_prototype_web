import * as React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';

import { UserContext } from '../Context';

const MainMenu = () => {
    const [lesson, setLesson] = React.useState<boolean>(false);
    const {user} = React.useContext<IUserContext>(UserContext);
    const scheduleTab = document.getElementById("schedule");

    const OpenOrCloseLessonMenu = () => {
        if(!lesson) {
            setLesson(true);
            scheduleTab.style.display = "block";
        }
        else {
            setLesson(false);
            scheduleTab.style.display = "none";
        }
    }

    const lessonMenu = [
        'reservation',
        'my schedule',
        'list'
    ];
    const lessonMenu_kr = new Map([
        ['reservation', '예약' ],
        ['my schedule', '나의 수업'],
        ['list', '명단']
    ]);
    
    return(
        <Menu inverted vertical fixed = {'left'}>
            <Menu.Item as={Link} to={'/'}>
                Home
                <Icon name = 'home'/>
            </Menu.Item>
            <Menu.Item>
                Menu
                <Icon name = 'list'/>
                <Menu.Menu>
                    <Menu.Item
                    key = "announcements"
                    as = {NavLink}
                    to = {
                        { pathname: `/announcements`}
                    }>
                        공지사항
                    </Menu.Item>
                    <Menu.Item onClick = {OpenOrCloseLessonMenu}>
                        수업
                        <div id = "schedule" style = {{display: "none"}}>  
                            <Menu.Menu>
                                <Menu.Menu>
                                    { lessonMenu.map(item =>
                                    <Menu.Item
                                    key = {item}
                                    as = {NavLink}
                                    to = {
                                        { pathname: `/schedule/${item}`}
                                    }>
                                        {lessonMenu_kr.get(item)}
                                    </Menu.Item>
                                    )}
                                </Menu.Menu>
                            </Menu.Menu> 
                        </div>
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
        </Menu>
    );
}

export { MainMenu }