import React from 'react';
import { View } from 'react-native';

import ProductsList from './pages/ProductsList';
import ShoppingCart from './pages/ShoppingCart';
import PageFooter from './components/PageFooter';

const App: React.FC = () => (
  <View style={{ flex: 1 }}>
    <ShoppingCart />
    <PageFooter />
  </View>
);

export default App;
