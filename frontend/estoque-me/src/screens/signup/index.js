import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../../firebase';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'

import {styles} from './Styles';

import {
    Animated,
    Text, 
    TextInput, 
    KeyboardAvoidingView, 
    TouchableOpacity,
    View,
    Image,
    Alert
} from "react-native";

export function Signup() {

    const navigation = useNavigation();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    

    const [offset] = useState(new Animated.ValueXY({x: 0, y:80}));
    const [opacity] = useState(new Animated.Value(0));

    const handleSignUp = () => {
        createUserWithEmailAndPassword (auth, email, password)
        .then((userCredential)=>{
            console.logo("Create");
            const user = userCredential.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
            Alert.alert(error.message)
        })
    }
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
                onChangeText={text => setEmail(text)}
                value={email}

                />
            <TextInput style={styles.input}  
                placeholder='Senha'
                autoCorrect={false}
                onChangeText={text => setPassword(text)}
                value={password}
                />
            <TextInput style={styles.input}  
                placeholder='Repetir Senha'
                autoCorrect={false}
                />
            <TouchableOpacity 
            style={styles.btnSubmit}
            onPress={handleSignUp}
            >
                    <Text style={styles.submitText} >
                        Criar conta
                        </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Login')}> 
                <Text style={styles.registerText}>Já possui conta? <Text style={styles.login}>Entrar</Text></Text>
            </TouchableOpacity>
            </Animated.View>
        </KeyboardAvoidingView>   
    );
}
