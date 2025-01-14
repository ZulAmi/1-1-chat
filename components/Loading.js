import { Circle } from "better-react-spinkit";

function Loading() {
    return (
        <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
            <div>
                <img src="https://img.freepik.com/free-vector/japanese-samurai-with-black-mask-japan-warrior-flat-image-vintage-vector-illustration_74855-11316.jpg?w=740&t=st=1663590059~exp=1663590659~hmac=1cf3554da13f9b8389c8edb3f12b8c62f1490ccb9655d753561f6fc787b9d6f7"
                    style={{ marginBottom: 10 }}
                    height={300} />
                <Circle color="#000000" size={100} />

            </div>
        </center>
    )
}

export default Loading