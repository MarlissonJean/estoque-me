import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import { styles } from './styles';

export function ActionModal({handleClose}){
    return (
        <SafeAreaView style ={styles.container}>
            <TouchableOpacity style={styles.areaModal} onPress={handleClose}></TouchableOpacity>
            <View style = {styles.content}>
                <Text style = {{fontSize: 18, fontWeight: "bold", textAlign: 'center'}}>Tem certeza que deseja excluir este produto?</Text>
                <TouchableOpacity style = {styles.actionButton}
                onPress={()=>{}}
                >
                <Text style = {styles.actionText}>Sim</Text> 
                </TouchableOpacity>
                <TouchableOpacity style = {styles.actionButton}
                onPress={()=>{}}
                >
                <Text style = {styles.actionText}>Não</Text> 
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}