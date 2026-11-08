import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar } from './Avatar';
import { colors } from '../theme/colors';

export function CardContato({ contato, onPress }) {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Avatar nome={contato.nome} size={48} />

            <View style={styles.infoContainer}>
                <Text style={styles.nome}>{contato.nome}</Text>
                {contato.numero && (
                    <Text style={styles.numero}>{contato.numero}</Text>
                )}
            </View>

            <View style={styles.botao}>
                <Text style={styles.textoBotao}>Conversar</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: colors.cardBackground,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 14,
    },
    nome: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.textPrimary,
        marginBottom: 2,
    },
    numero: {
        fontSize: 13,
        color: colors.textSecondary,
    },
    botao: {
        backgroundColor: colors.primaryLight,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    textoBotao: {
        color: colors.primaryDark,
        fontSize: 12,
        fontWeight: '600',
    },
});

