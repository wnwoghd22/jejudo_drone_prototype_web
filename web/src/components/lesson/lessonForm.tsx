import * as React from 'react';
import { Calendar } from './calendar';
import { List } from 'semantic-ui-react';

interface LessonProps {

};
interface LessonStats {
    announceList : []
};

export class LessonForm extends React.Component<any,any> {
    public render = () => Calendar();
}