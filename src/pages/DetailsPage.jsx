import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
  const [catDetails, setCatDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/miaudelo/${id}`)
      .then(response => {
        setCatDetails(response.data);
      }) 
      .catch(error => {
        console.error("Erro ao buscar detalhes desse gato:", error);
      });
  }, [id]);

  return (
    <AllPage>
      {catDetails && (
        <>
          <ContainerIMG>
            <ImgCatDetails src={catDetails.photoLink} alt="Gato" />
          </ContainerIMG>
          <DetailsCat>
            <h3>Descrição: </h3>
            <p>{catDetails.features}</p>
          </DetailsCat>
          <DetailsCat>
            <h3>Contato do Tutor:</h3>
            <p>{catDetails.numberPhone}</p>
          </DetailsCat>
        </>
      )}
    </AllPage>
  );
}

const AllPage = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const ContainerIMG = styled.article`
  width: 250px;
  height: 160px;
  margin-top: 25px;
  border-radius: 16px;
  margin-bottom: 25px;
`;

const DetailsCat = styled.article`
  width: 270px;
  height: auto;
  background-color: #fffbb1;
  margin-top: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
  h3 {
    font-size: 20px;
    font-weight: 500;
    width: 100%;
    padding-top: 5px;
    padding-left: 5px;
    font-family: "Poppins", sans-serif;
    color: #4b4200;
  }
  p {
    font-size: 20px;
    border-radius: 5px;
    outline: none;
    padding: 15px;
    margin: 1px;
    color: #4b4200;
  }
`;

const ImgCatDetails = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 25px;
`;
