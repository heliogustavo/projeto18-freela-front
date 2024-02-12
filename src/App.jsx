import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthContext from "./contexts/AuthContext"
import { useState } from "react"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import HomePage from "./pages/HomePage"
import DetailsPage from "./pages/DetailsPage"
import AddMiaudelo from "./pages/AddMiaudelo"

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [userName, setUserName] = useState(localStorage.getItem("userName"))

  return (
    <PagesContainer>
    <AuthContext.Provider value={{ token, setToken, userName, setUserName }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/cadastro" element={<SignUpPage/>}/>
          <Route path="/home"  element={<HomePage/>}/> 
          <Route path="/details/:id"  element={<DetailsPage/>}/> 
          <Route path="/addmiaudelo"  element={<AddMiaudelo/>}/> 

        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  </PagesContainer>
)
}

const PagesContainer = styled.main`
  background-color: #a8a6ff;
  width: 100vw;
  height: auto; /* Define altura automática */
  min-height: 100vh; /* Garante que o componente ocupe pelo menos toda a altura da tela */
  overflow-y: auto; /* Adiciona rolagem vertical quando necessário */
`;  