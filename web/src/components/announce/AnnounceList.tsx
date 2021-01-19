import * as React from 'react';
import { Link } from 'react-router-dom';
import { List, Button } from 'semantic-ui-react';
import { Announcement, fetchAnnounceList } from './client';

interface AnnounceProps {

};
interface AnnounceStats {
    announceList : Announcement[]
};

export class AnnounceList extends React.Component<AnnounceProps, AnnounceStats> {
    constructor(props: AnnounceProps) {
        super(props);
        this.state = {
            announceList: []
        };
    }

    public render() {
        console.log(this.state.announceList);
        const listItems = this.state.announceList.map(Announcement =>
            <List.Item>
                {Announcement.date}
                {Announcement.name}
                {Announcement.writer}
            </List.Item>
        );

        return  (
            <div>
                <h1>공지 사항</h1>
                <List items = {listItems}/>
                <input id = "search"></input>
                <button id = "searchBtn">검색</button>
                <Button
                  key = "post"
                  as = {Link}
                  to = { '/announcements/post '}
                >글쓰기</Button>
            </div>
        )
    }

    public componentDidMount() {
        this.fetchList();
        this.state.announceList.forEach(element => {   
        console.log(element.writer); 
        });
    }

    private fetchList = () => {
        fetchAnnounceList()
            .then(response => {
                this.setState({ announceList: response.data.AnnounceList });
            })
            .catch(err => {
                console.log(err);
            });
    }
}