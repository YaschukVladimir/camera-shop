
import { Product } from '../../types/types';
import ProductCard from '../product-card/product-card';
import './similar-product-slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import SlidePrevButton from '../slider-buttons/slider-prev-button';
import SlideNextButton from '../slider-buttons/slider-next-button';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getLocalStorageProducts } from '../../store/data-process/selectors';


type SimilarProductsSlider = {
  similarProducts: Product[];
}


const PRODUCTS_PER_STEP = 3;

function SimilarProductsSlider({ similarProducts }: SimilarProductsSlider): React.JSX.Element {

  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(true);
  const productsFromStore = useAppSelector(getLocalStorageProducts);
  const handleSlideChange = () => {
    if(isEnd) {
      setIsEnd(false);
    }
    if(isStart) {
      setIsStart(false);
    }
  };
  const handleReachBeginning = () => {
    setIsStart(true);
    setIsEnd(false);
  };
  const handleReachEnd = () => {
    setIsEnd(true);
    setIsStart(false);
  };

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
          onSlideChange={handleSlideChange}
          onReachBeginning={handleReachBeginning}
          onReachEnd={handleReachEnd}
        >
          <SlidePrevButton isStart={isStart} />
          {similarProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} productsFromStorage={productsFromStore}/>
            </SwiperSlide>))}
          <SlideNextButton isEnd={isEnd} />
        </Swiper>
      </div>
    </div>
  );
}

export default SimilarProductsSlider;
