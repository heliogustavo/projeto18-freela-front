import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
    }
    button {
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #ffe77d;
        font-size: 20px;
        font-weight: 500;
        cursor: pointer;
        width: 100%;
        padding: 12px;
        font-family: 'Poppins', sans-serif;   
        color : #4b4200;
    }
    h1 {
        font-weight: 700;
        font-size: 26px;
    }
    input {
        background-color: #fffbb1;
        font-size: 20px;
        width: calc(100% - 30px);
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        padding: 15px;
        margin: 1px;
        color : #4b4200;
        :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
            outline: none;
        }
        textarea {
            overflow: hidden; 
        }
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 5px;
    }
    a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        text-decoration: none;
        padding-top: 30px;
        color : #4b4200;

    }
`

export default GlobalStyle