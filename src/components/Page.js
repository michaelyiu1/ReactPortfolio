import React from 'react';
import App from '../App.js';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';


const Page = ({currentPage}) => {
    
    const pageContent = () => {
        switch(currentPage) {
            case 'Home':
                return <Home/>;
                break;
            case 'About Me':
                return <About/>;
                break;
            case 'Porfolio':
                return <Portfolio/>
                break;
            case 'Resume':
                return <Resume/>
                break; 
            case 'Contact':
                return <Contact/>;
                break;
        };
    };


    return (
        <div>
            <h1>{currentPage}</h1>
            <div>{pageContent()}</div>    
        </div>

    )

};

export default Page;