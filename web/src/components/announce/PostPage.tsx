import * as React from 'react';
import { Segment, Button, Form, TextArea } from 'semantic-ui-react';
import  TextareaAutosize  from 'react-textarea-autosize';

import { NoticeContext, UserContext } from '../../Context';

const PostPage = () => {
    const [title, setTitle] = React.useState<string>('');
    const [body, setBody] = React.useState<string>('');
    const {user} = React.useContext<IUserContext>(UserContext);
    const {postContent} = React.useContext<INoticeContext>(NoticeContext);

    const clear = () => {
        setTitle('');
        setBody('');
    }

    const handleNameChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
        event.preventDefault();
        setTitle(event.currentTarget.value);
    }
    const handleBodyChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
        event.preventDefault();
        setBody(event.currentTarget.value);
    }
    const PostContent = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const payload = {
            title: title,
            writer: {
                name: user.name,
                id: user.id,
            },
            body: body,
        } as INotice;
        postContent(payload).then(()=> {
            clear();    
        }).catch(err => {
            console.log("post failed!");
            console.log(err);
        })
    }

    return (
        <div>
        <h1>공지사항 - 글쓰기</h1>
        <Segment basic textAlign = 'center'>
            <Form onSubmit = {PostContent}>
                <TextArea
                    rows = {1} placeholder = '제목'
                    value = {title} onChange = {handleNameChange}
                />
                <Form.Field>
                    <TextareaAutosize
                        placeholder = '내용을 입력하세요'
                        value = {body}
                        onChange = {handleBodyChange}
                    />
                </Form.Field>
            <Button primary type = 'submit'>확인</Button>
            </Form>
        </Segment>
    </div>
    );
}

export default PostPage;