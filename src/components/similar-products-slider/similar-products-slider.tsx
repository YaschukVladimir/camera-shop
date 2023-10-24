
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


const PRODUCTS_PER_STEP = 3;

function SimilarProductsSlider({similarProducts}: SimilarProductsSlider): React.JSX.Element {

  return (
    <div className="product-similar__slider" data-testid="slider-container">
      <div className="product-similar__slider-list">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={10}
          slidesPerView={PRODUCTS_PER_STEP}
          slidesPerGroup={PRODUCTS_PER_STEP}
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
