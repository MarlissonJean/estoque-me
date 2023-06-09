import React, {useContext} from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { CartContext } from '../../CartContext';


export function ProductInfo() {
  const route = useRoute();
  const navigation = useNavigation();
  const { addToCart } = useContext(CartContext);

  const {title, value, image, product_index} = route.params.item;
  return (
    <View style={styles.background}>
      <View style={styles.containerImage}>
        <Image style={styles.image}
          source={{uri:'https://img.ltwebstatic.com/images3_pi/2022/06/21/16557773699b3c639854cc1bc442cd3be2dfaf00c6_thumbnail_600x.jpg'}}
        />
      </View> 
      <View style={styles.container}>
          <View style = {styles.containerInfo}>
            <Text style= {styles.info}>Título:{title}</Text>
            <Text style= {styles.info}>Código: {product_index}</Text>
            <Text  style= {styles.info}>Valor: R${value}</Text>
            <Text  style= {styles.info}>Tamanhos:</Text>
          </View>
          <TouchableOpacity style={styles.addCar} onPress={() => {
            addToCart(route.params.item);
            navigation.navigate('Shopping');
            }}>
                <Text style={styles.addCarText}>
                    Adicionar a venda
                </Text>
            </TouchableOpacity>
      </View>
    </View>
  );
};

