import {
  AboutBox,
  AboutWrapper,
  AboutTitle,
  BoxTitle,
  BoxText,
} from './about.styles.jsx';

export function AboutPage() {
  return (
    <>
      <AboutTitle>ABOUT US</AboutTitle>
      <AboutWrapper>
        <AboutBox background={'darkolivegreen'}>
          <BoxTitle>About me</BoxTitle>
          <BoxText> Im Aleksandra</BoxText>
        </AboutBox>
        <AboutBox>
          <BoxTitle>About Sale</BoxTitle>
          <BoxText> Sale is my brother</BoxText>
        </AboutBox>
        <AboutBox>
          <BoxTitle>About Nettle</BoxTitle>
          <BoxText> Nettle is Sale's business</BoxText>
        </AboutBox>
      </AboutWrapper>
    </>
  );
}

export default AboutPage;
