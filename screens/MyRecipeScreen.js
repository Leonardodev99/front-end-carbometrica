import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Dados fictícios para a tabela
const receitas = [
    { id: '1', nome: 'Bolo de Chocolate', carboidrato: '45g' },
    { id: '2', nome: 'Molho de Calulu', carboidrato: '35g' },
    { id: '3', nome: 'Pastel de carne', carboidrato: '20g' },
    { id: '4', nome: 'Caldeirada', carboidrato: '25g' },
];

const MyRecipeScreen = () => {
    const navigation = useNavigation();

    const handleReceitaPress = (receita) => {
        // Navegar para a tela de detalhes da receita (a ser implementada)
        navigation.navigate('RecipeDetails', { receita });
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.headerText}>BIBLIOTECA DE RECEITAS</Text>
                <Text style={styles.subHeaderText}>Hoje eu quero comer...</Text>
                <View style={styles.line}></View>
                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <Text style={styles.tableHeaderText}>Receita</Text>
                        <Text style={styles.tableHeaderText}>Carboidrato</Text>
                    </View>
                    {receitas.map((item) => (
                        <View key={item.id} style={styles.tableRow}>
                            <TouchableOpacity onPress={() => handleReceitaPress(item)}>
                                <Text style={styles.tableRowTextLink}>{item.nome}</Text>
                            </TouchableOpacity>
                            <Text style={styles.tableRowText}>{item.carboidrato}</Text>
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
    headerText: {
        fontSize: 18,
        color: '#FF4500', // Laranja carregado
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    subHeaderText: {
        fontSize: 16,
        color: '#0000FF', // Azul
        textAlign: 'center',
        marginBottom: 10,
    },
    line: {
        width: '100%',
        height: 2,
        backgroundColor: '#0000FF', // Azul
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
    tableRowTextLink: {
        fontSize: 16,
        color: '#0000FF', // Azul
        textDecorationLine: 'underline',
    },
});

export default MyRecipeScreen;
