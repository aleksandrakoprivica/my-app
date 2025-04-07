import styled from 'styled-components';

export const AboutTitle = styled.h1`
  color: burlywood;
  font-family: Ebrima, sans-serif;
  margin-bottom: 200px;
`;
export const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const AboutBox = styled.div`
  background-color: ${(props) => props.background ?? 'darkcyan'};
  padding: 20px;
  border-radius: 10px;
  width: 30%;
  margin: 10px;
  min-width: 250px;
`;

export const BoxTitle = styled.h2`
  color: cornsilk;
  font-family: Arial, sans-serif;
  font-size: 1.8rem;
  margin-bottom: 15px;
`;

export const BoxText = styled.p`
  font-size: 1rem;
  color: floralwhite;
  font-family: sans-serif;
  line-height: 1.6;
`;
