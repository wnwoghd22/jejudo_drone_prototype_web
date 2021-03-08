interface INotice {
    id?: string;
    title?: string;
    date?: Date;
    writer?: {
        id?: string
        name?: String
    };
    body?: string;
}

interface INoticeContext {
    isLoading: boolean;
    list: INotice[] | undefined;
    content: INotice | undefined;
    fetchList: () => void;
    fetchContent: (key: string) => void;
    postContent: (payload: INotice) => Promise<string>;
    deleteContent: (key: string) => void;
}