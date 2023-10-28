import { useSwiper } from 'swiper/react';

type SlidePrevButtonProps = {
  isStart: boolean;
}

export default function SlidePrevButton({isStart}: SlidePrevButtonProps) {
  const swiper = useSwiper();

  return (
    <button
      className="slider-controls slider-controls--prev"
      type="button"
      aria-label="Предыдущий слайд"
      onClick={() => {
        swiper.slidePrev();
      }}
      data-testid="prev-button"
      disabled={isStart}
    >
      <svg width={7} height={12} aria-hidden="true">
        <use xlinkHref="#icon-arrow" />
      </svg>
    </button>
  );
}
