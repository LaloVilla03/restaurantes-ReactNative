import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppNavigation from './src/navigation/AppNavigation';
import { initFirebasex } from './src/utils/firebase';
import Toast from 'react-native-toast-message';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />

        <Toast />
      </NavigationContainer >
    </>
  );
}