import React from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';



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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffff',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImage: {
    width: 200,
    height: 220,
    marginBottom: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3F3',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  containerInfo: {
    width: '100%',
    padding: 30,
    alignItems: 'center',
  },
  info: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
    color: '#A0A0A0'
  },
});

