import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  font-family: 'Poppins', sans-serif;
`;

export const DogPhoto = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const InfoCard = styled.div`
  background-color: darkgrey;
  padding: 20px;
  border-radius: 15px;
  width: 300px;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const InfoText = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
`;

// Paw Rating System (5 paw prints for "cuteness")
export const PawRating = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Button = styled.button`
  background-color: #ff8b6f;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff6f4f;
  }
`;
