import React from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    SafeAreaView,
    Alert,
} from 'react-native';
import { CardContato } from '../components';
import { contatos } from '../mocks/contatos';
import { colors } from '../theme/colors';

export function HomeScreen({ navigation }) {
    function abrirConversa(contato) {
        const routeNames = navigation.getState?.()?.routeNames || [];
        if (routeNames.includes('ChatScreen')) {
            // Envia o identificador e nome como parâmetros (requisitos 2.1 e 5 do PDF)
            navigation.navigate('ChatScreen', {
                contatoId: contato.id,
                nome: contato.nome,
            });
        } else {
            Alert.alert(
                'Abrir Conversa',
                `Contato: ${contato.nome}\nID: ${contato.id}\n\nA tela ChatScreen ainda não foi criada!`
            );
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={contatos}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <CardContato
                        contato={item}
                        onPress={() => abrirConversa(item)}
                    />
                )}
                contentContainerStyle={styles.lista}
                ItemSeparatorComponent={() => <View style={styles.divisor} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    lista: {
        paddingVertical: 8,
    },
    divisor: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: colors.divider,
        marginLeft: 78,
    },
});
