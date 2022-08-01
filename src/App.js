import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Components/Modal";
import "./index.css";

function App() {
  const [estadoModal1, setEstadoModal1] = useState(false);

  return (
    <div>
      <Contenido></Contenido>
      <ContenedorBotones>
        <Boton onClick={() => setEstadoModal1(!estadoModal1)}>Modal 1</Boton>
      </ContenedorBotones>

      <Modal
        estado={estadoModal1}
        cambiarEstado={setEstadoModal1}
        Titulo="Hola!"
      >
        <Contenido>
          <h1>Ventana Modal</h1>
          <p>Reutilizable y opciones de personalizacion</p>
          <Boton onClick={() => setEstadoModal1(!estadoModal1)}>Aceptar</Boton>
        </Contenido>
      </Modal>
    </div>
  );
}

export default App;

const ContenedorBotones = styled.div`
  padding: 40px;
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

//video 00:20:00
