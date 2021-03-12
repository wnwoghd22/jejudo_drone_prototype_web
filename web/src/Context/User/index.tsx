import * as React from 'react';
import { auth, session, local } from './firebaseConfig';
import * as Client from './client';

const defaultContext : IUserContext = {
    isLoading: false,
    user: undefined,
    login: (email:string, password: string) => {},
    createUser: (user: IUser) => {},
    fetchUser: (uid: string) => {},
    logout: () => {},
    deleteUser: () => {},
}

const UserContext = React.createContext<IUserContext>(defaultContext);

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({children} : Props) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [user, setUser] = React.useState<IUser | undefined>(undefined);

    const login = (email: string, password: string) : void => {
        auth.setPersistence(session).then(() => {
            return auth.signInWithEmailAndPassword(email, password).then(result => {
                Client.fetchAccount(result.user.uid).then(response => {
                    setUser(response.data.account);
                    setIsLoading(true);
                });
            });
        });
    }

    const fetchUser = (uid: string) : void => {
        setIsLoading(false);
        Client.fetchAccount(uid).then(response => {
            setUser(response.data.account);
            setIsLoading(true);
        }).catch(err => {
            console.log(err);
            setUser(undefined);
            setIsLoading(true);
        })
    }

    const createUser = (user: IUser) : void => {
        Client.postAccount(user).then(response => {
            setUser(user);
            setIsLoading(true);
        })
    }

    const logout = () => {
        auth.signOut();
        setUser(undefined);
    }

    const deleteUser = () => {
        
    }

    React.useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                fetchUser(user.uid);
            }
        });
    }, []);

    return (
        <UserContext.Provider
            value = {{
                isLoading,
                user,
                login,
                fetchUser,
                createUser,
                logout,
                deleteUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserContextProvider }