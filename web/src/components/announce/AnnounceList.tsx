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
            <List>
                
            </List>
        )
    }
}