import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity, ScrollView } from 'react-native';  
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const products = [
  {
    id: '1',
    title: 'Blow brand Urso 1',
    price: 124.99,
    description: 'Alogodão com elastano',
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '2',
    title: 'Bermuda Sigo Tranquilo',
    price: 99.90,
    description: 'Faixa rosa',
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '3',
    title: 'Baruk Vermelha Coração',
    price: 85.00,
    description: 'Coração preto partido',
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '4',
    title: 'Lucky Jeans Urso',
    price: 94.99,
    description: 'Urso vermelho com corrente',
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '5',
    title: 'Nboss Oversizer preta',
    price: 89.90,
    description: 'Minimalista preta',
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '6',
    title: 'Zukman Laranjada Queimado',
    price: 89.90,
    description: 'Gola e mangas listradas',
    image: require('../../../assets/placeholderProduct.png'),
  }

];


export function ProductList() {
  const navigation = useNavigation();

  const [search, setSearch] = useState('');

  const filterSearch = products.filter( product => product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

    const renderProductItems = () => {
      return filterSearch.map((item) => (
        <TouchableOpacity 
          style={styles.productItem} 
          key={item.id} 
          onPress = {() => navigation.navigate('ProductInfo', {item})}>
          <Image source={item.image} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.producttitle}>{item.title}</Text>
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

