import { Product } from '../../types/types';
import BuyButton from '../buttons/buy-button';
import DetailsButton from '../buttons/details-button';
import ProductCardStars from '../product-card-stars/product-card-stars';

type ProductCardProps = {
  product: Product;
}

function ProductCard({product}: ProductCardProps):React.JSX.Element {

  return (
    <div className="product-card is-active">
      <div className="product-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`/${product.previewImgWebp}, /${product.previewImgWebp2x}`}
          />
          <img
            src={`/${product.previewImg}`}
            srcSet={`/${product.previewImg2x}`}
            width={280}
            height={240}
            alt={product.name}
          />
        </picture>
      </div>
      <div className="product-card__info">
        <ProductCardStars rating={product.rating} reviewCount={product.reviewCount} />
        {/* <div className="rate product-card__rate">
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
          <svg width={17} height={16} aria-hidden="true">
            <use xlinkHref="#icon-star" />
          </svg>
          <p className="visually-hidden">Рейтинг: {product.rating}</p>
          <p className="rate__count">
            <span className="visually-hidden">Всего оценок:</span>
            {product.reviewCount}
          </p>
        </div> */}
        <p className="product-card__title">
          {product.name}
        </p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{`${product.price} ₽`}
        </p>
      </div>
      <div className="product-card__buttons">
        <BuyButton id={product.id}/>
        <DetailsButton id={product.id}/>
      </div>
    </div>
  );
}

export default ProductCard;
