
import { Product } from '../../types/types';
import BuyButton from '../buttons/buy-button';
import DetailsButton from '../buttons/details-button';
import { LocalStorageProducts } from '../buy-modal/buy-modal';
import InBasketButton from '../in-basket-button/in-basket-button';
import ProductCardStars from '../product-card-stars/product-card-stars';

type ProductCardProps = {
  product: Product;
  productsFromStorage: LocalStorageProducts[];
}

function ProductCard({product, productsFromStorage}: ProductCardProps):React.JSX.Element {

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
        <p className="product-card__title">
          {product.name}
        </p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{`${new Intl.NumberFormat().format(product.price)} ₽`}
        </p>
      </div>
      <div className="product-card__buttons">
        {productsFromStorage.some(({productId}) => productId === product.id) ? <InBasketButton /> : <BuyButton id={product.id}/>}
        <DetailsButton id={product.id} buttonClass='btn--transparent'/>
      </div>
    </div>
  );
}

export default ProductCard;
