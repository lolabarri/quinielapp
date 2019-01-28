import React from "react";
import styled from "@emotion/styled";

const RowStyle = styled.tr`
:hover {background-color: #f5f5f5;};
`

const InputStyle = styled.input`
text-align: center;
`

const MatchesRow = props => {
  return (
    <RowStyle>
      <td>{props.date}</td>
      <td>{props.localTeam}</td>
      <td>{props.visitorTeam}</td>
      <td>{props.score}</td>
    </RowStyle>
  );
};

export default MatchesRow;