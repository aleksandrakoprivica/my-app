import styled from 'styled-components';

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ImageLabel = styled.p`
  color: beige;
  font-family: Constantia;
  font-size: large;
`;
export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Title = styled.h1`
  color: burlywood;
  font-family: Ebrima, sans-serif;
  margin-bottom: 200px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 0;
  z-index: 1000;
`;
export const Logo = styled.img`
  width: 50px;
  height: auto;
  display: flex;
  object-fit: contain;
`;
