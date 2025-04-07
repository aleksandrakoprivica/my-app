import React from 'react';
import styled from 'styled-components';

// Styled components for the BoyPage
export const PageWrapper = styled.div`
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Press Start 2P', cursive;
`;
export const Avatar = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 3px solid #0ff;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.7);
  margin-bottom: 20px;
`;

export const BioSection = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const BioText = styled.p`
  font-size: 1.2rem;
  margin: 5px 0;
`;

export const LevelMeter = styled.div`
  width: 100%;
  background-color: #444;
  border-radius: 10px;
  margin: 20px 0;
`;

export const LevelProgress = styled.div`
  width: ${(props) => props.level}%;
  height: 20px;
  background: linear-gradient(90deg, #00ff00, #00ccff);
  border-radius: 10px;
`;

export const Button = styled.button`
  background-color: #0ff;
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00ccff;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
  }
`;
