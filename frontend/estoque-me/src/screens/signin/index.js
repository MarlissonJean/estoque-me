import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import axios from 'axios';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../../firebase';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import data from '../../../db.json'
import {
    Animated,
    Text, 
    TextInput, 
    View, 
    KeyboardAvoidingView, 
    TouchableOpacity,
    Keyboard,
    Alert
} from "react-native";




export function Login() {


    /*const handleJson = async () => {
            axios.get('http://127.0.0.1:3000/users')
            .then( response=>{
                console.log(response.json())
            })
            .catch(error => console.log(error))          
    } */

    
    const navigation = useNavigation();

    const handleJson = (userEmail) => {
        const user = data.users.find(user => user.email === userEmail);
        if (user) {
            navigation.navigate('HomeTab', {userEmail})
        }else {
            console.log("user not found")
        }
    }
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [offset] = useState(new Animated.ValueXY({x: 0, y:80}));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({x: 400, y: 500 }));

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleSignIn = () => {
        signInWithEmailAndPassword (auth, email, password)
        .then((userCredential)=>{
            console.logo("Login");
            const user = userCredential.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
            Alert.alert(error.message)
        })
    }

    useEffect(()=>{
        Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        Keyboard.addListener('keyboardDidHide', keyboardDidHide);
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

    function keyboardDidShow(){
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 400,
                duration: 100,
                useNativeDriver: false
            }),
            Animated.timing(logo.y, {
                toValue: 300,
                duration: 100,
                useNativeDriver: false
            })
        ]).start();
    }

    function keyboardDidHide(){
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 600,
                duration: 100,
                useNativeDriver: false
            }),
            Animated.timing(logo.y, {
                toValue: 500,
                duration: 100,
                useNativeDriver: false
            })
        ]).start();
    }

    const api = axios.create({
        baseURL: 'http://localhost:3000'
      });

    return(
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Animated.Image 
                style={{
                    marginTop: 20,
                    height: logo.y,
                    width: logo.x
                }}
                source={require('../../../assets/logo.png')}
            />
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
                <TouchableOpacity style={styles.btnPassword}>
                    <Text style={styles.textPassword}> Esqueceu sua senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btnSubmit}
                    onPress={() => handleJson(email)}
                    >
                    <Text style={styles.submitText} >
                        Acessar
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('Signup')}> 
                    <Text style={styles.registerText}>Não possui conta? <Text style={styles.register}>Cadastrar</Text></Text>
                </TouchableOpacity>
                
            </Animated.View>
            
        </KeyboardAvoidingView>
    );
}