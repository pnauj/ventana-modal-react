import React from "react";
import styled from "styled-components";
import './index.css';


function App() {
  return (
    <div>
      <ContenedorBotones>
        <Boton>Modal 1</Boton>
      </ContenedorBotones>
    </div>
  );
}

export default App;

const ContenedorBotones = styled.div`
  paddin: 40px;
  display: flex;
  flex-warp: warp;
  justify-content: center;
  gap: 20px;
`;

const Boton = styled.button`
  display: block;
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: #1766dc;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;

  &:hover {
    background: #0066ff;
  }
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
