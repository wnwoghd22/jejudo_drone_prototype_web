import * as React from 'react';
import { List } from 'semantic-ui-react';

interface AnnounceProps {

};
interface AnnounceStats {
    announceList : []
};

export class MyLessonsList extends React.Component<AnnounceProps, AnnounceStats> {
    public render() {
        return  (
            <div>
                <h1>나의 수업</h1>
                <List>
                    
                </List>
            </div>
        )
    }
}