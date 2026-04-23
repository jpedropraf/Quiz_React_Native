import { View } from "react-native";


type Props = {
    children: React.ReactNode;
}

export function AppLayout({ children }: Props) {
    return(
        <View>
            { children }
        </View>
    );
}