import * as React from 'react';
import { match } from 'react-router-dom';
import { Segment, Comment } from 'semantic-ui-react';
import { Announcement } from './client';
import { AnnounceForm } from './AnnounceForm';
import { AnnounceList } from './AnnounceList';

interface keyMatch {
    key: string;
}
interface formProps {
    match: match<keyMatch>;
}
interface formState {
    content: Announcement;
}


export class AnnouncePage extends React.Component<formProps, formState> {
    constructor(props: formProps) {
        super(props);

    }

    public render() {
        const { key } = this.props.match.params;
        console.log({key});
        return(
            <div>
                <h1>공지사항</h1>
                <AnnounceForm key = {key} />
            </div>
        )
    }
}