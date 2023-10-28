import { useSwiper } from 'swiper/react';

type SlideNextButtonProps = {
  isEnd: boolean;
}


export default function SlideNextButton({isEnd}: SlideNextButtonProps) {
  const swiper = useSwiper();

  return (
    <button
      className="slider-controls slider-controls--next"
      type="button"
      aria-label="Следующий слайд"
      onClick={() => swiper.slideNext()}
      data-testid="next-button"
      disabled={isEnd}
    >
      <svg width={7} height={12} aria-hidden="true">
        <use xlinkHref="#icon-arrow" />
      </svg>
    </button>
  );
}
