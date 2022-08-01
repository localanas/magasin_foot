import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Product from "../components/Product";

function MealsOverviewScreen({}) {
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      ref: item.ref,
      description: item.description,
      marque: item.marque,
      prix: item.prix,
    };
    return <Product {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <Product
        ref={item.ref}
        description={item.description}
        marque={item.marque}
        prix={item.prix}
      />
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
