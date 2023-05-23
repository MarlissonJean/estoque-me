import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';  

const products = [
  {
    id: '1',
    name: 'Produto 1',
    price: 10.99,
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '2',
    name: 'Produto 2',
    price: 19.99,
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '3',
    name: 'Produto 3',
    price: 15.99,
    image: require('../../../assets/placeholderProduct.png'),
  },
];


export function ProductList() {
    interface Product {
        id: string;
        name: string;
        price: number;
        image: any;
    }
    const renderProductItems = () => {
      return products.map((item) => (
        <View style={styles.productItem} key={item.id}>
          <Image source={item.image} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
          </View>
        </View>
      ));
    };

    return (
      <View style={styles.background}>
        <View style={styles.container}>{renderProductItems()}</View>
      </View>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff'
  },
  container: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#F1F5F4',
    width: '100%',
    height: 80,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
});

