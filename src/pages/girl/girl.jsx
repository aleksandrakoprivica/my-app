import React from 'react';
import {
  BioTextItem,
  Flower1,
  Flower2,
  GirlBioBox,
  GirlBioText,
  GirlButton,
  GirlPageWrapper,
  MoodBoardColor,
  MoodBoardImage,
  MoodBoardItem,
  MoodBoardWrapper,
  TextSection,
} from './girl.styles.jsx';
import flower1 from '../../assets/flower1.png';
import flower2 from '../../assets/flower2.png';
import instagram from '../../assets/logo-instagram.webp';

function GirlPage() {
  return (
    <>
      <GirlPageWrapper>
        <MoodBoardWrapper>
          <MoodBoardItem>
            <MoodBoardColor bgColor={'pink'}></MoodBoardColor>
          </MoodBoardItem>
          <MoodBoardItem>
            <MoodBoardImage src={instagram}></MoodBoardImage>
          </MoodBoardItem>
          <MoodBoardItem>
            <MoodBoardColor bgColor={'blue'}></MoodBoardColor>
          </MoodBoardItem>
        </MoodBoardWrapper>
        <TextSection>
          <p>About the girl</p>
        </TextSection>
        <GirlBioBox>
          <BioTextItem>
            <GirlBioText>Favorite movie:</GirlBioText>
            <GirlBioText>Titanic</GirlBioText>
          </BioTextItem>
          <BioTextItem>
            <GirlBioText>Favorite singer:</GirlBioText>
            <GirlBioText>Justin Bieber</GirlBioText>
          </BioTextItem>
          <BioTextItem>
            <GirlBioText>Favorite food:</GirlBioText>
            <GirlBioText>Burger</GirlBioText>
          </BioTextItem>
          <BioTextItem>
            <GirlBioText>Favorite game:</GirlBioText>
            <GirlBioText>Snake</GirlBioText>
          </BioTextItem>
        </GirlBioBox>
        <GirlButton>SMILE</GirlButton>
        <Flower1 src={flower1}></Flower1>
        <Flower2 src={flower2} />
      </GirlPageWrapper>
    </>
  );
}

export default GirlPage;
