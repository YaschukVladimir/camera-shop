import { useNavigate, useSearchParams } from 'react-router-dom';
import { CAMERA_CATEGORIES } from '../../const';

function CategoryFilter(): React.JSX.Element {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSetParams = (param: string, value: string) => {
    if (searchParams.has(param, value)) {
      searchParams.delete(param);
      navigate(`?${searchParams.toString()}`);
    } else {
      searchParams.set(param, value);
      navigate(`?${searchParams.toString()}`);
    }
  };


  const category = searchParams.get('category') || '';

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Категория</legend>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input
            type="checkbox"
            name="photocamera"
            onChange={() => handleSetParams('category', CAMERA_CATEGORIES.photocamera)}
            checked={!!(category.length && category === CAMERA_CATEGORIES.photocamera)}
          />
          <span className="custom-checkbox__icon" />
          <span className="custom-checkbox__label">
            {CAMERA_CATEGORIES.photocamera}
          </span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input
            type="checkbox"
            name="videocamera"
            onChange={() => handleSetParams('category', CAMERA_CATEGORIES.videocamera)}
            checked={!!(category.length && category === CAMERA_CATEGORIES.videocamera)}
          />
          <span className="custom-checkbox__icon" />
          <span className="custom-checkbox__label">
            {CAMERA_CATEGORIES.videocamera}
          </span>
        </label>
      </div>
    </fieldset>
  );
}

export default CategoryFilter;
