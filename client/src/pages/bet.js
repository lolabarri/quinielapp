import React, { Component } from "react";
import BetRow from "../components/BetRow";
import { BetAPI } from "../lib/bet";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { errorMessageAction } from "../lib/redux/actions";
import styled from "@emotion/styled";
import { getQuinielaBet } from "../lib/quinielaScrape";

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
`;

class _Bet extends Component {
  constructor() {
    super();
    this.state = {
      allTheBets: [],
      data: null
    };
  }

  componentDidMount() {
    getQuinielaBet().then(data => {
      this.setState(data);
    });
  }

  handleBetting() {
    const { history, dispatch } = this.props;
    BetAPI.bet(this.state.allTheBets)
      .then(() => history.push("/"))
      .catch(() => {
        dispatch(errorMessageAction("Bet was not done"));
      });
  }

  handleChange(value, index) {
    let apuestas = this.state.allTheBets.filter(e => e.index !== index);
    let obj = {
      index,
      value
    };
    apuestas.push(obj);
    this.setState({ allTheBets: apuestas }, () =>
      console.log(this.state.allTheBets)
    );
  }

  render() {
    return (
      <React.Fragment>
        <TableStyle>
          <thead>
            <tr>
              <th>NUM</th>
              <th>MATCH</th>
              <th>1</th>
              <th>X</th>
              <th>2</th>
            </tr>
          </thead>
          <tbody>
            {this.state.bets ? (
              this.state.bets.map((quiniela, index) => (
                <BetRow
                  onChange={e => this.handleChange(e.target.value, index)}
                  key={index}
                  quiniela={quiniela}
                />
              ))
            ) : (
              <tr>
                <td>...</td>
              </tr>
            )}
          </tbody>
        </TableStyle>
        <br />
        <button onClick={() => this.handleBetting()}>Submit</button>
      </React.Fragment>
    );
  }
}

export const Bet = connect()(withRouter(_Bet));
