import { Link } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase"

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    };
    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Logo src="https://img.freepik.com/free-vector/japanese-samurai-with-black-mask-japan-warrior-flat-image-vintage-vector-illustration_74855-11316.jpg?w=740&t=st=1663590059~exp=1663590659~hmac=1cf3554da13f9b8389c8edb3f12b8c62f1490ccb9655d753561f6fc787b9d6f7" alt="" />
                <Button onClick={signIn} variant="outlined">Sign in with Google</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login

const Container = styled.div`
display: grid;
place-items: center;
height: 100vh;
background-color: whitesmoke;
`;

const LoginContainer = styled.div`
padding: 100px;
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
border-radius: 5px;
box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
height: 200px;
width: 200px;
padding-bottom: 10px;
`;

