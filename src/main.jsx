import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './components/ThemeProvider.jsx';
import { ToastContainer } from 'react-toastify';

import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <ThemeProvider>
          <ToastContainer />
          <App />
        </ThemeProvider>
      </Provider>
    </PersistGate>
  </QueryClientProvider>
);