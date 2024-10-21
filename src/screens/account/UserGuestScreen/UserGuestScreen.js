import { View, ScrollView } from 'react-native';
import React from 'react';
import { Text, Button, Image } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import screens from '../../../utils/screenName';
import { styles } from './UserGuestScreen.Style';

export function UserGuestScreen() {

    const navigation = useNavigation();

    const goToLogin = () => {

        navigation.navigate(screens.account.login)
    }

    return (

        <ScrollView centerContent={true} style={styles.content} >

            <Image
                source={require("../../../../assets/img/user-guest.png")}
                containerStyle={styles.image}
            />

            <Text style={styles.title}>
                Consultar perfil de usurio
            </Text>

            <Text style={styles.description}>
                Lorem ipsum dolor sit amet. Ut voluptas distinctio sed ipsam vero est ratione tempora ut voluptas nulla. Et aliquam fugit non fuga repellat in repellat tempora aut internos ullam.
            </Text>

            <Button
                buttonStyle={styles.btnStyle}
                title={"Ver tu perfil"}
                onPress={goToLogin}
            />
        </ScrollView>
    );
}