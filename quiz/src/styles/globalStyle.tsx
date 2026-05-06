import { colors } from "@app-themes/colors";
import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    centerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    spaceBetween: {
        justifyContent: "space-between",
    },
    gap8: {
        gap: 8,
    },
    gap12: {
        gap: 12,
    },
    gap16: {
        gap: 16,
    },
});