import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { PRODUCTS } from "../data/dummy-data";
import Product from "../models/product";

function MealsOverviewScreen({}) {
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
  console.log(renderMealItem);
  console.log("test");

  return <View style={styles.container}></View>;
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
