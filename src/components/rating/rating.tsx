import { ActiveProduct } from '../../types/types';

type RatingProps = {
  activeProduct: ActiveProduct;
}

function Rating({activeProduct}: RatingProps): React.JSX.Element {
  return (
    <div className="rate product__rate" data-testid="rating-container">
      <svg width={17} height={16} aria-hidden="true">
        <use xlinkHref="#icon-full-star" />
      </svg>
      <svg width={17} height={16} aria-hidden="true">
        <use xlinkHref="#icon-full-star" />
      </svg>
      <svg width={17} height={16} aria-hidden="true">
        <use xlinkHref="#icon-full-star" />
      </svg>
      <svg width={17} height={16} aria-hidden="true">
        <use xlinkHref="#icon-full-star" />
      </svg>
      <svg width={17} height={16} aria-hidden="true">
        <use xlinkHref="#icon-star" />
      </svg>
      <p className="visually-hidden">Рейтинг: {activeProduct?.rating}</p>
      <p className="rate__count">
        <span className="visually-hidden">Всего оценок:</span>{activeProduct?.reviewCount}
      </p>
    </div>
  );
}

export default Rating;
