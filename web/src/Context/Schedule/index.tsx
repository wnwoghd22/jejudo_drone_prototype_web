import * as React from 'react';
import * as Client from './client';

import { UserContext } from '../User';

const defaultContext : IScheduleContext = {
    isLoading: false,
    scheduleList: undefined,
    fetchScheduleList: () => {},
    postSchedule: () => {},
    cancelSchedule: () => {},
}

const ScheduleContext = React.createContext<IScheduleContext>(defaultContext);

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

const ScheduleContextProvider = ({ children } : Props) => {
    const {user} = React.useContext(UserContext);

    const [ scheduleList, setScheduleList ] = React.useState<Array<ISchedule> | undefined>(undefined);
    const [ isLoading, setIsLoading ] = React.useState<boolean>(false);

    const fetchScheduleList = () : void => {
        Client.fetchSchedulefromAccount(user.id).then(response => {
            if (response.data.schedule) {
                console.log(response.data.schedule);
                setScheduleList(response.data.schedule);
            }
            setIsLoading(true);
        }).catch(err => {
            console.log(err);
        })
    }

    const postSchedule = (time: ISchedule) : void => {
        Client.postScheduletoAccount(user.id, time).then(result => {
            if(result.data.result === "already exist") {
                alert("이미 신청되어 있습니다.");
            } else {
                let payload = {
                    key: user.id,
                    name: user.name,
                }
                Client.postStudentToList(time.date, time.part, payload).then(response => {
                    alert("신청되었습니다.");
                }).catch(err => {
                    console.log(err.response.data);
                });
            }
        })
    }

    const cancelSchedule = (id: string, time: ISchedule) : void => {
        
        Client.cancelScheduleOfAccount(user.id, id);
        Client.deleteStudentOfSchedule(time.date, time.part, user.id);
        fetchScheduleList();
    }

    React.useEffect(() => {
        if(user !== undefined) {
            console.log('user loaded!');
            fetchScheduleList();
        }
    }, [user]);

    console.log(scheduleList);

    return (
        <ScheduleContext.Provider
            value = {{
                isLoading,
                scheduleList,
                fetchScheduleList,
                postSchedule,
                cancelSchedule,
            }}
        >
            {children}
        </ScheduleContext.Provider>
    );
}

export { ScheduleContext, ScheduleContextProvider }