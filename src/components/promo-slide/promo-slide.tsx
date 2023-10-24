import { PromoProduct } from '../../types/types';
import DetailsButton from '../buttons/details-button';
import './promo-slide.css';

type SliderBannerProps = {
  activePromo: PromoProduct;
}


function PromoSlide({activePromo}: SliderBannerProps): React.JSX.Element {
  return (
    <div className="banner">
      <picture data-testid="picture">
        <source
          type="image/webp"
          srcSet={`${activePromo.previewImgWebp}, ${activePromo.previewImgWebp2x}`}
        />
        <img
          src={activePromo.previewImg}
          srcSet={activePromo.previewImg2x}
          width={1280}
          height={280}
          alt="баннер"
        />
      </picture>
      <p className="banner__info" style={{padding: '40px 20px 40px 20px'}}>
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">
          {activePromo.name}
        </span>
        <span className="banner__text">
          Профессиональная камера от&nbsp;известного производителя
        </span>
        <DetailsButton id={activePromo.id} />
      </p>
    </div>
  );
}

export default PromoSlide;
