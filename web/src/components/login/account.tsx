import * as React from 'react';
import { Container, Button } from 'semantic-ui-react';
import { auth } from './firebaseConfig'

interface accountProps {
    
}
interface accountState {
    user;
}


class AccountPage extends React.Component<accountProps, accountState> {
    constructor(props: accountProps) {
        super(props);

        this.state = {
            user: auth.currentUser
        }
    }

    public render = () => {
        return(
            <div>
                <h1>계정 정보 입력</h1>
                <Container>

                </Container>
                <Button>취소</Button>
                <Button>확인</Button>
            </div>
        )
    }
    
    private CreateAccount = () => {

        let accountData = {
            id: auth.currentUser.uid,
            name: "default"
        }

    }
}