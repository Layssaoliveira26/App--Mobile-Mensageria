import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export function Avatar({ nome = '', size = 48 }) {
    const inicial = nome.trim() ? nome.trim().charAt(0).toUpperCase() : '?';

    return (
        <View
            style={[
                styles.container,
                {
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                },
            ]}
        >
            <Text style={[styles.texto, { fontSize: size * 0.42 }]}>
                {inicial}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: colors.textLight,
        fontWeight: 'bold',
    },
});

