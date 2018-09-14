import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    // provider (glue b/w redux and app) can only have 1 child components.
    // child can have many sub component
    <Provider store={createStore(reducers)}>
      {/* `flex: 1 to fill up screen. 1st {} for JSX. 2nd {} javascipt object` */}
      <View styles={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
