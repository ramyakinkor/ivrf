import React, { useEffect, useState } from 'react';

const Pagination = ({totalPages, paginate, currentPage, style={}}) => {

  const [pagesToShow, setPages] = useState([])
  const MAX_VISIBLE_PAGES = 5;
  useEffect(() => {
   
   const pages = [];

   if (totalPages <= MAX_VISIBLE_PAGES) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage, endPage;
  
      if (currentPage <= Math.ceil(MAX_VISIBLE_PAGES / 2)) {
        startPage = 1;
        endPage = MAX_VISIBLE_PAGES;
      } else if (currentPage >= totalPages - Math.floor(MAX_VISIBLE_PAGES / 2)) {
        startPage = totalPages - MAX_VISIBLE_PAGES + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(MAX_VISIBLE_PAGES / 2);
        endPage = currentPage + Math.floor(MAX_VISIBLE_PAGES / 2);
      }
  
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    }
   setPages(pages)
  }, [currentPage])
 
  const goToPage = (page) => {
    paginate(page)
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1)
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  

  return (
   <>
   { pagesToShow.length > 0 &&
    <div className="col-xxl-12" style={style}>
      <div className="basic-pagination wow fadeInUp text-center mt-20" data-wow-delay=".2s">
         <ul>
            <li>
            <button onClick={goToPrevPage} disabled={currentPage === 1}>
            &lt;
            </button>
            </li>
            {totalPages > MAX_VISIBLE_PAGES && currentPage > Math.ceil(MAX_VISIBLE_PAGES / 2) && (
               <li><span>...</span></li>
            )}

            {pagesToShow.map((page) => (
            <li key={page}>
               <button
                  onClick={() => goToPage(page)}
                  disabled={currentPage === page}
                  className={currentPage === page ? 'active' : ''}>
                  {page}
               </button>
            </li>
            ))}
            
            {totalPages > MAX_VISIBLE_PAGES && currentPage < totalPages - Math.floor(MAX_VISIBLE_PAGES / 2) && (
               <li><span>...</span></li>
            )}
            
            <li>
            <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            &gt;
            </button>
            </li>
         </ul>
      </div>
    </div>
   }
   </>
  );
};

export default Pagination;