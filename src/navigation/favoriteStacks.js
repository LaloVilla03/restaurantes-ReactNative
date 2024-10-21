import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from '../utils/screenName';
import { View, Text } from 'react-native';
import favoriteScreen from '../screens/favorite/FavoriteScreen';

const Stack = createNativeStackNavigator();

export default function MyStack() {
    return (


        <Stack.Navigator>

            <Stack.Screen
                name={screens.favorites.favorites}
                component={favoriteScreen}
                options={{

                }}
            />

        </Stack.Navigator>


    );
}