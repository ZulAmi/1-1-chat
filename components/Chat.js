import styled from "styled-components";
import { Avatar } from "@material-ui/core";

function Chat({ id, users }) {
    return (
        <Container>
            <UserAvatar />
            <p> Recipient Email </p>
        </Container>
    )
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

