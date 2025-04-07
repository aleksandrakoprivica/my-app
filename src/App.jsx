import './App.css';
import { BrowserRouter } from 'react-router';
import { Router } from './router.jsx';
import { HeaderComponent } from './header.jsx';
import { FooterComponent } from './footer.jsx';

function App() {
  return (
    <>
      <div className="page-wrapper">
        <BrowserRouter>
          <HeaderComponent />

          <div className="page-content">
            <Router />
          </div>

          <FooterComponent />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
