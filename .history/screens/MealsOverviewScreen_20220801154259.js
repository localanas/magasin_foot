import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text } from "react-native-web";
import Product from "../components/Product";

import { PRODUCTS } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  useLayoutEffect(() => {
    const product = PRODUCTS.find((product) => product.ref === catId);
  }, [product, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.ref,
      title: item.description,
      imageUrl: item.marque,
      affordability: item.prix,
    };
    return <Product {...mealItemProps} />;
  }
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
