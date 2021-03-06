import * as React from 'react';
import { Segment, Comment, Header } from 'semantic-ui-react';
import { Announcement, fetchAnnounceContent } from './client';

interface formProps {
    keyVal: string;
}
interface formState {
    content: Announcement
}

export class AnnounceForm extends React.Component<formProps, formState> {
    constructor(props: formProps) {
        super(props);
        this.state = {
            content: {
                id: '',
                title: '',
                date: new Date,
                writer: {
                    id: '',
                    name: ''
                },
                 body: ''
            }
        }
    }

    public render() {
        const dateVal = this.state.content.date.toString();
        return(
            <Comment.Group>
                <Header as = 'h2' dividing>{this.state.content.title}</Header>
                <Comment>
                    <Comment.Content>
                        <Comment.Author>{this.state.content.writer.name}</Comment.Author>
                        <Comment.Metadata>{dateVal}</Comment.Metadata>
                        <Comment.Text>
                            {this.state.content.body}
                        </Comment.Text>
                    </Comment.Content>
                </Comment>
            </Comment.Group>
        )
    }

    public componentDidMount() {
        console.log(this.props.keyVal);
        this.fetchContent(this.props.keyVal);
    }

    private fetchContent = (key: string) => {
        fetchAnnounceContent(key)
            .then(response => {
                this.setState({ content: response.data.content });
            })
            .catch(err => {
                console.log("fetch failed!");
                console.log(err);
            });
    }
}