import * as React from 'react';
import { Segment, Button, Form, TextArea } from 'semantic-ui-react';
import  TextareaAutosize  from 'react-textarea-autosize';

interface PostProps {

}
interface PostState {
    name : string;
    body? : string;
    attachments? : string[]; //directory
}

export class PostForm extends React.Component<PostProps, PostState> {
    constructor(props: PostProps) {
        super(props);
        this.state = {
            name : "default",
            body : '',
            attachments : []
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
    }
    public render = () => <Segment basic textAlign = 'center'>
        <Form>
            <TextArea
                rows = {1} placeholder = '제목'
                value = {this.state.name} onChange = {this.handleNameChange}
            />
            <Form.Field>
                <TextareaAutosize
                    placeholder = '내용을 입력하세요'
                    value = {this.state.body}
                    onChange = {this.handleBodyChange}
                />
            </Form.Field>
        <Button primary type = 'submit'>확인</Button>
        </Form>
    </Segment>

    private handleNameChange(event: React.FormEvent<HTMLTextAreaElement>) {
        event.preventDefault();
        this.setState({name: event.currentTarget.value});
    }
    private handleBodyChange(event: React.FormEvent<HTMLTextAreaElement>) {
        event.preventDefault();
        this.setState({body: event.currentTarget.value});
    }

    public PostContents() {
        
    }
}