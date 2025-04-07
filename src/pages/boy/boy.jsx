import React from 'react';
import {
  PageWrapper,
  Avatar,
  BioSection,
  BioText,
  LevelProgress,
  LevelMeter,
  Button,
} from './boy.styles.jsx';
import avatar from '../../assets/avatar.png';
function BoyPage() {
  return (
    <>
      <PageWrapper>
        <Avatar src={avatar} />
        <BioSection>
          <h1>Player: The Futuristic Boy</h1>
          <BioText>Name: SALE</BioText>
          <BioText>Age: 29</BioText>
          <BioText>Favorite Game: Super Mario</BioText>
        </BioSection>

        <LevelMeter>
          <LevelProgress level={75} />
        </LevelMeter>

        <Button>Challenge</Button>
      </PageWrapper>
    </>
  );
}

export default BoyPage;
