import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Data from "../products.json";
import PageHeader from "../components/PageHeader";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import ProductDisplay from "./ProductDisplay";


const SingleProduct = () => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
   fetch("/src/products.json")
   .then(res => res.json())
   .then(data => setProducts(data))
  },[])

  const result = products.filter((p) => p.id === id);

  return (
    <>
      <PageHeader title={"Our Shop Single"} curPage={"Shop/ single Product"} />

      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row">
                     <div className="col-md-6 col-12">
                        <div className="product-thumb">
                           <div className="swiper-container">
                              <Swiper
                                 spaceBetween={0}
                                 centeredSlides={true}
                                 slidesPerView={1}
                                 loop={true}
                                 autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                 }}
                                 navigation={true}
                                 modules={[Autoplay, Navigation]}
                                 className="mySwiper"
                                 >
                                 {
                                    result.map((pItem,i) => (
                                       <SwiperSlide key={i}>
                                          <div className="single-thumb">
                                             <img src={pItem.img} alt="" />
                                          </div>
                                       </SwiperSlide>
                                    ))
                                 }
                                 </Swiper>
                                 <div className="pro-single-prev">
                                    <i className="icofont-rounded-left"></i>
                                 </div>
                                 <div className="pro-single-next">
                                 <i className="icofont-rounded-right"></i>
                                 </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6 col-12">
                        <div className="post-content">
                           <div>
                              {
                                 result.map((pItem,i) => <ProductDisplay key={pItem.id} item={pItem}/> )
                              }
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
                <div className="review">Review</div>
              </article>
            </div>
            <div className="col-lg-4 col-12">Right</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
