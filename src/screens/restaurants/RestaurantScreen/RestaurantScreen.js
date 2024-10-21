import { View, Text, Button } from 'react-native'
import React from 'react'
import screens from '../../../utils/screenName';

import { styles } from './RestaurantScreen.style';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from '../../../utils/firebase';
import { doc, query, orderBy, onSnapshot, collection } from 'firebase/firestore';

import { LoadingModal } from '../../../components/Shared/LoadingModal/LoadingModal';

import { ListRestaurants } from '../../../components/Restaurant/ListRestaurant/ListRestaurants';

export default function RestaurantScreen({ navigation }) {

    const [hasLogged, setHasLogged] = useState(null);

    const [restaurants, setResaurants] = useState(null);

    useEffect(() => {

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {

            user ? setHasLogged(true) : setHasLogged(false)

        });

    }, []);

    useEffect(() => {

        const restaurantRef = collection(db, 'restaurants');
        const q = query(restaurantRef, orderBy('createdAt', 'desc'));
        const unSub = onSnapshot(q, (res) => {
            console.log(res);
            setResaurants(res.docs);
        });


    }, []);

    const BtnAddRestaurant =
        <Ionicons
            name='add-circle'
            color='green'
            size={60}
            style={styles.btnContainer}
            onPress={() => { navigation.navigate(screens.restaurants.add_restaurant) }}
        />

    return (
        <View style={styles.content}>

            {restaurants
                ? <ListRestaurants restaurants={restaurants} />
                : <LoadingModal show text="cargando" />
            }

            {hasLogged && BtnAddRestaurant}

        </View>
    );
}
