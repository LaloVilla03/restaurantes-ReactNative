import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from '../utils/screenName';
import searchScreen from '../screens/search/SearchScreen';

const Stack = createNativeStackNavigator();

export default function MyStack() {
    return (


        <Stack.Navigator>

            <Stack.Screen
                name={screens.search.search}
                component={searchScreen}
                options={{

                }}
            />

        </Stack.Navigator>


    );
}