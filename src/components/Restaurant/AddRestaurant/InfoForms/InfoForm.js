import { Input, Button } from "@rneui/base";
import { View } from "react-native";

import { styles } from "./InfoForm.style";

import { useFormik } from 'formik';

import { initialValues, validationSchema } from "./InfoForm.data";

import { getAuth } from "firebase/auth";

import { useNavigation } from '@react-navigation/native';

import Toast from 'react-native-toast-message';

import screens from "../../../../utils/screenName";

import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

import { doc, setDoc } from 'firebase/firestore'

import { db } from "../../../../utils/firebase";

export default function InfoForm() {

    const navigation = useNavigation();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (form_values) => {

            try {
                const form_values2 = form_values;
                form_values2.id = uuidv4();
                form_values2.createdAt = new Date();

                const restaurantRef = doc(db, 'restaurants', form_values2.id);
                await setDoc(restaurantRef, form_values2);

                //navigation.goBack();
                navigation.navigate(screens.restaurants.restaurants)

            }
            catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                Toast.show({
                    type: 'error',
                    text1: 'errorCode' + errorCode,
                    text2: 'errorMessage: ' + errorMessage,
                    position: 'bottom'
                });
                console.log(error);
            }


        }
    })

    return (

        <View style={styles.content}>
            <Input
                placeholder="Nombre"
                onChangeText={(texto) => {
                    formik.setFieldValue('nombre', texto)
                }}
                errorMessage={formik.errors.nombre}
            />

            <Input
                placeholder="Dirección"
                onChangeText={(texto) => {
                    formik.setFieldValue('direccion', texto)
                }}
                errorMessage={formik.errors.direccion}
            />

            <Input
                placeholder="Descripción"
                multiline={true}
                numberOfLines={4}
                //inputContainerStyle={styles.textArea}
                onChangeText={(texto) => {
                    formik.setFieldValue('descripcion', texto)
                }}
                errorMessage={formik.errors.descripcion}
            />

            <Button
                title={'Guardar'}
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btnUnirse}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            />

        </View>

    );
}