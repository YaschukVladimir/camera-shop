import { useNavigate, useSearchParams } from 'react-router-dom';
import { CAMERA_CATEGORIES, CAMERA_TYPE } from '../../const';

function CameraTypeFilter(): React.JSX.Element {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const cameraType = searchParams.get('type') || '';

  const handleSetParams = (param: string, value: string) => {
    if (searchParams.has(param, value)) {
      searchParams.delete(param);
      navigate(`?${searchParams.toString()}`);
    } else {
      searchParams.set(param, value);
      navigate(`?${searchParams.toString()}`);
    }
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Тип камеры</legend>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input
            type="checkbox"
            name="digital"
            onChange={() => handleSetParams('type', CAMERA_TYPE.digital)}
            checked={!!(cameraType.length && cameraType === CAMERA_TYPE.digital)}
          />
          <span className="custom-checkbox__icon" />
          <span className="custom-checkbox__label">
            {CAMERA_TYPE.digital}
          </span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input
            type="checkbox"
            name="film"
            onChange={() => handleSetParams('type', CAMERA_TYPE.film)}
            checked={!!(cameraType.length && cameraType === CAMERA_TYPE.film)}
            disabled={searchParams.has('category', CAMERA_CATEGORIES.videocamera)}
          />
          <span className="custom-checkbox__icon" />
          <span className="custom-checkbox__label">
            {CAMERA_TYPE.film}
          </span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input
            type="checkbox"
            name="snapshot"
            onChange={() => handleSetParams('type', CAMERA_TYPE.snapshot)}
            checked={!!(cameraType.length && cameraType === CAMERA_TYPE.snapshot)}
            disabled={searchParams.has('category', CAMERA_CATEGORIES.videocamera)}
          />
          <span className="custom-checkbox__icon" />
          <span className="custom-checkbox__label">
            {CAMERA_TYPE.snapshot}
          </span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input
            type="checkbox"
            name="collection"
            onChange={() => handleSetParams('type', CAMERA_TYPE.collection)}
            checked={!!(cameraType.length && cameraType === CAMERA_TYPE.collection)}
          />
          <span className="custom-checkbox__icon" />
          <span className="custom-checkbox__label">
            {CAMERA_TYPE.collection}
          </span>
        </label>
      </div>
    </fieldset>
  );
}

export default CameraTypeFilter;
