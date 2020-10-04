import React from 'react';

import imgLogo from '../../assets/ric3-logo.png';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div />
      <div>Collection</div>
      <div>Mini Helmet</div>
      <div>
        <img src={imgLogo} alt="logo" />
      </div>
      <div>Bag</div>
      <div>USD</div>
      <div />
    </Container>
  );
};

export default Header;
