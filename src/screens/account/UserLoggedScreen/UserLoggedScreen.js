import { View, } from 'react-native';
import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { styles } from './UserLoggedScreen.style';
import { Text, Button } from '@rneui/base'

export function UserLoggedScreen() {

    const auth = getAuth();

    function logOut() {

        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error)
            });
    }

    const email = auth.currentUser.email;

    return (
        <View style={styles.content}>
            <Text style={styles.text}>Sesión iniciada como:</Text>
            <Text style={styles.textNegritas}> {email} </Text>
            <Button
                title='Cerrar Sesión'
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btnExit}
                onPress={logOut}
            />
        </View>
    );
}