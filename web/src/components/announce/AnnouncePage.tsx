import * as React from 'react';
import { Segment, Comment } from 'semantic-ui-react';
import { Announcement, fetchContent } from './client';
import { AnnounceForm } from './AnnounceForm';
import { AnnounceList } from './AnnounceList';

interface formProps {
    key: string;
}
interface formState {
    content: Announcement;
}


export class AnnouncePage extends React.Component<formProps, formState> {
    constructor(props: formProps) {
        super(props);

    }

    public render() {
        return(
            <div>
                <h1>공지사항</h1>
                <AnnounceForm content = {this.state.content} />
            </div>
        )
    }
    public componentDidMount() {
        this.fetchContent();
    }

    private fetchContent = () => {
        fetchContent(this.props.key)
            .then(response => {
                this.setState({ content: null });
            })
            .catch(err => {
                console.log("fetch failed!");
                console.log(err);
            });
    }
}