import { View, StyleSheet } from "react-native";
import Product from "../components/Product";

import { PRODUCTS } from "../data/dummy-data";

function ProducItemScreen({ route }) {
  const ref = route.params.ref;
  const product = PRODUCTS.find((product) => {
    return product.ref === catId;
  });

  return (
    <View style={styles.container}>
      <Product product={product} />
    </View>
  );
}

export default ProducItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
