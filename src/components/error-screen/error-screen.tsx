
import { fetchProductsAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

function ErrorScreen (): React.JSX.Element {

  const dispatch = useAppDispatch();

  const handleFetchProducts = () => {
    dispatch(fetchProductsAction());
  };

  const notify = () => toast.error('Ошибка загрузки');

  useEffect(() => {
    notify();
  }, []);

  return (
    <div style={{flexGrow: 1, justifyContent: 'center', padding: '40px'}}>
      <h2>
        Ups, something went wrong!
      </h2>
      <button type="button" className="btn btn--purple" onClick={handleFetchProducts}>
        Please try again.
      </button>
      <ToastContainer />
    </div>
  );
}

export default ErrorScreen;
