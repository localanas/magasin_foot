import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import { Image } from "react-native-web";

function ProductItem({ title, color, onPress }) {
  const url =
    "https://media.gettyimages.com/photos/turkish-national-football-teams-uniform-picture-id133688692?k=20&m=133688692&s=612x612&w=0&h=MHJxzUH1cFmJupWz9hkm4pbt7lVfe7Aii-lz1HAAYLg=";
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
          <Image source={url} />
        </View>
      </Pressable>
    </View>
  );
}

export default ProductItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
