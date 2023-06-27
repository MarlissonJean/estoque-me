import React, { useState, useContext } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';  
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ActionModal}  from '../../Components/ActionModal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {UserContext} from '../../UserContext';
import data from '../../../db.json';

const add = <Ionicons name="add" size={25} color="#fff" />;


export function Registered() {
  const navigation = useNavigation();

  const { email } = useContext(UserContext);

  const [search, setSearch] = useState('');
  const [visibleModal, setVisibleModal] = useState(false); 
  const [ShowConfirmation, setShowConfirmation] = useState(false); 
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para armazenar o produto selecionado para exclusão
  
  
  const user = data.users.find(user => user.email === email);
  const products = user.products;


  const filterSearch = products.filter( product => product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

    const renderProductItems = () => {
      return filterSearch.map((item) => (
        <TouchableOpacity 
          style={styles.productItem} 
          key={item.id}
          activeOpacity={1}
          >
          <Image source={item.image} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.producttitle}>{item.title}</Text>
            <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => setVisibleModal(true)}>
              <FontAwesome name="trash" size={20} color="#e32636" />
            </TouchableOpacity>
          </View>
          </View>
        </TouchableOpacity>
      ));
    };
  
    const confirmDeleteProduct = (product) => {
      setSelectedProduct(product);
      setShowConfirmation(true);
    };
  
    const handleDeleteProduct = () => {
      if (selectedProduct) {
        console.log('Excluir produto:', selectedProduct);
        // Implemente aqui a lógica de exclusão do produto
      }
      setShowConfirmation(false);
    };


    return (
      <View style={styles.background}>
        <View style = {styles.registerButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          {add}
        </TouchableOpacity>
        </View>
        <Text style = {styles.title}> Produtos cadastrados no sistema </Text>
        <ScrollView style={styles.container}>
          <View style={styles.itemContainer}>
            {renderProductItems()}
          </View>
        </ScrollView>
        <Modal
        visible={visibleModal}
        transparent={true}
        onRequestClose={() => setVisibleModal(false)}
        >
          <ActionModal
          handleClose={ () => setVisibleModal(false) }
          />
        </Modal>
      </View>
    );
}

