import {NativeStackNavigationProp, createNativeStackNavigator} from '@react-navigation/native-stack'
import { Signup } from '../screens/signup';
import { Login } from '../screens/login';
import { ProductList } from '../screens/product-list';
import { CreateProduct } from '../screens/create-product';


const { Navigator, Screen } = createNativeStackNavigator();

type StackNavigation = {
    Signup: undefined;
    Home: undefined;
    CreateProduct: undefined;
    ProductList: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export function AppRoutes() {
    return(
        <Navigator
        screenOptions={{headerShown: true}}
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
        </Navigator>
    );
}