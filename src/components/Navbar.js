import React, {useEffect} from 'react';

function Navbar(props) {

    const {pages, currentPage, setCurrentPage} = props;

    //Update document title when the page is re-loaded, [currentPage] checks if it is the same, if it is the same the render is skipped to provide optimization
    useEffect(() => {
        document.title = currentPage;
    }, [currentPage]);


    return (
        <>
        <ul className="flex-row" >
            {pages.map((page) => {
                <li>
                    <div onClick={() => setCurrentPage(page)}>{page}</div>
                </li>
            })}
        </ul>
        </>
    );
};

export default Navbar;