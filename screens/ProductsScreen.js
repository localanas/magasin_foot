import { FlatList } from "react-native";
import ProductItem from "../components/ProductItem";

import { PRODUCTS } from "../data/dummy-data";

function ProductsScreen({ navigation }) {
  function renderProductItem(itemData) {
    function pressHandler() {
      navigation.navigate("ProductItem", {
        ref: itemData.item.ref,
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
      renderItem={renderProductItem}
      numColumns={2}
    />
  );
}

export default ProductsScreen;
