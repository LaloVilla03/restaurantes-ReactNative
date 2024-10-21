import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from '../utils/screenName';
import RestaurantsScreen from '../screens/restaurants/RestaurantScreen/RestaurantScreen';
import AddRestaurantScreen from '../screens/restaurants/AddRestaurantScreen/addRestaurantsScreen';
const Stack = createNativeStackNavigator();

export default function MyStack() {
    return (

        <Stack.Navigator>

            <Stack.Screen
                name={screens.restaurants.restaurants}
                component={RestaurantsScreen}
                options={{

                }}
            />

            <Stack.Screen
                name={screens.restaurants.add_restaurant}
                component={AddRestaurantScreen}
                options={{

                }}
            />

        </Stack.Navigator>

    );
}



