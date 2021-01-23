import * as React from 'react';
import { Segment, Comment, Header } from 'semantic-ui-react';
import { Announcement } from './client';

interface formProps {
    content: Announcement;
}
interface formState {
}

export class AnnounceForm extends React.Component<formProps, formState> {
    constructor(props: formProps) {
        super(props);

    }

    public render() {
        return(
            <Comment.Group>
                <Header as = 'h2' dividing>{this.props.content.title}</Header>
                <Comment>
                    <Comment.Content>
                        <Comment.Author>{this.props.content.writer.name}</Comment.Author>
                        <Comment.Metadata>{this.props.content.date}</Comment.Metadata>
                        <Comment.Text>
                            {this.props.content.body}
                        </Comment.Text>
                    </Comment.Content>
                </Comment>
            </Comment.Group>
        )
    }
}