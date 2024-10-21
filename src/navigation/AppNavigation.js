import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import restaurantsStacks from './RestaurantsStacks';
import favoritesStacks from './FavoriteStacks';
import accountStacks from './AccountStacks';
import rankingStacks from './RankingStacks';
import searchStacks from './SearchStacks';
import screenNames from '../utils/screenName'



const Tab = createBottomTabNavigator();
let iconName;

function getScreenOptionsIcons(screen, focused) {

    switch (screen) {
        case screenNames.restaurants.tab:
            iconName = focused
                ? 'restaurant'
                : 'restaurant-outline'
            break;

        case screenNames.favorites.tab:
            iconName = focused
                ? 'heart-circle'
                : 'heart-circle-outline'
            break;

        case screenNames.ranking.tab:
            iconName = focused
                ? 'stats-chart'
                : 'stats-chart-outline'
            break;

        case screenNames.search.tab:
            iconName = focused
                ? 'search-circle-sharp'
                : 'search-circle-outline'
            break;

        case screenNames.account.tab:
            iconName = focused
                ? 'body'
                : 'body-outline'
            break;
    }

}

export default function AppNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {
                    getScreenOptionsIcons(route.name, focused);
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                headerShown: false
            })}
        >
            <Tab.Screen
                name={screenNames.restaurants.tab}
                component={restaurantsStacks}
                options={{ title: screenNames.restaurants.restaurants }}
            />
            <Tab.Screen
                name={screenNames.ranking.tab}
                component={rankingStacks}
                options={{ title: screenNames.ranking.ranking }}

            />
            <Tab.Screen name={screenNames.search.tab}
                component={searchStacks}
                options={{ title: screenNames.search.search }}
            />
            <Tab.Screen name={screenNames.favorites.tab}
                component={favoritesStacks}
                options={{ title: screenNames.favorites.favorites }}
            />
            <Tab.Screen name={screenNames.account.tab}
                component={accountStacks}
                options={{ title: screenNames.account.account }}
            />
        </Tab.Navigator>
    )
}