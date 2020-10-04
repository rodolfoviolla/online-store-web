import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 8fr 2fr 2fr 1fr;
  text-transform: uppercase;

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 2px 1px;
    border-style: solid;
    border-color: var(--color-black);

    > img {
      margin: 5px;
      width: 100px;
    }
  }
`;
