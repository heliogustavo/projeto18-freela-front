import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoIMG from '../assets/img/logoName.png';
import axios from 'axios';

const TokenContext = React.createContext(null);

export default function HomePage() {
    const [cats, setCats] = useState([]);
    const [deletedCats, setDeletedCats] = useState([]);
    const token = useContext(TokenContext); 

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/miaudeloslist`)
            .then(response => {
                setCats(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Erro ao buscar dados dos gatos:', error);
            });
    }, []);

    return (
        <>
            <ContainerPrincipal>
                <Link to={"/addmiaudelo"}>
                    <LogoImg src={logoIMG} alt="Logo" />
                </Link>
                    {cats.map(cat => (
                        <ContainerOneCat key={cat.id}>
                            
                                <Link to={`/details/${cat.id}`}>
                                        <ImgCat src={cat.photoLink} alt="imgFeed" />
                                        {cat.token === token && <ButtonDelete onClick={() => handleDelete(cat.id)}>X</ButtonDelete>}
                                </Link>
                            
                        </ContainerOneCat>
                    ))}
            </ContainerPrincipal>
        </>
    );
}

const ContainerPrincipal = styled.article`
    width: calc(100vw - 50px);
    max-height: 667px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto; 
`;

const ContainerOneCat = styled.article`
    width: 270px;
    height: 160px;
    background-color: #fffbb1;
    border-radius: 16px;
    margin-top: 15px; 
`;

const LogoImg = styled.img`
    width: 150px; 
    height: 50px; 
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;
const ImgCat = styled.img`
    width: 100%; 
    height: 100%; 
    object-fit: cover;
    border-radius: 16px;
`;
const ButtonUndoDelete = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: blue;
    font-size: 16px;
    margin-left: 10px;
`;
