import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Import axios
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import icon library

const AllRecipeScreen = () => {
    const [receitas, setReceitas] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        // Fetch recipes from backend
        const fetchReceitas = async () => {
            try {
                const response = await axios.get('http://localhost:3006/receitas');
                setReceitas(response.data);
            } catch (error) {
                console.error('Erro ao buscar receitas:', error);
                Alert.alert('Erro', 'Erro ao buscar receitas. Tente novamente mais tarde.');
            }
        };

        fetchReceitas();
    }, []);

    const handleReceitaPress = (receita) => {
        // Navegar para a tela de detalhes da receita (a ser implementada)
        navigation.navigate('RecipeDetails', { receita });
    };

    const handleRefresh = () => {
        // Fetch recipes again
        const fetchReceitas = async () => {
            try {
                const response = await axios.get('http://localhost:3006/receitas');
                setReceitas(response.data);
            } catch (error) {
                console.error('Erro ao buscar receitas:', error);
                Alert.alert('Erro', 'Erro ao buscar receitas. Tente novamente mais tarde.');
            }
        };

        fetchReceitas();
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>Voltar</Text>
                </TouchableOpacity>

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
                <TouchableOpacity onPress={handleRefresh} style={styles.refreshButton}>
                    <Icon name="refresh" size={24} color="#fff" />
                </TouchableOpacity>
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
        backgroundColor: '#FF4500', // Laranja
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        position: 'absolute',
        top: 20, // Posição superior
        left: 20, // Posição esquerda
    },
    backButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
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
    refreshButton: {
        backgroundColor: '#FF4500', // Laranja
        padding: 10,
        borderRadius: 5,
        position: 'absolute',
        top: 20, // Posição superior
        right: 20, // Posição direita
    },
});

export default AllRecipeScreen;

