import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Data from "../products.json"
import { ProductCards } from './ProductCards';
import Pagination from './Pagination';
import ProductSearch from './ProductSearch';

const showResult = "Showing 1 - 12 of 139 Results";

export const Shop = () => {

    const [GridList, setGridList] = useState(true);
    const [products, setproducts] = useState(Data);


    // Pagination
    const totalProduct = products.length;
    const [currentPage, setCureentPage] = useState(1);
    const perPageProduct = 12;
    const indexOfLastProduct = currentPage * perPageProduct;
    const indexOfFirstProduct = indexOfLastProduct - perPageProduct;

    const pageProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (number) => {
        setCureentPage(number);
    }


    // Search using Category
    const [currentCat, setCurrentCat] = useState("All");

    const catList = [...new Set(Data.map((val) => val.category))];


    const filterCatProduct = (cat) => {
        const catWiseProduct = Data.filter((items, i) => items.category === cat)
        setCurrentCat(cat);
        setproducts(catWiseProduct);
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
                                <ProductCards GridList={GridList} products={pageProducts}/>
                            </div>

                            {/* Pagination */}

                            <Pagination 
                                totalProduct={totalProduct}
                                perPageProduct={perPageProduct}
                                currentPage={currentPage}
                                paginate={paginate}
                            />

                        </article>
                    </div>
                    <div className='col-lg-4 col-12'>
                        <ProductSearch products={products} />

                        {/* category wise product search */}
                        <div className='widget-header'>
                            <h5 className='ms-2'>All Categories</h5>
                            <div>
                                <button className={`m-2 ${currentCat === "All" ? "bg-warning" : ""}`}>All</button>
                                {
                                    catList.map((cat,i)=> (
                                        <button className={`m-2 ${currentCat === cat ? "bg-warning" : ""}`} 
                                        onClick={() => filterCatProduct(cat)}>{cat}</button>
                                    ))
                                  
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop