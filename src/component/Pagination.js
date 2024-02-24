import React from 'react';


const Pagination = ({onNextPage,onPrevPage,hasPrev,hasNext}) => {
  return (
    <div className='pagination ms-5 mb-5'>

        <button className='btn btn-primary' onClick={onPrevPage} disabled={!hasPrev}>Prev</button>

        <button className='btn btn-secondary ms-3' onClick={onNextPage} disabled={!hasNext}>Next</button>

    </div>
  );
}

export default Pagination;