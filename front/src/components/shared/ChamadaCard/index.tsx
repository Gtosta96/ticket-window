import { Typography } from "@material-ui/core";
import React from "react";
import "./index.css";
import styled from "styled-components";

const Header = styled.h1`
  font-size: 5.25rem;
  text-align: center;
  text-transform: uppercase;
  text-justify: center;
  border: 3px solid;
  background-color: #151515;
  color: #ffffff;
`;
const Alerta = styled.h1`
  font-size: 4.25rem;
  text-align: center;
  text-transform: uppercase;
  text-justify: center;
`;
const Divisor = styled.div`
  border-bottom: 3px solid;
  align-self: center;
`;

export default function ChamadaCard() {
  return (
    <div className="aviso">
      <Header>- ATENÇÃO -</Header>
      <Divisor />
      <Alerta>PEDIDO NUMERO : 6821 </Alerta>
      <Alerta>FAVOR RETIRAR</Alerta>
      <Alerta>PEDIDO NO BALCÃO</Alerta>
    </div>
  );
}
