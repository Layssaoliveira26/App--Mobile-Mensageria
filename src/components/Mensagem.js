import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export function Mensagem({ mensagem, recebida }) {
    return (
        <View
            style={[
                styles.container,
                recebida ? styles.recebidaContainer : styles.enviadaContainer,
            ]}
        >
            <View
                style={[
                    styles.balao,
                    recebida ? styles.balaoRecebida : styles.balaoEnviada,
                ]}
            >
                <Text
                    style={[
                        styles.texto,
                        recebida ? styles.textoRecebida : styles.textoEnviada,
                    ]}
                >
                    {mensagem}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 4,
        paddingHorizontal: 12,
    },
    recebidaContainer: {
        alignItems: 'flex-start',
    },
    enviadaContainer: {
        alignItems: 'flex-end',
    },
    balao: {
        maxWidth: '80%',
        paddingHorizontal: 14,
        paddingVertical: 9,
        borderRadius: 16,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
    },
    balaoRecebida: {
        backgroundColor: colors.bubbleReceived,
        borderTopLeftRadius: 2,
    },
    balaoEnviada: {
        backgroundColor: colors.bubbleSent,
        borderTopRightRadius: 2,
    },
    texto: {
        fontSize: 15,
        lineHeight: 20,
    },
    textoRecebida: {
        color: colors.bubbleReceivedText,
    },
    textoEnviada: {
        color: colors.bubbleSentText,
    },
});
