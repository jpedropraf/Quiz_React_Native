import { colors } from "@app-themes/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        maxWidth: 860,
        alignSelf: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: colors.background,
    },
});
