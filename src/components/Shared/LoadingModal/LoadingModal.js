import { View, ActivityIndicator } from 'react-native'
import { Overlay, Text } from '@rneui/themed';
import React from 'react'
import { styles } from './LoadingModal.Styles'

export function LoadingModal(props) {
    const { show, text } = props;

    return (
        <Overlay isVisible={show} overlayStyle={styles.overlay}>
            <View style={styles.view}>
                <ActivityIndicator size="large" />
                {{ text } && <Text style={styles.text}>{text}</Text>}

            </View>
        </Overlay>
    );

    LoadingModal.defaultProps = {

    }
}