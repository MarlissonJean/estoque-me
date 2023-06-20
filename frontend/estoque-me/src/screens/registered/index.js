import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';  
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ActionModal}  from '../../Components/ActionModal'

const products = [
  {
    id: '1',
    title: 'Blow',
    price: 124.99,
    description: 'Alogodão com elastano',
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '2',
    title: 'Bermuda x',
    price: 99.90,
    description: 'Faixa rosa',
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '3',
    title: 'Baruk',
    price: 85.00,
    description: 'Coração preto partido',
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '4',
    title: 'Lucky',
    price: 94.99,
    description: 'Urso vermelho com corrente',
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '5',
    title: 'Nboss',
    price: 89.90,
    description: 'Minimalista preta',
    image: require('../../../assets/placeholderProduct.png'),
  },
  {
    id: '6',
    title: 'Zukman',
    price: 89.90,
    description: 'Gola e mangas listradas',
    image: require('../../../assets/placeholderProduct.png'),
  }

];


export function Registered() {
  const navigation = useNavigation();

  const [search, setSearch] = useState('');
  const [visibleModal, setVisibleModal] = useState(false); 
  const [ShowConfirmation, setShowConfirmation] = useState(false); 
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para armazenar o produto selecionado para exclusão


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
        <Text style = {styles.title}> Produtos cadastrados </Text>
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

