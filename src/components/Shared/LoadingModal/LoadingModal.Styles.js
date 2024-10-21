import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    overlay: {
        height: 100,
        width: 100,
        backgroundColor: "#fff",
        borderColor: "green",
        borderWidth: 2,
        borderRadius: 5
    },

    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "green",
        textTransform: "uppercase",
        marginTop: 10
    }
})