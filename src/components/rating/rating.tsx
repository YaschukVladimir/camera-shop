import { STARS_QUANTITY } from '../../const';
import { ActiveProduct } from '../../types/types';
import { showRateStars } from '../../utils/utils';

type RatingProps = {
  activeProduct: ActiveProduct;
}

function Rating({activeProduct}: RatingProps): React.JSX.Element {
  return (
    <div className="rate product__rate" data-testid="rating-container">
      {showRateStars(STARS_QUANTITY, activeProduct.rating)}
      <p className="visually-hidden">Рейтинг: {activeProduct?.rating}</p>
      <p className="rate__count">
        <span className="visually-hidden">Всего оценок:</span>{activeProduct?.reviewCount}
      </p>
    </div>
  );
}

export default Rating;
