import React from 'react';

import {
  DogPhoto,
  PageWrapper,
  InfoCard,
  Button,
  InfoText,
} from './dog.styles.jsx';
import dog from '../../assets/dogpicture.webp';

export function DogPage() {
  return (
    <PageWrapper>
      <DogPhoto src={dog} alt="Cute Dog" />

      <InfoCard>
        <h2>Buddy</h2>
        <InfoText>Breed: Golden Retriever</InfoText>
        <InfoText>Age: 3 years</InfoText>
        <InfoText>Favorite Toy: Tennis Ball</InfoText>

        <Button>Adopt Me</Button>
        <Button>Give a Treat</Button>
      </InfoCard>
    </PageWrapper>
  );
}

export default DogPage;
