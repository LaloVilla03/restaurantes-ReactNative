import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from '../utils/screenName';
import accountScreen from '../screens/account/AccountScreen';
import LoginScreen from '../screens/account/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/account/RegisterScreen/RegisterScreen'


const Stack = createNativeStackNavigator();

export default function MyStack() {
    return (


        <Stack.Navigator>

            <Stack.Screen
                name={screens.account.account}
                component={accountScreen}
                options={{

                }}
            />

            <Stack.Screen
                name={screens.account.login}
                component={LoginScreen}
                options={
                    { title: "Iniciar Sesión" }
                }
            />

            <Stack.Screen
                name={screens.account.register}
                component={RegisterScreen}
                options={{
                    title: "Crear Cuenta"
                }}
            />

        </Stack.Navigator>


    );
}