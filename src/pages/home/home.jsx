import boy from '../../assets/boy.webp';
import girl from '../../assets/girl.webp';
import dog from '../../assets/dog.png';
import logo from '../../assets/logo.webp';
import {
  Gallery,
  Header,
  Logo,
  Title,
  Image,
  ImageLabel,
  ImageWrapper,
} from './home.styles.jsx';

export function HomePage() {
  return (
    <>
      <Title>CHOOSE ONE...</Title>
      <Gallery>
        <ImageWrapper>
          <a href="/boy">
            <Image src={boy} className="boy" alt="Boy" />
          </a>
          <ImageLabel>BOY</ImageLabel>
        </ImageWrapper>

        <ImageWrapper>
          <a href="/girl">
            <Image src={girl} className="girl" alt="Girl" />
          </a>
          <ImageLabel>GIRL</ImageLabel>
        </ImageWrapper>
        <ImageWrapper>
          <a href="/dog">
            <Image src={dog} className="dog" alt="Dog" />
          </a>
          <ImageLabel>DOG</ImageLabel>
        </ImageWrapper>
      </Gallery>
    </>
  );
}
