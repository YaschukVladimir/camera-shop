import { useRef } from 'react';
import { CAMERA_CATEGORIES } from '../../const';
import { Product } from '../../types/types';
import { setDeleteBasketModalActive, setLocalStorageProducts, setProductToDeleteFromBasket } from '../../store/data-process/data-process';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getLocalStorageProducts } from '../../store/data-process/selectors';

type BasketProductProps = {
  product: Product;
}

function BasketProductCard({ product }: BasketProductProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const productsfromStore = useAppSelector(getLocalStorageProducts);
  const productCount = productsfromStore.find(({ productId }) => product.id === productId)?.productQuantity;
  const inputRef = useRef<HTMLInputElement>(null);

  const getCurrentInputValue = (): number => {
    if (inputRef.current) {
      return Number(inputRef.current.value);
    }
    return 0;
  };

  const setCurrentInputValue = (productQuantity: number) => {
    if (inputRef.current) {
      if (productQuantity < 1) {
        inputRef.current.value = `${1}`;
      } else if (productQuantity > 99) {
        inputRef.current.value = `${99}`;
      } else {
        inputRef.current.value = `${productQuantity}`;
      }
    }
  };

  const handleQuantityChange = () => {
    const currentProduct = productsfromStore.find(({ productId }) => productId === product.id);
    if (currentProduct) {
      dispatch(setLocalStorageProducts(([...productsfromStore.map((basketProduct) => {
        if (basketProduct.productId === product.id) {
          return {
            productId: basketProduct.productId,
            productQuantity: getCurrentInputValue(),
          };
        }
        return basketProduct;
      })])));
    }
  };

  return (
    <li className="basket-item">
      <div className="basket-item__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`${product.previewImgWebp}, ${product.previewImgWebp2x}`}
          />
          <img
            src={product.previewImg}
            srcSet={product.previewImg2x}
            width={140}
            height={120}
            alt={`${product.category} «${product.name}»`}
          />
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{product.name}</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item">
            <span className="basket-item__article">Артикул:</span>{' '}
            <span className="basket-item__number">{product.vendorCode}</span>
          </li>
          <li className="basket-item__list-item">
            {`${product.type}
              ${product.category === CAMERA_CATEGORIES.photocamera ? 'фотокамера' : CAMERA_CATEGORIES.videocamera}`}
          </li>
          <li className="basket-item__list-item">
            {`${product.level} уровень`}
          </li>
        </ul>
      </div>
      <p className="basket-item__price">
        <span className="visually-hidden">Цена:</span>{`${product.price} ₽`}
      </p>
      <div className="quantity">
        <button
          className="btn-icon btn-icon--prev"
          aria-label="уменьшить количество товара"
          onClick={() => {
            setCurrentInputValue(getCurrentInputValue() - 1);
            handleQuantityChange();
          }}
          disabled={productCount ? productCount <= 1 : false}
        >
          <svg width={7} height={12} aria-hidden="true">
            <use xlinkHref="#icon-arrow" />
          </svg>
        </button>
        <label className="visually-hidden" htmlFor="counter1" />
        <input
          ref={inputRef}
          type="number"
          id="counter1"
          value={productCount}
          min="1"
          max="99"
          aria-label="количество товара"
          onChange={(evt) => {
            setCurrentInputValue(Number(evt.currentTarget.value));
            handleQuantityChange();
          }}
        />
        <button
          className="btn-icon btn-icon--next"
          aria-label="увеличить количество товара"
          onClick={() => {
            setCurrentInputValue(getCurrentInputValue() + 1);
            handleQuantityChange();
          }}
          disabled={getCurrentInputValue() >= 99}
        >
          <svg width={7} height={12} aria-hidden="true">
            <use xlinkHref="#icon-arrow" />
          </svg>
        </button>
      </div>
      <div className="basket-item__total-price">
        <span className="visually-hidden">Общая цена:</span>{`${product.price * Number(productCount)} ₽`}
      </div>
      <button
        className="cross-btn"
        type="button"
        aria-label="Удалить товар"
        onClick={() => {
          dispatch(setProductToDeleteFromBasket(product));
          dispatch(setDeleteBasketModalActive(true));
        }}
      >
        <svg width={10} height={10} aria-hidden="true">
          <use xlinkHref="#icon-close" />
        </svg>
      </button>
    </li>
  );
}

export default BasketProductCard;
