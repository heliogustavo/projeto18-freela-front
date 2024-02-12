import { Link } from "react-router-dom"
import useForm from "../hooks/useForm"
import { useSignUp } from "../authentication/auth"
import styled from "styled-components"
import logo2 from "../assets/img/logo2.png";

export default function SignUpPage() {
  const { form, handleForm } = useForm({ name: "", email: "", password: "", confirmPassword: "", cpf: "", numberPhone: "" })
  const signUp = useSignUp()

  function submitForm(e) {
    e.preventDefault()
    if (form.password !== form.confirmPassword) return alert("As senhas não coincidem!")

    delete form.confirmPassword
    signUp(form)
  }
  function validarNumeros(event) {
    const input = event.target;
    input.value = input.value.replace(/\D/g, '');
  }
  return (
    <SingUpContainer>
      <LogoImage src={logo2} alt="Logo de Apresentação" />

      <form onSubmit={submitForm}>
        <input
          required
          placeholder="Nome"
          name="name"
          value={form.name}
          onChange={handleForm}
        />
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
        <input
          required
          minLength={3}
          type="password"
          autoComplete="new-password"
          placeholder="Confirme a senha"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleForm}
        />
        <input
          required
          minLength={11} 
          type="text"
          placeholder="CPF"
          name="cpf"
          value={form.cpf}
          onChange={handleForm}
        />
        <input
          required
          type="text"
          name="numberPhone"
          autoComplete="numberPhone"
          placeholder="Número para Contato"
          value={form.numberPhone}
          onChange={handleForm}
          onInput={validarNumeros}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <Link to="/">
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
`

const LogoImage = styled.img`
  width: 200px; 
  height: auto; 
  margin-bottom: 20px; 
`;
