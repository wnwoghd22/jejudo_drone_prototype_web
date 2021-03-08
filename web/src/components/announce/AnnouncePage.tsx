import * as React from 'react';
import { match } from 'react-router-dom';
import { Segment, Comment, Button } from 'semantic-ui-react';
import { AnnounceForm } from './AnnounceForm';

interface keyMatch {
    key: string;
}
interface formProps {
    match: match<keyMatch>;
}
interface formState {
    content: INotice;
}

export class AnnouncePage extends React.Component<formProps, formState> {
    constructor(props: formProps) {
        super(props);

    }

    public render() {
        const { key } = this.props.match.params;
        console.log("key: ",key);
        return(
            <div>
                <h1>공지사항</h1>
                <AnnounceForm keyVal = {key} />
                <Button onClick = {this.deleteContent}>삭제</Button>
            </div>
        )
    }

    private deleteContent = () => {
        const { key } = this.props.match.params;
        deleteAnnouncement(key)
            .then(response => {
                this.setState({ content: null });
            })
            .catch(err => {
                console.log("delete failed!");
                console.log(err);
            });
    }
}