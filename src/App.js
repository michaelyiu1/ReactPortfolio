import './App.css';
import Header from './components';
import NavBar from './components';
import About from './components';
import Contact from './components';
import Page from './components';
import PageContent from './components';
import Portfolio from './components';
import Resume from './components';
import Footer from './components';

function App() {
  
  const pages = ['Home', 'About Me', 'Portfolio', 'Resume', 'Contact'];

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <>
    <Header>
      <Navbar 
      pages = {pages}
      setCurrentPage = {setCurrentPage}
      currentPage = {currentPage}
      >
      </Navbar>
    </Header>
    <main>
      <Page currentPage = {currentPage} />
    </main>
    <Footer/>
    </> 
  );
}

export default App;
