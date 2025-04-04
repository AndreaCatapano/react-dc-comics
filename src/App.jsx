import Header from './components/header/Header.jsx';
import Main from './components/main/Main.jsx';
import Footer from './components/footer/Footer.jsx';
import ServiceBar from './components/service-bar/ServiceBar.jsx';

function App({ showSection }) {

  const numberOfLink = showSection.numberOfLink;

  return (
    <>
      {showSection.headerIsPresent && <Header numberOfLink={numberOfLink} />}
      {showSection.mainIsPresent && <Main />}
      <ServiceBar />
      {showSection.footerIsPresent && <Footer />}
    </>
  );
}

export default App;