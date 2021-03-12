import * as React from 'react';
import { Segment, Comment, Header } from 'semantic-ui-react';

//import { } from 

import { NoticeContext } from '../../Context';

interface Props {
    keyVal: string;
}

const NoticeForm = ({keyVal} : Props) => {
    const [notice, setNotice] = React.useState<INotice | undefined>(undefined);
    const {isLoading, content, fetchContent} = React.useContext<INoticeContext>(NoticeContext);
    const [dateVal, setDateVal] = React.useState<string>('');

    React.useEffect(() => {
        if (content !== undefined) {
            setNotice(content); 
        }
    }, [content]);

    React.useEffect(() => {
        if (notice !== undefined) {
            setDateVal(notice.date.toString());
        }
    }, [notice]);

    React.useEffect(() => {
        fetchContent(keyVal);
    }, []);

    if (notice === undefined) {
        return (
            <></>
        );
    }

    return (
        <Comment.Group>
            <Header as = 'h2' dividing>{notice.title}</Header>
            <Comment>
                <Comment.Content>
                    <Comment.Author>{notice.writer.name}</Comment.Author>
                    <Comment.Metadata>{dateVal}</Comment.Metadata>
                    <Comment.Text>
                        {notice.body}
                    </Comment.Text>
                </Comment.Content>
            </Comment>
        </Comment.Group>
    );
}

export default NoticeForm;