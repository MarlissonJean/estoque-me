import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    title: {
      paddingTop: 10,
      fontSize: 20,
      fontWeight: '800',
    },
    background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
    container: {
      flex: 1,
      width: '90%',
      height: '90%',
      position: 'relative',
      top: 0,
      zIndex: 999
    },
    itemContainer:{
      flex: 1,
      marginTop: 50,
      width: '100%',
    },
    productItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      backgroundColor: '#F1F5F4',
      width: '100%',
      height: 50,
      borderRadius: 15,
      paddingHorizontal: 20,
    },
    productImage: {
      width: 40,
      height: 35,
      borderRadius: 5,
      marginRight: 10,
    },
    productDetails: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    productName: {
      fontSize: 16,
      marginBottom: 4
    },
    productPrice: {
      fontSize: 16,
      fontWeight: '500'
    },
    searchBar: {
      width: '85%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      marginTop: 80
    },
    searchInput: {
      width: '100%',
      height: 45,
      borderRadius: 15,
      backgroundColor: '#F1F5F4',
      paddingHorizontal: 20,
    },
  });