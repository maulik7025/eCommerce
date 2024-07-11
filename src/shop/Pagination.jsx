import React from 'react'

const Pagination = ({productPerPage, totalProducts, activePage, paginate}) => {

    const pageNumbers = [];


    for(let i=1; i <= Math.ceil(totalProducts / productPerPage); i++){
        pageNumbers.push(i);
    }

    console.log(pageNumbers)

  return (
    
    <ul className='default-pagination lab-ui'>
        {
            pageNumbers.map((number, i)=> (
                <li key={i} className={`page-item ${number === activePage ? "bg-warnimg" : ""}`}>
                    <button className='bg-transparent' onClick={() => paginate(number)}>{number}</button>
                </li>
            ))
        }
    </ul>

  )
}

export default Pagination