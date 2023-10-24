import dayjs from 'dayjs';
import { ReviewType } from '../../types/types';
import ReviewStars from '../review-stars/review-stars';


type ReviewProps = {
  reviewProps: ReviewType;
}
function Review ({reviewProps}: ReviewProps): React.JSX.Element {

  const {userName, createAt, rating, advantage, disadvantage, review} = reviewProps;


  const formatedDate = dayjs(createAt).toDate().toLocaleDateString('ru', {
    month: 'long',
    day: 'numeric'
  });

  return (
    <li className="review-card" data-testid="review-list__element">
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime={createAt}>
          {formatedDate}
        </time>
      </div>
      <ReviewStars rating={rating} />
      <ul className="review-card__list">
        <li className="item-list">
          <span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">
            {advantage}
          </p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">
            {disadvantage}
          </p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">
            {review}
          </p>
        </li>
      </ul>
    </li>
  );
}

export default Review;
