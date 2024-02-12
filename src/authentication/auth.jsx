import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../contexts/AuthContext"

export function useSignUp() {
    const navigate = useNavigate()
    const descrição = 23232323232323232332323
    return (body) => {
        axios.post(`${import.meta.env.VITE_API_URL}/signup`, body)
            .then(() => {
                navigate("/")
                console.log(descrição)
            }
            )
            .catch(err => alert(err.response.data))
    }
}

export function useLogin() {
    const navigate = useNavigate()
    const { setToken, setUserName } = useContext(AuthContext)

    return (body) => {
        axios.post(`${import.meta.env.VITE_API_URL}/signin`, body)
            .then(res => {
                setToken(res.data.token)
                setUserName(res.data.userName)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("userName", res.data.userName)
                navigate("/home")
            })
            .catch((err) => {
                console.error('Erro durante a solicitação:', err);
                alert('Ocorreu um erro durante a solicitação. Por favor, tente novamente.');
            });
    }
}

