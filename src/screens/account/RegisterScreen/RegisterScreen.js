import { View, Text } from 'react-native';
import React from 'react';
import RegisterForm from '../../../auth/registerForms/RegisterForm';
import { styles } from './RegisterScreen.style'
import { Image } from '@rneui/base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function RegisterScreen() {

    return (
        <KeyboardAwareScrollView >
            <View styles={styles.content}>
                <Image
                    source={require('../../../../assets/img/icon-200.png')}
                    containerStyle={styles.image}
                />
                <RegisterForm />
            </View>
        </KeyboardAwareScrollView >
    );
}