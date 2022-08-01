import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text } from "react-native-web";
import Product from "../components/Product";

import { PRODUCTS } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  useLayoutEffect(() => {
    const product = PRODUCTS.find((product) => product.ref === catId);
  }, [catId, navigation]);
  console.log(product);
  return (
    <View style={styles.container}>
      <Text>test</Text>
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
