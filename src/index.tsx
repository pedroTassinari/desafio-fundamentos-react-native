import React from 'react';
import { View } from 'react-native';

import ProductsList from './pages/ProductsList';
import PageFooter from './components/PageFooter';

const App: React.FC = () => (
  <View style={{ flex: 1 }}>
    <ProductsList />
    <PageFooter />
  </View>
);

export default App;
