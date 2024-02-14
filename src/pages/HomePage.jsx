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
                const updatedCats = response.data.map(cat => ({
                    ...cat,
                    statusPhoto: cat.available
                }));
                setCats(updatedCats);
            })
            .catch(error => {
                console.error('Erro ao buscar dados dos gatos:', error);
            });
    }, []);

    const handleCheckBoxClick = (id) => {
        const updatedCats = cats.map(cat => {
            if (cat.id === id) {
                const updatedStatus = !cat.statusPhoto;
                axios.put(`${import.meta.env.VITE_API_URL}/editstatusphoto/${id}`, { userId: tokenId, statusPhoto: updatedStatus })
                    .then(response => alert('Status de Disponibilidade do Miaudelo atualizada!'))
                    .catch(error => console.error('Erro ao atualizar status:', error));
                return { ...cat, statusPhoto: updatedStatus };
            }
            return cat;
        });
        setCats(updatedCats);
    };
    return (
        <>
            <ContainerPrincipal>
                <Link to={"/addmiaudelo"}>
                    <LogoImg src={logoIMG} alt="Logo" />
                </Link>
                <h1>Clique no Miaudelo que desejar saber mais :)</h1>
                {cats.map(cat => (
                    <ContainerOneCat key={cat.id}>
                        {cat.userId === tokenId && (
                            <CheckBoxWrapper>
                                <StyledCheckBox
                                    type="checkbox"
                                    checked={!cat.statusPhoto}
                                    onChange={() => handleCheckBoxClick(cat.id)}
                                />
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
    h1{
        font-weight: 700;
        font-size: 17px;
        line-height: 18px;
        text-decoration: none;
        padding-top: 30px;
        color : #4b4200;
    }
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
    background-color: ${({ checked }) => (checked ? '#009688' : '#fff')};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    
    &:checked {
        background-color: #009688;
        border-color: #009688;
    }
`;
