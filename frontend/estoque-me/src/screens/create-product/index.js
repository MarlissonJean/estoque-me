import React, { useState, useEffect} from 'react';
import { View, TextInput, Image, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';

import * as ImagePicker from 'expo-image-picker';

import { styles } from './styles';


export function CreateProduct() {
    const navigation = useNavigation();

    const [selectedFirst, setSelectedFirst] = useState("");
    const [selectedSecond, setSelectedSecond] = useState("");

    const [productCode, setProductCode] = useState('');
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
  
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
    
    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (!pickerResult.canceled) {
      //setImageUri(pickerResul);
    }
  };

    return(
    <View style= {styles.background}>
        <View style = {styles.header}>
            <Text>-----</Text>
            <Image
                source={require('../../../assets/minilogo.png')}/>
        </View>
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
                value={productCode}
                onChange={()=>{}}
            />
            <TextInput
                style={styles.input}
                placeholder="Descrição"
                value={description}
                onChange={()=>{}}
            />
            <TextInput
                style={styles.input}
                placeholder="Custo"
                value={cost}
                onChange={()=>{}}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Valor de Venda"
                value={sellingPrice}
                onChange={()=>{}}
                keyboardType="numeric"
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
            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('ProductList')}>
                <Text style={styles.submitText}>
                    Cadastrar produto
                </Text>
            </TouchableOpacity>
        </View>
    </View>
        
    )
}