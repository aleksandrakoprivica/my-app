import styled from 'styled-components';

export const GirlPageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: 'Pacifico', cursive;
  color: pink;
  position: relative;
  gap: 10px;
`;
export const Flower1 = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 200%;
  display: flex;
  position: absolute;
`;

export const Flower2 = styled.img`
  width: 300px;
  height: 300px;
  margin-left: 200%;
  margin-bottom: 20%;
  display: flex;
  position: absolute;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  z-index: 2;
`;
export const GirlBioBox = styled.div`
  min-width: 100px;
  min-height: 100px;
  background-color: pink;
  z-index: 2;
  text-align: center;
  padding: 20px;
  border-radius: 15px;
  width: 300px;
  margin-top: 20px;
`;

export const GirlBioText = styled.text`
  color: deeppink;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.4rem;
`;

export const BioTextItem = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  gap: 15px;
`;

export const GirlButton = styled.button`
  color: white;
  border-radius: 20px;
  box-shadow: deeppink;
  background-color: hotpink;
  :hover {
    color: deeppink;
  }
`;
export const MoodBoardWrapper = styled.section`
  display: grid;

  grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const MoodBoardItem = styled.div`
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;
export const MoodBoardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MoodBoardColor = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bgColor};
`;
