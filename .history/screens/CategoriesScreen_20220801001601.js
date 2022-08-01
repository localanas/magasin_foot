import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { PRODUCTS } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }
    console.log(itemData);

    return (
      <CategoryGridTile
        title={itemData.item.description}
        color={itemData.item.prix}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={PRODUCTS}
      keyExtractor={(item) => item.ref}
      renderItem={renderCategoryItem}
      numColumns={3}
    />
  );
}

export default CategoriesScreen;
