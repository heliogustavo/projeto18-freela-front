import useForm from "../hooks/useForm";
import styled from "styled-components";
import logo2 from "../assets/img/logo2.png";
import { addFormMiaudelo } from "../hooks/addFormMiaudelo";
import { useNavigate } from "react-router-dom";

export default function AddMiaudelo() {
  const userId = localStorage.getItem("userId")
  const { form, handleForm } = useForm({ photoLink: "", features: "", userId});
  const navigate = useNavigate();
  const addMiaudelo = addFormMiaudelo(navigate);

  function handleSubmit(event) {
    event.preventDefault();
    addMiaudelo(form);
  }

  return (
    <LoginPageContainer>
      <LogoImage src={logo2} alt="Logo de Apresentação" />
      <LoginForm onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="photoLink"
          placeholder="Link da foto do seu gato"
          pattern="https?://.+"
          title="Por favor, insira uma URL válida, começando com http:// ou https://"
          value={form.photoLink}
          onChange={handleForm}
        />
        <input
          required
          type="text"
          name="features"
          autoComplete="features"
          placeholder="Características do Miaudelo"
          value={form.features}
          onChange={handleForm}
        />
        <button type="submit">Cadastrar Miaudelo</button>
      </LoginForm>
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
