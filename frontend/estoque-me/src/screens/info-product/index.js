import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';



export function ProductInfo() {
  const route = useRoute();
  const navigation = useNavigation();
  const {title, price, image} = route.params.item;
  return (
    <View style={styles.background}>
      <View style={styles.containerImage}>
        <Image style={styles.image}
          source={image}
        />
      </View> 
      <View style={styles.container}>
          <View style = {styles.containerInfo}>
            <Text style= {styles.info}>Título:{title}</Text>
            <Text style= {styles.info}>Código:</Text>
            <Text  style= {styles.info}>Descrição:</Text>
            <Text  style= {styles.info}>Valor: R${price.toFixed(2)}</Text>
            <Text  style= {styles.info}>Tamanhos:</Text>
          </View>
          <TouchableOpacity style={styles.addCar} onPress={() => navigation.navigate('ProductList')}>
                <Text style={styles.addCarText}>
                    Adicionar a venda
                </Text>
            </TouchableOpacity>
      </View>
    </View>
  );
};

