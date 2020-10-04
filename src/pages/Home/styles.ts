import styled from 'styled-components';

import imgMain from '../../assets/home-main.png';
import imgSec from '../../assets/ric3-front.png';

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  flex: 1;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 16fr 1fr;

  > div {
    width: 100%;
    height: 100%;
    border-width: 0;
    border-style: solid;
    border-color: var(--color-black);
  }

  .side-left {
    border-width: 0 1px 0 0;
  }

  .side-right {
    border-width: 0 0 0 1px;
  }
`;

export const MainGrid = styled.div`
  flex: 1;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    'a a a a b b b c c c c c c c c c'
    'd d d d e e e c c c c c c c c c'
    'f f f f f g g c c c c c c c c c'
    'f f f f f g g c c c c c c c c c'
    'f f f f f g g c c c c c c c c c'
    'f f f f f h h c c c c c c c c c';

  > div {
    border-width: 0 1px 2px;
    border-style: solid;
    border-color: var(--color-black);
    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      background-size: 100%;
    }
  }

  .title {
    grid-area: a;
    font-size: 3.6rem;
    padding: 2rem;
  }

  .blank1 {
    grid-area: b;
  }

  .main-img {
    grid-area: c;
    background: url(${imgMain}) no-repeat center;
    background-size: cover;
  }

  .blank2 {
    grid-area: d;
  }

  .shop {
    grid-area: e;
    font-size: 2.8rem;
  }

  .sec-img {
    grid-area: f;
    background: url(${imgSec}) no-repeat center;
    background-size: cover;

    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);

    transition: all 400ms;

    :hover {
      -webkit-filter: grayscale(0%);
      filter: grayscale(0%);
    }
  }

  .ric3 {
    grid-area: g;

    background-color: var(--color-yellow);
    display: block;
    position: relative;

    font-size: 12rem;

    > p {
      position: absolute;
      left: 0;
      bottom: 0;

      margin-bottom: 13rem;
      margin-left: -8rem;
      transform: rotate(-90deg);
    }
  }

  .go-arrow {
    grid-area: h;
    background-color: var(--color-yellow);

    [class*='icono'] {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      &:after,
      &:before {
        content: '';
        box-sizing: border-box;
      }
    }
    [class*='icono-arrow1'] {
      width: 20px;
      height: 20px;
      border-width: 4px 4px 0 0;
      border-style: solid;
      margin: 10px;
      &:before {
        right: 0;
        top: -3px;
        position: absolute;
        height: 4px;
        box-shadow: inset 0 0 0 32px;
        transform: rotate(-45deg);
        width: 23px;
        transform-origin: right top;
      }
      &[class*='-left'] {
        transform: rotate(45deg);
      }
    }
  }
`;

export const Footer = styled.div`
  height: 3.2rem;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 16fr 1fr;

  > div {
    width: 100%;
    height: 100%;
  }
`;
