
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text, Image } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import screens from '../../../utils/screenName';
import { styles } from './LoginScreen.style'

import LoginForm from '../../../auth/loginForm/loginForm';

export default function LoginScreen() {

    const navigation = useNavigation();

    const goToRegister = () => {
        navigation.navigate(screens.account.register)
    }

    return (
        <ScrollView>

            <Image
                source={require('../../../../assets/img/icon-200.png')}
                containerStyle={styles.image}
            />

            <LoginForm />

            <View style={styles.content}>

                <Text
                    style={styles.textRegister}
                >
                    ¿Qué esperas? {' '}

                    <Text
                        onPress={goToRegister}
                        style={styles.btnRegister}
                    >
                        Registrate
                    </Text>

                </Text>



            </View>

        </ScrollView>
    );
}