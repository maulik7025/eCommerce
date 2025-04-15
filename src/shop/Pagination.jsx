import React from 'react'

const Pagination = ({totalProduct, perPageProduct, setCureentPage, currentPage}) => {

    const pageNumber = [];

    for(let i=1; i<= Math.ceil(totalProduct / perPageProduct); i++){
        pageNumber.push(i)
    }

    const paginate = (number) => {
        setCureentPage(number);
    }


  return (
    
    <ul className='default-pagination lab-ui'>
        <li>
            <a onClick={() => {
                if(currentPage <= pageNumber.length){
                    paginate(currentPage - 1)
                }
            }}>
                <i className="icofont-rounded-left"></i>
            </a>
        </li>

        {
               pageNumber.map((number, i) => (
                <li key={i} className={`page-item ${number === currentPage ? "bg-warning" : ""}`}>
                    <button className='bg-transparent' onClick={() => paginate(number)}>{number}</button>
                </li>
               ))
        }
            
        

        <li>
            <a onClick={() => {
                if(currentPage <= pageNumber.length){
                    paginate(currentPage + 1)
                }
            }}>
                <i className="icofont-rounded-right"></i>
            </a>
        </li>

    </ul>

  )
}

export default Pagination