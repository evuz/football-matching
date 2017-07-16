import React from 'react';
import { connect } from 'react-redux';

import HeaderComponent from '@/components/Header';
import { goLogin } from '@/reducers/navigation';
import { removeUser } from '@/reducers/user';

const HeaderContainer = ({ user, goLogin, removeUser }) => {
  const headerRenderer = user.email ?
    <HeaderComponent
      img={user.avatar}
      alt={user.displayName}
      onClickImg={removeUser}
    /> :
    <HeaderComponent
      onClickImg={goLogin}
    />;
  return headerRenderer;
};

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToState = {
  goLogin,
  removeUser
}

export default connect(mapStateToProps, mapDispatchToState)(HeaderContainer);
