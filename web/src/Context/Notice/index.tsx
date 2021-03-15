import * as React from 'react';
import * as Client from './client';

const defaultContext : INoticeContext = {
    isLoading: false,
    list: undefined,
    content: undefined,
    fetchList: () => {},
    fetchContent: (key: string) => {},
    postContent: (payload: INotice) => new Promise((resolve, reject) => {}),
    deleteContent: (key: string) => {},

}

const NoticeContext = React.createContext<INoticeContext>(defaultContext);

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

const NoticeContextProvider = ({children} : Props) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [list, setList] = React.useState<Array<INotice> | undefined>(undefined);
    const [content, setContent] = React.useState<INotice | undefined>(undefined);

    const fetchList = () => {
        setIsLoading(false);
        Client.fetchNoticeList().then(response => {
            setList(response.data.announcements);
            setIsLoading(true);
        }).catch(err => {
            console.log(err);
        });
    }

    const fetchContent = (key: string) => {
        setIsLoading(false);
        Client.fetchNotice(key).then(response => {
            setContent(response.data.content);
            setIsLoading(true);
        }).catch(err => {
            console.log(err);
        })
    }

    const postContent = (payload: INotice) : Promise<string> => {
        const response = new Promise<string>((resolve, reject) => { 
            Client.postNotice(payload).then(result => {
                resolve(result.data.result);
            }).catch(err => {
                reject(err);
            });
        });
        return response;
    }

    const deleteContent = (key: string) => {
        Client.deleteNotice(key);
    }

    React.useEffect(() => {
        fetchList();
    }, []);

    console.log(list);

    return (
        <NoticeContext.Provider
            value = {{
                isLoading,
                list,
                content,
                fetchList,
                fetchContent,
                postContent,
                deleteContent,
            }}
        >
            {children}
        </NoticeContext.Provider>
    )
} 

export { NoticeContext, NoticeContextProvider }