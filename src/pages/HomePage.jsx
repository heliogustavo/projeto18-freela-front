import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoIMG from '../assets/img/logoName.png';
import axios from 'axios';
import TokenId from '../contexts/AuthContext';

export default function HomePage() {
    const tokenId = useContext(TokenId);
    const [cats, setCats] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/miaudeloslist`)
            .then(response => {
                setCats(response.data);
                console.log(response.data);
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
                        {cat.userId === tokenId && (
                            <CheckBoxWrapper>
                                <StyledCheckBox type="checkbox" />
                            </CheckBoxWrapper>
                        )}
                        <Link to={`/details/${cat.id}`}>
                            <ImgCat src={cat.photoLink} alt="imgFeed" />
                        </Link>
                    </ContainerOneCat>
                ))}
            </ContainerPrincipal>
        </>
    );
}

const CheckBoxWrapper = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 3;
`;

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
    position: relative;
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

const StyledCheckBox = styled.input`
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #333;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    
    &:checked {
        background-color: #009688;
        border-color: #009688;
    }
`;
