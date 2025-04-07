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

export const PageLabel = styled.div`
  a {
    color: darksalmon;
    font-weight: bold;
    font-family: sans-serif;
    font-size: large;
  }
`;
export function HeaderComponent() {
  return (
    <Header>
      <Logo src={logo} className="logo" alt="Logo" />
      <PageLabel>
        <a href="/">HOME</a>
      </PageLabel>
      <PageLabel>
        <a href="/contact">CONTACT</a>
      </PageLabel>
      <PageLabel>
        <a href="/about">ABOUT</a>
      </PageLabel>
    </Header>
  );
}
