import React, { useState } from "react";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Page from './components/Page';
import Footer from './components/Footer';

function App() {
  
  const [pages] = useState([
    {name: "About Me"},
    {name: "Portfolio"},
    {name: "Contact"},
    {name: "Resume"}
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <>
    <Header/>
    <Navbar 
      pages = {pages}
      setCurrentPage = {setCurrentPage}
      currentPage = {currentPage}
      ></Navbar>
    <main>
      <Page currentPage = {currentPage}></Page>
    </main>
    <Footer/>
    </> 
  );
}

export default App;
