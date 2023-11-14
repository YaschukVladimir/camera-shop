import { STARS_QUANTITY } from '../../const';
import { showRateStars } from '../../utils/utils';

type ProductCardStarsProps = {
  rating: number;
  reviewCount: number;
}


function ProductCardStars({rating, reviewCount}: ProductCardStarsProps): React.JSX.Element {
  return (
    <div className="rate product-card__rate">
      {showRateStars(STARS_QUANTITY, rating)}
      <p className="visually-hidden">Рейтинг: {rating}</p>
      <p className="rate__count">
        <span className="visually-hidden">Всего оценок:</span>
        {reviewCount}
      </p>
    </div>
  );
}

export default ProductCardStars;

