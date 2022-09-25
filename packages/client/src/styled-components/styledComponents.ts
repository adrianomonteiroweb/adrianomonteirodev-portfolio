import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.body};
`;

export const Content = styled.div`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) =>
    props.theme.body === '#1a1a1a' ? '#e9ebf2' : '#1a1a1a'};
  .link.active {
    color: ${(props) => props.theme.fontColor};
  }

  .about-me-div p {
    color: ${(props) => props.theme.fontColor};
  }

  .theme-button {
    color: ${(props) => props.theme.fontColor};
  }
`;
