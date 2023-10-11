// import { useEffect, useState } from 'react';
import { Product } from '../../types/types';
import ProductCard from '../product-card/product-card';
import './similar-product-slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import SlidePrevButton from '../slider-buttons/slider-prev-button';
import SlideNextButton from '../slider-buttons/slider-next-button';

type SimilarProductsSlider = {
  similarProducts: Product[];
}


// const PRODUCTS_PER_STEP = 3;

function SimilarProductsSlider({similarProducts}: SimilarProductsSlider): React.JSX.Element {

  // const [currentStep, setCurrentStep] = useState(1);
  // const [activeSimilarProducts, setActiveSimilarProducts] = useState(similarProducts.slice(0, 3));

  // const lastProductIndex = currentStep * PRODUCTS_PER_STEP;
  // const firstProductIndex = lastProductIndex - PRODUCTS_PER_STEP;
  // const currentProducts = similarProducts.slice(firstProductIndex, lastProductIndex);

  // const nextButtonHandleClick = () => {
  //   setCurrentStep(currentStep + 1);
  // };
  // const prevButtonHandleClick = () => {
  //   setCurrentStep(currentStep - 1);
  // };

  // useEffect(() => {
  //   setActiveSimilarProducts(similarProducts.slice(firstProductIndex, lastProductIndex));
  // }, [currentStep, similarProducts]);

  return (
    <div className="product-similar__slider">
      <div className="product-similar__slider-list">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={10}
          slidesPerView={3}
          slidesPerGroup={3}
          style={{
            position: 'unset'
          }}
        >
          <SlidePrevButton />
          {similarProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product}/>
            </SwiperSlide>))}
          <SlideNextButton />
        </Swiper>
      </div>
    </div>
  );
}

export default SimilarProductsSlider;
