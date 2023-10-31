import StarIcon from '../star-icon/star-icon';

type ProductCardStarsProps = {
  rating: number;
  reviewCount: number;
}

export const STARS_QUANTITY = [1, 2, 3, 4, 5];

export function showRateStars (quantity: number[], productRating: number) {
  const starsToShow = quantity.map((star) => {
    if (star <= productRating) {
      return (
        <StarIcon href="#icon-full-star" key={star} />
      );
    }
    if (star > productRating) {
      return (
        <StarIcon href="#icon-star" key={star}/>
      );
    }
  });
  return starsToShow;
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

