import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    Keyboard,
    Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Mensagem } from '../components/Mensagem';
import { mensagemService } from '../services/MensagemService';
import { colors } from '../theme/colors';

export function ChatScreen({ route }) {
    const { contatoId, nome } = route.params || {};
    const insets = useSafeAreaInsets();
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const showSub = Keyboard.addListener(
            Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
            () => setKeyboardVisible(true)
        );
        const hideSub = Keyboard.addListener(
            Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
            () => setKeyboardVisible(false)
        );
        return () => {
            showSub.remove();
            hideSub.remove();
        };
    }, []);

    const [mensagens, setMensagens] = useState(
        contatoId ? mensagemService.getMensagens(contatoId) : []
    );
    const [texto, setTexto] = useState('');

    function handleEnviar() {
        if (!texto || !texto.trim()) {
            return;
        }

        const novaMensagem = mensagemService.enviarMensagem(contatoId, texto);
        if (novaMensagem) {
            setMensagens([...mensagemService.getMensagens(contatoId)]);
            setTexto('');
        }
    }

    const bottomPadding = !isKeyboardVisible && insets.bottom > 0
        ? insets.bottom
        : 10;

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        >
            <FlatList
                data={mensagens}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <Mensagem
                        mensagem={item.texto}
                        recebida={item.recebida}
                    />
                )}
                contentContainerStyle={styles.listaMensagens}
                ListEmptyComponent={
                    <View style={styles.vazioContainer}>
                        <Text style={styles.vazioTexto}>
                            Nenhuma mensagem com {nome || 'este contato'}.
                        </Text>
                        <Text style={styles.vazioSubtexto}>
                            Envie uma mensagem para iniciar a conversa!
                        </Text>
                    </View>
                }
            />

            <View style={[styles.inputContainer, { paddingBottom: bottomPadding }]}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite uma mensagem..."
                    placeholderTextColor={colors.textSecondary}
                    value={texto}
                    onChangeText={setTexto}
                    multiline
                />
                <TouchableOpacity
                    style={[
                        styles.botaoEnviar,
                        !texto.trim() && styles.botaoDesabilitado,
                    ]}
                    onPress={handleEnviar}
                    disabled={!texto.trim()}
                    activeOpacity={0.7}
                >
                    <Text style={styles.textoBotaoEnviar}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.chatBackground,
    },
    listaMensagens: {
        flexGrow: 1,
        paddingVertical: 12,
    },
    vazioContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        marginTop: 60,
    },
    vazioTexto: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.textSecondary,
        textAlign: 'center',
    },
    vazioSubtexto: {
        fontSize: 13,
        color: colors.textSecondary,
        textAlign: 'center',
        marginTop: 6,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 12,
        paddingTop: 8,
        backgroundColor: colors.background,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: colors.border,
    },
    input: {
        flex: 1,
        minHeight: 40,
        maxHeight: 100,
        backgroundColor: colors.primaryUltraLight,
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 15,
        color: colors.textPrimary,
        borderWidth: 1,
        borderColor: colors.border,
    },
    botaoEnviar: {
        backgroundColor: colors.primary,
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginLeft: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoDesabilitado: {
        backgroundColor: colors.disabled,
    },
    textoBotaoEnviar: {
        color: colors.textLight,
        fontWeight: 'bold',
        fontSize: 14,
    },
});
