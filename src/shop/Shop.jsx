import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Data from "../products.json"
import { ProductCards } from './ProductCards';
import Pagination from './Pagination';

const showResult = "Showing 1 - 12 of 139 Results";

export const Shop = () => {

    const [GridList, setGridList] = useState(true);
    const [products, setproducts] = useState(Data);


    // Pagination
    const totalProducts = products.length;
    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage = 12;
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;

    const pageProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // function for page number change
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

  return (
    <div>   
        <PageHeader title={"Our Shop"} curPage={"Shop"} />

        <div className='shop-page padding-tb'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 col-12'>
                        <article>
                            <div className='shop-title d-flex flex-warp justify-content-between'>
                                <p>{showResult}</p>
                                <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                                    <a className='grid' onClick={() => setGridList(!GridList)}>
                                        <i className='icofont-ghost'></i>
                                    </a>
                                    <a className='list' onClick={() => setGridList(!GridList)}>
                                        <i className='icofont-listine-dots'></i>
                                    </a>
                                </div>
                            </div>

                            {/* Product listing */}
                            <div>
                                <ProductCards GridList={GridList} products={products}/>
                            </div>

                            {/* Pagination */}

                            <Pagination 
                                productPerPage = {productPerPage}
                                totalProducts = {totalProducts}
                                activePage = {currentPage}
                                paginate = {paginate}
                            />

                        </article>
                    </div>
                    <div className='col-lg-4 col-12'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop