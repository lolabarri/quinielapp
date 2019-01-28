import React from "react";
import RankingRow from "../components/RankingRow";
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

const DivStyle = styled.div`
overflow-x:auto;
`

const ranking = () => {
  return (
    <DivStyle>
      <TableStyle>
        <thead>
          <tr>
            <th>POS</th>
            <th>NAME</th>
            <th>PTS</th>
            <th>CUP</th>
            <th>TAB</th>
            <th>TOT</th>
          </tr>
        </thead>
        <tbody>
        <RankingRow
          position="1"
          name="Dani"
          points="129"
          tablePoints="0"
          totalPoints="129"
        />
        <RankingRow
          position="2"
          name="Andrés"
          points="123"
          tablePoints="0"
          totalPoints="123"
        />
        <RankingRow
          position="3"
          name="Espe"
          points="118"
          tablePoints="0"
          totalPoints="118"
        />
        </tbody>
      </TableStyle>
    </DivStyle>
  );
};

export default ranking;
