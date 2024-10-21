import React from "react";
import { View, FlatList, Pressable } from "react-native";
import { Text, Image } from "@rneui/base";
import { styles } from './ListRestaurants.style'

export function ListRestaurants(props) {

    const restaurants = props.restaurants;
    const goToRestaurant = () => {
        console.log('vista restaurante');
    }
    const Item = (doc) => {
        const restaurant = doc.item.data();
        const urlImagen = 'https://cdn.iconscout.com/icon/free/png-512/free-restaurant-1495593-1267764.png?f=webp&w=256';
        return (
            <Pressable onPress={goToRestaurant}>
                <View style={styles.restaurant}>
                    <Image source={urlImagen}
                        style={styles.image} />
                    <View>
                        <Text style={styles.name}>
                            {restaurant.nombre}
                        </Text>
                        <Text style={styles.info}>
                            {restaurant.direccion}
                        </Text>
                        <Text style={styles.info}>
                            {restaurant.descripcion}
                        </Text>
                    </View>
                </View>
            </Pressable>
        )

    }

    return (
        <FlatList data={restaurants} renderItem={Item} />
    )
}