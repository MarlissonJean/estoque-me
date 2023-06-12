import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Signup } from '../screens/signup';
import { Login } from '../screens/login';
import { ProductList } from '../screens/product-list';
import { CreateProduct } from '../screens/create-product';
import { ProductInfo } from '../screens/product-info';


const { Navigator, Screen } = createNativeStackNavigator();



export function AppRoutes() {
    return(
        <Navigator
        screenOptions={{headerShown: false}}
        >
            <Screen
                name="Login"
                component={Login}
                />
            <Screen
                name="Signup"
                component={Signup}
                />
            <Screen
                name="CreateProduct"
                component={CreateProduct}
                />
            <Screen
                name="ProductList"
                component={ProductList}
                />
            <Screen
                name="ProductInfo"
                component={ProductInfo}
                />
        </Navigator>
    );
}