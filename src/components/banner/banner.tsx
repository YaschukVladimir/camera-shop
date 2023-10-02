import { useEffect, useState } from 'react';
import { PromoProduct } from '../../types/types';
import DetailsButton from '../buttons/details-button';
import './banner.css';


type BannerProps = {
  promoProducts: PromoProduct[];
}

function Banner({promoProducts}: BannerProps): React.JSX.Element {

  const [counter, setCounter] = useState(0);

  const [activePromo, setActivePromo] = useState(promoProducts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < promoProducts.length - 1) {
        setCounter(counter + 1);
      } else if (counter >= promoProducts.length - 1) {
        setCounter(0);
      }
      setActivePromo(promoProducts[counter]);
    }, 5000);
    return () => clearInterval(interval);
  }, [counter]);


  return (
    <div className="banner">
      <picture>
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
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">
          {/* Cannonball&nbsp;Pro&nbsp;MX&nbsp;8i */}
          {activePromo.name}
        </span>
        <span className="banner__text">
            Профессиональная камера от&nbsp;известного производителя
        </span>
        <DetailsButton id={activePromo.id} />
      </p>
      <div className="banner__dots">
        {promoProducts.map((product, index) => (
          <div
            className={`banner__dot ${activePromo.id === product.id ? 'active' : ''}`}
            onClick={() => {
              setActivePromo(promoProducts[index]);
              setCounter(index);
            }}
            key={product.id}
          >
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
