import React from 'react';
import ReactDOM from 'react-dom/client';
import MainApp from './components/main-app/main-app';
import { fetchProductsAction, fetchPromoProductsAction } from './store/api-actions';
import { store } from './store';
import { Provider } from 'react-redux';

store.dispatch(fetchProductsAction());
store.dispatch(fetchPromoProductsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainApp />
    </Provider>
  </React.StrictMode>
);
