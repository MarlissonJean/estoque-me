import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/app.routes';
import * as ImagePicker from 'expo-image-picker';

import { styles } from './styles';


export function CreateProduct() {

    const navigation = useNavigation<StackTypes>();

    const [productCode, setProductCode] = useState('');
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    //const [selectedMeasureType, setSelectedMeasureType] = useState('');
    //const [selectedOtherListItem, setSelectedOtherListItem] = useState('');
  
  
    const [imageUri, setImageUri] = useState(null);

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
                <View style={styles.selecType}>
                <TextInput
                    style={styles.input}
                    placeholder="Tipo de medida"
                    onChange={()=>{}}
                />  
                </View>
                <View style={styles.measureType}>
                <TextInput
                    style={styles.input}
                    placeholder="Medida"
                    onChange={()=>{}}
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