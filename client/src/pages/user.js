import React from "react";
import {UserCard} from "../components/UserCard";
import { AuthAPI } from '../lib/auth';
import { logout } from '../lib/redux/actions';
import { connect } from 'react-redux';
import styled from "@emotion/styled";

const ButtonStyle = styled.button`
  background-color: tomato;
  color: white;
  border-radius: 5px;
`

const User = connect(state => ({user: state.user}))(({user,dispatch, history}) => {
  return (
      <div>
        <UserCard name={user.name} points="176"/>
        <ButtonStyle onClick={() => AuthAPI.logout().then(() => {dispatch(logout())
          history.push("/")})}>Logout</ButtonStyle>
      </div>
  );
});

export default User;