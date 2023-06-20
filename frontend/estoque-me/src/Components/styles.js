import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,    
    },
    areaModal:{
        zIndex: 9,
        flex: 1
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'gray',
        height: '20%',
        borderRadius: 10
    },
    actionButton: {
        justifyContent: 'center',
        zIndex: 99,
        backgroundColor:'#FFF',
        borderRadius: 6,
        marginTop: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0, 0.2)',

        shadowColor:  'rgba(0,0,0, 0.3)',
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 5,
        shadowOpacity: 0.28,
        shadowRadius: 4,

        width: "40%"
    }
});