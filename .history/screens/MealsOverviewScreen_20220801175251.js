import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Image, Text, Platform } from "react-native-web";
import Product from "../components/Product";

import { PRODUCTS } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const product = PRODUCTS.find((product) => {
    return product.ref === catId;
  });

  return (
    <View style={styles.container}>
      <Product product={product} />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});