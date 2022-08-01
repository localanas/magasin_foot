import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Product({ ref, description, marque, prix }) {
  return (
    <View style={styles.mealItem}>
      <View style={styles.innerContainer}>
        <View>
          <Image source="https://www.footmercato.net/a4243398161012878402-le-psg-devoile-deja-son-maillot-domicile-pour-la-saison-2021-2022" />
          <Text style={styles.title}>{description}</Text>
          <Text style={styles.title}>{marque}</Text>
          <Text style={styles.title}>{prix}</Text>
          <Text style={styles.title}>{ref}</Text>
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
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
});
