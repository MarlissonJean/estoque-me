import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {styles} from './Styles';
import { StackTypes } from '../../routes/app.routes';

import {
    Animated,
    Text, 
    TextInput, 
    KeyboardAvoidingView, 
    TouchableOpacity,
    View,
    Image
} from "react-native";

export function Signup() {

    const navigation = useNavigation<StackTypes>();


    const [offset] = useState(new Animated.ValueXY({x: 0, y:80}));
    const [opacity] = useState(new Animated.Value(0));
    useEffect(()=>{
       Animated.parallel([
           Animated.spring(offset.y, {
               toValue: 0,
               speed: 4, 
               bounciness: 20,
               useNativeDriver: true
           }),
           Animated.timing(opacity, {
               toValue: 1,
               duration: 300,
               useNativeDriver: true
           })
       ]).start();
   },[]);
    return(
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Image
                source={require('../../../assets/minilogo.png')}/>
            </View>
            
            <Animated.View
            style={[styles.container,{
                opacity: opacity,
                transform: [{
                    translateY: offset.y
                }]   
            }       
            ]}>
            <TextInput style={styles.input}  
                placeholder='E-mail'
                autoCorrect={false}
                onChange={()=>{}}
                />
            <TextInput style={styles.input}  
                placeholder='Senha'
                autoCorrect={false}
                onChange={()=>{}}
                />
            <TextInput style={styles.input}  
                placeholder='Repetir Senha'
                autoCorrect={false}
                onChange={()=>{}}
                />
            <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.submitText} >
                        Criar conta
                        </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Home')}> 
                <Text style={styles.registerText}>Já possui conta? <Text style={styles.login}>Entrar</Text></Text>
            </TouchableOpacity>
            </Animated.View>
        </KeyboardAvoidingView>   
    );
}
