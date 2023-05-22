import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface Product {
    code: '123',
    description: 'Product Description',
    value: 9.99,
    sizes: ['S', 'M', 'L'],
}

export function ProductScreen({ code, description, value, sizes }: Product) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./path/to/product-image.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.code}>{code}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.value}>Value: ${value.toFixed(2)}</Text>
        <Text style={styles.sizes}>Sizes: {sizes.join(', ')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    alignItems: 'center',
  },
  code: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
  sizes: {
    fontSize: 14,
  },
});

export default ProductScreen;
