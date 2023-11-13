
import { fetchProductsAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch';


function ErrorScreen (): React.JSX.Element {

  const dispatch = useAppDispatch();

  const handleFetchProducts = () => {
    dispatch(fetchProductsAction());
  };

  return (
    <div style={{flexGrow: 1, justifyContent: 'center', padding: '40px'}}>
      <h2>
        Ups, something went wrong!
      </h2>
      <button type="button" className="btn btn--purple" onClick={handleFetchProducts}>
        Please try again.
      </button>
    </div>
  );
}

export default ErrorScreen;
