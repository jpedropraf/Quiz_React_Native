import React from "react";
import { View } from "react-native";

// Styles
import { styles } from "./styles/styles";

type Props = {
    children: React.ReactNode;
}

export function AppLayout({ children }: Props) {
    return(
        <View style={styles.container}>
            { children }
        </View>
    );
}