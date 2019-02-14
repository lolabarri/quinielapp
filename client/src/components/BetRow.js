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
      <td><InputStyle onChange={props.onChange} type="radio" name={props.name} value="Home Team"/></td>
      <td><InputStyle onChange={props.onChange} type="radio" name={props.name} value="Draw"/></td>
      <td><InputStyle onChange={props.onChange} type="radio" name={props.name} value="Away Team"/></td>
    </RowStyle>
  );
};

export default BetRow;