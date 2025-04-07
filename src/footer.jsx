import styled from 'styled-components';
import { Image } from './pages/home/home.styles.jsx';
import facebook from './assets/logo-facebook.png';
import instagram from './assets/logo-instagram.webp';
import linkedin from './assets/logo-linkedin.png';
export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  width: 100%;
`;

export const Icon = styled(Image)`
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin: 0 10px;
`;

export function FooterComponent() {
  return (
    <Footer>
      <a href="https://www.facebook.com" target="_blank">
        <Icon src={facebook}></Icon>
      </a>
      <a href="https://www.instagram.com" target="_blank">
        <Icon src={instagram}></Icon>
      </a>
      <a href="https://www.linkedin.com" target="_blank">
        <Icon src={linkedin}></Icon>
      </a>
    </Footer>
  );
}
