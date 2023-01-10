import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

function Page({currentPage}) {
    
    const pageContent = () => {
        switch(currentPage) {
            case 'About Me':
                return <About/>;
            case 'Portfolio':
                return <Portfolio/>;
            case 'Resume':
                return <Resume/>;
            case 'Contact':
                return <Contact/>;
            default:
                return <About/>
        };
    };

    return (
        <div>
            <div>{pageContent()}</div>    
        </div>
    );

};

export default Page;