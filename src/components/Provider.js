import React from 'react';
import {Provider} from 'react-redux';

let store;
const ReduxProvider = (Component, store) => {
  return (props) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};
export default ReduxProvider;
