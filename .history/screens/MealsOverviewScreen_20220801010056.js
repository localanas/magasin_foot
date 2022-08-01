import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Product from "../components/Product";

function MealsOverviewScreen({}) {
  function renderMealItem(itemData) {
    console.log(itemData);
  }

  return <View style={styles.container}></View>;
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
