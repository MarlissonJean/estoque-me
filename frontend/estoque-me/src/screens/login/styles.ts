import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff'
    },
    containerLogo:{
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        width: '90%',
    },
    input: {
        backgroundColor: '#F1F5F4',
        width: '90%',
        height: 46,
        marginTop: 20,
        color: '#A0A0A0',
        fontSize: 17,
        borderRadius: 15,
        padding: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 5},
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    btnSubmit:{
        backgroundColor: '#213A79',
        height: 46,
        width: '90%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 39,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 8},
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    submitText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: "600"
    },
    btnRegister:{
        marginTop: 50
    },
    registerText:{
        color:'#A0A0A0'
    },
    register: {
        color: '#213A79',
        fontWeight:'500'
    },
    btnPassword: {
        paddingTop: 10,
        width: '90%',
        alignItems: 'flex-end',
    },
    textPassword: {
        color:'#A0A0A0',
        paddingRight: 10
    }
})