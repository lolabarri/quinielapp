import React, {Component} from "react";
import BetRow from "../components/BetRow";
import { BetAPI } from '../lib/bet';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { errorMessageAction } from '../lib/redux/actions';
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

class _Bet extends Component {

  constructor(){
    super();
    this.state = {
      bet1: "",
      bet2: "",
      bet3: "",
      bet4: "",
      bet5: "",
      bet6: "",
      bet7: "",
      bet8: "",
      bet9: "",
      bet10: "",
      bet11: "",
      bet12: "",
      bet13: "",
      bet14: "",
      bet15: "",
    }
};

handleBetting(){
    const {bet1, bet2, bet3, bet4, bet5, bet6, bet7, bet8, bet9, bet10, bet11, bet12, bet13, bet14, bet15} = this.state;
    const {history, dispatch} = this.props;
    BetAPI.bet(bet1, bet2, bet3, bet4, bet5, bet6, bet7, bet8, bet9, bet10, bet11, bet12, bet13, bet14, bet15)
    .then( 
        history.push('/')
    )
    .catch( () => {
        dispatch(errorMessageAction("Invalid login credentials"));
    });
  };

  render() {
  return (
    <React.Fragment>
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
        <BetRow onChange={e => this.setState({bet1:e.target.value})} number="1" localTeam="Levante" visitorTeam="Getafe" name="bet1" />
        <BetRow onChange={e => this.setState({bet2:e.target.value})} number="2" localTeam="Real Sociedad" visitorTeam="Athletic Club" name="bet2" />
        <BetRow onChange={e => this.setState({bet3:e.target.value})} number="3" localTeam="Barcelona" visitorTeam="Valencia" name="bet3" />
        <BetRow onChange={e => this.setState({bet4:e.target.value})} number="4" localTeam="Eibar" visitorTeam="Girona"  name="bet4"/>
        <BetRow onChange={e => this.setState({bet5:e.target.value})} number="5" localTeam="Villarreal" visitorTeam="Espanyol" name="bet5" />
        <BetRow onChange={e => this.setState({bet6:e.target.value})} number="6" localTeam="Betis" visitorTeam="At. Madrid" name="bet6" />
        <BetRow onChange={e => this.setState({bet7:e.target.value})} number="7" localTeam="Celta" visitorTeam="Sevilla" name="bet7" />
        <BetRow onChange={e => this.setState({bet8:e.target.value})} number="8" localTeam="Numancia" visitorTeam="Lugo" name="bet8" />
        <BetRow onChange={e => this.setState({bet9:e.target.value})} number="9" localTeam="Córdoba" visitorTeam="Albacete" name="bet9" />
        <BetRow onChange={e => this.setState({bet10:e.target.value})} number="10" localTeam="Deportivo" visitorTeam="Tenerife" name="bet10" />
        <BetRow onChange={e => this.setState({bet11:e.target.value})} number="11" localTeam="Mallorca" visitorTeam="Alcorcón" name="bet11" />
        <BetRow onChange={e => this.setState({bet12:e.target.value})} number="12" localTeam="R. Oviedo" visitorTeam="Cádiz" name="bet12" />
        <BetRow onChange={e => this.setState({bet13:e.target.value})} number="13" localTeam="Osasuna" visitorTeam="Granada" name="bet13" />
        <BetRow onChange={e => this.setState({bet14:e.target.value})} number="14" localTeam="Extremadura" visitorTeam="Sporting" name="bet14" />
        <BetRow onChange={e => this.setState({bet15:e.target.value})} number="15" localTeam="Real Madrid" visitorTeam="Alavés" name="bet15" />
        </tbody>
      </TableStyle>
      <button onClick={() => this.handleBetting()}>Submit</button>
      </React.Fragment>
  );
  };
};

export const Bet = connect()(withRouter(_Bet));