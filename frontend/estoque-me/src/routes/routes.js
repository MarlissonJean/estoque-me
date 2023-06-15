import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Signup } from '../screens/signup';
import { Login } from '../screens/signin';
import { ProductList } from '../screens/list-product';
import { CreateProduct } from '../screens/create-product';
import { ProductInfo } from '../screens/info-product';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ProductEdit } from '../screens/edit-product';


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function HomeTab(){
    return(
        <Tab.Navigator
        
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'                  
                  : 'home';
              } else if (route.name === 'ProductList') {
                iconName = focused ? 'logo-dropbox' : 'logo-dropbox';
              } else if (route.name === 'ProductEdit') {
                iconName = focused ? 'CodeSandbox' : 'CodeSandbox';
              }
              if (iconName == 'CodeSandbox') {
                return <AntDesign name={iconName} size={size} color={color}/>
              } else {
              return <Ionicons name={iconName} size={size} color={color} />;
            }
            },
            tabBarActiveTintColor: '#213A79',
            tabBarInactiveTintColor: 'gray',
          })}

        >
            <Tab.Screen 
            name='Home' 
            component={CreateProduct} 
            options={{headerTransparent: true, title:''}}
            />
            <Tab.Screen name='ProductList' component={ProductList} options={{title:''}}/>
            <Tab.Screen name='ProductEdit' component={ProductEdit} options={{title:''}}/>
        </Tab.Navigator>
    )
}

export function AppRoutes() {
    return(
        <Stack.Navigator
        initialRouteName='Login'
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerTransparent: true, title:'', headerShown: true}}
                />
            <Stack.Screen
                name="Signup"
                component={Signup}
                options={{headerTransparent: true, title:''}}
                />
            <Stack.Screen
                name="HomeTab"
                component={HomeTab}
                options={{headerTransparent: true, title:''}}
                />
            <Stack.Screen
                name="ProductInfo"
                component={ProductInfo}
                options={{headerTransparent: true, title:''}}
                />
            <Stack.Screen 
                name='Products' 
                component={ProductList}
                options={{headerTransparent: true, title:''}}
                />
            <Stack.Screen 
            name='Create' 
            component={CreateProduct}
            options={{headerTransparent: true, title:''}}
            />
            
        </Stack.Navigator>
    );
}