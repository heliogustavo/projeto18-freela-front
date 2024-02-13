import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../contexts/AuthContext"

export function useSignUp() {
    const navigate = useNavigate()
    return (body) => {
        axios.post(`${import.meta.env.VITE_API_URL}/signup`, body)
            .then(() => {
                navigate("/")
            }
            )
            .catch(err => alert(err.response.data))
    }
}

export function useLogin() {
    const navigate = useNavigate()

    return (body) => {
        axios.post(`${import.meta.env.VITE_API_URL}/signin`, body)
            .then(res => {
                console.log(res.data.userId, "Id tá aqui")
                localStorage.setItem("userId", res.data.userId)
                navigate("/home")
            })
            .catch((err) => {
                console.error('Erro durante a solicitação:', err);
                alert('Ocorreu um erro durante a solicitação. Por favor, tente novamente.');
            });
    }
}
