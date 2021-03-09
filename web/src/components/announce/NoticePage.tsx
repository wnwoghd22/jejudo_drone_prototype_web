import * as React from 'react';
import { match } from 'react-router-dom';
import { Segment, Comment, Button } from 'semantic-ui-react';

import { NoticeContext } from '../../Context'

import NoticeForm from './NoticeForm';

interface keyMatch {
    key: string;
}

interface Props {
    match: match<keyMatch>;
}

const NoticePage = ({match} : Props) => {
    const { key } = match.params;
    const { deleteContent } = React.useContext<INoticeContext>(NoticeContext);

    React.useEffect(() => {
        
    }, []);

    return (
        <div>
            <h1>공지사항</h1>
            <NoticeForm keyVal = {key} />
            <Button onClick = {() => deleteContent(key)}>삭제</Button>
        </div>
    );
}

export { NoticePage }