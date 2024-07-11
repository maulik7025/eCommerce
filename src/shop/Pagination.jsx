import React from 'react'

const Pagination = ({totalProduct, activePage, perPageItems, paginate}) => {

    const pageNumbers = [];

    for (let i=1; i <= Math.ceil(totalProduct / perPageItems); i++){
        pageNumbers.push(i)
    }

    console.log(pageNumbers)
  return (
    
    <ul className='default-pagination lab-ui'>
        <li>
            <a onClick={() => {
                if(activePage < pageNumbers.length){
                    paginate(activePage - 1)
                }
            }}>
                <i className="icofont-rounded-left"></i>
            </a>
        </li>

        {pageNumbers.map((number,i) => (
            <li key={i} className={`page-item ${number === activePage ? "bg-warning" : ""}`}>
                <button className='bg-transparent' onClick={() => paginate(number)}>{number}</button>
            </li>
        ))
        }
        

        <li>
            <a onClick={() => {
                if(activePage < pageNumbers.length){
                    paginate(activePage + 1)
                }
            }}>
                <i className="icofont-rounded-right"></i>
            </a>
        </li>

    </ul>

  )
}

export default Pagination