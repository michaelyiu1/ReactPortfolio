import React, { useState } from "react";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Page from './components/Page';
import Footer from './components/Footer';

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
