import { STARS_QUANTITY } from '../../const';
import { showRateStars } from '../../utils/utils';


type ReviviewStarsProps = {
  rating: number;
}

function ReviewStars({rating}: ReviviewStarsProps): React.JSX.Element {
  return(
    <div className="rate review-card__rate" data-testid="review-stars-container">
      {showRateStars(STARS_QUANTITY, rating)}
    </div>
  );
}

export default ReviewStars;
