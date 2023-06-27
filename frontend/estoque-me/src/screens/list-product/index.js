import React, { useState, useContext } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity, ScrollView } from 'react-native';  
import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import {UserContext} from '../../UserContext';
import data from '../../../db.json';

export function ProductList() {
  const navigation = useNavigation();
  const route = useRoute();

  const { email } = useContext(UserContext);

  const [search, setSearch] = useState('');


  const user = data.users.find(user => user.email === email);
  const products = user.products;

  const filterSearch = products.filter( product => product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

    const renderProductItems = () => {
      return filterSearch.map((item) => (
        <TouchableOpacity 
          style={styles.productItem} 
          key={item.product_index} 
          onPress = {() => navigation.navigate('ProductInfo', {item})}>
          <Image source={{uri: item.image}} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.producttitle}>{item.title}</Text>
            <Text style={styles.productPrice}>R$ {item.value}</Text>
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

