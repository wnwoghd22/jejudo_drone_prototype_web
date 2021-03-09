import * as React from 'react';
import { Segment, Comment, Header } from 'semantic-ui-react';

import { NoticeContext } from '../../Context';

interface Props {
    keyVal: string;
}

const NoticeForm = ({keyVal} : Props) => {
    const [notice, setNotice] = React.useState<INotice | undefined>(undefined);
    const {content, fetchContent} = React.useContext<INoticeContext>(NoticeContext);

    React.useEffect(() => {
        setNotice(content);
    }, [content]);

    React.useEffect(() => {
        fetchContent(keyVal);
    }, [keyVal]);

    const dateVal = notice.date.toString();

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