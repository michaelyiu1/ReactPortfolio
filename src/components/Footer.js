import React from 'react';

function Footer () {

    const FooterList = [
        {
            name: "fab fa-github",
            link: ""
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/"
        },
        {
            name: "fab fa-instagram",
            link: "https://www.instagram.com/"
        },
    ];

    return (
        <footer className="flex-row px-1">
          {FooterList.map(icon =>
          (
            <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
          )
            )}
        </footer>
      );
};

export default Footer;