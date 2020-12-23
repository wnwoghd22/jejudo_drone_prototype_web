import * as React from 'react';
import { List } from 'semantic-ui-react';

interface AnnounceProps {

};
interface AnnounceStats {
    announceList : []
};

export class AnnounceList extends React.Component<AnnounceProps, AnnounceStats> {
    public render() {
        return  (
            <div>
                <h1>공지 사항</h1>
                <List>
                    
                </List>
                <input id = "search"></input>
                <button id = "searchBtn">검색</button>
            </div>
        )
    }
}