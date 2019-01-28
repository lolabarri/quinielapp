import React from "react";
import styled from "@emotion/styled";

const RowStyle = styled.tr`
:hover {background-color: #f5f5f5;};
`

const InputStyle = styled.input`
text-align: center;
`

const BetRow = props => {
  return (
    <RowStyle>
      <td>{props.number}</td>
      <td>{props.localTeam}</td>
      <td>{props.visitorTeam}</td>
      <td><InputStyle type="radio" name={props.name}/></td>
      <td><InputStyle type="radio" name={props.name}/></td>
      <td><InputStyle type="radio" name={props.name}/></td>
    </RowStyle>
  );
};

export default BetRow;