import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import { useLogin } from "../authentication/auth";
import styled from "styled-components";
import logoIMG from "../assets/img/logoIMG.png"; 

export default function LoginPage({ setTokenId }) {
  const { form, handleForm } = useForm({ email: "", password: "" });
  const login = useLogin(setTokenId);

  function submitForm(e) {
    e.preventDefault();
    login(form, handleTokenId);
  }

  const handleTokenId = (newUserId) => {
    setTokenId(newUserId);
    localStorage.setItem("userId", newUserId);
};

  return (
    <LoginPageContainer>
      <LogoImage src={logoIMG} alt="Logo de Apresentação" />

      <LoginForm onSubmit={submitForm}>
        <input
          required
          type="email"
          autoComplete="username"
          placeholder="E-mail"
          name="email"
          value={form.email}
          onChange={handleForm}
        />
        <input
          required
          minLength={3}
          type="password"
          autoComplete="new-password"
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={handleForm}
        />
        <button type="submit">Entrar</button>
      </LoginForm>

      <Link to="/cadastro">
        Primeira vez? Cadastre-se!
      </Link>
    </LoginPageContainer>
  );
}

const LoginPageContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 25px;
  padding-right: 25px;
`;

const LogoImage = styled.img`
  width: 200px; 
  height: auto; 
  margin-bottom: 20px; 
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; 
`;
