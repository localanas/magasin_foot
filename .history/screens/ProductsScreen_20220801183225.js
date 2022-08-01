import { FlatList } from "react-native";
import ProductItem from "../components/ProductItem";

import { PRODUCTS } from "../data/dummy-data";

function ProductsScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.ref,
      });
    }

    return (
      <ProductItem
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
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
