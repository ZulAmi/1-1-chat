import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";
import { useRouter } from "next/router";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/morevert";
import AttachFileIcon from "@material-ui/icons/AttachFile";


function ChatScreen({ chat, messages }) {
    const [user] = useAuthState(auth);
    const router = useRouter();
    return (
        <Container>
            <Header>
                <Avatar />

                <HeaderInformation>
                    <h3>Recipient Email</h3>
                    <p>Last Seen ...</p>
                </HeaderInformation>

                <HeaderIcons>
                    <IconButton>
                        <AttachFileIcon />
                        <MoreVertIcon />
                    </IconButton>
                </HeaderIcons>
            </Header>
        </Container>
    )
}

export default ChatScreen;

const Container = styled.div``;

const Header = styled.div``;

const HeaderInformation = styled.div``;

const HeaderIcons = styled.div``;