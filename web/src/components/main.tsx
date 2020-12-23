import * as React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';

interface MainMenuState {
    lesson?: boolean;
}

export class MainMenu extends React.Component<{}, MainMenuState> {

    constructor(props:{} ,state: MainMenuState) {
        super(props);
        this.state = {
            lesson: false
        }
    }

    public OpenOrCloseLessonMenu() {
        if(!this.state.lesson)
        {
            this.setState({lesson: true});
            document.getElementById("lesson").style.display = "block";
        }
        else
        {
            this.setState({lesson: false});
            document.getElementById("lesson").style.display = "none";
        }
    }

    public render() {
        const lessonMenu = [
            'reservation',
            'my lessons'
        ];
        const lessonMenu_kr = [
            '예약',
            '나의 수업'
        ];

        return(
            <Menu inverted vertical fixed = {'left'}>
                <Menu.Item>Menu
                <Menu.Menu>
                    <Menu.Item id = "announcements"
                    key = "announcements"
                    as = {NavLink}
                    to = {
                        { pathname: `/announcements`}
                    }>
                        공지사항
                    </Menu.Item>
                    <Menu.Item id = "lesson">
                        수업
                        <Menu.Menu id = "lessonMenu">
                            <Menu.Menu>
                                { lessonMenu.map(item =>
                                <Menu.Item
                                key = {item}
                                as = {NavLink}
                                to = {
                                    { pathname: `/lesson/${item}`}
                                }>
                                    {lessonMenu_kr}
                                </Menu.Item>
                                )}
                            </Menu.Menu>
                        </Menu.Menu>
                    </Menu.Item>
                </Menu.Menu>
                </Menu.Item>
            </Menu>
        );
    }
}