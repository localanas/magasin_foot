import { View, Text, Image, StyleSheet, Platform } from "react-native";

function Product({ product }) {
  return (
    <View style={styles.mealItem}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.title}>{product.description}</Text>
          <Text style={styles.title}>{product.marque}</Text>
          <Text style={styles.title}>{product.prix}</Text>
          <Image source="data:image/jpeg;base64,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" />
          <Text style={styles.title}>{product.ref}</Text>
        </View>
      </View>
    </View>
  );
}

export default Product;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});