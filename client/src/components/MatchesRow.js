import React from "react";
import styled from "@emotion/styled";

const RowStyle = styled.tr`
:hover {background-color: #f5f5f5;};
`

const MatchesRow = ({matches}) => {
  return (
    <RowStyle>
      <td>{matches.utcDate}</td>
      <td>{matches.homeTeam.name}</td>
      <td>{matches.score.fullTime.homeTeam}</td>
      <td>{matches.awayTeam.name}</td>
      <td>{matches.score.fullTime.awayTeam}</td>
    </RowStyle>
  );
};

export default MatchesRow;