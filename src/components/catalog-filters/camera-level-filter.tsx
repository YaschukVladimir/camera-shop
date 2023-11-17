import { useNavigate, useSearchParams } from 'react-router-dom';
import { CAMERA_LEVEL } from '../../const';

function CameraLevelFilter(): React.JSX.Element {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const cameraLevelQuery = searchParams.get('level')?.split(',') || [];

  const handleSetParams = (param: string, value: string) => {
    if (cameraLevelQuery) {
      if (cameraLevelQuery?.includes(value)) {
        searchParams.set(param, cameraLevelQuery.filter((level) => level !== value).toString());
        navigate(`?${searchParams.toString()}`);
        if (cameraLevelQuery.length === 1) {
          searchParams.delete(param);
          navigate(`?${searchParams.toString()}`);
        }
      } else {
        searchParams.set(param, [...cameraLevelQuery, value].toString());
        navigate(`?${searchParams.toString()}`);
      }
    }
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Уровень</legend>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input
            type="checkbox"
            name="zero"
            onChange={() => handleSetParams('level', CAMERA_LEVEL.zero)}
            checked={cameraLevelQuery.includes(CAMERA_LEVEL.zero)}
          />
          <span className="custom-checkbox__icon" />
          <span className="custom-checkbox__label">
            {CAMERA_LEVEL.zero}
          </span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input type="checkbox"
            name="non-professional"
            onChange={() => handleSetParams('level', CAMERA_LEVEL.nonProffesional)}
            checked={cameraLevelQuery.includes(CAMERA_LEVEL.nonProffesional)}
          />
          <span className="custom-checkbox__icon" />
          <span className="custom-checkbox__label">
            {CAMERA_LEVEL.nonProffesional}
          </span>
        </label>
      </div>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input
            type="checkbox"
            name="professional"
            onChange={() => handleSetParams('level', CAMERA_LEVEL.proffesional)}
            checked={cameraLevelQuery.includes(CAMERA_LEVEL.proffesional)}
          />
          <span className="custom-checkbox__icon" />
          <span className="custom-checkbox__label">
            {CAMERA_LEVEL.proffesional}
          </span>
        </label>
      </div>
    </fieldset>
  );
}

export default CameraLevelFilter;
