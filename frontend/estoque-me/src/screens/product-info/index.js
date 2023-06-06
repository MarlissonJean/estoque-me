import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


export function ProductInfo({ navigation }) {
  const {name, price} = route.params;
  return (
    <View style={styles.container}>
      <Text>itemId: {JSON.stringify(name)}</Text>

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

