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
    const renderProductItem = ({ item }: { item: Product }) => (
        <View style={styles.productItem}>
            <View>
                <Text style={styles.productName}>{item.id}</Text>
            </View>
            <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
            </View>
        </View>
        );

  return (
    <View style = {styles.background}>
      <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={renderProductItem}
          contentContainerStyle={styles.productList}
          />
      </View>
    </View>    
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  container: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  productList: {
    flex: 1,
    width: '100%',
    backgroundColor: 'blue'
  },
  productItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#F1F5F4',
    width: '100%',
    height: 46,
    marginTop: 20,
    color: '#A0A0A0',
    fontSize: 17,
    borderRadius: 15,
    padding: 10,
  },
  productDetails: {
    flexDirection: 'row'
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
