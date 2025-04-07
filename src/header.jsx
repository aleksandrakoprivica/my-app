import styled from 'styled-components';
import logo from './assets/logo.webp';
import { Logo } from './pages/home/home.styles.jsx';
export const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 0;
  z-index: 1000;
`;

export function HeaderComponent() {
  return (
    <Header>
      <Logo src={logo} className="logo" alt="Logo" />
      <a href="/">HOME</a>
      <a href="/contact">CONTACT</a>
      <a href="/about">ABOUT</a>
    </Header>
  );
}
