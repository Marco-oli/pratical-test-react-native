import React from 'react';
import {SafeAreaView} from 'react-native';
import {Routes} from './src/routes/Routes';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Routes />
    </SafeAreaView>
  );
};

export default App;
