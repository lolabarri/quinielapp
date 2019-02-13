import React, {Component} from "react";
import MatchesRow from "../components/MatchesRow";
import styled from "@emotion/styled";
import { getMatchesResults } from "../lib/footballAPI";

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

class matches extends Component {
  constructor() {
    super();
    this.state= {
      data: null
    }
  };

  componentDidMount() {
    getMatchesResults(23).then(data => {
      this.setState(data);
    });
  }

  render() {
  return (
    <div>
      <TableStyle>
        <thead>
          <tr>
            <th>DATE</th>
            <th>LT</th>
            <th>G</th>
            <th>VT</th>
            <th>G</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data ? (
            this.state.data.map(matches => <MatchesRow key={matches.id} matches={matches} />)
          ) : (
            <tr><td>...</td></tr>
          )}
        </tbody>
      </TableStyle>
      </div>
  );
  };
};

export default matches;