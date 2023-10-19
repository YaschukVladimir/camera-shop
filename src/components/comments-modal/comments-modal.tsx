import React, { Fragment, useState } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setReviewModalActive } from '../../store/data-process/data-process';
import { getIsReviewModalActive } from '../../store/data-process/selectors';
import { FormData } from '../../types/types';
import { STARS_TITLES, starsValues } from '../../const';
import { postReview } from '../../store/api-actions';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useModalCloseEffect } from '../../hooks/use-modal-close-effect';

type ReviewModalProps = {
  id: number | undefined;
}

function ReviewModal ({id}: ReviewModalProps): React.JSX.Element {

  const isModalActive = useAppSelector(getIsReviewModalActive);
  const dispatch = useAppDispatch();

  const [rating, setRating] = useState(0);
  const [userName, setUserName] = useState('');
  const [advantage, setAdvantage] = useState('');
  const [disadvantage, setDisadvantage] = useState('');
  const [review, setReview] = useState('');

  const formData: FormData = {
    'cameraId': id,
    'userName': userName,
    'advantage': advantage,
    'disadvantage': disadvantage,
    'review': review,
    'rating': rating,
  };

  type FormValues = {
    userName: string;
    advantage: string;
    disadvantage: string;
    review: string;
    rating: number;
  };

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({mode: 'onChange'});

  const onSubmitForm: SubmitHandler<FormValues> = () => {
    dispatch(postReview(formData));
    reset();
    setRating(0);
  };

  const onModalClose = () => {
    dispatch(setReviewModalActive(false));
    setRating(0);
    reset();
  };

  const onCloseByKeyPress = (key: string) => {
    if (key === 'Escape') {
      onModalClose();
    }
  };

  useModalCloseEffect(isModalActive, onCloseByKeyPress);


  return (
    <div className={`modal ${isModalActive ? 'is-active' : ''}`}>
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={() => onModalClose()} />
        <div className="modal__content">
          <p className="title title--h4">Оставить отзыв</p>
          <div className="form-review">
            <form method="post" action="https://echo.htmlacademy.ru/" onSubmit={handleSubmit(onSubmitForm)}>
              <div className="form-review__rate">
                <fieldset className={`rate form-review__item ${errors.rating ? 'is-invalid' : ''}`}>
                  <legend className="rate__caption">
                Рейтинг
                    <svg width={9} height={9} aria-hidden="true">
                      <use xlinkHref="#icon-snowflake" />
                    </svg>
                  </legend>
                  <div className="rate__bar">
                    <div className="rate__group">
                      {starsValues.map((star) => (
                        <Fragment key={star}>
                          <input
                            {...register('rating', {
                              required: true,
                            })}
                            className="visually-hidden"
                            id={`star-${star}`}
                            type="radio"
                            defaultValue={star}
                            onInput={() => {
                              setRating(star);
                            }}
                          />
                          <label
                            className="rate__label"
                            htmlFor={`star-${star}`}
                            title={STARS_TITLES[star]}
                          />
                        </Fragment>
                      ))}
                    </div>
                    <div className="rate__progress">
                      <span className="rate__stars">{rating}</span> <span>/</span>{' '}
                      <span className="rate__all-stars">5</span>
                    </div>
                  </div>
                  <p className="rate__message">Нужно оценить товар</p>
                </fieldset>
                <div className={`custom-input form-review__item ${errors.userName ? 'is-invalid' : ''}`}>
                  <label>
                    <span className="custom-input__label">
                  Ваше имя
                      <svg width={9} height={9} aria-hidden="true">
                        <use xlinkHref="#icon-snowflake" />
                      </svg>
                    </span>
                    <input
                      {...register('userName', {
                        required: true,
                        minLength: 2,
                        maxLength: 160
                      })}
                      type="text"
                      // name="user-name"
                      placeholder="Введите ваше имя"
                      onInput={(evt:React.ChangeEvent<HTMLInputElement>) => setUserName(evt.target.value)}
                    />
                  </label>
                  <p className="custom-input__error">Нужно указать имя</p>
                </div>
                <div className={`custom-input form-review__item ${errors.advantage ? 'is-invalid' : ''}`}>
                  <label>
                    <span className="custom-input__label">
                  Достоинства
                      <svg width={9} height={9} aria-hidden="true">
                        <use xlinkHref="#icon-snowflake" />
                      </svg>
                    </span>
                    <input
                      {...register('advantage', {
                        required: true,
                        minLength: 2,
                        maxLength: 160
                      })}
                      type="text"
                      // name="user-plus"
                      placeholder="Основные преимущества товара"
                      onInput={(evt: React.ChangeEvent<HTMLInputElement>) => {
                        setAdvantage(evt.target.value);
                      }}
                    />
                  </label>
                  <p className="custom-input__error">Нужно указать достоинства</p>
                </div>
                <div className={`custom-input form-review__item ${errors.disadvantage ? 'is-invalid' : ''}`}>
                  <label>
                    <span className="custom-input__label">
                  Недостатки
                      <svg width={9} height={9} aria-hidden="true">
                        <use xlinkHref="#icon-snowflake" />
                      </svg>
                    </span>
                    <input
                      {...register('disadvantage', {
                        required: true,
                        minLength: 2,
                        maxLength: 160
                      })}
                      type="text"
                      // name="user-minus"
                      placeholder="Главные недостатки товара"
                      onInput={(evt: React.ChangeEvent<HTMLInputElement>) => setDisadvantage(evt.target.value)}
                    />
                    <p className="custom-input__error">Нужно указать недостатки</p>
                  </label>

                </div>
                <div className={`custom-textarea form-review__item ${errors.review ? 'is-invalid' : ''}`}>
                  <label>
                    <span className="custom-textarea__label">
                  Комментарий
                      <svg width={9} height={9} aria-hidden="true">
                        <use xlinkHref="#icon-snowflake" />
                      </svg>
                    </span>
                    <textarea
                      {...register('review', {
                        required: true,
                        minLength: 2,
                        maxLength: 160
                      })}
                      // name="user-comment"
                      // minLength={5}
                      placeholder="Поделитесь своим опытом покупки"
                      defaultValue={''}
                      onInput={(evt: React.ChangeEvent<HTMLTextAreaElement>) => setReview(evt.target.value)}
                    />
                  </label>
                  <div className="custom-textarea__error">Нужно добавить комментарий</div>
                </div>
              </div>
              <button className="btn btn--purple form-review__btn" type="submit">
            Отправить отзыв
              </button>
            </form>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={() => onModalClose()}>
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
