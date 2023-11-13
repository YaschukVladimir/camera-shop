import { useNavigate, useSearchParams } from 'react-router-dom';
import { CAMERA_LEVEL } from '../../const';

function CameraLevelFilter(): React.JSX.Element {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const cameraLevel = searchParams.get('level') || '';

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
      <legend className="title title--h5">Уровень</legend>
      <div className="custom-checkbox catalog-filter__item">
        <label>
          <input
            type="checkbox"
            name="zero"
            onChange={() => handleSetParams('level', CAMERA_LEVEL.zero)}
            checked={!!(cameraLevel.length && cameraLevel === CAMERA_LEVEL.zero)}
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
            checked={!!(cameraLevel.length && cameraLevel === CAMERA_LEVEL.nonProffesional)}
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
            checked={!!(cameraLevel.length && cameraLevel === CAMERA_LEVEL.proffesional)}
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
