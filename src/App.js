import { Provider } from 'react-redux';
import { RouterProvider } from "react-router-dom";

import Navigation from './navigation';

import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={Navigation} />
    </Provider>
  )
}

export default App;