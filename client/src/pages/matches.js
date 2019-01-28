import React from "react";
import MatchesRow from "../components/MatchesRow";
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

const matches = () => {
  return (
      <TableStyle>
        <thead>
          <tr>
            <th>DATE</th>
            <th>LT</th>
            <th>VT</th>
            <th>SC</th>
          </tr>
        </thead>
        <tbody>
       <MatchesRow date="12/02/2019 12.00" localTeam="Levante" visitorTeam="Getafe" score="1-0" />
       <MatchesRow date="12/02/2019 12.00" localTeam="Levante" visitorTeam="Getafe" score="1-0" />
       <MatchesRow date="12/02/2019 12.00" localTeam="Levante" visitorTeam="Getafe" score="1-0" />
       <MatchesRow date="12/02/2019 12.00" localTeam="Levante" visitorTeam="Getafe" score="1-0" />
        </tbody>
      </TableStyle>
  );
};

export default matches;
