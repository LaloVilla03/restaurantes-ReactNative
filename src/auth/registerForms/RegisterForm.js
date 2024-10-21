
import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './RegisterForm.style';
import { Input, Icon, Button } from '@rneui/base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useFormik } from 'formik';
import { initialValues } from './RegisterForm.data';
import { validationSchema } from './RegisterForm.data';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { useNavigation } from '@react-navigation/native';

import Toast from 'react-native-toast-message';

import screens from '../../utils/screenName';

function icon(iconName) {

    if (iconName == 'email') {
        return (
            <Ionicons name="at-outline" color="grey" size={20} />
        )
    } else if (iconName == 'password') {
        return (
            <Ionicons name="eye-outline" color="grey" size={20} />
        )
    }
}

export default function RegisterForm() {

    const navigation = useNavigation();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: (form_values) => {

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, form_values.email, form_values.password)
                .then((userCredential) => {
                    //navigation.goBack();
                    navigation.navigate(screens.account.account);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(
                        "eror:",
                        errorCode,
                        "errorMessagge: ",
                        errorMessage
                    )

                    Toast.show({
                        type: 'error',
                        text1: 'errorCode' + errorCode,
                        text2: 'errorMessage: ' + errorMessage,
                        position: 'bottom'
                    })

                    formik.setSubmitting(false);
                });

            console.log(form_values);
        }
    });

    return (
        <View style={styles.content} >
            <Input
                placeholder='Correo electrónico'
                containerStyle={styles.input}
                rightIcon={icon('email')}
                onChangeText={(texto) => {
                    formik.setFieldValue('email', texto);
                }}
                errorMessage={formik.errors.email}
            />

            <Input
                placeholder='Contraseña'
                containerStyle={styles.input}
                secureTextEntry={true}
                rightIcon={icon('password')}
                onChangeText={(texto) => {
                    formik.setFieldValue('password', texto);
                }}
                errorMessage={formik.errors.password}
            />

            <Input
                placeholder='Confirmar contraseña'
                containerStyle={styles.input}
                secureTextEntry={true}
                rightIcon={icon('password')}
                onChangeText={(texto) => {
                    formik.setFieldValue('confirmPassword', texto);
                }}
                errorMessage={formik.errors.confirmPassword}
            />

            <Button
                title={'Unirse'}
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btnUnirse}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            />
        </View>
    );
}