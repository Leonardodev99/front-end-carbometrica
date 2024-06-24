import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Dados fictícios para os ingredientes
const ingredientes = [
    { id: '1', nome: 'Farinha de trigo', quantidade: '100g', carboidratoPorGrama: '0.75g' },
    { id: '2', nome: 'Açúcar', quantidade: '50g', carboidratoPorGrama: '1g' },
    { id: '3', nome: 'Leite', quantidade: '200ml', carboidratoPorGrama: '0.05g' },
    { id: '4', nome: 'Ovos', quantidade: '2 unidades', carboidratoPorGrama: '0.06g' },
];

const IngredientScreen = () => {
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>INGREDIENTES</Text>
                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <Text style={styles.tableHeaderText}>Nome</Text>
                        <Text style={styles.tableHeaderText}>Quantidade</Text>
                        <Text style={styles.tableHeaderText}>Carboidrato por Grama</Text>
                    </View>
                    {ingredientes.map((item) => (
                        <View key={item.id} style={styles.tableRow}>
                            <Text style={styles.tableRowText}>{item.nome}</Text>
                            <Text style={styles.tableRowText}>{item.quantidade}</Text>
                            <Text style={styles.tableRowText}>{item.carboidratoPorGrama}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FFFFFF',
    },
    backButton: {
        alignSelf: 'flex-start',
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#FF4500', // Laranja carregado
        borderRadius: 5,
    },
    backButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    headerText: {
        fontSize: 18,
        color: '#FF4500', // Laranja carregado
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    table: {
        width: '100%',
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#DDD',
    },
    tableHeaderText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    tableRowText: {
        fontSize: 16,
    },
});

export default IngredientScreen;

