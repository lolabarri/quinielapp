import React from "react";
import styled from "@emotion/styled";

const RowStyle = styled.tr`
:hover {background-color: #f5f5f5;};
`

const RankingRow = props => {
  return (
    <RowStyle>
      <td>{props.position}</td>
      <td>{props.name}</td>
      <td>{props.points}</td>
      <td>{props.cups}</td>
      <td>{props.tablePoints}</td>
      <td>{props.totalPoints}</td>
    </RowStyle>
  );
};

export default RankingRow;
