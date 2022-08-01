import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Product from "../components/Product";

import { PRODUCTS } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = PRODUCTS.filter((mealItem) => {
    return mealItem.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = PRODUCTS.find(
      (category) => category.ref === catId
    ).description;

    navigation.setOptions({
      description: categoryTitle,
    });
  }, [catId, navigation]);

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
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.ref}
        renderItem={renderMealItem}
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
