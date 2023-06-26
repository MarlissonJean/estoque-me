import React, { useState, useContext} from 'react';
import { View, TextInput, Image, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';
import * as ImagePicker from 'expo-image-picker';
import data from '../../../db.json'
import {UserContext} from '../../UserContext';

import { styles } from './styles';


export function CreateProduct() {
    const navigation = useNavigation();

    const { email } = useContext(UserContext);

    const [selectedFirst, setSelectedFirst] = useState("");
    const [selectedSecond, setSelectedSecond] = useState("");

    const [productCode, setProductCode] = useState('');
    const [title, setTitle] = useState('');
    const [cost, setCost] = useState('');
    const [value, setValue] = useState('');
  
    const [imageUri, setImageUri] = useState(null);

    const measureType = [
        {key:'n', value:'Numeração'},
        {key:'l', value:'Letra'},
    ];

    const subType = {
       'l':[
        {key: '1', value: 'P'},
        {key: '2', value: 'M'},
        {key: '3', value: 'G'},
        {key: '4', value: 'GG'},
       ],
       'n':[
        {key: '5', value: '36'},
        {key: '6', value: '38'},
        {key: '7', value: '40'},
        {key: '8', value: '42'},
       ]
    }
      
    const subTypeOptions = subType[selectedFirst] || [];
    const handleImageUpload = async () => {
            const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (permissionResult.granted === false) {
                alert('Permission to access camera roll is required!');
                return;
            }
  };



  const handleCreateProduct = () => {
    let newProduct = {
        product_index:  productCode,
        url_image: "https://urlProducImage0.png",
        title: title,
        cost: cost,
        value: value
    }
    const user = data.users.find(user => user.email === email);
    const currentUser = user.products;
    currentUser.push(newProduct);
    console.log(data)
    navigation.navigate('ProductList')

  }

    return(
    <View style= {styles.background}>
        <View style = {styles.container}>
            <TouchableOpacity style={styles.imageContainer} onPress={handleImageUpload}>
            {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" />
                ) : (
                <Image source={require('../../../assets/placeholderProduct.png')} style={styles.image} resizeMode="cover" />
                )}
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Código do Produto"
                onChangeText={text => setProductCode(text)}
                value={productCode}
            />
            <TextInput
                style={styles.input}
                placeholder="Título"
                onChangeText={text => setTitle(text)}
                value={title}
            />
            <TextInput
                style={styles.input}
                placeholder="Custo"
                keyboardType="numeric"
                onChangeText={text => setCost(text)}
                value={cost}
            />
            <TextInput
                style={styles.input}
                placeholder="Valor de Venda"
                keyboardType="numeric"
                onChangeText={text => setValue(text)}
                value={value}
            />

            <View style= {styles.rowContainer}>
                <View style={styles.measureType}>
                    <SelectList
                        boxStyles={{borderRadius: 15, borderColor: '#fff', backgroundColor: '#F1F5F4' }}
                        placeholder='Classe de medida'
                        inputStyles={{fontSize: 16}}
                        setSelected={setSelectedFirst} 
                        data={measureType}
                    />  
                </View>
                <View style={styles.selecType}>
                    <SelectList
                        boxStyles={{borderRadius: 15, borderColor: '#fff', backgroundColor: '#F1F5F4' }}
                        placeholder='Medida'
                        inputStyles={{fontSize: 16}}
                        setSelected={setSelectedSecond} 
                        data={subTypeOptions} 
                    />    
                </View>
            </View>
            <TouchableOpacity style={styles.btnSubmit} onPress={() => handleCreateProduct()}>
                <Text style={styles.submitText}>
                    Cadastrar produto
                </Text>
            </TouchableOpacity>
        </View>
    </View>
        
    )
}