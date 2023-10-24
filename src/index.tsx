import React from 'react';
import ReactDOM from 'react-dom/client';
import MainApp from './components/main-app/main-app';
import { fetchProductsAction, fetchPromoProductsAction } from './store/api-actions';
import { store } from './store';
import { Provider } from 'react-redux';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';

store.dispatch(fetchProductsAction());
store.dispatch(fetchPromoProductsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <MainApp />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
