import { ActiveProduct } from '../../types/types';

type ProductCharactersProps = {
  activeProduct: ActiveProduct;
  activeTab: string;
}

function ProductCharacters({activeProduct, activeTab}: ProductCharactersProps): React.JSX.Element {

  return (
    <div className={`"tabs__element" ${activeTab === 'characters' ? 'is-active' : ''}`} data-testid="characters-list__container">
      <ul className="product__tabs-list">
        <li className="item-list">
          <span className="item-list__title">Артикул:</span>
          <p className="item-list__text"> {activeProduct?.vendorCode}</p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Категория:</span>
          <p className="item-list__text">{activeProduct?.category}</p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Тип камеры:</span>
          <p className="item-list__text">{activeProduct?.type}</p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Уровень:</span>
          <p className="item-list__text">{activeProduct?.level}</p>
        </li>
      </ul>
    </div>
  );
}

export default ProductCharacters;
