import { useState } from "react"
import { useDispatch } from "react-redux";
import { userLogin } from "./actions/LoginActions";

const Login = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch()

const handleSubmit = (e, username,password) => {
    e.preventDefault()
    dispatch(userLogin(username,password))
}


    return(
        <>
        <form onSubmit={(e) => handleSubmit(e, username,password) }>
            <input placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>
            <input placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
            <button>send</button>
        </form>

        </>
    )
}

export default Login;