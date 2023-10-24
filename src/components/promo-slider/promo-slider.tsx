import { Swiper, SwiperSlide } from 'swiper/react';
import { PromoProduct } from '../../types/types';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import PromoSlide from '../promo-slide/promo-slide';

type PromoSliderProps = {
  promoProducts: PromoProduct[];
}

function PromoSlider({promoProducts}: PromoSliderProps): React.JSX.Element {
  return (
    <div className='swipper-wrapper' data-testid="slider-container">
      <Swiper modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoHeight
        loop
        style={{
          position: 'relative'
        }}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          el: '.swipper-pagination',
          clickable: true,
        }}
      >
        {promoProducts.map((activePromo) => (
          <SwiperSlide key={activePromo.id}>
            <PromoSlide activePromo={activePromo}/>
          </SwiperSlide>))}
        <div className='swipper-pagination'
          style={{
            width: 74,
            height: 16,
            position: 'absolute',
            bottom: 32,
            right: 30,
            zIndex: 1000,
            left: 'auto',
          }}
        >
        </div>
      </Swiper>
    </div>
  );
}

export default PromoSlider;
