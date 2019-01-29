import React from "react";
import UserCard from "../components/UserCard";
import { AuthAPI } from '../lib/auth';
import { logout } from '../lib/redux/actions';
import { connect } from 'react-redux';

const User = connect(state => ({user: state.user}))(({user, dispatch}) => {
  return (
      <div>
        <UserCard name="Coqueto Poliqueto" rankingPosition="1"/>
        <button onClick={() => AuthAPI.logout().then(() => dispatch(logout()))}>Logout</button>
      </div>
  );
});

export default User;