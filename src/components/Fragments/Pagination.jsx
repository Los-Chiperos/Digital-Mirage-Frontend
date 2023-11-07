import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ totalDePaginas, currentPage, handleGoToPage, handlePreviousPage, handleNextPage }) => {
    const pageLinks = [];

    for (let i = 1; i <= totalDePaginas; i++) {
        pageLinks.push(i);
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                <Link className="pagination-previous" onClick={() => { handlePreviousPage(); scrollToTop(); }}
                    disabled={currentPage === 1}>Anterior Página</Link>
                <Link className="pagination-next"
                    onClick={() => { handleNextPage(); scrollToTop(); }}
                    disabled={currentPage === totalDePaginas}>Siguiente Página</Link>
                <ul className="pagination-list">
                    {
                        pageLinks.map(page => {
                            return (
                                <li key={page}>
                                    <Link to={`#/${page}`} className={`pagination-link ${currentPage === page ? "is-current" : ""}`}
                                        aria-label={`Goto page ${page}`}
                                        onClick={() => { handleGoToPage(page); scrollToTop(); }}>{page}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}

export default Pagination;