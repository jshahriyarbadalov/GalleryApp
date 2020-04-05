import React from 'react';
import GalleryNavigator from './navigation/GalleryNavigator';
import {Provider} from 'react-redux';
import {store} from './store/store';


export default function App() {
  return (
    <Provider store={store}>
      <GalleryNavigator />
    </Provider>
  );
};



