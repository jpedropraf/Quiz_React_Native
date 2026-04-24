import { colors } from "@app-themes/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

        width: "50%",
        maxHeight: "50%",
        margin: "auto",

        backgroundColor: colors.card_background,
    },
});