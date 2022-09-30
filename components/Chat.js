import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import getRecipientEmail from "../utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Chat({ id, users }) {
    const [user] = useAuthState(auth);

    const recipientEmail = getRecipientEmail(users, user);

    return (
        <Container>
            <UserAvatar />
            <p>{recipientEmail} </p>
        </Container>
    );
}

export default Chat;

const Container = styled.div`
display: flex;
align-items: center;
cursor: pointer;
padding: 15px;
word-break: break-word;

:hover { background-color: #e9eae9}
`;

const UserAvatar = styled(Avatar)`
    margin-right: 15px;
    margin : 5px;
`;

