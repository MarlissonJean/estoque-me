import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

import {
    Animated,
    Text, 
    TextInput, 
    View, 
    KeyboardAvoidingView, 
    TouchableOpacity,
    Keyboard
} from "react-native";


export function Login() {
    const navigation = useNavigation();

    const [offset] = useState(new Animated.ValueXY({x: 0, y:80}));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({x: 400, y: 500 }));
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
                onChange={()=>{}}
                />
                <TextInput style={styles.input}  
                placeholder='Senha'
                autoCorrect={false}
                onChange={()=>{}}
                />
                <TouchableOpacity style={styles.btnPassword}>
                    <Text style={styles.textPassword}> Esqueceu sua senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btnSubmit}
                    onPress={() => navigation.navigate('HomeTab')}>
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