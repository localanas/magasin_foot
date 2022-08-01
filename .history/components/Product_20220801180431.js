import { View, Text, Image, StyleSheet, Platform } from "react-native";

function Product({ product }) {
  const url =
    "https://media.gettyimages.com/photos/turkish-national-football-teams-uniform-picture-id133688692?k=20&m=133688692&s=612x612&w=0&h=MHJxzUH1cFmJupWz9hkm4pbt7lVfe7Aii-lz1HAAYLg=";
  return (
    <View style={styles.mealItem}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.title}>{product.description}</Text>
          <Text style={styles.title}>{product.marque}</Text>
          <Text style={styles.title}>{product.prix}</Text>
          <Image source={url} />
          <Text style={styles.title}>{product.ref}</Text>
        </View>
      </View>
    </View>
  );
}

export default Product;

const styles = StyleSheet.create({
  flex: 1,
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
    position: "relative",
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
