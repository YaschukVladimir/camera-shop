import { useNavigate, useSearchParams } from 'react-router-dom';
import { CAMERA_CATEGORIES, CAMERA_TYPE } from '../../const';

function CameraTypeFilter(): React.JSX.Element {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const cameraCategory = searchParams.get('category') || '';
  const cameraTypeQuery = searchParams.get('type')?.split(',') || [];

  const handleSetParams = (param: string, value: string) => {
    if (cameraTypeQuery) {
      if (cameraTypeQuery?.includes(value)) {
        searchParams.set(param, cameraTypeQuery.filter((level) => level !== value).toString());
        navigate(`?${searchParams.toString()}`);
        if (cameraTypeQuery.length === 1) {
          searchParams.delete(param);
          navigate(`?${searchParams.toString()}`);
        }
      } else {
        searchParams.set(param, [...cameraTypeQuery, value].toString());
        navigate(`?${searchParams.toString()}`);
      }
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
            onChange={() => {
              handleSetParams('type', CAMERA_TYPE.digital);
            }}
            checked={cameraTypeQuery?.includes(CAMERA_TYPE.digital)}
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
            checked={cameraTypeQuery?.includes(CAMERA_TYPE.film)}
            disabled={cameraCategory === CAMERA_CATEGORIES.videocamera}
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
            checked={cameraTypeQuery?.includes(CAMERA_TYPE.snapshot)}
            disabled={cameraCategory === CAMERA_CATEGORIES.videocamera}
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
            checked={cameraTypeQuery?.includes(CAMERA_TYPE.collection)}
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
