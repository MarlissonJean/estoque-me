import {StyleSheet} from 'react-native';

export const styles  = StyleSheet.create({
    background:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff'
    },
    container: {
        width: '90%',
        height: '85%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#F1F5F4',
        width: '100%',
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
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    selecType: {
        marginTop: 20,
        width: '40%',
    },
    measureType: {
        marginTop: 20,
        width: '50%',

    },
    imageContainer: {
        width: 140,
        height: 140,
        borderRadius: 15,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 70,
      },
    btnSubmit:{
        backgroundColor: '#213A79',
        height: 46,
        width: '100%',
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
})