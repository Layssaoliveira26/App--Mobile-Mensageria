import { View, Text } from "react-native"

export function Mensagem({mensagem, recebida}) {
    return(
        <View>
            <Text>{mensagem}</Text>
        </View>
    )
}