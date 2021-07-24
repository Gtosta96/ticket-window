import React from "react";
import "./index.css";
import styled from "styled-components";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";

const Header = styled.h1`
  font-size: 5.25rem;
  text-align: center;
  text-transform: uppercase;
  text-justify: center;
  border: 3px solid;
  background-color: #151515;
  color: #ffffff;
  border-radius: 15px 15px 0 0;
`;
const Alerta = styled.h1`
  font-size: 4.25rem;
  text-align: center;
  text-transform: uppercase;
`;
const Divisor = styled.div`
  border-bottom: 3px solid;
  align-self: center;
`;

export default function ChamadaCard() {
  return (
    <div className="card">
      <Header>
        <NotificationsActiveOutlinedIcon className="sino" />
        {"  "}ATENÇÃO{"  "}
        <NotificationsActiveOutlinedIcon className="sino" />
      </Header>
      <Divisor />
      <div className="inf">
        <Alerta>
          PEDIDO NUMERO <p>6821</p>
        </Alerta>
        <Alerta>
          <b> FAVOR RETIRAR</b>
        </Alerta>
        <Alerta>PEDIDO NO BALCÃO</Alerta>
      </div>
    </div>
  );
}
