import React from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { CardContato } from '../components';
import { contatos } from '../mocks/contatos';
import { colors } from '../theme/colors';

export function HomeScreen({ navigation }) {
    function abrirConversa(contato) {
        navigation.navigate('ChatScreen', {
            contatoId: contato.id,
            nome: contato.nome,
        });
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
