import React, {useEffect} from 'react';
import '../css/Navbar.css';

function Navbar(props) {

    //Destructure props
    const {pages = [], setCurrentPage, currentPage} = props

    //Update document title when the page is re-loaded, [currentPage] checks if it is the same, if it is the same the render is skipped to provide optimization
    useEffect(() => {
        document.title = currentPage;
    }, [currentPage]);

    return (    
        <nav>
          <ul className="flex-row">
            {pages.map((Page) => (
              <li className={`mx-5 ${currentPage.name === Page.name && 'navActive'}`} key={Page.name}>
                <div onClick={() => setCurrentPage(Page.name)}>{Page.name}</div>
              </li>
            ))}
          </ul>
        </nav>
    );
};

export default Navbar;
