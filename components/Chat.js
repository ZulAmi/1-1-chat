import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import getRecipientEmail from "../utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRouter } from "next/router";

function Chat({ id, users }) {
    const router = useRouter();
    const [user] = useAuthState(auth);
    const [recipientSnapshot] = useCollection(
        db.collection('users').where('email', '==', getRecipientEmail(users, user)));

    const enterChat = () => {
        router.push('/chat/${id}');
    }
    const recipient = recipientSnapshot?.docs?.[0]?.data();
    const recipientEmail = getRecipientEmail(users, user);

    return (
        <Container onClick={enterChat}>
            {recipient ? (
                <UserAvatar
                    src={recipient?.photoURL} />
            ) : (
                <UserAvatar>
                    src={recipientEmail[0]}</UserAvatar>

            )}
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

