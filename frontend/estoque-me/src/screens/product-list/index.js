import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity, ScrollView } from 'react-native';  
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

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
  {
    id: '4',
    name: 'Produto 2',
    price: 19.99,
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '5',
    name: 'Produto 3',
    price: 15.99,
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '6',
    name: 'Produto 2',
    price: 19.99,
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '7',
    name: 'Baruk brank',
    price: 15.99,
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '8',
    name: 'Baruk brank',
    price: 15.99,
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '9',
    name: 'Baruk brank',
    price: 15.99,
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '10',
    name: 'Baruk brank',
    price: 15.99,
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '11',
    name: 'Baruk brank',
    price: 15.99,
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '12',
    name: 'Baruk brank',
    price: 15.99,
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '13',
    name: 'Baruk rosa',
    price: 15.99,
    image: require('../../../assets/placeholderProduct.png'),
  },

];


export function ProductList() {
  const navigation = useNavigation();

  const [search, setSearch] = useState('');

  const filterSearch = products.filter( product => product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

    const renderProductItems = () => {
      return filterSearch.map((item) => (
        <TouchableOpacity 
          style={styles.productItem} 
          key={item.id} 
          onPress = {() => navigation.navigate('ProductInfo', item)}>
          <Image source={item.image} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
          </View>
        </TouchableOpacity>
      ));
    };

    return (
      <View style={styles.background}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar produto"
            value={search}
            onChangeText={(e) =>setSearch(e)}
          />
        </View>
        <Text style = {styles.title}> Produtos cadastrados </Text>
        <ScrollView style={styles.container}>
          <View style={styles.itemContainer}>
            {renderProductItems()}
          </View>
        </ScrollView>
      </View>
    );
}

