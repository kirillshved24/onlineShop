import React from "react";
export const Pagination = ({ currentPage, setPage, totalPages }) => {

    const pages = new Array(totalPages).fill(0);

    return (
        <div className='paginationBlog'>
            {pages.map((page, index) => (
                <div
                    className={`pagination ${currentPage === index + 1 ? 'isActivePage' : ''}`}
                    onClick={() => setPage(index)}
                    key={index}
                >
                    {index + 1}
                </div>
            ))}
        </div>
    )
}