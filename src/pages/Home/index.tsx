import React from 'react';

import Header from '../../components/Header';

import { Container, Content, MainGrid, Footer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <div className="side-left" />
        <MainGrid>
          <div className="title">Core collection</div>
          <div className="blank1" />
          <div className="main-img" />
          <div className="blank2" />
          <div className="shop">Shop now</div>
          <div className="sec-img" />
          <div className="ric3">
            <p>RIC3</p>
          </div>
          <div className="go-arrow">
            <i className="icono-arrow1-left" />
          </div>
        </MainGrid>
        <div className="side-right" />
      </Content>
      <Footer>
        <div />
        <div />
        <div />
      </Footer>
    </Container>
  );
};

export default Home;
