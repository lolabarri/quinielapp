import React from "react";
import BetRow from "../components/BetRow";
import styled from "@emotion/styled";

const TableStyle = styled.table`
border-collapse: collapse;
width: 100%;
text-align: left;
vertical-align: middle;
th {
  border-bottom: 1px solid #ddd;
  background-color: tomato;
  color: white;
  font-weight: normal;
}
`

const bet = () => {
  return (
      <TableStyle>
        <thead>
          <tr>
            <th>NUM</th>
            <th>LT</th>
            <th>VT</th>
            <th>1</th>
            <th>X</th>
            <th>2</th>
          </tr>
        </thead>
        <tbody>
        <BetRow number="1" localTeam="Levante" visitorTeam="Getafe" name="1" />
        <BetRow number="2" localTeam="Real Sociedad" visitorTeam="Athletic Club" name="2" />
        <BetRow number="3" localTeam="Barcelona" visitorTeam="Valencia" name="3" />
        <BetRow number="4" localTeam="Eibar" visitorTeam="Girona"  name="4"/>
        <BetRow number="5" localTeam="Villarreal" visitorTeam="Espanyol" name="5" />
        <BetRow number="6" localTeam="Betis" visitorTeam="At. Madrid" name="6" />
        <BetRow number="7" localTeam="Celta" visitorTeam="Sevilla" name="7" />
        <BetRow number="8" localTeam="Numancia" visitorTeam="Lugo" name="8" />
        <BetRow number="9" localTeam="Córdoba" visitorTeam="Albacete" name="9" />
        <BetRow number="10" localTeam="Deportivo" visitorTeam="Tenerife" name="10" />
        <BetRow number="11" localTeam="Mallorca" visitorTeam="Alcorcón" name="11" />
        <BetRow number="12" localTeam="R. Oviedo" visitorTeam="Cádiz" name="12" />
        <BetRow number="13" localTeam="Osasuna" visitorTeam="Granada" name="13" />
        <BetRow number="14" localTeam="Extremadura" visitorTeam="Sporting" name="14" />
        <BetRow number="15" localTeam="Real Madrid" visitorTeam="Alavés" name="15" />
        
        </tbody>
      </TableStyle>
  );
};

export default bet;