import styled from 'styled-components';

export const ContactWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  width: 100%;
  padding: 20px;
  background-color: burlywood;
  border-radius: 10px;
`;
export const InputField = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;
export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: darkcyan;
  color: black;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const InfoTitle = styled.h2`
  color: teal;
  font-size: 1.5rem;
`;

export const InfoItem = styled.p`
  font-size: 1rem;
  font-family: sans-serif;
  color: navajowhite;
  margin-bottom: 10px;
`;
