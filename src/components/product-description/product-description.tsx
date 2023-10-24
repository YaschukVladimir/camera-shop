import { ActiveProduct } from '../../types/types';

type ProductDescriptionProps = {
  activeProduct: ActiveProduct;
  activeTab: string;
}

function ProductDescription ({activeProduct, activeTab}: ProductDescriptionProps): React.JSX.Element {
  return (
    <div className={`'tabs__element'${activeTab === 'description' ? 'is-active' : ''}`} data-testid="description-container">
      <div className="product__tabs-text">
        <p>
          {activeProduct?.description}
        </p>
      </div>
    </div>
  );
}

export default ProductDescription;
